import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.jpg';
import kagbelen from '../assets/img/kagbelen.jpg';
import r4 from '../assets/img/r+4.jpg';
import hangar from '../assets/img/hangar.jpg';
import ansoumania from '../assets/img/ansoumania.jpg';
import heroPages from '../assets/img/hero-pages.jpg';
import '../styles/realisations.css';

const PROJECTS = [
  { img: kankan, key: 'kankan', category: 'public' },
  { img: dubreka, key: 'dubreka', category: 'residential' },
  { img: kagbelen, key: 'kagbelen', category: 'civil' },
  { img: r4, key: 'r4', category: 'studies' },
  { img: hangar, key: 'hangar', category: 'industrial' },
  { img: ansoumania, key: 'ansoumania', category: 'residential' },
];

const FILTERS = ['all', 'public', 'residential', 'civil', 'industrial', 'studies'];

function Realisations() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = React.useState('all');
  const [selectedProject, setSelectedProject] = React.useState(null);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bg = document.querySelector('.ecg-real-hero__bg');
    if (!bg || prefersReduced) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        bg.style.transform = `translate3d(0, ${window.scrollY * 0.1}px, 0) scale(1.06)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.classList.add('ecg-real-modal-open');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('ecg-real-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const visibleProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  const selected = selectedProject
    ? PROJECTS.find((project) => project.key === selectedProject)
    : null;

  return (
    <main className="page-with-hero ecg-real-page">
      <header className="ecg-real-hero">
        <img
          className="ecg-real-hero__bg"
          src={heroPages}
          alt=""
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1280"
        />
        <span className="ecg-real-hero__overlay" aria-hidden="true" />
        <span className="ecg-real-hero__lines" aria-hidden="true" />

        <div className="ecg-real-hero__content ds-container">
          <span className="ecg-real-hero__eyebrow">
            <span aria-hidden="true" />
            {t('realisationsPage.hero.eyebrow')}
          </span>
          <h1 className="ecg-real-hero__title">
            <span>{t('realisationsPage.hero.titleLine1')}</span>
            <strong>{t('realisationsPage.hero.titleLine2')}</strong>
          </h1>
          <p className="ecg-real-hero__intro">{t('realisationsPage.hero.subtitle')}</p>
          <a href="#projets" className="ds-btn ds-btn--accent">
            {t('realisationsPage.hero.discover')}
            <i className="bi bi-arrow-down" aria-hidden="true" />
          </a>
        </div>

        <div className="ecg-real-hero__stats">
          <div className="ds-container ecg-real-hero__stats-inner">
            <div>
              <strong>25<span>+</span></strong>
              <p>{t('realisationsPage.hero.stats.projects')}</p>
            </div>
            <div>
              <strong>18<span>+</span></strong>
              <p>{t('realisationsPage.hero.stats.years')}</p>
            </div>
            <div>
              <strong>4</strong>
              <p>{t('realisationsPage.hero.stats.sectors')}</p>
            </div>
            <Link to="/contact">
              <span>{t('realisationsPage.hero.projectCta')}</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <section id="projets" className="ecg-real-projects" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-real-projects__head">
            <div>
              <span className="ds-eyebrow">{t('realisationsPage.projects.eyebrow')}</span>
              <h2>{t('realisationsPage.projects.title')}</h2>
            </div>
            <div className="ecg-real-projects__intro">
              <p>{t('realisationsPage.projects.more')}</p>
              <Link to="/contact" className="ecg-real-text-link">
                {t('realisationsPage.projects.cta')}
                <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
              </Link>
            </div>
          </div>

          <div className="ecg-real-filters" role="group" aria-label={t('realisationsPage.projects.filtersLabel')}>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'is-active' : ''}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {t(`realisationsPage.projects.filters.${filter}`)}
              </button>
            ))}
          </div>

          <div className={`ecg-real-projects__grid${visibleProjects.length < 3 ? ' is-compact' : ''}`}>
            {visibleProjects.map((project, index) => (
              <button
                key={project.key}
                type="button"
                className={`ecg-real-card ecg-real-card--${(index % 6) + 1}`}
                onClick={() => setSelectedProject(project.key)}
                aria-label={`${t('realisationsPage.projects.open')} ${t(`realisationsPage.projects.cards.${project.key}.title`)}`}
              >
                <img
                  src={project.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="ecg-real-card__shade" aria-hidden="true" />
                <span className="ecg-real-card__badge">
                  {t(`realisationsPage.projects.cards.${project.key}.badge`)}
                </span>
                <span className="ecg-real-card__content">
                  <small>{t(`realisationsPage.projects.cards.${project.key}.meta`)}</small>
                  <strong>{t(`realisationsPage.projects.cards.${project.key}.title`)}</strong>
                </span>
                <span className="ecg-real-card__open" aria-hidden="true">
                  <i className="bi bi-arrows-fullscreen" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-real-domains" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-real-domains__head">
            <div>
              <span className="ds-eyebrow">{t('realisationsPage.domains.title')}</span>
              <h2>{t('realisationsPage.domains.subtitle')}</h2>
            </div>
            <p>{t('realisationsPage.domains.intro')}</p>
          </div>

          <div className="ecg-real-domains__grid">
            {['building', 'energy', 'civil', 'studies'].map((domain, index) => (
              <article key={domain} className="ecg-domain">
                <span className="ecg-domain__num">0{index + 1}</span>
                <h3>{t(`realisationsPage.domains.${domain}`)}</h3>
                <ul>
                  {t(`realisationsPage.domains.lists.${domain}`).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-real-presence" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-real-presence__head">
            <div>
              <span className="ds-eyebrow">{t('realisationsPage.presence.eyebrow')}</span>
              <h2>{t('realisationsPage.presence.title')}</h2>
            </div>
            <p>{t('realisationsPage.presence.text')}</p>
          </div>

          <div className="ecg-real-presence__content">
            <div className="ecg-real-presence__visual" aria-hidden="true">
              <span className="ecg-real-presence__orbit is-one" />
              <span className="ecg-real-presence__orbit is-two" />
              <span className="ecg-real-presence__orbit is-three" />
              <span className="ecg-real-presence__center">
                <i className="bi bi-geo-alt-fill" />
                ECG PLUS
              </span>
            </div>

            <div className="ecg-real-presence__zones">
              {[
                ['conakry', 'bi-buildings'],
                ['regions', 'bi-signpost-split'],
                ['coast', 'bi-water'],
                ['mining', 'bi-hammer'],
              ].map(([zone, icon], index) => (
                <article key={zone} className="ecg-zone">
                  <span className="ecg-zone__index">0{index + 1}</span>
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  <div>
                    <h3>{t(`realisationsPage.presence.${zone}`)}</h3>
                    <p>{t(`realisationsPage.presence.${zone}Text`)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ecg-real-process" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-real-process__head">
            <div>
              <span className="ds-eyebrow">{t('realisationsPage.process.title')}</span>
              <h2>{t('realisationsPage.process.subtitle')}</h2>
            </div>
            <p>{t('realisationsPage.process.intro')}</p>
          </div>

          <div className="ecg-real-process__steps">
            {[1, 2, 3, 4].map((step) => (
              <article key={step} className="ecg-step">
                <span className="ecg-step__num">0{step}</span>
                <h3>{t(`realisationsPage.process.step${step}`)}</h3>
                <p>{t(`realisationsPage.process.step${step}text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-real-cta" data-aos="fade-up">
        <img src={hangar} alt="" loading="lazy" decoding="async" />
        <span className="ecg-real-cta__shade" aria-hidden="true" />
        <div className="ds-container ecg-real-cta__inner">
          <span className="ds-eyebrow">{t('realisationsPage.cta.eyebrow')}</span>
          <h2>{t('realisationsPage.cta.title')}</h2>
          <p>{t('realisationsPage.cta.text')}</p>
          <div className="ecg-real-cta__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('realisationsPage.cta.primary')}
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
            <Link to="/expertiseservices" className="ds-btn ds-btn--outline">
              {t('realisationsPage.cta.secondary')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="ecg-real-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ecg-real-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="ecg-real-modal__dialog">
            <button
              type="button"
              className="ecg-real-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label={t('realisationsPage.projects.close')}
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
            <div className="ecg-real-modal__image">
              <img
                src={selected.img}
                alt={t(`realisationsPage.projects.cards.${selected.key}.title`)}
              />
            </div>
            <div className="ecg-real-modal__content">
              <span>{t(`realisationsPage.projects.cards.${selected.key}.badge`)}</span>
              <h2 id="ecg-real-modal-title">
                {t(`realisationsPage.projects.cards.${selected.key}.title`)}
              </h2>
              <p className="ecg-real-modal__meta">
                {t(`realisationsPage.projects.cards.${selected.key}.meta`)}
              </p>
              <p>{t(`realisationsPage.projects.cards.${selected.key}.description`)}</p>
              <Link to="/contact" className="ds-btn ds-btn--primary">
                {t('realisationsPage.projects.modalCta')}
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Realisations;
