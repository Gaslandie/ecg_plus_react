// En-tête de page (pages sans hero) : fond papier, titre, texte, actions et visuel facultatif.
export default function PageHeader({ eyebrow, title, lead, actions, breadcrumb, media, children }) {
  return (
    <header className={`ecg-page-head${media ? ' ecg-page-head--media' : ''}`}>
      <div className="ds-container">
        {breadcrumb}
        <div className="ecg-page-head__grid">
          <div className="ecg-page-head__main">
            {eyebrow && <p className="ecg-eyebrow">{eyebrow}</p>}
            <h1>{title}</h1>
          </div>
          {(lead || actions) && (
            <div className="ecg-page-head__aside">
              {lead && <p className="ecg-lead">{lead}</p>}
              {actions}
            </div>
          )}
        </div>
        {children}
      </div>
      {media && (
        <div className="ecg-page-head__media">
          <div className="ds-container">{media}</div>
        </div>
      )}
    </header>
  );
}
