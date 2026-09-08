import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { preload } from 'react-dom';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import { services, servicePath } from '../data/services';
import { projects } from '../data/projects';
import bg768 from '../assets/img/bgAccueil-768.webp';
import bg1280 from '../assets/img/bgAccueil-1280.webp';
import bg1920 from '../assets/img/bgAccueil-1920.webp';
import energy from '../assets/img/presen3-1600.webp';

const HERO_SRCSET = `${bg768} 768w, ${bg1280} 1280w, ${bg1920} 1920w`;
const slides = [
  { key: 'intro', image: { src: bg1920, srcSet: HERO_SRCSET, width: 1920, height: 1280 }, to: '/expertiseservices' },
  ...services.map(service => ({ key: service.key, image: service.key === 'p2'
    ? {src:energy,width:1600,height:1200}
    : projects.find(project => project.key === ({p1:'kankan',p3:'hangar',p4:'r4'})[service.key]).image,
    to:servicePath(service), render:service.key === 'p3' || service.key === 'p4' })),
];
const subscribeMotion = callback => {
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
  const touchStart = useRef(null);
  const playing = rotation && animated;
  const slide = slides[active];
  const copy = t('referenceUi');
  const title = active === 0 ? copy.heroTitle : copy.heroSlides[active - 1].title;
  const subtitle = active === 0 ? copy.heroSubtitle : copy.heroSlides[active - 1].subtitle;
  preload(bg1920, { as: 'image', fetchPriority: 'high', imageSrcSet: HERO_SRCSET, imageSizes: '100vw' });
  useEffect(() => {
    if (!playing || hovered) return undefined;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(heroRef.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden && !document.body.classList.contains('ecg-nav-open')) setActive(index => (index + 1) % slides.length);
    }, 8000);
    return () => { observer.disconnect(); window.clearInterval(timer); };
  }, [playing, hovered]);
  useEffect(() => {
    const firstImage = heroRef.current?.querySelector('img');
    let timer;
    const loadFollowing = () => { timer = window.setTimeout(() => setVisited(slides.map((_, index) => index)), 1000); };
    if (firstImage?.complete) loadFollowing();
    else { firstImage?.addEventListener('load', loadFollowing, { once: true }); firstImage?.addEventListener('error', loadFollowing, { once: true }); }
    return () => { window.clearTimeout(timer); firstImage?.removeEventListener('load', loadFollowing); firstImage?.removeEventListener('error', loadFollowing); };
  }, []);
  const selectSlide = index => {
    setRotation(false);
    setVisited(previous => previous.includes(index) ? previous : [...previous, index]);
    setActive(index);
  };
  return (
    <section ref={heroRef} className="ecg-hero" aria-roledescription={t('homePage.hero.carousel')} aria-label={t('homePage.hero.carouselLabel')}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget) && !event.target.closest('.ecg-hero__rotation')) setRotation(false);
      }}>
      <div className="ecg-hero__stage" onTouchStart={event => {
        const touch = event.touches[0];
        touchStart.current = event.touches.length === 1 ? {x:touch.clientX,y:touch.clientY} : null;
      }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={event => {
        const start = touchStart.current; touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x;
        if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(touch.clientY - start.y) * 1.5) selectSlide((active + (dx < 0 ? 1 : slides.length - 1)) % slides.length);
      }}>
        <div className="ecg-hero__media" aria-hidden="true">
          {slides.map((item,index) => visited.includes(index) && <img key={item.key} {...item.image} sizes="100vw" alt=""
            className={`ecg-hero__bg${index === active ? ' is-active' : ''}`} fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />)}
        </div>
        <div className="ecg-hero__overlay" />
        <div className="ecg-hero__content">
          <p className="ds-eyebrow">{active === 0 ? t('homePage.hero.eyebrow') : `ECG PLUS · ${copy.heroTabs[active]}`}</p>
          <h1 key={slide.key} className="ecg-hero__title">{title}</h1>
          <p className="ecg-hero__subtitle">{subtitle}</p>
          <div className="ecg-hero__actions">
            <Link to={slide.to} className="ds-btn ds-btn--accent">{active === 0 ? t('homePage.expertises.cta') : copy.heroExpertiseCta}<i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
            <Link to="/contact" className="ecg-hero__secondary">{t('homePage.hero.ctaSecondary')}<i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="ecg-hero__controls" role="group" aria-label={t('homePage.hero.controls')}>
          <span className="ecg-hero__count" aria-hidden="true">0{active + 1}<span> / 0{slides.length}</span></span>
          <button type="button" onClick={() => selectSlide((active + slides.length - 1) % slides.length)} aria-label={t('homePage.hero.previous')}><i className="bi bi-arrow-left" aria-hidden="true" /></button>
          <button type="button" onClick={() => selectSlide((active + 1) % slides.length)} aria-label={t('homePage.hero.next')}><i className="bi bi-arrow-right" aria-hidden="true" /></button>
          {animated && <button type="button" className="ecg-hero__rotation" onClick={() => setRotation(value => !value)} aria-label={t(`homePage.hero.${playing ? 'pause' : 'play'}`)}><span className={playing ? 'ecg-hero__pause-icon' : 'ecg-hero__play-icon'} aria-hidden="true" /></button>}
        </div>
        <span className="ecg-hero__caption">{slide.render ? t('portfolio.imageKinds.render') : copy.heroImageCaption}</span>
      </div>
      <div className="ds-container">
        <div className="ecg-hero__selector" role="group" aria-label={t('homePage.hero.controls')}>
          {copy.heroTabs.map((label, index) => <button key={label} type="button" aria-pressed={active === index} onClick={() => selectSlide(index)}
            onKeyDown={event => {
              if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
              event.preventDefault();
              const next = event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : slides.length - 1)) % slides.length;
              selectSlide(next); event.currentTarget.parentElement.children[next].focus();
            }}><span aria-hidden="true">0{index + 1}</span>{label}</button>)}
        </div>
      </div>
      <p className="visually-hidden" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">{t('homePage.hero.slide')} {active + 1} / {slides.length} : {title}</p>
    </section>
  );
}
