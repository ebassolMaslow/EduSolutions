import React from "react";
import classes from './FeedbackBtn.module.scss';

const FeedbackBtn = () => {
    return ( 
        <button type="submit" className={classes.FeedbackBtn__feedback_btn}>Задать вопрос</button>
     );
}
 
export default FeedbackBtn;