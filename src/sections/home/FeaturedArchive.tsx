import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featured } from '../../content/archive';
import { POISED_BASE } from '../../content/site';
import { Eyebrow, MediaFrame, TextLink, Title } from '../../components/primitives';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useTestImage } from '../../hooks/usePlaceholderAssets';

function FeaturedCard({ item }: { item: (typeof featured)[number] }) {
  const src = useTestImage(item.image, '4:5', item.frame);
  return (
    <Link to={`${POISED_BASE}/work`} className="featured-card">
      <MediaFrame src={src} alt={item.name} />
      <div className="featured-data">
        <span className="featured-name">{item.name}</span>
        <span className="mono">{item.frame}</span>
      </div>
    </Link>
  );
}

gsap.registerPlugin(ScrollTrigger);

export function FeaturedArchive() {
  const reduced = usePrefersReducedMotion();
  // Pin an INNER node — never the <section> React removes from <main>.
  // GSAP wraps the pin target in .pin-spacer; if that target is the section,
  // React's removeChild(section) from main throws NotFoundError on navigate.
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (reduced) return;
    const pin = pinRef.current!;
    const track = trackRef.current!;
    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pin);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="featured" aria-label="Selected work from the archive">
      <div ref={pinRef} className="featured-pin">
        <div className="featured-head">
          <div>
            <Eyebrow>SELECTED WORK / THE ARCHIVE</Eyebrow>
            <Title as="h2" size="lg">
              From the archive.
            </Title>
          </div>
          <TextLink to={`${POISED_BASE}/work`}>Full index</TextLink>
        </div>

        <div className="featured-viewport">
          <div ref={trackRef} className="featured-track">
            {featured.map((item) => (
              <FeaturedCard key={item.frame} item={item} />
            ))}
            <div className="featured-end">
              <span className="mono">END OF SELECTION</span>
              <TextLink to={`${POISED_BASE}/work`}>See full index</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
