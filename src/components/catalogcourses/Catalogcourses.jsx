import React from "react";
import classes from './Catalogcourses.module.scss';
import Card from "../ui/cards/Card";
import python from '../../assets/images/python_icon.svg'
import Graph from '../../assets/images/graph_icon.svg'
import bd from '../../assets/images/1c-icon.svg'
import testingIcon from '../../assets/images/testing_engineer-icon.svg'
import js from '../../assets/images/js-icon.svg'
import wd from '../../assets/images/web_developer-icon.svg'
import search_icon from '../../assets/images/search_icon.svg'
import Searchbutton from "../ui/buttons/searchbutton/Searchbutton";


const Catalogcourses = () => {
    return (
        <div className={classes.Catalogcourses__background}>
            <h2 className={classes.Catalogcourses__title}>Каталогов курсов</h2>
            <div className={classes.Catalogcourses__search_button}>
                <Searchbutton search={{
                    photo: search_icon
                }} />
            </div>
            <div className={classes.Catalogcourses__div_courses}>
                <div className={classes.Catalogcourses__slider}>
                    <div className={classes.Catalogcourses__slider_line}>
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
                            color: '#D8ED54',
                            title: '1-C разработчик',
                            subtitle: '2 месяца',
                            photo: bd
                        }} />
                        <Card cards={{
                            color: '#B7B7BC',
                            title: 'Веб-разработчик',
                            subtitle: '3 месяца',
                            photo: wd
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalogcourses;