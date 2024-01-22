import React from "react";
import classes from './HeaderNav.module.scss';

import { NavLink } from "react-router-dom";


const HeaderNav = () => {
    return (
        <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                <li className={classes.header__menu_item}>
                    <NavLink to="/About" className={classes.header__link}>
                        О нас
                    </NavLink>
                </li>
                <li className={classes.header__menu_item}>
                    <NavLink to="/Courses" className={classes.header__link}>
                        курсы и товары
                    </NavLink>
                </li>
                <li className={classes.header__menu_item}>
                    <NavLink to="/Contacts" className={classes.header__link}>
                        обратная связь и адреса
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;