import React from "react";
import classes from './CourseButton.module.scss';

const CourseButton = (props) => {
    return ( 
    <button className={classes.CourseButton__button}>{props.button.title}</button>
        );
}
 
export default CourseButton;