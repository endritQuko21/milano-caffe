import './Menu.css';
import { pizzas, drinks } from '../../data/menuData';

function Menu() {
  return (
    <section className="menu" id="carta">
      <div className="container">

        <div className="menu__intro">
          <p className="menu__eyebrow">Nuestra carta</p>

          <h2 className="menu__title">
            Sabores italianos elaborados artesanalmente
          </h2>

          <p className="menu__text">
            Una selección de pizzas artesanas, bebidas italianas y productos
            cuidadosamente seleccionados para disfrutar de una experiencia auténtica.
          </p>
        </div>

        <div className="menu__grid">

          <div className="menu__card">
            <div className="menu__card-header">
              <span className="menu__label">Pizzas</span>
              <h3 className="menu__heading">Especialidades</h3>
            </div>

            <div className="menu__items">
              {pizzas.map((pizza) => (
                <article className="menu__item" key={pizza.name}>
                  <div className="menu__item-top">
                    <h4 className="menu__item-name">{pizza.name}</h4>

                    <span className="menu__price">
                      {pizza.price}
                    </span>
                  </div>

                  <p className="menu__description">
                    {pizza.description}
                  </p>
                </article>
              ))}
            </div>
          </div>


          <div className="menu__card">
            <div className="menu__card-header">
              <span className="menu__label">Bebidas</span>
              <h3 className="menu__heading">Selección</h3>
            </div>

            <div className="menu__items">
              {drinks.map((drink) => (
                <article className="menu__item small" key={drink.name}>
                  <div className="menu__item-top">
                    <h4 className="menu__item-name">{drink.name}</h4>

                    <span className="menu__price">
                      {drink.price}
                    </span>
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