import React from "react";
import classes from './Peopleschoice.module.scss';


const Peopleschoice = () => {
    return (
        <div className={classes.Peopleschoice__container}>
            <h3 className={classes.Peopleschoice__title}>Почему выбирают образовательную платформу EduSolutions</h3>
            <div className={classes.Peopleschoice__statistic}>
                <p className={classes.Peopleschoice__statistic_title}>№1</p>
                <p className={`${classes.Peopleschoice__statistic_text} ${classes.Peopleschoice__statistic_textwo}`}>По качеству обучения по версии Chmart Banging</p>
                <p className={classes.Peopleschoice__statistic_title}>24/7</p>
                <p className={classes.Peopleschoice__statistic_text}>Учитесь с любым графиком из любой точки мира</p>
            </div>
            <div className={classes.Peopleschoice__statistic}>
                <p className={classes.Peopleschoice__statistic_title}>787</p>
                <p className={`${classes.Peopleschoice__statistic_text} ${classes.Peopleschoice__statistic_textwo}`}>Курсов: профессии, навыки, высшее образование и MBA</p>
                <p className={classes.Peopleschoice__statistic_title}>93%</p>
                <p className={classes.Peopleschoice__statistic_text}>Окончивших курс отмечают, что достигли своих целей
                </p>
            </div>
        </div>
    );
}

export default Peopleschoice;
