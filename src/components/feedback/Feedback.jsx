import React from "react";
import classes from './Feedback.module.scss';
import FeedbackCard from "./components/feedbackCard/FeedbackCard";
import feedback1 from '../../assets/images/feedback1.png'
import feedback2 from '../../assets/images/feedback2.png'
import feedback3 from '../../assets/images/feedback3.png'



const Feedback = () => {
    return (
        <div className={classes.Feedback__main_container}>
            <h3 className={classes.Feedback__title}>Отзывы</h3>
            <div className={classes.Feedback__container}>
                <FeedbackCard feedback={{
                    photo: feedback1,
                    title: "Александр",
                    subtitle: "Начальник отдела мемологии",
                    maintext: "С помощью этава онлайн сервиса я стал ведущим разрабочиком рта 6, теперь мне будут зарабатывать миллиарды денег на разработку игры спасибо еду солюшинз за возможности"
                }} />
                <FeedbackCard feedback={{
                    photo: feedback2,
                    title: "Наталья",
                    subtitle: "Профессиональная актриса белого кино",
                    maintext: "С помощью этава онлайн сервиса я стал ведущим разрабочиком рта 6, теперь мне будут зарабатывать миллиарды денег на разработку игры спасибо еду солюшинз за возможности"
                }} />
                <FeedbackCard feedback={{
                    photo: feedback3,
                    title: "Александр",
                    subtitle: "Грузчица высшего разряда",
                    maintext: "С помощью этава онлайн сервиса я стал ведущим разрабочиком рта 6, теперь мне будут зарабатывать миллиарды денег на разработку игры спасибо еду солюшинз за возможности"
                }} />
            </div>
        </div>
    );
}

export default Feedback;