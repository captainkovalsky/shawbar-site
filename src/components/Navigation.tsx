import React, { useState } from "react";
import { Link } from "react-router-dom";

import cls from "classnames";

const Navigation: React.FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav
      className="navbar level is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="Logo180.png" />
        </a>
        <a
          role="button"
          onClick={() => setIsActive(!isActive)}
          className={cls("navbar-burger", { "is-active": isActive })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={cls("navbar-menu", { "is-active": isActive })}
      >
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to={"/"}>Меню</Link>
          </a>
          <a className="navbar-item">
            <Link to={"/contacts"}>Контакти</Link>
          </a>
          <a className="navbar-item">
            <Link to={"/instagram"}></Link>Інстаграм
          </a>
          <div className=" navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Більше</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Про нас</a>
              <a className="navbar-item">Робота</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Зворотній звязок</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Корзина</strong>
              </a>
              <a className=" button is-light">Увійти</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
