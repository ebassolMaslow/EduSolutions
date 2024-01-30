import React from "react";
import classes from './CardProfile.module.scss';

const CardProfile = (props) => {
    return (
        <div className={classes.CardProfile__background} style={{ backgroundColor: props.cardsp.color }}>
            <div className={classes.CardProfile__container}>
                <div className={classes.CardProfile__left}>
                    <p className={classes.CardProfile__profession_text}>Профессия</p>
                    <p className={classes.CardProfile__profession_title}>{props.cardsp.title}</p>
                </div>
                <img className={classes.CardProfile__course_photo} src={props.cardsp.photo} alt="фото курса" />
            </div>
            <div className={classes.CardProfile__progress_bar}>
                <div className={classes.CardProfile__progress} style={{ width: '20%' }}>
                    <p className={classes.CardProfile__progress_text}>20% пройдено</p>
                </div>
            </div>
        </div>
    );
}

export default CardProfile;