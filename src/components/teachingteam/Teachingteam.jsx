import React from "react";
import classes from './Teachingteam.module.scss';
import Teachercard from "./components/teachercard/Teachercard";
import teacher1 from '../../assets/images/teacher1.png'
import teacher2 from '../../assets/images/teacher2.png'
import teacher3 from '../../assets/images/teacher3.png'

const Teachingteam = () => {
    return (
        <>
            <h1 className={classes.Teachingteam__title}>Наши преподаватели — признанные эксперты</h1>
            <p className={classes.Teachingteam__subtitle}>Понятно объяснят материал на примерах из реальной жизни.</p>
            <Teachercard Tcard={{
                photo: teacher1,
                title: 'Настя Трешовна',
                text: 'Но сторонники тоталитаризма в науке являются только методом политического участия и описаны максимально подробно. ',
                subtitle: 'НИУ ВШЭ'
            }} />
            <Teachercard Tcard={{
                photo: teacher2,
                title: 'Андрей Добрый',
                text: 'Являясь всего лишь частью общей картины, базовые сценарии поведения пользователей лишь добавляют фракционных. ',
                subtitle: 'НИУ ВШЭ'
            }} />
            <Teachercard Tcard={{
                photo: teacher3,
                title: 'Миша Черепанов',
                text: 'Задача организации, в особенности же высокое качество позиционных исследований, а также свежий взгляд на привычные.',
                subtitle: 'НИУ ВШЭ'
            }} />
        </>
    );
}

export default Teachingteam;