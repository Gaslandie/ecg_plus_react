import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import industrie from '../assets/img/industrie.jpg';
import etudes from '../assets/img/etudes.jpg';
import heroPages from '../assets/img/hero-pages.webp';
import '../styles/realisations.css';
import '../styles/expertise.css';

const PILLARS = [
  { key: 'p1', image: batiment, icon: 'bi-buildings' },
  { key: 'p2', image: ingeelectric, icon: 'bi-lightning-charge' },
  { key: 'p3', image: industrie, icon: 'bi-gear-wide-connected' },
  { key: 'p4', image: etudes, icon: 'bi-rulers' },
];

const EQUIPMENT_ICONS = ['bi-truck', 'bi-lightning-charge', 'bi-hammer'];
const GUARANTEE_ICONS = ['bi-shield-check', 'bi-tools', 'bi-clock-history', 'bi-person-check'];

function ExpertiseServices() {
  const { t } = useI18n();

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const background = document.querySelector('.ecg-expertise-page .ecg-real-hero__bg');
    if (!background || prefersReduced) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        background.style.transform = `translate3d(0, ${window.scrollY * 0.1}px, 0) scale(1.06)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="page-with-hero ecg-expertise-page">
      <header className="ecg-real-hero ecg-expertise-hero">
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
            {t('expertiseServicesPage.hero.eyebrow')}
          </span>
          <h1 className="ecg-real-hero__title">
            <span>{t('expertiseServicesPage.hero.titleLine1')}</span>
            <strong>{t('expertiseServicesPage.hero.titleLine2')}</strong>
          </h1>
          <p className="ecg-real-hero__intro">{t('expertiseServicesPage.hero.subtitle')}</p>
          <a href="#expertises" className="ds-btn ds-btn--accent">
            {t('expertiseServicesPage.hero.discover')}
            <i className="bi bi-arrow-down" aria-hidden="true" />
          </a>
        </div>

        <div className="ecg-real-hero__stats">
          <div className="ds-container ecg-real-hero__stats-inner">
            <div>
              <strong>4</strong>
              <p>{t('expertiseServicesPage.hero.stats.pillars')}</p>
            </div>
            <div>
              <strong>18<span>+</span></strong>
              <p>{t('expertiseServicesPage.hero.stats.years')}</p>
            </div>
            <div>
              <strong>360<span>°</span></strong>
              <p>{t('expertiseServicesPage.hero.stats.support')}</p>
            </div>
            <Link to="/contact">
              <span>{t('expertiseServicesPage.hero.projectCta')}</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <section id="expertises" className="ecg-expertise-fields">
        <div className="ds-container">
          <div className="ecg-expertise-fields__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('expertiseServicesPage.pillars.eyebrow')}</span>
              <h2>{t('expertiseServicesPage.pillars.title')}</h2>
            </div>
            <p>{t('expertiseServicesPage.pillars.intro')}</p>
          </div>

          <nav className="ecg-expertise-index" aria-label={t('expertiseServicesPage.pillars.indexLabel')} data-aos="fade-up">
            {PILLARS.map(({ key }, index) => (
              <a key={key} href={`#expertise-${index + 1}`}>
                <span>0{index + 1}</span>
                <strong>{t(`expertiseServicesPage.pillars.${key}.shortTitle`)}</strong>
                <i className="bi bi-arrow-down-right" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="ecg-expertise-fields__list">
            {PILLARS.map(({ key, image, icon }, index) => {
              const items = t(`expertiseServicesPage.pillars.${key}.items`);
              return (
                <article
                  id={`expertise-${index + 1}`}
                  key={key}
                  className={`ecg-expertise-field${index % 2 ? ' is-reversed' : ''}`}
                  data-aos="fade-up"
                >
                  <div className="ecg-expertise-field__visual">
                    <img
                      src={image}
                      alt={t(`expertiseServicesPage.pillars.${key}.imageAlt`)}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="ecg-expertise-field__number">0{index + 1}</span>
                    <span className="ecg-expertise-field__caption">
                      <i className={`bi ${icon}`} aria-hidden="true" />
                      {t(`expertiseServicesPage.pillars.${key}.shortTitle`)}
                    </span>
                  </div>

                  <div className="ecg-expertise-field__content">
                    <span className="ecg-expertise-field__label">
                      {t('expertiseServicesPage.pillars.domain')} 0{index + 1}
                    </span>
                    <h3>{t(`expertiseServicesPage.pillars.${key}.title`)}</h3>
                    <p>{t(`expertiseServicesPage.pillars.${key}.lead`)}</p>
                    <ul>
                      {Array.isArray(items) && items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <Link to="/contact" className="ecg-real-text-link">
                      {t('expertiseServicesPage.pillars.discuss')}
                      <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecg-expertise-equipment">
        <div className="ds-container">
          <div className="ecg-expertise-equipment__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('expertiseServicesPage.equipment.eyebrow')}</span>
              <h2>{t('expertiseServicesPage.equipment.title')}</h2>
            </div>
            <p>{t('expertiseServicesPage.equipment.lead')}</p>
          </div>

          <div className="ecg-expertise-equipment__grid">
            {[0, 1, 2].map((index) => {
              const items = t(`expertiseServicesPage.equipment.sections.${index}.items`);
              return (
                <article key={index} className="ecg-expertise-equipment-card" data-aos="fade-up" data-aos-delay={index * 80}>
                  <div className="ecg-expertise-equipment-card__top">
                    <span>0{index + 1}</span>
                    <i className={`bi ${EQUIPMENT_ICONS[index]}`} aria-hidden="true" />
                  </div>
                  <h3>{t(`expertiseServicesPage.equipment.sections.${index}.title`)}</h3>
                  <ul>
                    {Array.isArray(items) && items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ecg-expertise-guarantees">
        <div className="ds-container">
          <div className="ecg-expertise-guarantees__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('expertiseServicesPage.guarantees.eyebrow')}</span>
              <h2>{t('expertiseServicesPage.guarantees.title')}</h2>
            </div>
            <p>{t('expertiseServicesPage.guarantees.lead')}</p>
          </div>

          <div className="ecg-expertise-guarantees__grid">
            {[0, 1, 2, 3].map((index) => (
              <article key={index} className="ecg-expertise-guarantee" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="ecg-expertise-guarantee__icon">
                  <i className={`bi ${GUARANTEE_ICONS[index]}`} aria-hidden="true" />
                </div>
                <span>0{index + 1}</span>
                <h3>{t(`expertiseServicesPage.guarantees.items.${index}.title`)}</h3>
                <p>{t(`expertiseServicesPage.guarantees.items.${index}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-expertise-process">
        <div className="ds-container">
          <div className="ecg-expertise-process__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('expertiseServicesPage.process.title')}</span>
              <h2>{t('expertiseServicesPage.process.subtitle')}</h2>
            </div>
            <p>{t('expertiseServicesPage.process.intro')}</p>
          </div>

          <div className="ecg-expertise-process__steps">
            {[0, 1, 2, 3].map((index) => (
              <article key={index} className="ecg-expertise-step" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="ecg-expertise-step__marker"><span>{index + 1}</span></div>
                <small>{t('expertiseServicesPage.process.stepLabel')} 0{index + 1}</small>
                <h3>{t(`expertiseServicesPage.process.steps.${index}.title`)}</h3>
                <p>{t(`expertiseServicesPage.process.steps.${index}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-real-cta ecg-expertise-cta" data-aos="fade-up">
        <div className="ds-container ecg-real-cta__inner">
          <span className="ds-eyebrow">ECG PLUS</span>
          <h2>{t('expertiseServicesPage.finalCta.title')}</h2>
          <p className="ecg-real-cta__text">{t('expertiseServicesPage.finalCta.text')}</p>
          <div className="ecg-real-cta__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('expertiseServicesPage.finalCta.primary')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/realisations" className="ds-btn ds-btn--ghost">
              {t('expertiseServicesPage.finalCta.secondary')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExpertiseServices;
