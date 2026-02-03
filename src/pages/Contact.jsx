
const Contact = () => (
  <main>
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{zIndex: 1}}>
        <h1 className="display-2 fw-bold text-white contact-title" data-aos="fade-up">Contactez notre équipe</h1>
        <p className="lead text-white">Pour toute information ou demande relative à nos activités en Guinée et dans la sous-région.</p>
      </div>
    </section>

    <section className="py-5">
      <div className="container my-4">
        <h2 className="text-center display-4 fw-bold mb-5">Une question ? Un projet à nous confier ?</h2>
        <div className="row g-5">
          <div className="col-lg-4 order-lg-2" data-aos="fade-left" data-aos-delay="300">
            <div className="p-4 rounded shadow-lg bg-light h-100">
              <h3 className="fw-bold mb-4">Nos Coordonnées</h3>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-geo-alt-fill fs-3 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-0">Siège Social</h6>
                  <p className="mb-0">MANEAH/PREF. COYAH, République de Guinée</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-telephone-fill fs-3 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-0">Téléphone</h6>
                  <p className="mb-0"><a href="tel:+224623966278" className="text-decoration-none">+224 623 96 62 78</a></p>
                  <p className="mb-0"><a href="tel:+224628338641" className="text-decoration-none">+224 628 33 86 41</a></p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-envelope-fill fs-3 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="mb-0"><a href="mailto:daoudafofanadf66@gmail.com" className="text-decoration-none">daoudafofanadf66@gmail.com</a></p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-clock-fill fs-3 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-0">Horaires de Bureau</h6>
                  <p className="mb-0">Lundi au Vendredi : 8h00 - 17h00</p>
                </div>
              </div>
              <hr className="my-4" />
              <h5 className="fw-bold">Restons Connectés</h5>
              <div className="social-links d-flex mt-3">
                <a href="#" className="text-decoration-none me-3"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#" className="text-decoration-none me-3"><i className="bi bi-linkedin fs-4"></i></a>
                <a href="#" className="text-decoration-none"><i className="bi bi-twitter-x fs-4"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1" data-aos="fade-right" data-aos-delay="300">
            <form className="p-4 rounded shadow-lg" action="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="inputName" className="form-label fw-bold">Votre Nom Complet <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="inputName" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="inputEmail" className="form-label fw-bold">Votre Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="inputEmail" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputSubject" className="form-label fw-bold">Objet de votre demande <span className="text-danger">*</span></label>
                <select id="inputSubject" className="form-select" required>
                  <option defaultValue>Choisir l'objet...</option>
                  <option>Demande de devis – Construction / BTP</option>
                  <option>Demande de devis – Travaux de rénovation</option>
                  <option>Demande d’information générale</option>
                  <option>Proposition de partenariat</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="inputProjectDetails" className="form-label fw-bold">Détails de votre projet / Message <span className="text-danger">*</span></label>
                <textarea className="form-control" id="inputProjectDetails" rows="6" placeholder="Décrivez votre besoin (type de construction, localisation, délai souhaité, etc.)" required></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-custom btn-lg mt-3">Envoyer votre message</button>
              </div>
              <p className="form-text mt-3 text-end"><span className="text-danger">*</span> Champs obligatoires</p>
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
  </main>
);

export default Contact;
