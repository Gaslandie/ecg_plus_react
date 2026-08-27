import React from 'react';
import { Link } from 'react-router-dom';
import bgAccueil from '../assets/img/bgAccueil.webp';
import histoire from '../assets/img/histoire.jpg';
import r4 from '../assets/img/r+4.jpg';
import ingeElectric from '../assets/img/ingeelectric.jpeg';
import batiment from '../assets/img/batiment.jpeg';
import industrie from '../assets/img/industrie.jpg';
import etudes from '../assets/img/etudes.jpg';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.jpg';
import nongo from '../assets/img/nongo.jpeg';
import heroPages from '../assets/img/hero-pages.webp';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/home.css';

function Home() {
  const { t } = useI18n();

  React.useEffect(() => {
    const img = new Image();
    img.src = bgAccueil;
  }, []);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bg = document.querySelector('.ecg-hero__bg');
    if (!bg || prefersReduced) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        bg.style.transform = `translate3d(0, ${window.scrollY * 0.1}px, 0) scale(1.055)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    { key: 'card1', index: '01', image: ingeElectric },
    { key: 'card2', index: '02', image: batiment },
    { key: 'card3', index: '03', image: industrie },
    { key: 'card4', index: '04', image: etudes },
  ];

  const projects = [
    { key: 'project1', cat: 'cat1', meta: 'meta1', image: kankan, featured: true },
    { key: 'project2', cat: 'cat2', meta: 'meta2', image: dubreka },
    { key: 'project3', cat: 'cat3', meta: 'meta3', image: nongo },
  ];

  return (
    <main className="page-with-hero ecg-home">
      <header className="ecg-hero">
        <img
          className="ecg-hero__bg"
          src={bgAccueil}
          alt=""
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1280"
        />
        <div className="ecg-hero__overlay" />
        <div className="ecg-hero__grid-lines" aria-hidden="true" />

        <div className="ecg-hero__content ds-container">
          <div className="ecg-hero__copy">
            <span className="ecg-hero__eyebrow">
              <span aria-hidden="true" />
              {t('home.hero.eyebrow')}
            </span>
            <h1 className="ecg-hero__title">
              <span>{t('home.hero.line1')}</span>
              <strong>{t('home.hero.line2')}</strong>
            </h1>
            <p className="ecg-hero__subtitle">{t('home.hero.subtitle')}</p>
            <div className="ecg-hero__actions">
              <Link to="/contact" className="ds-btn ds-btn--accent">
                {t('home.hero.ctaPrimary')}
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
              <Link to="/realisations" className="ds-btn ds-btn--outline">
                {t('home.hero.ctaSecondary')}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="ecg-hero__rail">
          <div className="ecg-hero__rail-inner ds-container">
            <div className="ecg-hero__proofs" aria-label={t('home.hero.proofsLabel')}>
              <div className="ecg-hero__proof">
                <strong>18<span>+</span></strong>
                <span>{t('home.hero.stats.years')}</span>
              </div>
              <div className="ecg-hero__proof">
                <strong>25<span>+</span></strong>
                <span>{t('home.hero.stats.projects')}</span>
              </div>
              <div className="ecg-hero__proof">
                <strong>100<span>%</span></strong>
                <span>{t('home.hero.stats.satisfaction')}</span>
              </div>
            </div>
            <Link to="/contact" className="ecg-hero__project-link">
              <span>
                <small>{t('home.hero.projectEyebrow')}</small>
                {t('home.hero.projectCta')}
              </span>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <a href="#apropos" className="ecg-hero__scroll" aria-label={t('home.hero.scroll')}>
          <span>{t('home.hero.scroll')}</span>
          <i className="bi bi-arrow-down" aria-hidden="true" />
        </a>
      </header>

      <section id="apropos" className="ecg-about" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-about__grid">
            <div className="ecg-about__visual" data-aos="fade-right">
              <figure className="ecg-about__main-image">
                <img src={histoire} alt={t('home.about.imageAlt')} loading="lazy" decoding="async" />
              </figure>
              <figure className="ecg-about__detail-image" aria-hidden="true">
                <img src={r4} alt="" loading="lazy" decoding="async" />
              </figure>
              <div className="ecg-about__experience">
                <strong>18</strong>
                <span>{t('home.about.badgeLabel')}</span>
              </div>
            </div>

            <div className="ecg-about__content" data-aos="fade-left">
              <span className="ds-eyebrow">{t('home.about.eyebrow')}</span>
              <h2>{t('home.about.historyTitle')}</h2>
              <p className="ecg-about__lead">{t('home.about.historyLead')}</p>
              <p className="ecg-about__text">{t('home.about.historyText')}</p>
              <div className="ecg-about__highlights">
                <span><i className="bi bi-check2" aria-hidden="true" />{t('home.about.point1')}</span>
                <span><i className="bi bi-check2" aria-hidden="true" />{t('home.about.point2')}</span>
                <span><i className="bi bi-check2" aria-hidden="true" />{t('home.about.point3')}</span>
              </div>
              <Link to="/presentation" className="ecg-text-link">
                {t('home.about.cta')}
                <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ecg-values" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-values__head">
            <div>
              <span className="ds-eyebrow">{t('home.values.eyebrow')}</span>
              <h2>{t('home.values.title')}</h2>
            </div>
            <p>{t('home.values.intro')}</p>
          </div>

          <div className="ecg-values__grid">
            <article className="ecg-value" data-aos="fade-up" data-aos-delay="0">
              <span className="ecg-value__index">01</span>
              <i className="bi bi-people" aria-hidden="true" />
              <h3>{t('home.values.teamTitle')}</h3>
              <p>{t('home.values.teamText')}</p>
            </article>
            <article className="ecg-value" data-aos="fade-up" data-aos-delay="90">
              <span className="ecg-value__index">02</span>
              <i className="bi bi-shield-check" aria-hidden="true" />
              <h3>{t('home.values.qualityTitle')}</h3>
              <p>{t('home.values.qualityText')}</p>
            </article>
            <article className="ecg-value" data-aos="fade-up" data-aos-delay="180">
              <span className="ecg-value__index">03</span>
              <i className="bi bi-globe2" aria-hidden="true" />
              <h3>{t('home.values.envTitle')}</h3>
              <p>{t('home.values.envText')}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="ecg-services" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-section-head ecg-services__head">
            <div>
              <span className="ds-eyebrow">{t('home.services.eyebrow')}</span>
              <h2>{t('home.services.title')}</h2>
            </div>
            <div className="ecg-section-head__aside">
              <p>{t('home.services.intro')}</p>
              <Link to="/expertiseservices" className="ecg-text-link">
                {t('common.seeServices')}
                <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
              </Link>
            </div>
          </div>

          <div className="ecg-services__grid">
            {services.map((service, index) => (
              <Link
                key={service.key}
                to="/expertiseservices"
                className={`ecg-service-card${index === 0 ? ' is-featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={String(index * 70)}
              >
                <img src={service.image} alt="" loading="lazy" decoding="async" />
                <span className="ecg-service-card__shade" aria-hidden="true" />
                <span className="ecg-service-card__index">{service.index}</span>
                <div className="ecg-service-card__content">
                  <span className="ecg-service-card__label">
                    {t(`home.services.${service.key}.label`)}
                  </span>
                  <h3>{t(`home.services.${service.key}.title`)}</h3>
                  <p>{t(`home.services.${service.key}.text`)}</p>
                </div>
                <span className="ecg-service-card__arrow" aria-hidden="true">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-realisations" data-aos="fade-up">
        <div className="ds-container">
          <div className="ecg-section-head ecg-realisations__head">
            <div>
              <span className="ds-eyebrow">{t('home.realisations.eyebrow')}</span>
              <h2>{t('home.realisations.title')}</h2>
            </div>
            <div className="ecg-section-head__aside">
              <p>{t('home.realisations.intro')}</p>
              <Link to="/realisations" className="ecg-text-link">
                {t('home.realisations.cta')}
                <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
              </Link>
            </div>
          </div>

          <div className="ecg-realisations__grid">
            {projects.map((project, index) => (
              <Link
                key={project.key}
                to="/realisations"
                className={`ecg-project${project.featured ? ' is-featured' : ''}`}
                data-aos={index === 0 ? 'fade-right' : 'fade-left'}
              >
                <img
                  className="ecg-project__img"
                  src={project.image}
                  alt={t(`home.realisations.${project.key}`)}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ecg-project__shade" aria-hidden="true" />
                <span className="ecg-project__category">{t(`home.realisations.${project.cat}`)}</span>
                <div className="ecg-project__content">
                  <p>{t(`home.realisations.${project.meta}`)}</p>
                  <h3>{t(`home.realisations.${project.key}`)}</h3>
                </div>
                <span className="ecg-project__arrow" aria-hidden="true">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ecg-contact" data-aos="fade-up">
        <img className="ecg-contact__bg" src={heroPages} alt="" loading="lazy" decoding="async" />
        <span className="ecg-contact__shade" aria-hidden="true" />
        <div className="ds-container ecg-contact__inner">
          <div className="ecg-contact__copy" data-aos="fade-right">
            <span className="ds-eyebrow">{t('home.contact.eyebrow')}</span>
            <h2>{t('home.contact.title')}</h2>
            <p>{t('home.contact.text')}</p>
            <span className="ecg-contact__promise">
              <i className="bi bi-check-circle-fill" aria-hidden="true" />
              {t('common.response24h')}
            </span>
          </div>

          <aside className="ecg-contact-card" data-aos="fade-left">
            <span className="ecg-contact-card__eyebrow">{t('home.contact.directTitle')}</span>
            <a className="ecg-contact-card__phone" href="tel:+224623417510">+224 623 41 75 10</a>
            <a className="ecg-contact-card__email" href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
            <p>{t('home.contact.addressValue')}</p>
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('common.startProject')}
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Home;
