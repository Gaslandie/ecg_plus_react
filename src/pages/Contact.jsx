import React from 'react';
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/confirmation`
    : '/confirmation';
  const availability = React.useMemo(() => {
    const parts = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Africa/Conakry',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const getPart = (type) => parts.find((p) => p.type === type)?.value || '';
    const hour = Number(getPart('hour'));
    const minute = Number(getPart('minute'));
    const weekday = getPart('weekday').toLowerCase();
    const weekdayIndexMap = {
      lun: 1,
      mar: 2,
      mer: 3,
      jeu: 4,
      ven: 5,
      sam: 6,
      dim: 7,
    };
    const dayIndex = weekdayIndexMap[weekday.replace('.', '')] || 0;
    const currentMinutes = hour * 60 + minute;
    const openMinutes = 8 * 60;
    const closeMinutes = 17 * 60;
    const isWeekday = dayIndex >= 1 && dayIndex <= 5;
    const isOnline = isWeekday && currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    let nextSlotLabel = '';

    const formatSlot = (label, hourValue) => `${label} ${String(hourValue).padStart(2, '0')}:00`;

    if (isOnline) {
      nextSlotLabel = 'Disponible maintenant';
    } else if (isWeekday && currentMinutes < openMinutes) {
      nextSlotLabel = formatSlot(weekday, 8);
    } else {
      const nextDay = isWeekday && currentMinutes < closeMinutes ? dayIndex : dayIndex + 1;
      const nextWeekdayIndex = nextDay <= 5 ? nextDay : 1;
      const reverseMap = {
        1: 'lun.',
        2: 'mar.',
        3: 'mer.',
        4: 'jeu.',
        5: 'ven.',
        6: 'sam.',
        7: 'dim.',
      };
      nextSlotLabel = formatSlot(reverseMap[nextWeekdayIndex], 8);
    }

    return {
      isOnline,
      statusLabel: isOnline ? 'En ligne' : 'Hors ligne',
      nextSlot: nextSlotLabel,
      timezone: 'GMT',
    };
  }, []);

  const handleInput = (event) => {
    const field = event.target;
    if (field.checkValidity()) {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    form.classList.add('was-validated');
    setIsSubmitting(true);
  };

  return (
  <main className="page-without-hero">

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center section-alt-white" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{zIndex: 1}}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Contactez notre équipe</h1>
        <p className="lead text-dark mb-4">Besoin d'un devis, d'un conseil ou d'un accompagnement sur-mesure ? Notre équipe vous répond rapidement et vous accompagne à chaque étape de votre projet.</p>
       
      </div>
    </section>

    <section className="py-5 section-alt-blue">
      <div className="container my-4">
        <h2 className="text-center display-4 fw-bold mb-5">Une question ? Un projet à nous confier ?</h2>
        <div className="row g-5">
          <div className="col-lg-4 order-lg-2">
            <div className="contact-info-panel p-4 rounded-4 shadow-lg">
              <h3 className="fw-bold mb-4 text-white">Nos Coordonnées</h3>
              <div className="availability-badge-circle mb-4">
                <div className={`availability-dot ${availability.isOnline ? 'online' : 'offline'}`}></div>
                <div className="availability-text">
                  <span className={`availability-status ${availability.isOnline ? 'text-success' : 'text-danger'}`}>
                    {availability.statusLabel}
                  </span>
                  <small className="d-block">Prochain créneau : {availability.nextSlot} ({availability.timezone})</small>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-card-icon icon-red">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h6 className="fw-bold mb-1">Siège Social</h6>
                  <p className="mb-0">MANEAH/PREF. COYAH, République de Guinée</p>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-card-icon icon-yellow">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h6 className="fw-bold mb-1">Téléphone</h6>
                  <p className="mb-0"><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                  <p className="mb-0"><a href="tel:+224628338641" className="text-decoration-none">+224 628 33 86 41</a></p>
                </div>
              </div>
              <div className="contact-info-card rounded-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-card-icon icon-green">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="mb-0"><a href="mailto:contact@ecgplusgn.com" className="text-decoration-none">contact@ecgplusgn.com</a></p>
                </div>
              </div>
              <div className="contact-schedule-card rounded-4" data-aos="fade-up" data-aos-delay="400">
                <div className="d-flex align-items-center mb-3">
                  <span className="contact-card-icon icon-yellow me-3"><i className="bi bi-clock-fill"></i></span>
                  <div>
                    <h6 className="fw-bold mb-0">Horaires & Disponibilité</h6>
                    <small className="text-muted">Fuseau horaire : GMT (Conakry)</small>
                  </div>
                </div>
                <div className="schedule-table">
                  <div className="schedule-row">
                    <span>Lun - Ven</span>
                    <strong>08:00 - 17:00</strong>
                  </div>
                  <div className="schedule-row">
                    <span>Samedi</span>
                    <strong>Fermé</strong>
                  </div>
                  <div className="schedule-row">
                    <span>Dimanche</span>
                    <strong>Fermé</strong>
                  </div>
                  <div className="schedule-row schedule-row-emergency">
                    <span>Urgences</span>
                    <strong>24h/24</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <form
              className="contact-form-premium p-4 rounded-4 shadow-lg bg-white needs-validation"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              style={{maxWidth: '700px', margin: '0 auto'}}
            >
              <input type="hidden" name="redirect" value={redirectUrl} />
              <input type="hidden" name="access_key" value="4cd0b824-f70a-4e1e-8f73-6a69021e83c8" />
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputName" name="name" placeholder="Votre nom" required onInput={handleInput} />
                    <label htmlFor="inputName">Nom complet <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-person-fill"></i></span>
                    <div className="invalid-feedback">Veuillez renseigner votre nom complet.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputSociete" name="societe" placeholder="Nom de votre société (optionnel)" onInput={handleInput} />
                    <label htmlFor="inputSociete">Société</label>
                    <span className="floating-icon"><i className="bi bi-building"></i></span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="email" className="form-control form-control-lg ps-5" id="inputEmail" name="email" placeholder="Votre email" required onInput={handleInput} />
                    <label htmlFor="inputEmail">Email <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-envelope-fill"></i></span>
                    <div className="invalid-feedback">Veuillez saisir un email valide.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="tel" className="form-control form-control-lg ps-5" id="inputPhone" name="phone" placeholder="Votre téléphone" required onInput={handleInput} />
                    <label htmlFor="inputPhone">Téléphone <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-telephone-fill"></i></span>
                    <div className="invalid-feedback">Veuillez saisir un numéro valide.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <select id="inputTypeProjet" className="form-select form-select-lg ps-5" name="type_projet" required onInput={handleInput}>
                      <option value="">Sélectionnez...</option>
                      <option value="construction">Construction</option>
                      <option value="renovation">Rénovation</option>
                      <option value="expertise">Expertise</option>
                      <option value="autre">Autre</option>
                    </select>
                    <label htmlFor="inputTypeProjet">Type de projet <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-diagram-3-fill"></i></span>
                    <div className="invalid-feedback">Veuillez sélectionner un type de projet.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating form-floating-icon">
                    <input type="text" className="form-control form-control-lg ps-5" id="inputSubject" name="subject" placeholder="Sujet de votre demande" required onInput={handleInput} />
                    <label htmlFor="inputSubject">Objet de la demande <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-chat-left-text-fill"></i></span>
                    <div className="invalid-feedback">Veuillez saisir l'objet de la demande.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating form-floating-icon">
                    <textarea className="form-control form-control-lg ps-5" id="inputProjectDetails" name="message" rows="5" placeholder="Décrivez votre besoin (type de construction, localisation, délai souhaité, etc.)" required onInput={handleInput}></textarea>
                    <label htmlFor="inputProjectDetails">Détails du projet / Message <span className="text-danger">*</span></label>
                    <span className="floating-icon"><i className="bi bi-pencil-fill"></i></span>
                    <div className="invalid-feedback">Merci de décrire votre besoin.</div>
                  </div>
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-custom btn-lg mt-2 contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer votre message'
                    )}
                  </button>
                </div>
                <div className="col-12">
                  <p className="form-text mt-3 text-end"><span className="text-danger">*</span> Champs obligatoires</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12">
            <h3 className="fw-bold text-center mb-4">Localisation du siège social</h3>
            <div className="map-responsive rounded shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.121696245131!2d-13.628965751911964!3d9.695383188582042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfa27e997a9f936f%3A0xc39115c2d3858055!2sCoyah%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sca!4v1701547746419!5m2!1sfr!2sca"
                width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section FAQ */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">Questions Fréquentes</h2>
            <p className="lead">Retrouvez les réponses à vos questions les plus courantes</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion1">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Quels sont vos délais de réponse pour un devis ?
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Nous nous engageons à vous fournir un devis détaillé sous 48h ouvrées maximum après réception de votre demande complète (plans, spécifications techniques, etc.).
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Intervenez-vous dans toute la Guinée ?
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Oui, nous intervenons sur l'ensemble du territoire guinéen : Conakry, régions administratives (Kindia, Mamou, Labé, Kankan, Nzérékoré, Boké, etc.) et zones minières.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Proposez-vous des facilités de paiement ?
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                    Oui, nous proposons des facilités de paiement adaptées à la taille de votre projet. Contactez notre service commercial pour discuter des modalités (échéanciers, garanties bancaires, etc.).
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion2">
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Quelles sont vos garanties ?
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    Nous offrons une garantie décennale sur nos ouvrages, une garantie biennale sur les équipements, et nous respectons tous les délais contractuels avec pénalités de retard.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Disposez-vous d'un service d'urgence ?
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    Oui, notre équipe d'urgence est disponible 24h/24 pour les interventions critiques (dépannages électriques, problèmes structurels, etc.). Contactez le +224 623 96 62 78.
                  </div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                    <i className="bi bi-question-circle-fill me-2" style={{color: 'var(--gas-primary)'}}></i>Proposez-vous des formations ?
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                    Oui, nous proposons des formations à l'utilisation et à la maintenance des équipements installés, ainsi que des sessions de formation pour vos équipes techniques.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  );
};

export default Contact;
