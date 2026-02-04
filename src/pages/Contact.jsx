
const Contact = () => (
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
          <div className="col-lg-4 order-lg-2" data-aos="fade-left" data-aos-delay="300">
            <div className="p-4 rounded shadow-lg" style={{backgroundColor: 'var(--gas-primary)'}}>
              <h3 className="fw-bold mb-4">Nos Coordonnées</h3>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-geo-alt-fill fs-3 me-3" style={{color: '#dc3545'}}></i>
                <div>
                  <h6 className="fw-bold mb-0">Siège Social</h6>
                  <p className="mb-0">MANEAH/PREF. COYAH, République de Guinée</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-telephone-fill fs-3 me-3" style={{color: '#ffc107'}}></i>
                <div>
                  <h6 className="fw-bold mb-0">Téléphone</h6>
                  <p className="mb-0"><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                  <p className="mb-0"><a href="tel:+224628338641" className="text-decoration-none">+224 628 33 86 41</a></p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-envelope-fill fs-3 me-3" style={{color: '#28a745'}}></i>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="mb-0"><a href="mailto:contact@ecgplusgn.com" className="text-decoration-none">contact@ecgplusgn.com</a></p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-clock-fill fs-3 me-3" style={{color: '#dc3545'}}></i>
                <div>
                  <h6 className="fw-bold mb-0">Horaires de Bureau</h6>
                  <p className="mb-0">Lundi au Vendredi : 8h00 - 17h00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1" data-aos="fade-right" data-aos-delay="300">
            <form className="p-4 rounded-4 shadow-lg border border-2 bg-white" action="https://api.web3forms.com/submit" method="POST" style={{maxWidth: '700px', margin: '0 auto'}}>
              <input type="hidden" name="redirect" value="/confirmation" />
              <input type="hidden" name="access_key" value="4cd0b824-f70a-4e1e-8f73-6a69021e83c8" />
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label fw-bold"><i className="bi bi-person-fill me-2"></i>Nom complet <span className="text-danger">*</span></label>
                  <input type="text" className="form-control form-control-lg" id="inputName" name="name" placeholder="Votre nom" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputSociete" className="form-label fw-bold"><i className="bi bi-building me-2"></i>Société</label>
                  <input type="text" className="form-control form-control-lg" id="inputSociete" name="societe" placeholder="Nom de votre société (optionnel)" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail" className="form-label fw-bold"><i className="bi bi-envelope-fill me-2"></i>Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control form-control-lg" id="inputEmail" name="email" placeholder="Votre email" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhone" className="form-label fw-bold"><i className="bi bi-telephone-fill me-2"></i>Téléphone <span className="text-danger">*</span></label>
                  <input type="tel" className="form-control form-control-lg" id="inputPhone" name="phone" placeholder="Votre téléphone" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputTypeProjet" className="form-label fw-bold"><i className="bi bi-diagram-3-fill me-2"></i>Type de projet <span className="text-danger">*</span></label>
                  <select id="inputTypeProjet" className="form-select form-select-lg" name="type_projet" required>
                    <option value="">Sélectionnez...</option>
                    <option value="construction">Construction</option>
                    <option value="renovation">Rénovation</option>
                    <option value="expertise">Expertise</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputSubject" className="form-label fw-bold"><i className="bi bi-chat-left-text-fill me-2"></i>Objet de la demande <span className="text-danger">*</span></label>
                  <input type="text" className="form-control form-control-lg" id="inputSubject" name="subject" placeholder="Sujet de votre demande" required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputProjectDetails" className="form-label fw-bold"><i className="bi bi-pencil-fill me-2"></i>Détails du projet / Message <span className="text-danger">*</span></label>
                  <textarea className="form-control form-control-lg" id="inputProjectDetails" name="message" rows="5" placeholder="Décrivez votre besoin (type de construction, localisation, délai souhaité, etc.)" required></textarea>
                </div>
                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-custom btn-lg mt-2">Envoyer votre message</button>
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

    {/* Section Équipe de Contact */}
    <section className="py-5 section-alt-white">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold gradient-text mb-3">Notre Équipe à Votre Service</h2>
            <p className="lead">Des interlocuteurs dédiés selon vos besoins</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div className="contact-person-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="contact-avatar text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px', backgroundColor: 'var(--gas-primary)'}}>
                <i className="bi bi-person-fill" style={{fontSize: '2rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">Direction Commerciale</h5>
              <p className="text-muted small mb-3">Devis, études de faisabilité, conseils</p>
              <div className="contact-info">
                <p className="mb-1"><i className="bi bi-telephone-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                <p className="mb-0"><i className="bi bi-envelope-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="mailto:commercial@ecgplusgn.com" className="text-decoration-none">commercial@ecgplusgn.com</a></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-person-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="contact-avatar text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px', backgroundColor: 'var(--gas-primary)'}}>
                <i className="bi bi-tools" style={{fontSize: '2rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">Direction Technique</h5>
              <p className="text-muted small mb-3">Suivi de chantier, expertise, qualité</p>
              <div className="contact-info">
                <p className="mb-1"><i className="bi bi-telephone-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="tel:+224628338641" className="text-decoration-none">+224 628 33 86 41</a></p>
                <p className="mb-0"><i className="bi bi-envelope-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="mailto:technique@ecgplusgn.com" className="text-decoration-none">technique@ecgplusgn.com</a></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-person-card bg-white p-4 rounded shadow-lg h-100 text-center">
              <div className="contact-avatar text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px', backgroundColor: 'var(--gas-primary)'}}>
                <i className="bi bi-headset" style={{fontSize: '2rem'}}></i>
              </div>
              <h5 className="fw-bold mb-2">Service Client</h5>
              <p className="text-muted small mb-3">Support, réclamations, informations</p>
              <div className="contact-info">
                <p className="mb-1"><i className="bi bi-telephone-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                <p className="mb-0"><i className="bi bi-envelope-fill me-2" style={{color: 'var(--gas-primary)'}}></i><a href="mailto:support@ecgplusgn.com" className="text-decoration-none">support@ecgplusgn.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Horaires Détaillés */}
    <section className="py-5 section-alt-blue">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold gradient-text mb-4">Horaires & Disponibilité</h2>
            <p className="lead mb-4">
              Notre équipe est à votre disposition selon un planning adapté à vos besoins,
              avec des services d'urgence disponibles 24h/24.
            </p>

            <div className="schedule-info">
              <div className="schedule-item d-flex align-items-start mb-3">
                <i className="bi bi-clock-fill me-3 mt-1" style={{fontSize: '1.5rem', color: 'var(--gas-primary)'}}></i>
                <div>
                  <h6 className="fw-bold mb-1">Horaires Bureau</h6>
                  <p className="mb-0">Lundi - Vendredi : 8h00 - 17h00<br />Samedi : 8h00 - 12h00</p>
                </div>
              </div>

              <div className="schedule-item d-flex align-items-start mb-3">
                <i className="bi bi-exclamation-triangle-fill me-3 mt-1" style={{fontSize: '1.5rem', color: 'var(--gas-primary)'}}></i>
                <div>
                  <h6 className="fw-bold mb-1">Service d'Urgence</h6>
                  <p className="mb-0">Disponible 24h/24 pour les interventions critiques<br />Contact : +224 623 96 62 78</p>
                </div>
              </div>

              <div className="schedule-item d-flex align-items-start mb-3">
                <i className="bi bi-calendar-x-fill text-danger me-3 mt-1" style={{fontSize: '1.5rem'}}></i>
                <div>
                  <h6 className="fw-bold mb-1">Jours Fériés</h6>
                  <p className="mb-0">Fermeture les jours fériés légaux guinéens<br />Réouverture le jour ouvrable suivant</p>
                </div>
              </div>

              <div className="schedule-item d-flex align-items-start">
                <i className="bi bi-lightning-fill me-3 mt-1" style={{fontSize: '1.5rem', color: 'var(--gas-primary)'}}></i>
                <div>
                  <h6 className="fw-bold mb-1">Réponse Rapide</h6>
                  <p className="mb-0">Réponse à vos emails sous 24h<br />Appels téléphoniques traités immédiatement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="availability-visual text-center">
              <div className="availability-badge text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '150px', height: '150px', backgroundColor: 'var(--gas-primary)'}}>
                <div className="text-center">
                  <i className="bi bi-clock d-block" style={{fontSize: '3rem'}}></i>
                  <small className="d-block mt-2">24/7<br />Disponible</small>
                </div>
              </div>
              <h5 className="fw-bold mb-3">Notre Engagement de Service</h5>
              <p className="mb-0">
                Que ce soit pour une consultation, un devis d'urgence ou un suivi de chantier,
                notre équipe s'engage à vous répondre dans les meilleurs délais pour assurer
                la continuité de vos projets.
              </p>
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

export default Contact;
