import React from "react";
import classes from './Footer.module.scss';
import logo from '../../assets/images/logo_white.svg'
import FooterNav from "./components/footerNav/FooterNav";


const Footer = () => {
    return (
        <footer className={classes.Footer__wrapper}>
            <a href="#!" className={classes.Footer__logo}><img className={classes.Footer__logo_img} src={logo} alt="#" />EduSolutions</a>
            <FooterNav />
        </footer>
    );
}

export default Footer;