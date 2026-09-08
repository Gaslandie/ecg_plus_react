export default function PageHeader({ eyebrow, title, lead, actions, breadcrumb, media, children }) {
  return (
    <header className={`ecg-page-head${media ? ' ecg-page-head--media' : ''}`}>
      <div className="ds-container">
        {breadcrumb}
        <div className="ecg-page-head__grid">
          <div className="ecg-page-head__main">
            {eyebrow && <p className="ecg-eyebrow">{eyebrow}</p>}
            <h1>{title}</h1>
            {lead && <p className="ecg-lead">{lead}</p>}
            {actions && <div className="ecg-page-head__actions">{actions}</div>}
          </div>
          {media && <div className="ecg-page-head__media">{media}</div>}
        </div>
        {children}
      </div>
    </header>
  );
}
