import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import batiment from '../assets/img/batiment.jpeg';
import ingeelectric from '../assets/img/ingeelectric.jpeg';
import industrie from '../assets/img/industrie.jpeg';
import commerce from '../assets/img/commerce.jpeg';
import ecgbg from '../assets/img/ecgbg.jpeg';
import '../styles/realisations.css'; /* réutilise hero, process, cta, zone */
import '../styles/expertise.css';

const ExpertiseServices = () => {
  const { t } = useI18n();

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bg = document.querySelector('.ecg-real-hero__bg');
    if (!bg || prefersReduced) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY * 0.15;
        bg.style.transform = `translateY(${y}px) scale(1.08)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pillars = [
    { key: 'p1', img: batiment, reversed: false },
    { key: 'p2', img: ingeelectric, reversed: true },
    { key: 'p3', img: industrie, reversed: false },
    { key: 'p4', img: commerce, reversed: true },
  ];

  return (
    <main className="page-with-hero">
      {/* HERO plein écran */}
      <header className="ecg-real-hero">
        <img className="ecg-real-hero__bg" src={ecgbg} alt="" fetchpriority="high" decoding="async" width="1920" height="1280" />
        <div className="ecg-real-hero__overlay" />
        <div className="ecg-real-hero__content ds-container">
          <span className="ds-eyebrow ecg-real-hero__eyebrow">{t('expertiseServicesPage.hero.eyebrow')}</span>
          <h1 className="ecg-real-hero__title">{t('expertiseServicesPage.hero.title')}</h1>
          <p className="ecg-real-hero__intro">{t('expertiseServicesPage.hero.subtitle')}</p>
        </div>
      </header>

      {/* PILIERS — blocs éditoriaux alternés */}
      <section className="ecg-pillars" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-pillars__head">
            <span className="ds-eyebrow">{t('expertiseServicesPage.hero.eyebrow')}</span>
            <h2>{t('expertiseServicesPage.pillars.title')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>
          <div className="ecg-pillars__list">
            {pillars.map(({ key, img, reversed }, index) => {
              const items = t(`expertiseServicesPage.pillars.${key}.items`);
              return (
                <article key={key} className={`ecg-pillar${reversed ? ' is-reversed' : ''}`}>
                  <div className="ecg-pillar__text">
                    <span className="ecg-pillar__num">0{index + 1}</span>
                    <h3 className="ecg-pillar__title">{t(`expertiseServicesPage.pillars.${key}.title`)}</h3>
                    <p className="ecg-pillar__lead">{t(`expertiseServicesPage.pillars.${key}.lead`)}</p>
                    <ul className="ecg-pillar__list">
                      {Array.isArray(items) && items.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="ecg-pillar__visual">
                    <img className="ecg-pillar__img" src={img} alt={t(`expertiseServicesPage.pillars.${key}.imageAlt`)} loading="lazy" decoding="async" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÉQUIPEMENTS & MOYENS */}
      <section className="ecg-equip" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-equip__head">
            <div>
              <span className="ds-eyebrow">{t('expertiseServicesPage.hero.eyebrow')}</span>
              <h2>{t('expertiseServicesPage.equipment.title')}</h2>
            </div>
            <p>{t('expertiseServicesPage.equipment.lead')}</p>
          </div>
          <div className="ecg-equip__grid">
            {[0, 1, 2].map((i) => {
              const items = t(`expertiseServicesPage.equipment.sections.${i}.items`);
              const icons = ['bi-truck', 'bi-lightning-charge', 'bi-hammer'];
              return (
                <article key={i} className="ecg-equip-card">
                  <div className="ecg-equip-card__icon"><i className={`bi ${icons[i]}`} aria-hidden="true"></i></div>
                  <h3 className="ecg-equip-card__title">{t(`expertiseServicesPage.equipment.sections.${i}.title`)}</h3>
                  <ul className="ecg-equip-card__list">
                    {Array.isArray(items) && items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="ecg-guarantees" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-guarantees__head">
            <span className="ds-eyebrow">{t('expertiseServicesPage.hero.eyebrow')}</span>
            <h2>{t('expertiseServicesPage.guarantees.title')}</h2>
            <p>{t('expertiseServicesPage.guarantees.lead')}</p>
          </div>
          <div className="ecg-guarantees__grid">
            {[0, 1, 2, 3].map((i) => {
              const icons = ['bi-shield-check', 'bi-tools', 'bi-clock-history', 'bi-person-check'];
              return (
                <article key={i} className="ecg-guarantee">
                  <div className="ecg-guarantee__icon"><i className={`bi ${icons[i]}`} aria-hidden="true"></i></div>
                  <h3 className="ecg-guarantee__title">{t(`expertiseServicesPage.guarantees.items.${i}.title`)}</h3>
                  <p className="ecg-guarantee__text">{t(`expertiseServicesPage.guarantees.items.${i}.text`)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESSUS — réutilise les styles de Realisations */}
      <section className="ecg-real-process" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-real-process__head">
            <span className="ds-eyebrow">{t('expertiseServicesPage.process.title')}</span>
            <h2>{t('expertiseServicesPage.process.subtitle')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>
          <div className="ecg-real-process__steps">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="ecg-step">
                <div className="ecg-step__num">{i + 1}</div>
                <h3 className="ecg-step__title">{t(`expertiseServicesPage.process.steps.${i}.title`)}</h3>
                <p className="ecg-step__text">{t(`expertiseServicesPage.process.steps.${i}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — réutilise les styles de Realisations */}
      <section className="ecg-real-cta" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container ecg-real-cta__inner">
          <h2>{t('expertiseServicesPage.finalCta.title')}</h2>
          <p className="ecg-real-cta__text">{t('expertiseServicesPage.finalCta.text')}</p>
          <div className="ecg-real-cta__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('expertiseServicesPage.finalCta.primary')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/realisations" className="ds-btn ds-btn--ghost">
              {t('expertiseServicesPage.finalCta.secondary')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpertiseServices;
