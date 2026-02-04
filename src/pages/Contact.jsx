
const Contact = () => (
  <main>

    {/* Hero & Intro Modernisé */}
    <section className="hero-section text-center d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
      <div className="container position-relative" style={{zIndex: 1}}>
        <h1 className="display-2 fw-bold gradient-text mb-3" data-aos="fade-up">Contactez notre équipe</h1>
        <p className="lead text-white mb-4">Besoin d’un devis, d’un conseil ou d’un accompagnement sur-mesure ? Notre équipe vous répond rapidement et vous accompagne à chaque étape de votre projet.</p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="engagement-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-hand-thumbs-up-fill text-orange me-2"></i> Nos Engagements</h4>
              <ul className="list-unstyled mb-0">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Réponse rapide et personnalisée</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Confidentialité et respect de vos données</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i> Suivi professionnel jusqu’à la livraison</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="legal-box p-4 rounded shadow-sm bg-white h-100">
              <h4 className="fw-bold text-primary mb-2"><i className="bi bi-file-earmark-text-fill text-accent me-2"></i> Infos Légales</h4>
              <ul className="list-unstyled mb-0 small">
                <li><strong>RCCM :</strong> GN.TCC.2021.B.00331</li>
                <li><strong>Capital social :</strong> 10.000.000 GNF</li>
                <li><strong>Adresse :</strong> Manéah, Coyah, Guinée</li>
                <li><strong>Email :</strong> contact@ecgplusgn.com</li>
                <li><strong>Tél :</strong> +224 623 96 62 78 / 628 33 86 41</li>
              </ul>
            </div>
          </div>
        </div>
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
                  <p className="mb-0"><a href="mailto:contact@ecgplusgn.com" className="text-decoration-none">contact@ecgplusgn.com</a></p>
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
            <form className="p-4 rounded-4 shadow-lg border border-2 bg-white" action="https://api.web3forms.com/submit" method="POST" style={{maxWidth: '700px', margin: '0 auto'}}>
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
                <div className="col-12">
                  <label htmlFor="inputFile" className="form-label fw-bold"><i className="bi bi-paperclip me-2"></i>Joindre un fichier (optionnel)</label>
                  <input type="file" className="form-control" id="inputFile" name="file" />
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
  </main>
);

export default Contact;
