import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { MediaBlocksProvider } from './media-blocks/MediaBlocks';
import { WireframeProvider } from './wireframe/Wireframe';
import { usePageFade } from './hooks/usePageFade';
import './components/chrome/page-fade.css';

// Each room below is a separate bundle chunk, loaded only when a visitor
// actually navigates to it. mix1 is the live site at the root and the
// overwhelming majority of traffic; studio/craft/1sap/os1/obs are frozen
// reference rooms (see mix1Build content) that most visitors never touch —
// eagerly importing all six in one bundle meant every visitor downloaded
// all of them regardless of which one they landed on.
const IndexPage = lazy(() => import('./pages/IndexPage').then((m) => ({ default: m.IndexPage })));

const StudioShell = lazy(() => import('./studio/StudioShell').then((m) => ({ default: m.StudioShell })));
const StudioHomePage = lazy(() => import('./studio/pages/HomePage').then((m) => ({ default: m.HomePage })));
const StudioWorkPage = lazy(() => import('./studio/pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const StudioServicesPage = lazy(() => import('./studio/pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const StudioAgencyPage = lazy(() => import('./studio/pages/AgencyPage').then((m) => ({ default: m.AgencyPage })));
const StudioCulturePage = lazy(() => import('./studio/pages/CulturePage').then((m) => ({ default: m.CulturePage })));

const CraftShell = lazy(() => import('./craft/CraftShell').then((m) => ({ default: m.CraftShell })));
const CraftHomePage = lazy(() => import('./craft/pages/HomePage').then((m) => ({ default: m.HomePage })));
const CraftBcpPage = lazy(() => import('./craft/pages/BcpPage').then((m) => ({ default: m.BcpPage })));

const SapShell = lazy(() => import('./1sap/SapShell').then((m) => ({ default: m.SapShell })));
const SapHomePage = lazy(() => import('./1sap/pages/HomePage').then((m) => ({ default: m.HomePage })));

const Os1Shell = lazy(() => import('./os1/Os1Shell').then((m) => ({ default: m.Os1Shell })));
const Os1HomePage = lazy(() => import('./os1/pages/HomePage').then((m) => ({ default: m.HomePage })));

const ObsShell = lazy(() => import('./obs/ObsShell').then((m) => ({ default: m.ObsShell })));
const ObsHomePage = lazy(() => import('./obs/pages/HomePage').then((m) => ({ default: m.HomePage })));
const ObsAboutPage = lazy(() => import('./obs/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ObsWorkPage = lazy(() => import('./obs/pages/WorkPage').then((m) => ({ default: m.WorkPage })));

const Mix1Shell = lazy(() => import('./mix1/Mix1Shell').then((m) => ({ default: m.Mix1Shell })));
const Mix1HomePage = lazy(() => import('./mix1/pages/HomePage').then((m) => ({ default: m.HomePage })));
const Mix1WorkPage = lazy(() => import('./mix1/pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const Mix1AboutPage = lazy(() => import('./mix1/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const Mix1BuildPage = lazy(() => import('./mix1/pages/BuildPage').then((m) => ({ default: m.BuildPage })));
const Mix1ProjectPage = lazy(() => import('./mix1/pages/ProjectPage').then((m) => ({ default: m.ProjectPage })));
const Mix1CaseStudyPage = lazy(() => import('./mix1/pages/CaseStudyPage').then((m) => ({ default: m.CaseStudyPage })));

function RedirectWorkSlug() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/work/${slug}`} replace />;
}

function AppRoutes() {
  const { location, visible } = usePageFade();
  return (
    <div className={`page-fade${visible ? ' is-in' : ''}`}>
      <Suspense fallback={null}>
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
          {/* mezo-leadership-v9 renamed once I-6 settled the real title — "v9" was a
              draft-review version marker that had leaked into the live slug. Went
              through mezo-product-design-operations briefly before landing on its
              final slug, so both retired slugs redirect. */}
          <Route path="work/mezo-leadership-v9" element={<Navigate to="/work/mezo-product-design-ops-leader" replace />} />
          <Route path="work/mezo-product-design-operations" element={<Navigate to="/work/mezo-product-design-ops-leader" replace />} />
          {/* blockfi-director-of-design renamed to reflect the real title (I-1:
              "Director of Product Design," not "Director of Design") */}
          <Route path="work/blockfi-director-of-design" element={<Navigate to="/work/blockfi-product-design-leader" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
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
