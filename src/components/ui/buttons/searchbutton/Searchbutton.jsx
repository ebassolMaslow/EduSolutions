import React from "react";
import classes from './Searchbutton.module.scss';

const Searchbutton = (props) => {
    return (
        <div className={classes.Searchbutton__body_search_courses}>
            <button type="submit">
                <img src={props.search.photo} alt="Иконка поиска" />
            </button>
            <input type="text" placeholder="Поиск по курсам" className={classes.Searchbutton__search_input} />
        </div>
    );
}

export default Searchbutton;