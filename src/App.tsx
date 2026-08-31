import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { StudioShell } from './studio/StudioShell';
import { IndexPage } from './pages/IndexPage';
import { HomePage as StudioHomePage } from './studio/pages/HomePage';
import { WorkPage as StudioWorkPage } from './studio/pages/WorkPage';
import { ServicesPage as StudioServicesPage } from './studio/pages/ServicesPage';
import { AgencyPage as StudioAgencyPage } from './studio/pages/AgencyPage';
import { CulturePage as StudioCulturePage } from './studio/pages/CulturePage';
import { CraftShell } from './craft/CraftShell';
import { HomePage as CraftHomePage } from './craft/pages/HomePage';
import { BcpPage as CraftBcpPage } from './craft/pages/BcpPage';
import { SapShell } from './1sap/SapShell';
import { HomePage as SapHomePage } from './1sap/pages/HomePage';
import { Os1Shell } from './os1/Os1Shell';
import { HomePage as Os1HomePage } from './os1/pages/HomePage';
import { ObsShell } from './obs/ObsShell';
import { HomePage as ObsHomePage } from './obs/pages/HomePage';
import { AboutPage as ObsAboutPage } from './obs/pages/AboutPage';
import { WorkPage as ObsWorkPage } from './obs/pages/WorkPage';
import { Mix1Shell } from './mix1/Mix1Shell';
import { HomePage as Mix1HomePage } from './mix1/pages/HomePage';
import { WorkPage as Mix1WorkPage } from './mix1/pages/WorkPage';
import { AboutPage as Mix1AboutPage } from './mix1/pages/AboutPage';
import { BuildPage as Mix1BuildPage } from './mix1/pages/BuildPage';
import { ProjectPage as Mix1ProjectPage } from './mix1/pages/ProjectPage';
import { CaseStudyPage as Mix1CaseStudyPage } from './mix1/pages/CaseStudyPage';
import { MediaBlocksProvider } from './media-blocks/MediaBlocks';
import { WireframeProvider } from './wireframe/Wireframe';
import { usePageFade } from './hooks/usePageFade';
import './components/chrome/page-fade.css';

function RedirectWorkSlug() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/work/${slug}`} replace />;
}

function AppRoutes() {
  const { location, visible } = usePageFade();
  return (
    <div className={`page-fade${visible ? ' is-in' : ''}`}>
      <Routes location={location}>
        <Route path="index" element={<IndexPage />} />
        <Route path="studio" element={<StudioShell />}>
          <Route index element={<StudioHomePage />} />
          <Route path="work" element={<StudioWorkPage />} />
          <Route path="services" element={<StudioServicesPage />} />
          <Route path="agency" element={<StudioAgencyPage />} />
          <Route path="culture" element={<StudioCulturePage />} />
        </Route>
        <Route path="craft" element={<CraftShell />}>
          <Route index element={<CraftHomePage />} />
          <Route path="bcp" element={<CraftBcpPage />} />
        </Route>
        <Route path="1sap" element={<SapShell />}>
          <Route index element={<SapHomePage />} />
        </Route>
        <Route path="os1" element={<Os1Shell />}>
          <Route index element={<Os1HomePage />} />
        </Route>
        <Route path="obs" element={<ObsShell />}>
          <Route index element={<ObsHomePage />} />
          <Route path="about" element={<ObsAboutPage />} />
          <Route path="work/:slug" element={<ObsWorkPage />} />
        </Route>
        <Route path="/" element={<Mix1Shell />}>
          <Route index element={<Mix1HomePage />} />
          <Route path="work" element={<Mix1WorkPage />} />
          <Route path="work/:slug" element={<Mix1ProjectPage />} />
          <Route path="project" element={<Mix1CaseStudyPage />} />
          <Route path="about" element={<Mix1AboutPage />} />
          <Route path="build" element={<Mix1BuildPage />} />
        </Route>
        {/* Retired poised1 site — redirect old links to their mix1 equivalents at the root */}
        <Route path="poised1" element={<Navigate to="/" replace />} />
        <Route path="poised1/work" element={<Navigate to="/work" replace />} />
        <Route path="poised1/project" element={<Navigate to="/project" replace />} />
        <Route path="poised1/about" element={<Navigate to="/about" replace />} />
        <Route path="poised1/build" element={<Navigate to="/build" replace />} />
        {/* mix1 moved off the /mix1 prefix onto the root — redirect old links */}
        <Route path="mix1" element={<Navigate to="/" replace />} />
        <Route path="mix1/work" element={<Navigate to="/work" replace />} />
        <Route path="mix1/work/:slug" element={<RedirectWorkSlug />} />
        <Route path="mix1/about" element={<Navigate to="/about" replace />} />
        <Route path="mix1/build" element={<Navigate to="/build" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MediaBlocksProvider>
        <WireframeProvider>
          <AppRoutes />
        </WireframeProvider>
      </MediaBlocksProvider>
    </BrowserRouter>
  );
}
