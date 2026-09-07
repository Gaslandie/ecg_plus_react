// Tête de section : eyebrow (avec index facultatif), titre, texte et action.
export default function SectionHead({
  index, eyebrow, title, titleId, lead, action, align = 'split', focusableTitle = false, className = '', titleClassName = '',
}) {
  const classes = ['ecg-head', align === 'stack' ? 'ecg-head--stack' : '', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <div className="ecg-head__main">
        {eyebrow && (
          <p className={`ecg-eyebrow${index ? ' ecg-eyebrow--indexed' : ''}`}>
            {index && <span className="ecg-eyebrow__num">{index}</span>}
            <span>{eyebrow}</span>
          </p>
        )}
        <h2 id={titleId} tabIndex={focusableTitle ? -1 : undefined} className={`ecg-title ${titleClassName}`.trim()}>{title}</h2>
      </div>
      {(lead || action) && (
        <div className="ecg-head__aside">
          {lead && <p className="ecg-lead">{lead}</p>}
          {action}
        </div>
      )}
    </div>
  );
}
