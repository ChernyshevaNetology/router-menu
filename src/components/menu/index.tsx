import React from "react";
import { NavLink } from "react-router-dom";
import cn from 'classnames';

interface INavLinks {
  title: string;
  path: string;
}

interface IActiveClass {
  isActive: boolean;
}

const navLinks: INavLinks[] = [
  { title: "Главная", path: "/" },
  { title: "Дрифт-такси", path: "/drift" },
  { title: "Time Attack", path: "/timeattack" },
  { title: "Forza Karting", path: "/forza" },
];

const Menu = () => {
  return (
    <nav className="menu">
      {navLinks.map(({ title, path }) => (
        <NavLink key={path} to={path} className={'menu__item'} >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export { Menu };
