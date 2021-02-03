import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import cls from "classnames";

const Navigation: React.FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onSelected = useCallback(() => setIsActive(false), []);

  return (
    <nav
      className="navbar level is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/" onClick={onSelected}>
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
          <a className="navbar-item" onClick={onSelected}>
            <Link to={"/"}>Меню</Link>
          </a>
          <a className="navbar-item" onClick={onSelected}>
            <Link to={"/contacts"}>Контакти</Link>
          </a>
          <a className="navbar-item" onClick={onSelected}>
            <Link to={"/instagram"}>Інстаграм</Link>
          </a>
          <div className=" navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" onClick={onSelected}>
              Більше
            </a>
            <div className="navbar-dropdown">
              <a className="navbar-item" onClick={onSelected}>
                Про нас
              </a>
              <a className="navbar-item" onClick={onSelected}>
                Робота
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" onClick={onSelected}>
                Зворотній звязок
              </a>
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
