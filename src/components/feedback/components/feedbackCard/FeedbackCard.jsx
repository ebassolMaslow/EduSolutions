import React from "react";
import classes from './FeedbackCard.module.scss';

const FeedbackCard = (props) => {
    return (
        <div className={classes.FeedbackCard__container}>
            <div className={classes.FeedbackCard__div_feedback_title}>
                <img className={classes.FeedbackCard__photo} src={props.feedback.photo} alt="аватар пользователя в отзыве" />
                <div className={classes.FeedbackCard__div_feedback_title_text}>
                    <p className={classes.FeedbackCard__feedback_title_text}>{props.feedback.title}</p>
                    <p className={classes.FeedbackCard__feedback_subtitle_text}>{props.feedback.subtitle}</p>
                </div>
            </div>
            <p className={classes.FeedbackCard__feedback_text_body}>{props.feedback.maintext}</p>
        </div>
    );
}

export default FeedbackCard;