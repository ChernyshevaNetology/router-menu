import React from "react";
import { NavLink } from "react-router-dom";

interface INavLinks {
  title: string;
  path: string;
}

interface IActiveClass {
  isActive: boolean;
}

const Menu = () => {
  const linkClasses: string[] = ["menu__item", "menu__item-active"];
  const navLinks: INavLinks[] = [
    { title: "Главная", path: "/" },
    { title: "Дрифт-такси", path: "/drift" },
    { title: "Time Attack", path: "/timeattack" },
    { title: "Forza Karting", path: "/forza" },
  ];
  const setActive = ({ isActive }: IActiveClass): string => {
    return isActive ? linkClasses.join(" ") : linkClasses[0];
  };

  return (
    <nav className="menu">
      {navLinks.map(({ title, path }) => (
        <NavLink key={path} className={setActive} to={path}>
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export { Menu };
