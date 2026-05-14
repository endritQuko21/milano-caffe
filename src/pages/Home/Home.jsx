import './Home.css';
import Menu from '../../components/Menu/Menu';
import PanettoneForm from '../../components/PanettoneForm/PanettoneForm';

const varieties = [
  {
    name: 'Chocolate',
    desc: 'Relleno de chocolate negro 70%, intenso y equilibrado.',
  },
  {
    name: 'Chocolate\n& Naranja',
    desc: 'La combinación italiana por excelencia. Cítrico con fondo achocolatado.',
  },
  {
    name: 'Milka',
    desc: 'Chocolate con leche suave y cremoso para los más golosos.',
  },
  {
    name: 'Fruta',
    desc: 'Frutas confitadas tradicionales. La receta original de Milán.',
  },
];

const stats = [
  { num: '+10', label: 'Años abiertos' },
  { num: '100%', label: 'Ingredientes italianos' },
  { num: '48h', label: 'Fermentación mínima' },
  { num: '4', label: 'Variedades de panettone' },
];

function Home() {
  return (
    <main className="home">

      {/* ── Hero ── */}
      <section id="inicio" className="hero">

        <div className="hero__left">
          <p className="hero__tag">Mont-ras · Girona · Desde 2015</p>

          <h1 className="hero__title">
            Pizza<br /><em>artesanal</em>italiana
          </h1>

          <p className="hero__desc">
            Masa de fermentación lenta, ingredientes seleccionados
            directamente de Italia y un horno de leña que hace el resto.
            Una pizzería familiar en el corazón del Baix Empordà.
          </p>

          <div className="hero__actions">
            <a href="tel:972612003" className="btn btn--gold">
              Reservar mesa
            </a>
            <a href="#conocenos" className="btn btn--ghost">
              Conócenos
            </a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__image" />
          <div className="hero__badge">
            <span className="hero__badge-num">+10</span>
            <span className="hero__badge-label">Años de historia</span>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>

      </section>

      {/* ── Strip números ── */}
      <div className="strip">
        <div className="container">
          <div className="strip__inner">
            {stats.map(({ num, label }) => (
              <div className="strip__item" key={label}>
                <span className="strip__num">{num}</span>
                <span className="strip__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Conócenos ── */}
      <section id="conocenos" className="about">
        <div className="container">
          <div className="about__grid">

            <div className="about__image-col">
              <div className="about__photo" />
              <div className="about__photo-tag">Mont-ras, Girona</div>
            </div>

            <div className="about__content-col">
              <p className="about__eyebrow">Conócenos</p>
              <h2 className="about__title">
                Una pequeña<br />gran familia italiana
              </h2>
              <p className="about__body">
                En Milano Caffè nuestra especialidad son las pizzas y panettones
                artesanos. La minuciosa selección de ingredientes italianos es
                el eje de nuestra cocina.
              </p>
              <p className="about__body">
                Desde 2015 somos un espacio acogedor donde cuidamos cada
                detalle para que te sientas como en casa. Un equipo unido
                con una sola obsesión: el sabor.
              </p>
              <ul className="about__list">
                <li className="about__list-item">Ingredientes importados directamente de Italia</li>
                <li className="about__list-item">Masas de fermentación lenta en frío</li>
                <li className="about__list-item">Panettones elaborados bajo encargo</li>
                <li className="about__list-item">Ambiente familiar, cocina honesta</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section id="menu" className="panettone">
        <div className="container">
        <Menu />
        </div>
      </section>

      {/* ── Panettone ── */}
      <section id="panettone" className="panettone">
        <div className="container">

          <div className="panettone__header">
            <div>
              <p className="panettone__eyebrow">Especialidad</p>
              <h2 className="panettone__title">
                Panettone<br />artesanal italiano
              </h2>
            </div>
            <p className="panettone__intro">
              Elaborado con masa madre y fermentaciones largas.
              Ingredientes de máxima calidad, sin aditivos, con la
              textura y el aroma del panettone de toda la vida.
              Disponible bajo pedido en temporada.
            </p>
          </div>

          <div className="panettone__varieties">
            {varieties.map(({ name, desc }, i) => (
              <div className="variety" key={name}>
                <span className="variety__num">0{i + 1}</span>
                <p className="variety__name">{name}</p>
                <p className="variety__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="panettone__process">
            <div className="panettone__process-hours">
              36–48<span>horas</span>
            </div>
            <p className="panettone__process-text">
              La masa se prepara con levadura madre que reposa toda la noche
              a temperatura constante. Una vez horneado, necesita dos horas
              más de reposo para conseguir esa textura tan característica.
              No hay atajos: solo tiempo y cariño.
            </p>
          </div>

          <PanettoneForm />

        </div>
      </section>

      {/* ── CTA contacto ── */}
      <section id="contacto" className="cta-section">
        <div className="container">
          <p className="cta-section__eyebrow">Reserva</p>
          <h2 className="cta-section__title">
            ¿Vienes a<br /><em>cenar con nosotros?</em>
          </h2>
          <p className="cta-section__sub">
            Llámanos para reservar mesa o para hacer tu pedido
            de panettone artesanal. Estaremos encantados.
          </p>
          <div className="cta-section__row">
            <a href="tel:972612003" className="btn btn--gold">
              Llamar ahora
            </a>
            <span className="cta-section__phone">972 61 20 03</span>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;