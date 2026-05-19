import React from 'react';
import { Link } from 'react-router-dom';
import bgAccueil from '../assets/img/bgAccueil.jpg';
import kankan from '../assets/img/kankan.jpeg';
import dubreka from '../assets/img/dubreka.jpg';
import nongo from '../assets/img/nongo.jpeg';
import { useI18n } from '../i18n/I18nContext.jsx';
import '../styles/home.css';

function Home() {
  const { t } = useI18n();
  React.useEffect(() => {
    const img = new Image();
    img.src = bgAccueil;
  }, []);

  // Animation de compteur pour les chiffres de la section À propos
  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = document.querySelectorAll('.ecg-metric__value[data-target]');
    if (!counters.length) return;
    if (prefersReduced) {
      counters.forEach((el) => {
        el.textContent = el.getAttribute('data-target');
      });
      return;
    }
    const animate = (el) => {
      const target = Number(el.getAttribute('data-target')) || 0;
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bg = document.querySelector('.ecg-hero__bg');
    if (!bg || prefersReduced) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY * 0.15;
          bg.style.transform = `translateY(${y}px) scale(1.08)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="page-with-hero">
      {/* Hero — refonte premium */}
      <header className="ecg-hero">
        <img
          className="ecg-hero__bg"
          src={bgAccueil}
          alt=""
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1280"
        />
        <div className="ecg-hero__overlay" />
        <div className="ecg-hero__content ds-container">
          <span className="ds-eyebrow ecg-hero__eyebrow">{t('home.hero.eyebrow')}</span>
          <h1 className="ecg-hero__title">
            <span>{t('home.hero.line1')}</span>
            <span>{t('home.hero.line2')}</span>
          </h1>
          <p className="ecg-hero__subtitle">{t('home.hero.subtitle')}</p>
          <div className="ecg-hero__actions">
            <Link to="/contact" className="ds-btn ds-btn--accent">
              {t('home.hero.ctaPrimary')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/realisations" className="ds-btn ds-btn--outline">
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
        </div>
        <a href="#apropos" className="ecg-hero__scroll" aria-label={t('home.hero.scroll')}>
          <span className="ecg-hero__scroll-label">{t('home.hero.scroll')}</span>
          <span className="ecg-hero__scroll-line" aria-hidden="true" />
        </a>
      </header>

      {/* À propos — refonte premium éditoriale */}
      <section id="apropos" className="ecg-about" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-about__grid">
            <div className="ecg-about__col-text">
              <span className="ds-eyebrow">{t('home.about.eyebrow')}</span>
              <h2>{t('home.about.historyTitle')}</h2>
              <hr className="ds-divider" />
              <p className="ecg-about__lead">{t('home.about.historyLead')}</p>
              <p>{t('home.about.historyText')}</p>
              <Link to="/presentation" className="ds-btn ds-btn--ghost ecg-about__cta">
                {t('home.about.cta')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
            <aside className="ecg-metrics" aria-label="Chiffres-clés ECG PLUS">
              <div className="ecg-metric">
                <span className="ecg-metric__value" data-target="18">0<span className="ecg-metric__suffix">+</span></span>
                <span className="ecg-metric__label">{t('home.hero.stats.years')}</span>
              </div>
              <div className="ecg-metric">
                <span className="ecg-metric__value" data-target="25">0<span className="ecg-metric__suffix">+</span></span>
                <span className="ecg-metric__label">{t('home.hero.stats.projects')}</span>
              </div>
              <div className="ecg-metric">
                <span className="ecg-metric__value" data-target="100">0<span className="ecg-metric__suffix">%</span></span>
                <span className="ecg-metric__label">{t('home.hero.stats.satisfaction')}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Valeurs — épuré, sans cartes ombrées */}
      <section className="ecg-values" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-values__head">
            <span className="ds-eyebrow">{t('home.values.eyebrow')}</span>
            <h2>{t('home.values.title')}</h2>
            <hr className="ds-divider ds-divider--center" />
          </div>
          <div className="ecg-values__grid">
            <div className="ecg-value">
              <div className="ecg-value__icon"><i className="bi bi-people-fill" aria-hidden="true"></i></div>
              <h3 className="ecg-value__title">{t('home.values.teamTitle')}</h3>
              <p className="ecg-value__text">{t('home.values.teamText')}</p>
            </div>
            <div className="ecg-value">
              <div className="ecg-value__icon"><i className="bi bi-shield-check" aria-hidden="true"></i></div>
              <h3 className="ecg-value__title">{t('home.values.qualityTitle')}</h3>
              <p className="ecg-value__text">{t('home.values.qualityText')}</p>
            </div>
            <div className="ecg-value">
              <div className="ecg-value__icon"><i className="bi bi-tree" aria-hidden="true"></i></div>
              <h3 className="ecg-value__title">{t('home.values.envTitle')}</h3>
              <p className="ecg-value__text">{t('home.values.envText')}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services — éditorial numéroté (grille 2x2) */}
      <section id="services" className="ecg-services" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-services__head">
            <div>
              <span className="ds-eyebrow">{t('home.services.eyebrow')}</span>
              <h2>{t('home.services.title')}</h2>
            </div>
            <Link to="/expertiseservices" className="ds-btn ds-btn--ghost ecg-services__cta">
              {t('common.learnMore')}
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="ecg-services__grid">
            <Link to="/expertiseservices" className="ecg-service">
              <span className="ecg-service__num">01 / Énergie</span>
              <h3 className="ecg-service__title">{t('home.services.card1.title')}</h3>
              <p className="ecg-service__text">{t('home.services.card1.text')}</p>
              <span className="ecg-service__arrow">
                {t('common.learnMore')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </span>
            </Link>
            <Link to="/expertiseservices" className="ecg-service">
              <span className="ecg-service__num">02 / Construction</span>
              <h3 className="ecg-service__title">{t('home.services.card2.title')}</h3>
              <p className="ecg-service__text">{t('home.services.card2.text')}</p>
              <span className="ecg-service__arrow">
                {t('common.learnMore')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </span>
            </Link>
            <Link to="/expertiseservices" className="ecg-service">
              <span className="ecg-service__num">03 / Génie civil</span>
              <h3 className="ecg-service__title">{t('home.services.card3.title')}</h3>
              <p className="ecg-service__text">{t('home.services.card3.text')}</p>
              <span className="ecg-service__arrow">
                {t('common.learnMore')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </span>
            </Link>
            <Link to="/expertiseservices" className="ecg-service">
              <span className="ecg-service__num">04 / Études</span>
              <h3 className="ecg-service__title">{t('home.services.card4.title')}</h3>
              <p className="ecg-service__text">{t('home.services.card4.text')}</p>
              <span className="ecg-service__arrow">
                {t('common.learnMore')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations — cartes photo plein bleed */}
      <section className="ecg-realisations" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-realisations__head">
            <div>
              <span className="ds-eyebrow">{t('home.realisations.eyebrow')}</span>
              <h2>{t('home.realisations.title')}</h2>
            </div>
            <div>
              <p className="ecg-realisations__intro">{t('home.realisations.intro')}</p>
              <Link to="/realisations" className="ds-btn ds-btn--ghost">
                {t('home.realisations.cta')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="ecg-realisations__grid">
            <Link to="/realisations" className="ecg-project">
              <img className="ecg-project__img" src={kankan} alt={t('home.realisations.project1')} loading="lazy" decoding="async" />
              <div className="ecg-project__overlay" />
              <span className="ecg-project__category">{t('home.realisations.cat1')}</span>
              <div className="ecg-project__content">
                <h3 className="ecg-project__title">{t('home.realisations.project1')}</h3>
                <p className="ecg-project__meta">Kankan · 2023</p>
                <span className="ecg-project__arrow">
                  {t('common.seeProjects')}
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </Link>
            <Link to="/realisations" className="ecg-project">
              <img className="ecg-project__img" src={dubreka} alt={t('home.realisations.project2')} loading="lazy" decoding="async" />
              <div className="ecg-project__overlay" />
              <span className="ecg-project__category">{t('home.realisations.cat2')}</span>
              <div className="ecg-project__content">
                <h3 className="ecg-project__title">{t('home.realisations.project2')}</h3>
                <p className="ecg-project__meta">Dubréka · 2020–2021</p>
                <span className="ecg-project__arrow">
                  {t('common.seeProjects')}
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </Link>
            <Link to="/realisations" className="ecg-project">
              <img className="ecg-project__img" src={nongo} alt={t('home.realisations.project3')} loading="lazy" decoding="async" />
              <div className="ecg-project__overlay" />
              <span className="ecg-project__category">{t('home.realisations.cat3')}</span>
              <div className="ecg-project__content">
                <h3 className="ecg-project__title">{t('home.realisations.project3')}</h3>
                <p className="ecg-project__meta">Ansoumaniah & Nongo · 2018–2024</p>
                <span className="ecg-project__arrow">
                  {t('common.seeProjects')}
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — fond sombre premium + carte */}
      <section className="ecg-contact" data-aos="fade-up" data-aos-delay="100">
        <div className="ds-container">
          <div className="ecg-contact__grid">
            <div className="ecg-contact__col-text">
              <span className="ds-eyebrow">{t('home.contact.eyebrow')}</span>
              <h2>{t('home.contact.title')}</h2>
              <hr className="ds-divider" />
              <p className="ecg-contact__lead">{t('home.contact.text')}</p>
              <ul className="ecg-contact__info">
                <li>
                  <span className="ecg-contact__info-label">{t('home.contact.phoneLabel')}</span>
                  <span className="ecg-contact__info-value">
                    <a href="tel:+224623966278">+224 623 96 62 78</a> · <a href="tel:+224628338641">+224 628 33 86 41</a>
                  </span>
                </li>
                <li>
                  <span className="ecg-contact__info-label">{t('home.contact.emailLabel')}</span>
                  <span className="ecg-contact__info-value">
                    <a href="mailto:contact@ecgplusgn.com">contact@ecgplusgn.com</a>
                  </span>
                </li>
                <li>
                  <span className="ecg-contact__info-label">{t('home.contact.addressLabel')}</span>
                  <span className="ecg-contact__info-value">{t('home.contact.addressValue')}</span>
                </li>
              </ul>
              <Link to="/contact" className="ds-btn ds-btn--accent">
                {t('common.contactUs')}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="ecg-contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
                title="Carte ECG PLUS - Coyah"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
