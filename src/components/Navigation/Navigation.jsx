import css from "./Navigation.module.css"
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink className={buildLinkClass} to="/">Home</NavLink>
                <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
            </nav>
        </header>
    )
}