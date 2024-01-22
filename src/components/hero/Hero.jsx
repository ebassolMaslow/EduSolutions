import React from "react";
import TakeCourseButton from "./components/takeCourseButton/takeCourseButton";
import classes from './Hero.module.scss';
import Herocard from "./components/heroCard/HeroCard";

const Hero = () => {
    return (
        <div>
            <h1 className={classes.hero__title}>Учиться может каждый <span>вообще любой</span></h1>
            <p className={classes.hero__subtitle}>Образовательная платформа и маркетплейс онлайн-курсов</p>
            <TakeCourseButton>Пройти курс</TakeCourseButton>
            <div className={classes.hero__div_cards}>
                <Herocard services={{
                    title: 'Онлайн Консалтинг'
                }} />
                <Herocard services={{
                    title: 'Платформы обучения'
                }} />
                <Herocard services={{
                    title: 'Онлайн курсы'
                }} />
            </div>
        </div>
    );
}

export default Hero;