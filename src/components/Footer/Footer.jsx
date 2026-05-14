import './Footer.css';

const schedule = [
  { day: 'Lunes',     hours: 'Cerrado',       closed: true },
  { day: 'Martes',    hours: '19:00 – 23:00' },
  { day: 'Miércoles', hours: '19:00 – 23:00' },
  { day: 'Jueves',    hours: '19:00 – 23:00' },
  { day: 'Viernes',   hours: '19:00 – 23:00' },
  { day: 'Sábado',    hours: '19:00 – 23:00' },
  { day: 'Domingo',   hours: '19:00 – 23:00' },
];

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Conócenos', href: '#conocenos' },
  { label: 'Panettone', href: '#panettone' },
  { label: 'Contacto',  href: '#contacto' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Bloque marca ── */}
        <div className="footer__hero">
          <div>
            <p className="footer__brand-name">
              Milano <em>Caffè</em>
            </p>
            <p className="footer__brand-sub">
              Pizza · Panettone · Mont-ras, Girona
            </p>
          </div>
          <div className="footer__social">
            <span className="footer__social-label">Síguenos</span>
            <a
              href="https://www.instagram.com/milanocaffe2015/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Pizzeriamilanocaffe"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* ── Grid info ── */}
        <div className="footer__grid">

          {/* Horario */}
          <div className="footer__col">
            <p className="footer__col-title">Horario</p>
            <ul className="footer__schedule">
              {schedule.map(({ day, hours, closed }) => (
                <li key={day} className={`footer__schedule-row${closed ? ' closed' : ''}`}>
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer__col">
            <p className="footer__col-title">Contacto</p>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-label">Dirección</span>
                <span className="footer__contact-value">
                  Avinguda de Palafrugell, 19<br />
                  17253 Mont-ras, Girona
                </span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">Teléfono</span>
                <span className="footer__contact-value">
                  <a href="tel:972612003">972 61 20 03</a>
                </span>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">Email</span>
                <span className="footer__contact-value">
                  <a href="mailto:milanocaffe2015@gmail.com">
                    milanocaffe2015@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Navegación */}
          <div className="footer__col">
            <p className="footer__col-title">Navegación</p>
            <ul className="footer__nav-list">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="footer__nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom ── */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Milano Caffè · Todos los derechos reservados
          </span>
          <span className="footer__made">
            Mont-ras, Girona
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;