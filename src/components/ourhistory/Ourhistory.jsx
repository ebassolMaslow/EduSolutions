import React from "react";
import classes from './Ourhistory.module.scss';
import historyimg from '../../assets/images/history.png'

const Ourhistory = () => {
    return (
        <div className={classes.Ourhistory__container}>
            <h3 className={classes.Ourhistory__title}>История нашей компании</h3>
            <div className={classes.Ourhistory__body}>
                <p className={classes.Ourhistory__text}>Прежде всего, повышение уровня
                    гражданского сознания требует определения и уточнения существующих
                    финансовых и административных условий! Таким образом, внедрение
                    современных методик предопределяет высокую востребованность
                    анализа существующих паттернов поведения. Сложно сказать,
                    почему реплицированные свершениям зарубежных источников, современные
                    исследования призывают нас к новым свершениям, которые,
                    в свою очередь, должны быть заблокированы в рамках
                    своих собственных рациональных ограничений.</p>
                <img src={historyimg} alt="История компании" />
            </div>
        </div>
    );
}

export default Ourhistory;