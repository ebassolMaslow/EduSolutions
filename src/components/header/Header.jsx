import React from "react";
import classes from './Header.module.scss';
import logoblack from './../../assets/images/logo_black.svg'
import profileimg from '../../assets/images/profile.svg'
import HeaderNav from "./components/headerNav/HeaderNav";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header__wrapper}>
            <div className={classes.header__logo}>
                <NavLink to="/" className={classes.header__link}>
                    <img className={classes.header__logo_img} src={logoblack} alt="Логотип" />
                </NavLink>
                <p className={classes.header__logo_text}>EduSolutions</p>
                <HeaderNav />
                <NavLink to="/Profile" className={classes.header__link}>
                    <img className={classes.header__profile_img} src={profileimg} alt="Профиль" />
                </NavLink>
            </div>
        </header>
    );
}

export default Header;