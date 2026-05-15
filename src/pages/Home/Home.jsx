import './Home.css';
import Menu from '../../components/Menu/Menu';
import PanettoneForm from '../../components/PanettoneForm/PanettoneForm';
import { useI18n } from '../../i18n';

function Home() {
  const { t } = useI18n();
  const h = t.hero;
  const a = t.about;
  const p = t.panettone;
  const c = t.cta;
  const s = t.stats;

  return (
    <main className="home">

      {/* ── Hero ── */}
      <section id="inicio" className="hero">

        <div className="hero__left">
          <p className="hero__tag">{h.tag}</p>
          <h1 className="hero__title">
            {h.title1}<br />
            <em>{h.title2}</em>
            {h.title3}
          </h1>
          <p className="hero__desc">{h.desc}</p>
          <div className="hero__actions">
            <a href="tel:972612003" className="btn btn--gold">{h.cta1}</a>
            <a href="#conocenos" className="btn btn--ghost">{h.cta2}</a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__image" />
          <div className="hero__badge">
            <span className="hero__badge-num">+10</span>
            <span className="hero__badge-label">{h.badge}</span>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>

      </section>

      {/* ── Strip ── */}
      <div className="strip">
        <div className="container">
          <div className="strip__inner">
            {s.map(({ num, label }) => (
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
              <div className="about__photo-tag">{a.tag}</div>
            </div>

            <div className="about__content-col">
              <p className="about__eyebrow">{a.eyebrow}</p>
              <h2 className="about__title">
                {a.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="about__body">{a.body1}</p>
              <p className="about__body">{a.body2}</p>
              <ul className="about__list">
                {a.list.map((item) => (
                  <li className="about__list-item" key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Menú ── */}
      <section id="menu">
        <Menu />
      </section>

      {/* ── Panettone ── */}
      <section id="panettone" className="panettone">
        <div className="container">

          <div className="panettone__header">
            <div>
              <p className="panettone__eyebrow">{p.eyebrow}</p>
              <h2 className="panettone__title">
                {p.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
            </div>
            <p className="panettone__intro">{p.intro}</p>
          </div>

          <div className="panettone__varieties">
            {p.varieties.map(({ name, desc }, i) => (
              <div className="variety" key={name}>
                <span className="variety__num">0{i + 1}</span>
                <p className="variety__name">{name}</p>
                <p className="variety__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="panettone__process">
            <div className="panettone__process-hours">
              36–48<span>h</span>
            </div>
            <p className="panettone__process-text">{p.process}</p>
          </div>

          <PanettoneForm />

        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacto" className="cta-section">
        <div className="container">
          <p className="cta-section__eyebrow">{c.eyebrow}</p>
          <h2 className="cta-section__title">
            {c.title1}<br /><em>{c.title2}</em>
          </h2>
          <p className="cta-section__sub">{c.sub}</p>
          <div className="cta-section__row">
            <a href="tel:972612003" className="btn btn--gold">{c.btn}</a>
            <span className="cta-section__phone">972 61 20 03</span>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;