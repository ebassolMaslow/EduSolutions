import React from "react";
import classes from './FooterNav.module.scss';

const FooterNav = () => {
    return (
        <nav>
            <nav className={classes.FooterNav__nav}>
                <ul className={classes.FooterNav__menu_column}>
                    <li className={classes.FooterNav__menu_item_first}>
                        <a className={classes.FooterNav__link_first} href="#">О нас</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">О нас</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">Наши курсы</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">Личный кабинет</a>
                    </li>
                </ul>
                <ul className={classes.FooterNav__menu_column}>
                    <li className={classes.FooterNav__menu_item_first}>
                        <a className={classes.FooterNav__link_first} href="#">контакты</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">помощь</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">команда</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">контакты</a>
                    </li>
                </ul>
                <ul className={classes.FooterNav__menu_column}>
                    <li className={classes.FooterNav__menu_item_first}>
                        <a className={classes.FooterNav__link_first} href="#">мы в сети</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">Вконтакте</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">Телеграм</a>
                    </li>
                    <li className={classes.FooterNav__menu_item}>
                        <a className={classes.FooterNav__link} href="#">Дискорд</a>
                    </li>
                </ul>
            </nav>
        </nav >
    );
}

export default FooterNav;