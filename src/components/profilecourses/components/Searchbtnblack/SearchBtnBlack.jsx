import React from "react";
import classes from './SearchBtnBlack.module.scss';

const SearchBtnBlack = (props) => {
    return (
        <div className={classes.SearchBtnBlack__body_search_courses}>
            <button type="submit">
                <img src={props.search.photo} alt="Иконка поиска" />
            </button>
            <input type="text" placeholder="Поиск по курсам" className={classes.SearchBtnBlack__search_input} />
        </div>
    );
}

export default SearchBtnBlack;