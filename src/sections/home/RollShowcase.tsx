import { useState } from 'react';
import { roll } from '../../content/home';
import { Eyebrow, MonoText, Title } from '../../components/primitives';
import { useInView } from '../../hooks/useInView';
import { useTestImage } from '../../hooks/usePlaceholderAssets';

function AngleThumb({
  src,
  no,
  label,
  active,
  onClick,
}: {
  src: string;
  no: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const thumbSrc = useTestImage(src, 'square', no);
  return (
    <button type="button" className={`angle-thumb${active ? ' is-active' : ''}`} onClick={onClick} aria-label={label}>
      <img src={thumbSrc} alt="" />
      <span className="angle-no">{no}</span>
    </button>
  );
}

export function RollShowcase() {
  const [stage, setStage] = useState<string>(roll.stage);
  const ref = useInView<HTMLElement>();

  const plates = [
    { src: roll.stage, label: `${roll.title} — selected frame` },
    ...roll.angles.map((angle) => ({ src: angle.image, label: `${roll.title} — alternate angle ${angle.no}` })),
  ];

  return (
    <section ref={ref} className="roll reveal" aria-label="Case 01 — selected">
      <figure className="media-frame roll-stage">
        {plates.map((plate) => (
          <img
            key={plate.src}
            src={plate.src}
            alt={stage === plate.src ? plate.label : ''}
            aria-hidden={stage !== plate.src}
            className={stage === plate.src ? 'is-stage-active' : undefined}
          />
        ))}
      </figure>

      <div className="roll-side">
        <Eyebrow>{roll.kicker}</Eyebrow>
        <MonoText>{roll.meta}</MonoText>
        <Title as="h2" size="lg" className="roll-title">
          {roll.title}
        </Title>
        <MonoText>{roll.sub}</MonoText>
        <p style={{ color: 'var(--color-dim)', maxWidth: '40ch' }}>{roll.desc}</p>

        <div className="roll-thumbs" role="group" aria-label="Angles">
          <MonoText className="mono">ANGLES</MonoText>
          <AngleThumb
            src={roll.stage}
            no="01"
            label="View main frame"
            active={stage === roll.stage}
            onClick={() => setStage(roll.stage)}
          />
          {roll.angles.map((angle) => (
            <AngleThumb
              key={angle.no}
              src={angle.image}
              no={angle.no}
              label={`View alternate angle ${angle.no}`}
              active={stage === angle.image}
              onClick={() => setStage(angle.image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
