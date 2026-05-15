import { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../i18n';
import './Header.css';

const LANGS = [
  { code: 'es', label: 'ES', name: 'Castellano' },
  { code: 'ca', label: 'CA', name: 'Català' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'it', label: 'IT', name: 'Italiano' },
];

function Header() {
  const { t, lang, setLang } = useI18n();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('#inicio');
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const navLinks = [
    { label: t.nav.inicio,    href: '#inicio' },
    { label: t.nav.conocenos, href: '#conocenos' },
    { label: t.nav.carta,     href: '#menu' },
    { label: t.nav.panettone, href: '#panettone' },
    { label: t.nav.contacto,  href: '#contacto' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  const currentLang = LANGS.find((l) => l.code === lang);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>

      {/* Barra superior */}
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className="header__top-left">
              <span className="header__top-item">
                <span className="header__top-dot" />
                Avinguda de Palafrugell, 19 · Mont-ras
              </span>
              <span className="header__top-item">
                <span className="header__top-dot" />
                {t.header.horario}
              </span>
            </div>
            <div className="header__top-right">
              <a href="tel:972612003">972 61 20 03</a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <div className="header__main">
        <div className="container">
          <div className="header__inner">

            <a href="#inicio" className="header__logo" onClick={() => handleNavClick('#inicio')}>
              <span className="header__logo-name">Milano Caffè</span>
              <span className="header__logo-sub">
                Pizza <span className="header__logo-sep">·</span> Panettone <span className="header__logo-sep">·</span> Girona
              </span>
            </a>

            <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`header__nav-link${active === href ? ' active' : ''}`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="header__right">

              {/* Selector de idioma */}
              <div className="lang-switcher" ref={langRef}>
                <button
                  className={`lang-switcher__btn${langOpen ? ' open' : ''}`}
                  onClick={() => setLangOpen(!langOpen)}
                  aria-label="Cambiar idioma"
                >
                  <span className="lang-switcher__current">{currentLang.label}</span>
                  <svg className="lang-switcher__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </button>

                {langOpen && (
                  <ul className="lang-switcher__dropdown">
                    {LANGS.map(({ code, label, name }) => (
                      <li key={code}>
                        <button
                          className={`lang-switcher__option${lang === code ? ' active' : ''}`}
                          onClick={() => { setLang(code); setLangOpen(false); }}
                        >
                          <span className="lang-switcher__option-code">{label}</span>
                          <span className="lang-switcher__option-name">{name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a href="tel:972612003" className="header__cta">
                {t.nav.reservar}
              </a>

            </div>

            <button
              className={`header__toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <span /><span /><span />
            </button>

          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;