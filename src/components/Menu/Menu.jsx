import './Menu.css';
import { useI18n } from '../../i18n';

function Menu() {
  const { t } = useI18n();
  const m = t.menu;

  return (
    <section className="menu" id="carta">
      <div className="container">

        <div className="menu__intro">
          <div>
            <p className="menu__eyebrow">{m.eyebrow}</p>
            <h2 className="menu__title">{m.title}</h2>
          </div>
          <p className="menu__text">{m.text}</p>
        </div>

        <div className="menu__grid">

          <div className="menu__card">
            <div className="menu__card-header">
              <span className="menu__label">{m.pizzasLabel}</span>
              <h3 className="menu__heading">{m.pizzasHeading}</h3>
            </div>
            <div className="menu__items">
              {m.pizzas.map((pizza) => (
                <article className="menu__item" key={pizza.name}>
                  <div className="menu__item-top">
                    <h4 className="menu__item-name">{pizza.name}</h4>
                    <span className="menu__item-dots" aria-hidden="true" />
                    <span className="menu__price">{pizza.price}</span>
                  </div>
                  <p className="menu__description">{pizza.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="menu__card">
            <div className="menu__card-header">
              <span className="menu__label">{m.bebidasLabel}</span>
              <h3 className="menu__heading">{m.bebidasHeading}</h3>
            </div>
            <div className="menu__items">
              {m.bebidas.map((drink) => (
                <article className="menu__item small" key={drink.name}>
                  <div className="menu__item-top">
                    <h4 className="menu__item-name">{drink.name}</h4>
                    <span className="menu__item-dots" aria-hidden="true" />
                    <span className="menu__price">{drink.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Menu;