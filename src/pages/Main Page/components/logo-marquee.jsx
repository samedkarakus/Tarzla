import React from 'react';


const LOGOS = [
  '/src/assets/brand-logos/avva.png',
  '/src/assets/brand-logos/hm.png',
  '/src/assets/brand-logos/lcw.png',
  '/src/assets/brand-logos/mavi.png',
  '/src/assets/brand-logos/pull-bear.png',
  '/src/assets/brand-logos/trendyol.png'
];

export default function LogoMarquee({ logos = LOGOS, speedSeconds = 18, pauseOnHover = true }) {

  const display = [...logos, ...logos];
  const style = `

    .logo-marquee { overflow: hidden; }
    .logo-marquee__track {
      display: flex;
      gap: 1rem;
      align-items: center;
      /* make track twice the content by repeating logos in markup */
      will-change: transform;
      animation-name: marquee;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: var(--marquee-duration, ${speedSeconds}s);
    }
    .logo-marquee__item { flex: 0 0 auto; width: 180px; height: 55px; display:flex; align-items:center; justify-content:center; }
    .logo-marquee__img { width: 180px; height: 55px; object-fit: contain; }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* pause on hover if requested */
    ${pauseOnHover ? '.logo-marquee__track:hover { animation-play-state: paused; }' : ''}
  `;

  return (
    <div className="logo-marquee pb-24" style={{}}>
      <style>{style}</style>

      <div
        className="logo-marquee__viewport w-full"
        style={{ ['--marquee-duration']: `${speedSeconds}s` }}
      >
        <div className="logo-marquee__track">
          {display.map((src, idx) => (
            <div key={`${src}-${idx}`} className="logo-marquee__item">
              <img src={src} alt={`logo-${idx}`} className="logo-marquee__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
