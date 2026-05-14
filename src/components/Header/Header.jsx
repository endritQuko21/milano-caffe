import { useState, useEffect } from 'react';
import './Header.css';

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Conócenos', href: '#conocenos' },
  { label: 'La Carta',  href: '#menu' },
  { label: 'Panettone', href: '#panettone' },
  { label: 'Contacto',  href: '#contacto' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('#inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

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
                Mar–Dom · 19:00–23:00
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
                Pizza <span className="header__logo-sep">·</span> Panettone <span className="header__logo-sep">·</span>
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
              <a href="tel:972612003" className="header__cta">
                Reservar
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