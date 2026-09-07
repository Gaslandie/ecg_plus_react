import { useLayoutEffect } from 'react';

// Révélation discrète des blocs [data-reveal] au défilement.
// Les blocs déjà visibles sont marqués avant le premier rendu peint ;
// sans JavaScript ou en mouvement réduit, tout reste visible (voir CSS).
export function useReveal(key) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const limit = window.innerHeight * 0.92;
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < limit) node.classList.add('is-visible');
    });
    document.documentElement.classList.add('ecg-reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    nodes.forEach((node) => {
      if (!node.classList.contains('is-visible')) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [key]);
}
