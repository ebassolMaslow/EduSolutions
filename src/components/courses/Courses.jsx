import React, { useState } from "react";
import classes from './Courses.module.scss';
import PrevButton from "../ui/buttons/PrevButton";
import NextButton from "../ui/buttons/NextButton";
import Card from "../ui/cards/Card";
import python from '../../assets/images/python_icon.svg'
import Graph from '../../assets/images/graph_icon.svg'
import bd from '../../assets/images/1c-icon.svg'
import testingIcon from '../../assets/images/testing_engineer-icon.svg'
import js from '../../assets/images/js-icon.svg'
import wd from '../../assets/images/web_developer-icon.svg'
import CourseButton from "../ui/buttons/CourseButton";

const Courses = () => {

    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 660;
        if (newOffset < 0) newOffset = 2644;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 660;
        if (newOffset > 3000) newOffset = 0;
        setOffset(newOffset);

    }

    return (
        <div className={classes.courses__background}>
            <h2 className={classes.courses__title}>IT-профессии с высокими зарплатами</h2>
            <div className={classes.courses__div_courses}>
                <PrevButton onClick={goPrev} />
                <div className={classes.courses__slider}>
                    <div className={classes.courses__slider_line} style={{ left: -offset + "px" }}>
                        <Card cards={{
                            color: '#48E048',
                            title: 'Python-разработчик',
                            subtitle: '4 месяца',
                            photo: python
                        }} />
                        <Card cards={{
                            color: '#F46E5C',
                            title: 'Графический дизайнер',
                            subtitle: '6 месяцев',
                            photo: Graph
                        }} />
                        <Card cards={{
                            color: '#D8ED54',
                            title: '1-C разработчик',
                            subtitle: '2 месяца',
                            photo: bd
                        }} />
                        <Card cards={{
                            color: '#586EE1',
                            title: 'Инженер по тестированию',
                            subtitle: '5 месяцев',
                            photo: testingIcon
                        }} />
                        <Card cards={{
                            color: '#F1C041',
                            title: 'Java-разработчик',
                            subtitle: '9 месяцев',
                            photo: js
                        }} />
                        <Card cards={{
                            color: '#B7B7BC',
                            title: 'Веб-разработчик',
                            subtitle: '3 месяца',
                            photo: wd
                        }} />
                    </div>
                </div>
                <NextButton onClick={goNext} />
            </div>
            <CourseButton button={{
                title: 'Пройти курс'
            }} />
        </div>

    );
}

export default Courses;