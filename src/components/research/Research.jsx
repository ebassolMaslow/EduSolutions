import React from "react";
import classes from './Research.module.scss';
import ResearchWatchButton from "./components/researchWatchButton/researchWatchButton";
import research from "../../assets/images/research.svg"

const Research = () => {
    return (
        <div className={classes.Research__container}>
            <div className={classes.Research__div_research}>
            <p className={classes.Research__title}>Исследование НИУ ВШЭ</p>
            <p className={classes.Research__text}>93% выпускников считают - EduSolutions помог достичь цели</p>
            <ResearchWatchButton />
            </div>
            <img className={classes.Research__img} src={research} />
        </div>
    );
}

export default Research;