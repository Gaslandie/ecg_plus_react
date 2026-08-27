import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import heroPages from '../assets/img/hero-pages.webp';
import histoire from '../assets/img/histoire.jpg';
import '../styles/realisations.css';
import '../styles/presentation.css';

const VALUE_ICONS = ['bi-award', 'bi-people', 'bi-shield-check', 'bi-tree'];
const TEAM_ICONS = ['bi-rulers', 'bi-people', 'bi-tools'];

function Presentation() {
  const { t } = useI18n();

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const background = document.querySelector('.ecg-presentation-page .ecg-real-hero__bg');
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

  React.useEffect(() => {
    const counters = document.querySelectorAll('.ecg-presentation-page [data-counter]');
    if (!counters.length) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      counters.forEach((element) => { element.textContent = element.dataset.counter; });
      return undefined;
    }

    const animate = (element) => {
      const target = Number(element.dataset.counter) || 0;
      const start = performance.now();
      const duration = 1500;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        element.textContent = String(Math.floor((1 - ((1 - progress) ** 3)) * target));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    counters.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-with-hero ecg-presentation-page">
      <header className="ecg-real-hero ecg-presentation-hero">
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
            {t('presentationPage.hero.eyebrow')}
          </span>
          <h1 className="ecg-real-hero__title">
            <span>{t('presentationPage.hero.titleLine1')}</span>
            <strong>{t('presentationPage.hero.titleLine2')}</strong>
          </h1>
          <p className="ecg-real-hero__intro">{t('presentationPage.hero.subtitle')}</p>
          <a href="#histoire" className="ds-btn ds-btn--accent">
            {t('presentationPage.hero.discover')}
            <i className="bi bi-arrow-down" aria-hidden="true" />
          </a>
        </div>

        <div className="ecg-real-hero__stats">
          <div className="ds-container ecg-real-hero__stats-inner">
            <div>
              <strong>18<span>+</span></strong>
              <p>{t('presentationPage.hero.stats.years')}</p>
            </div>
            <div>
              <strong>25<span>+</span></strong>
              <p>{t('presentationPage.hero.stats.projects')}</p>
            </div>
            <div>
              <strong>4</strong>
              <p>{t('presentationPage.hero.stats.expertise')}</p>
            </div>
            <Link to="/contact">
              <span>{t('presentationPage.hero.projectCta')}</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      <section id="histoire" className="ecg-presentation-story">
        <div className="ds-container">
          <div className="ecg-presentation-story__grid">
            <div className="ecg-presentation-story__content" data-aos="fade-up">
              <span className="ds-eyebrow">{t('presentationPage.presentation.historyTitle')}</span>
              <h2>{t('presentationPage.presentation.storyTitle')}</h2>
              <p className="ecg-presentation-story__lead">{t('presentationPage.presentation.historyLead')}</p>
              <p>{t('presentationPage.presentation.historyText')}</p>
              <Link to="/expertiseservices" className="ecg-real-text-link">
                {t('presentationPage.presentation.expertiseCta')}
                <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
              </Link>
            </div>

            <div className="ecg-presentation-story__visual" data-aos="fade-up" data-aos-delay="100">
              <img src={histoire} alt={t('presentationPage.presentation.imageAlt')} loading="lazy" decoding="async" />
              <div className="ecg-presentation-story__badge">
                <strong>18<span>+</span></strong>
                <small>{t('presentationPage.experience.years')}</small>
              </div>
            </div>
          </div>

          <blockquote className="ecg-presentation-vision" data-aos="fade-up">
            <span>{t('presentationPage.presentation.visionTitle')}</span>
            <p>“{t('presentationPage.presentation.visionText')}”</p>
          </blockquote>
        </div>
      </section>

      <section className="ecg-presentation-values">
        <div className="ds-container">
          <div className="ecg-presentation-values__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('presentationPage.values.eyebrow')}</span>
              <h2>{t('presentationPage.values.title')}</h2>
            </div>
            <p>{t('presentationPage.values.intro')}</p>
          </div>

          <div className="ecg-presentation-values__grid">
            {[0, 1, 2, 3].map((index) => (
              <article key={index} className="ecg-presentation-value" data-aos="fade-up" data-aos-delay={index * 70}>
                <div className="ecg-presentation-value__top">
                  <span>0{index + 1}</span>
                  <i className={`bi ${VALUE_ICONS[index]}`} aria-hidden="true" />
                </div>
                <h3>{t(`presentationPage.values.items.${index}.title`)}</h3>
                <p>{t(`presentationPage.values.items.${index}.text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="identite" className="ecg-presentation-identity">
        <div className="ds-container">
          <div className="ecg-presentation-identity__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('presentationPage.identity.eyebrow')}</span>
              <h2>{t('presentationPage.identity.title')}</h2>
            </div>
            <p>{t('presentationPage.identity.intro')}</p>
          </div>

          <div className="ecg-presentation-identity__layout">
            <div className="ecg-presentation-identity__table" data-aos="fade-up">
              {[
                ['companyName', 'ECG PLUS SARL'],
                ['legalStatus', 'SARL'],
                ['capital', '10.000.000 GNF'],
                ['rccm', 'GN.TCC.2021.B.00331'],
                ['headOffice', 'Manéah · Préfecture de Coyah · Guinée'],
              ].map(([label, value]) => (
                <div className="ecg-presentation-identity__row" key={label}>
                  <span>{t(`presentationPage.identity.${label}`)}</span>
                  <strong>{value}</strong>
                </div>
              ))}
              <div className="ecg-presentation-identity__row">
                <span>{t('presentationPage.identity.phone')}</span>
                <strong><a href="tel:+224623417510">+224 623 41 75 10</a></strong>
              </div>
              <div className="ecg-presentation-identity__row">
                <span>{t('presentationPage.identity.email')}</span>
                <strong><a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a></strong>
              </div>
              <div className="ecg-presentation-identity__row">
                <span>{t('presentationPage.identity.website')}</span>
                <strong><a href="https://ecgplusgn.com" target="_blank" rel="noreferrer">ecgplusgn.com</a></strong>
              </div>
            </div>

            <aside className="ecg-presentation-identity__metrics" aria-label={t('presentationPage.identity.metricsLabel')} data-aos="fade-up" data-aos-delay="100">
              <span className="ecg-presentation-identity__metrics-label">ECG PLUS</span>
              <div>
                <strong><span data-counter="18">18</span><small>+</small></strong>
                <p>{t('presentationPage.experience.years')}</p>
              </div>
              <div>
                <strong><span data-counter="25">25</span><small>+</small></strong>
                <p>{t('presentationPage.experience.projects')}</p>
              </div>
              <div>
                <strong><span data-counter="4">4</span></strong>
                <p>{t('presentationPage.hero.stats.expertise')}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="ecg-presentation-team">
        <div className="ds-container">
          <div className="ecg-presentation-team__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('presentationPage.team.eyebrow')}</span>
              <h2>{t('presentationPage.hero.teamTitle')}</h2>
            </div>
            <p>{t('presentationPage.hero.teamLead')}</p>
          </div>

          <div className="ecg-presentation-team__grid">
            {[0, 1, 2].map((index) => (
              <article key={index} className="ecg-presentation-team-card" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="ecg-presentation-team-card__icon">
                  <i className={`bi ${TEAM_ICONS[index]}`} aria-hidden="true" />
                </div>
                <span>0{index + 1}</span>
                <h3>{t(`presentationPage.hero.teamCategory${index + 1}Title`)}</h3>
                <p>{t(`presentationPage.hero.teamCategory${index + 1}Text`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-presentation-legal">
        <div className="ds-container">
          <div className="ecg-presentation-legal__head" data-aos="fade-up">
            <div>
              <span className="ds-eyebrow">{t('presentationPage.legal.eyebrow')}</span>
              <h2>{t('presentationPage.hero.legalTitle')}</h2>
            </div>
            <p>{t('presentationPage.hero.legalSubtitle')}</p>
          </div>

          <div className="ecg-presentation-legal__grid">
            <article data-aos="fade-up">
              <span>{t('presentationPage.hero.legalRccm')}</span>
              <strong>GN.TCC.2021.B.00331</strong>
              <p>{t('presentationPage.legal.courtDetail')}</p>
            </article>
            <article data-aos="fade-up" data-aos-delay="70">
              <span>{t('presentationPage.hero.legalCapital')}</span>
              <strong>10.000.000 GNF</strong>
              <p>{t('presentationPage.legal.statusDetail')}</p>
            </article>
            <article data-aos="fade-up" data-aos-delay="140">
              <span>{t('presentationPage.hero.legalBank')}</span>
              <strong>FIRSTBANK</strong>
              <p>{t('presentationPage.legal.bankDetail')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ecg-real-cta ecg-presentation-cta" data-aos="fade-up">
        <div className="ds-container ecg-real-cta__inner">
          <span className="ds-eyebrow">ECG PLUS</span>
          <h2>{t('presentationPage.finalCta.title')}</h2>
          <p>{t('presentationPage.finalCta.text')}</p>
          <div className="ecg-real-cta__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('presentationPage.finalCta.primary')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/realisations" className="ds-btn ds-btn--ghost">
              {t('presentationPage.finalCta.secondary')}
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Presentation;
