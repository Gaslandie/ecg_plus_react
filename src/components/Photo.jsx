import { useEffect, useId, useRef, useState } from 'react';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Photo({ image, alt, caption, className = '', sizes, priority = false, zoom = true, contain = false }) {
  const { t } = useI18n();
  const dialogRef = useRef(null);
  const titleId = useId();
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    if (!opened) return undefined;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [opened]);
  return (
    <figure className={`ecg-photo ${className}${contain ? ' ecg-photo--contain' : ''}`}>
      <div className="ecg-photo__frame">
        <img {...image} alt={alt} sizes={sizes || '(max-width: 991px) 100vw, 45vw'}
          loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" />
        {zoom && <button type="button" className="ecg-photo__expand" onClick={() => setOpened(true)} aria-haspopup="dialog">
          <i className="bi bi-arrow-up-right" aria-hidden="true" />{t('referenceUi.enlarge')}<span className="visually-hidden"> — {alt}</span>
        </button>}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
      {zoom && <dialog ref={dialogRef} className="ecg-photo-dialog" aria-labelledby={titleId} onClose={() => setOpened(false)} onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close();
      }}>
        <div className="ecg-photo-dialog__head">
          <h2 id={titleId}>{alt || t('referenceUi.photoDialog')}</h2>
          <button type="button" className="ecg-photo-dialog__close" onClick={() => dialogRef.current.close()} aria-label={t('referenceUi.closePhoto')}>×</button>
        </div>
        {opened && <img className="ecg-photo-dialog__image" src={image.src} alt={alt} />}
      </dialog>}
    </figure>
  );
}
