import React from "react";
import classes from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={classes.Card__background} style={{ backgroundColor: props.cards.color }}>
            <div className={classes.Card__container}>
                <div className={classes.Card__left}>
                    <p className={classes.Card__profession_text}>Профессия</p>
                    <p className={classes.Card__profession_title}>{props.cards.title}</p>
                    <p className={classes.Card__profession_months}>{props.cards.subtitle}</p>
                </div>
                <img className={classes.Card__course_photo} src={props.cards.photo} alt="фото курса" />
            </div>
        </div>
    );
}

export default Card;