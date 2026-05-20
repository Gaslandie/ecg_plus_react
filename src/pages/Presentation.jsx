import React from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';
import heroPages from '../assets/img/hero-pages.jpg';
import batiment from '../assets/img/batiment.jpeg';
import '../styles/realisations.css'; /* hero, cta */
import '../styles/presentation.css';

const Presentation = () => {
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

  // Animation compteurs (chiffres identité + équipe)
  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    if (prefersReduced) {
      counters.forEach((el) => { el.textContent = el.getAttribute('data-counter'); });
      return;
    }
    const animate = (el) => {
      const target = Number(el.getAttribute('data-counter')) || 0;
      const duration = 1800;
      const startTime = performance.now();
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        el.textContent = String(Math.floor(easeOutCubic(progress) * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-with-hero">
      {/* HERO plein écran */}
      <header className="ecg-real-hero">
        <img className="ecg-real-hero__bg" src={heroPages} alt="" fetchpriority="high" decoding="async" width="1920" height="1280" />
        <div className="ecg-real-hero__overlay" />
        <div className="ecg-real-hero__content ds-container">
          <span className="ds-eyebrow ecg-real-hero__eyebrow">{t('presentationPage.hero.eyebrow')}</span>
          <h1 className="ecg-real-hero__title">{t('presentationPage.hero.title')}</h1>
          <p className="ecg-real-hero__intro">{t('presentationPage.hero.subtitle')}</p>
        </div>
      </header>

      {/* HISTOIRE — récit éditorial 2 cols */}
      <section className="ecg-history" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-history__grid">
            <div className="ecg-history__text">
              <span className="ds-eyebrow">{t('presentationPage.presentation.historyTitle')}</span>
              <h2>{t('presentationPage.presentation.title')}</h2>
              <hr className="ds-divider" />
              <p className="ecg-history__lead">{t('presentationPage.presentation.historyLead')}</p>
              <p>{t('presentationPage.presentation.historyText')}</p>

              <div className="ecg-history__vision">
                <p className="ecg-history__vision-label">{t('presentationPage.presentation.visionTitle')}</p>
                <p className="ecg-history__vision-text">{t('presentationPage.presentation.visionText')}</p>
              </div>
            </div>
            <div className="ecg-history__visual">
              <img className="ecg-history__img" src={batiment} alt="ECG PLUS chantier" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* IDENTITÉ SOCIÉTÉ — table + chiffres */}
      <section id="identite" className="ecg-identity" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-identity__head">
            <span className="ds-eyebrow">{t('presentationPage.identity.title')}</span>
            <h2>{t('presentationPage.identity.title')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>

          <div className="ecg-identity__grid">
            <div className="ecg-identity__table">
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.companyName')}</span>
                <span className="ecg-identity__value">ECG PLUS SARL</span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.legalStatus')}</span>
                <span className="ecg-identity__value">SARL</span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.capital')}</span>
                <span className="ecg-identity__value">10.000.000 GNF</span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.rccm')}</span>
                <span className="ecg-identity__value">GN.TCC.2021.B.00331</span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.headOffice')}</span>
                <span className="ecg-identity__value">Manéah · Préfecture de Coyah · Guinée</span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.phone')}</span>
                <span className="ecg-identity__value">
                  <a href="tel:+224623966278">+224 623 96 62 78</a> · <a href="tel:+224628338641">+224 628 33 86 41</a>
                </span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.email')}</span>
                <span className="ecg-identity__value">
                  <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
                </span>
              </div>
              <div className="ecg-identity__row">
                <span className="ecg-identity__label">{t('presentationPage.identity.website')}</span>
                <span className="ecg-identity__value">
                  <a href="https://ecgplusgn.com" target="_blank" rel="noopener noreferrer">ecgplusgn.com</a>
                </span>
              </div>
            </div>

            <aside className="ecg-identity__metrics" aria-label="Chiffres-clés">
              <div className="ecg-identity__metric">
                <span className="ecg-identity__metric-value">
                  <span data-counter="18">0</span>
                  <span className="ecg-identity__metric-suffix">+</span>
                </span>
                <span className="ecg-identity__metric-label">{t('presentationPage.experience.years')}</span>
              </div>
              <div className="ecg-identity__metric">
                <span className="ecg-identity__metric-value">
                  <span data-counter="25">0</span>
                  <span className="ecg-identity__metric-suffix">+</span>
                </span>
                <span className="ecg-identity__metric-label">{t('presentationPage.experience.projects')}</span>
              </div>
              <div className="ecg-identity__metric">
                <span className="ecg-identity__metric-value">
                  <span data-counter="100">0</span>
                  <span className="ecg-identity__metric-suffix">%</span>
                </span>
                <span className="ecg-identity__metric-label">{t('presentationPage.experience.satisfaction')}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="ecg-team" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-team__head">
            <span className="ds-eyebrow">{t('presentationPage.hero.eyebrow')}</span>
            <h2>{t('presentationPage.hero.teamTitle')}</h2>
            <p>{t('presentationPage.hero.teamLead')}</p>
          </div>

          <div className="ecg-team__grid">
            <article className="ecg-team-card">
              <div className="ecg-team-card__icon"><i className="bi bi-tools" aria-hidden="true"></i></div>
              <h3 className="ecg-team-card__title">{t('presentationPage.hero.teamCategory1Title')}</h3>
              <p className="ecg-team-card__text">{t('presentationPage.hero.teamCategory1Text')}</p>
            </article>
            <article className="ecg-team-card">
              <div className="ecg-team-card__icon"><i className="bi bi-people-fill" aria-hidden="true"></i></div>
              <h3 className="ecg-team-card__title">{t('presentationPage.hero.teamCategory2Title')}</h3>
              <p className="ecg-team-card__text">{t('presentationPage.hero.teamCategory2Text')}</p>
            </article>
            <article className="ecg-team-card">
              <div className="ecg-team-card__icon"><i className="bi bi-wrench-adjustable" aria-hidden="true"></i></div>
              <h3 className="ecg-team-card__title">{t('presentationPage.hero.teamCategory3Title')}</h3>
              <p className="ecg-team-card__text">{t('presentationPage.hero.teamCategory3Text')}</p>
            </article>
          </div>

          <div className="ecg-team__stats">
            <div className="ecg-team__stat">
              <span className="ecg-team__stat-value">
                <span data-counter="50">0</span>
                <span className="ecg-team__stat-suffix">+</span>
              </span>
              <span className="ecg-team__stat-label">{t('presentationPage.hero.statsCollaborators')}</span>
            </div>
            <div className="ecg-team__stat">
              <span className="ecg-team__stat-value">
                <span data-counter="18">0</span>
              </span>
              <span className="ecg-team__stat-label">{t('presentationPage.hero.statsYears')}</span>
            </div>
            <div className="ecg-team__stat">
              <span className="ecg-team__stat-value">
                <span data-counter="100">0</span>
                <span className="ecg-team__stat-suffix">%</span>
              </span>
              <span className="ecg-team__stat-label">{t('presentationPage.hero.statsCommitment')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTS LÉGAUX */}
      <section className="ecg-legal" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-legal__head">
            <span className="ds-eyebrow">{t('presentationPage.hero.legalTitle')}</span>
            <h2>{t('presentationPage.hero.legalTitle')}</h2>
            <p>{t('presentationPage.hero.legalSubtitle')}</p>
          </div>

          <div className="ecg-legal__grid">
            <article className="ecg-legal-doc">
              <span className="ecg-legal-doc__label">{t('presentationPage.hero.legalRccm')}</span>
              <p className="ecg-legal-doc__value">GN.TCC.2021.B.00331</p>
              <p className="ecg-legal-doc__sub">Tribunal de Commerce — Coyah, Guinée</p>
            </article>
            <article className="ecg-legal-doc">
              <span className="ecg-legal-doc__label">{t('presentationPage.hero.legalCapital')}</span>
              <p className="ecg-legal-doc__value">10.000.000 GNF</p>
              <p className="ecg-legal-doc__sub">SARL à responsabilité limitée</p>
            </article>
            <article className="ecg-legal-doc">
              <span className="ecg-legal-doc__label">{t('presentationPage.hero.legalBank')}</span>
              <p className="ecg-legal-doc__value">FIRSTBANK</p>
              <p className="ecg-legal-doc__sub">Compte : 302203000027011</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Presentation;
