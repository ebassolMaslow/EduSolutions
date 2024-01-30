import React from "react";
import classes from './Personaldata.module.scss';

const Personaldata = () => {
    return (
        <>
            <h1 className={classes.Personaldata__title}>Ваши данные?</h1>
            <form className={classes.Personaldata__feedback_form}>
                <div className={classes.Personaldata__div_data}>
                    <div className={classes.Personaldata__data}>
                        <input className={classes.Personaldata__form_input_feedback} type="text" id="name" name="name" required placeholder="Ваше имя" value="Александр"/>
                        <input className={classes.Personaldata__form_input_feedback} type="text" id="surname" name="surname" required placeholder="Ваша фамилия" value="Масликов"/>
                        <input className={classes.Personaldata__form_input_feedback} type="email" id="email" name="email" required placeholder="email" value="isip_a.yu.maslikov@mpt.ru"/>
                        <input className={classes.Personaldata__form_input_feedback} type="password" id="password" name="password" required placeholder="введите пароль" value="12345678"/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Personaldata;