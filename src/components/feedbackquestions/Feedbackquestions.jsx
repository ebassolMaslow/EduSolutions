import React from "react";
import classes from './Feedbackquestions.module.scss';
import FeedbackQuestionsButton from "./components/feedbackquestionsbutton/FeedbackQuestionsButton";
import questions_help from "../../assets/images/questions_help.svg"


const Feedbackquestions = () => {
    return ( 
        <div className={classes.Feedbackquestions__container}>
            <div className={classes.Feedbackquestions__left}>
            <p className={classes.Feedbackquestions__text}>Если у вас остались вопросы — мы поможем</p>
            <FeedbackQuestionsButton />
            </div>
            <img className={classes.Feedbackquestions__img} src={questions_help} />
        </div>
     );
}
 
export default Feedbackquestions;