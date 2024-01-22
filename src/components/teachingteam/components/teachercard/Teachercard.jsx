import React from "react";
import classes from './Teachercard.module.scss';

const Teachercard = (props) => {
    return (
        <div className={classes.Teachercard__body}>
            <img className={classes.Teachercard__img} src={props.Tcard.photo} alt="фото учителя" />
            <div className={classes.Teachercard__text_body}>
                <p className={classes.Teachercard__text_title}>{props.Tcard.title}</p>
                <p className={classes.Teachercard__text}>{props.Tcard.text}</p>
                <p className={classes.Teachercard__text_subtitle}>{props.Tcard.subtitle}</p>
            </div>
        </div>
    );
}

export default Teachercard;