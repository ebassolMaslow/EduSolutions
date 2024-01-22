import React from "react";
import classes from './HeroCard.module.scss';

const HeroCard = (props) => {

    return (
        <div className={classes.hero__card}>
            <p className={classes.hero__textitle}>EduSolutions</p>
            <p className={classes.hero__text}>{props.services.title}</p>
        </div>
    );
}

export default HeroCard;