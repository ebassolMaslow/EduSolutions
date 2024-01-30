
import React from "react";
import classes from './Helpform.module.scss';
import FeedbackBtn from "./components/feedback_btn/FeedbackBtn";

const Helpform = () => {
    return (
        <>
            <h1 className={classes.Helpform__title}>Остались вопросы?</h1>
            <form className={classes.Helpform__feedback_form}>
                <div className={classes.Helpform__form_group}>
                    <input className={classes.Helpform__form_input_feedback} type="text" id="name" name="name" required placeholder="Имя пользователя" />
                </div>
                <div className={classes.Helpform__form_group}>
                    <input className={classes.Helpform__form_input_feedback} type="email" id="email" name="email" required placeholder="email"/>
                </div>
                <div className={classes.Helpform__form_group}>
                    <textarea className={classes.Helpform__form_textarea_feedback} id="question" name="question" rows="9" required placeholder="Ваш вопрос"></textarea>
                </div>
                <FeedbackBtn />
                <div className={classes.Helpform__checkbox_group}>
                    <input type="checkbox" id="agree" name="agree" required className={classes.Helpform__checkbox}/>
                    <label className={classes.Helpform__checkbox_text} for="agree">Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой.</label>
                </div>
            </form>

        </>
    );
}

export default Helpform;