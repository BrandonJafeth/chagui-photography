import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface NavLink {
  href: string;
  label: string;
}

interface NavbarMobileProps {
  navLinks: NavLink[];
  currentPath: string;
}

export default function NavbarMobile({ navLinks, currentPath }: NavbarMobileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setIsOpen(false); }, [currentPath]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const closeIfDesktop = (e: MediaQueryListEvent) => { if (e.matches) setIsOpen(false); };
    mq.addEventListener('change', closeIfDesktop);
    return () => mq.removeEventListener('change', closeIfDesktop);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const menuContent = (
    <div
      className={`fixed inset-0 bg-black z-50 flex flex-col transition-opacity duration-500 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-5 pb-5">
        <a
          href="/"
          onClick={closeMenu}
          className="text-[0.6rem] uppercase tracking-[0.35em] text-white/55 hover:text-white/75 transition-colors duration-200"
        >
          Photographic Chagui
        </a>
        <button
          onClick={closeMenu}
          className="w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Cerrar menú"
          type="button"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mx-6 h-px bg-white/8" aria-hidden="true" />

      {/* Nav links */}
      <nav className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-1">
        {navLinks.map((link, index) => {
          const isActive = currentPath === link.href ||
            (link.href !== '/' && currentPath.startsWith(link.href.replace('/#', '/')));

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive ? 'page' : undefined}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(2.4rem, 11vw, 3.5rem)',
                lineHeight: '1.2',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.35s ease ${isOpen ? index * 0.07 : 0}s, transform 0.35s ease ${isOpen ? index * 0.07 : 0}s`,
              }}
              className={`block py-2 text-center transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-white/65 hover:text-white'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="block mt-1 w-5 h-px bg-white/35 mx-auto" aria-hidden="true" />
              )}
            </a>
          );
        })}
      </nav>

      <div className="mx-6 h-px bg-white/8" aria-hidden="true" />

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-6 py-5">
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/50">
          San José · Costa Rica
        </p>
        <a
          href="https://wa.me/50685546933"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/55 hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="relative w-12 h-12 flex items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-white"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        type="button"
      >
        <div className="w-5 flex flex-col items-end justify-center gap-1.25">
          <span
            className={`h-px bg-white transition-all duration-300 ease-out ${
              isOpen ? 'w-5 rotate-45 translate-y-1.5' : 'w-5'
            }`}
          />
          <span
            className={`h-px bg-white transition-all duration-200 ${
              isOpen ? 'opacity-0 w-0' : 'opacity-100 w-3'
            }`}
          />
          <span
            className={`h-px bg-white transition-all duration-300 ease-out ${
              isOpen ? 'w-5 -rotate-45 -translate-y-1.5' : 'w-5'
            }`}
          />
        </div>
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(menuContent, document.body)}
    </>
  );
}
