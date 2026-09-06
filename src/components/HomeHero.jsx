import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { preload } from 'react-dom';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { projects, projectPath } from '../data/projects';
import bg768 from '../assets/img/bgAccueil-768.webp';
import bg1280 from '../assets/img/bgAccueil-1280.webp';
import bg1920 from '../assets/img/bgAccueil-1920.webp';

const HERO_SRCSET = `${bg768} 768w, ${bg1280} 1280w, ${bg1920} 1920w`;
const slides = [
  { key: 'intro', image: { src: bg1920, srcSet: HERO_SRCSET, width: 1920, height: 1280 }, to: '/realisations' },
  ...['kankan', 'r4'].map(key => {
    const project = projects.find(item => item.key === key);
    return { key, image: project.image, to: projectPath(project) };
  }),
];
const subscribeMotion = (callback) => {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const motionAllowed = () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const serverMotion = () => false;

export default function HomeHero() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visited, setVisited] = useState([0]);
  const animated = useSyncExternalStore(subscribeMotion, motionAllowed, serverMotion);
  const heroRef = useRef(null);
  const playing = rotation && animated;
  const slide = slides[active];
  const copy = slide.key === 'intro' ? t('homePage.hero') : t(`homePage.hero.slides.${slide.key}`);

  preload(bg1920, { as: 'image', fetchPriority: 'high', imageSrcSet: HERO_SRCSET, imageSizes: '100vw' });

  // Pause hors écran, dans un onglet masqué et pendant l'utilisation du menu.
  useEffect(() => {
    if (!playing || hovered) return undefined;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(heroRef.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden && !document.body.classList.contains('ecg-nav-open')) {
        setActive(index => (index + 1) % slides.length);
      }
    }, 8000);
    return () => { observer.disconnect(); window.clearInterval(timer); };
  }, [playing, hovered]);

  // Les images suivantes sont demandées après le premier chargement, à faible priorité.
  useEffect(() => {
    const firstImage = heroRef.current?.querySelector('img');
    let timer;
    const loadFollowing = () => {
      timer = window.setTimeout(() => setVisited(slides.map((_, index) => index)), 1000);
    };
    if (firstImage?.complete) loadFollowing();
    else {
      firstImage?.addEventListener('load', loadFollowing, { once: true });
      firstImage?.addEventListener('error', loadFollowing, { once: true });
    }
    return () => {
      window.clearTimeout(timer);
      firstImage?.removeEventListener('load', loadFollowing);
      firstImage?.removeEventListener('error', loadFollowing);
    };
  }, []);

  const selectSlide = (index) => {
    setRotation(false);
    setVisited(previous => previous.includes(index) ? previous : [...previous, index]);
    setActive(index);
  };

  return (
    <header
      ref={heroRef}
      className="ecg-hero"
      aria-roledescription={t('homePage.hero.carousel')}
      aria-label={t('homePage.hero.carouselLabel')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget) && !event.target.closest('.ecg-hero__rotation')) setRotation(false);
      }}
    >
      <div className="ecg-hero__media" aria-hidden="true">
        {slides.map((item, index) => visited.includes(index) && (
          <img key={item.key} {...item.image} sizes="100vw" alt=""
            className={`ecg-hero__bg${index === active ? ' is-active' : ''}`}
            fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />
        ))}
      </div>
      <div className="ecg-hero__overlay" />
      <div className="ecg-hero__content">
        <p className="ds-eyebrow ecg-hero__eyebrow">{copy.eyebrow}</p>
        <h1 className="ecg-hero__title">{copy.title}</h1>
        <p className="ecg-hero__subtitle">{copy.subtitle}</p>
        <Link to={slide.to} className="ds-btn ds-btn--accent ecg-hero__cta">
          {copy.ctaPrimary}<i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>

      <div className="ecg-hero__bottom">
        <div className="ecg-hero__controls" role="group" aria-label={t('homePage.hero.controls')}>
          <button type="button" className="ecg-hero__control" onClick={() => selectSlide((active + slides.length - 1) % slides.length)} aria-label={t('homePage.hero.previous')}>
            <i className="bi bi-arrow-left" aria-hidden="true" />
          </button>
          <button type="button" className="ecg-hero__control" onClick={() => selectSlide((active + 1) % slides.length)} aria-label={t('homePage.hero.next')}>
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
          <span className="ecg-hero__count" aria-hidden="true">0{active + 1}<span> / 0{slides.length}</span></span>
          <span className="ecg-hero__track" aria-hidden="true"><span style={{ width: `${(active + 1) / slides.length * 100}%` }} /></span>
          {animated && <button type="button" className="ecg-hero__control ecg-hero__rotation" onClick={() => setRotation(value => !value)} aria-label={t(`homePage.hero.${playing ? 'pause' : 'play'}`)}>
            <span className={playing ? 'ecg-hero__pause-icon' : 'ecg-hero__play-icon'} aria-hidden="true" />
          </button>}
          <span className="visually-hidden" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
            {t('homePage.hero.slide')} {active + 1} / {slides.length} : {copy.title}
          </span>
        </div>
      </div>

    </header>
  );
}
