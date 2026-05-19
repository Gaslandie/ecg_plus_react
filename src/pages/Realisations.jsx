import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.jpg';
import kagbelen from '../assets/img/kagbelen.jpg';
import r4 from '../assets/img/r+4.jpg';
import hangar from '../assets/img/hangar.jpg';
import ansoumania from '../assets/img/ansoumania.jpg';
import '../styles/realisations.css';
import '../styles/home.css'; /* pour réutiliser .ecg-project */

function Realisations() {
  const { t } = useI18n();

  // Parallax léger sur le hero
  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('.ecg-real-hero');
    if (!hero || prefersReduced) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY * 0.15;
        hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const projects = [
    { img: kankan, key: 'kankan' },
    { img: dubreka, key: 'dubreka' },
    { img: kagbelen, key: 'kagbelen' },
    { img: r4, key: 'r4' },
    { img: hangar, key: 'hangar' },
    { img: ansoumania, key: 'ansoumania' },
  ];

  return (
    <main className="page-with-hero">
      {/* HERO plein écran */}
      <header className="ecg-real-hero" style={{ backgroundImage: `url(${hangar})` }}>
        <div className="ecg-real-hero__overlay" />
        <div className="ecg-real-hero__content ds-container">
          <span className="ds-eyebrow ecg-real-hero__eyebrow">{t('realisationsPage.hero.eyebrow')}</span>
          <h1 className="ecg-real-hero__title">{t('realisationsPage.hero.title')}</h1>
          <p className="ecg-real-hero__intro">{t('realisationsPage.hero.subtitle')}</p>
        </div>
      </header>

      {/* PROJETS — grille premium */}
      <section className="ecg-real-projects" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-real-projects__head">
            <span className="ds-eyebrow">{t('realisationsPage.hero.eyebrow')}</span>
            <h2>{t('realisationsPage.projects.title')}</h2>
            <p>{t('realisationsPage.projects.more')}</p>
          </div>
          <div className="ecg-real-projects__grid">
            {projects.map(({ img, key }) => (
              <article key={key} className="ecg-project">
                <img className="ecg-project__img" src={img} alt={t(`realisationsPage.projects.cards.${key}.title`)} loading="lazy" decoding="async" />
                <div className="ecg-project__overlay" />
                <span className="ecg-project__category">{t(`realisationsPage.projects.cards.${key}.badge`)}</span>
                <div className="ecg-project__content">
                  <h3 className="ecg-project__title">{t(`realisationsPage.projects.cards.${key}.title`)}</h3>
                  <p className="ecg-project__meta">{t(`realisationsPage.projects.cards.${key}.meta`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="ecg-real-domains" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-real-domains__head">
            <span className="ds-eyebrow">{t('realisationsPage.domains.title')}</span>
            <h2>{t('realisationsPage.domains.subtitle')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>
          <div className="ecg-real-domains__grid">
            <article className="ecg-domain">
              <span className="ecg-domain__num">01</span>
              <h3 className="ecg-domain__title">{t('realisationsPage.domains.building')}</h3>
              <ul className="ecg-domain__list">
                {t('realisationsPage.domains.lists.building').map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </article>
            <article className="ecg-domain">
              <span className="ecg-domain__num">02</span>
              <h3 className="ecg-domain__title">{t('realisationsPage.domains.energy')}</h3>
              <ul className="ecg-domain__list">
                {t('realisationsPage.domains.lists.energy').map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </article>
            <article className="ecg-domain">
              <span className="ecg-domain__num">03</span>
              <h3 className="ecg-domain__title">{t('realisationsPage.domains.civil')}</h3>
              <ul className="ecg-domain__list">
                {t('realisationsPage.domains.lists.civil').map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </article>
            <article className="ecg-domain">
              <span className="ecg-domain__num">04</span>
              <h3 className="ecg-domain__title">{t('realisationsPage.domains.studies')}</h3>
              <ul className="ecg-domain__list">
                {t('realisationsPage.domains.lists.studies').map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PRÉSENCE GÉOGRAPHIQUE */}
      <section className="ecg-real-presence" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-real-presence__head">
            <div>
              <span className="ds-eyebrow">{t('realisationsPage.presence.title')}</span>
              <h2>{t('realisationsPage.presence.title')}</h2>
            </div>
            <p>{t('realisationsPage.presence.text')}</p>
          </div>
          <div className="ecg-real-presence__grid">
            <article className="ecg-zone">
              <div className="ecg-zone__icon"><i className="bi bi-house-fill" aria-hidden="true"></i></div>
              <h3 className="ecg-zone__title">{t('realisationsPage.presence.conakry')}</h3>
              <p className="ecg-zone__text">{t('realisationsPage.presence.conakryText')}</p>
              <span className="ecg-zone__count">{t('realisationsPage.presence.badges.conakry')}</span>
            </article>
            <article className="ecg-zone">
              <div className="ecg-zone__icon"><i className="bi bi-tree-fill" aria-hidden="true"></i></div>
              <h3 className="ecg-zone__title">{t('realisationsPage.presence.regions')}</h3>
              <p className="ecg-zone__text">{t('realisationsPage.presence.regionsText')}</p>
              <span className="ecg-zone__count">{t('realisationsPage.presence.badges.regions')}</span>
            </article>
            <article className="ecg-zone">
              <div className="ecg-zone__icon"><i className="bi bi-water" aria-hidden="true"></i></div>
              <h3 className="ecg-zone__title">{t('realisationsPage.presence.coast')}</h3>
              <p className="ecg-zone__text">{t('realisationsPage.presence.coastText')}</p>
              <span className="ecg-zone__count">{t('realisationsPage.presence.badges.coast')}</span>
            </article>
            <article className="ecg-zone">
              <div className="ecg-zone__icon"><i className="bi bi-hammer" aria-hidden="true"></i></div>
              <h3 className="ecg-zone__title">{t('realisationsPage.presence.mining')}</h3>
              <p className="ecg-zone__text">{t('realisationsPage.presence.miningText')}</p>
              <span className="ecg-zone__count">{t('realisationsPage.presence.badges.mining')}</span>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="ecg-real-process" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-real-process__head">
            <span className="ds-eyebrow">{t('realisationsPage.process.title')}</span>
            <h2>{t('realisationsPage.process.subtitle')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>
          <div className="ecg-real-process__steps">
            <div className="ecg-step">
              <div className="ecg-step__num">1</div>
              <h3 className="ecg-step__title">{t('realisationsPage.process.step1')}</h3>
              <p className="ecg-step__text">{t('realisationsPage.process.step1text')}</p>
            </div>
            <div className="ecg-step">
              <div className="ecg-step__num">2</div>
              <h3 className="ecg-step__title">{t('realisationsPage.process.step2')}</h3>
              <p className="ecg-step__text">{t('realisationsPage.process.step2text')}</p>
            </div>
            <div className="ecg-step">
              <div className="ecg-step__num">3</div>
              <h3 className="ecg-step__title">{t('realisationsPage.process.step3')}</h3>
              <p className="ecg-step__text">{t('realisationsPage.process.step3text')}</p>
            </div>
            <div className="ecg-step">
              <div className="ecg-step__num">4</div>
              <h3 className="ecg-step__title">{t('realisationsPage.process.step4')}</h3>
              <p className="ecg-step__text">{t('realisationsPage.process.step4text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="ecg-real-cta" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container ecg-real-cta__inner">
          <h2>{t('realisationsPage.cta.title')}</h2>
          <p className="ecg-real-cta__text">{t('realisationsPage.cta.text')}</p>
          <div className="ecg-real-cta__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('realisationsPage.cta.primary')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/expertiseservices" className="ds-btn ds-btn--ghost">
              {t('realisationsPage.cta.secondary')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Realisations;
