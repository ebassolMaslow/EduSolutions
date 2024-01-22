import React from "react";
import classes from './TakeCourseButton.module.scss';

const TakeCourseButton = ({children, ...props}) => {
    return ( 
        <button className={classes.TakeCourseButton}{...props}>{children}</button>
     );
    
}
 
export default TakeCourseButton;