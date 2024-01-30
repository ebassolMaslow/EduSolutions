import React, { useEffect } from "react";
import classes from './Map.module.scss';
import { getMap } from "../../utils/helpers/getMap";

const Map = () => {
    useEffect(() => {
        const map = getMap()

        return () => map.remove()
    }, [])
    return (
        <div className={classes.map__container}>
            <div className={classes.map__wrapper}>
                <div id="map" className={classes.map__map}></div>
            </div>
            <div className={classes.map__text}>
                <p className={classes.map__title}>Телефон</p>
                <p className={classes.map__maintext}>+7 (990) 90-12-81</p>
                <p className={classes.map__title}>Адрес</p>
                <p className={classes.map__maintext}>ул. Павловская, д. 18, оф. 333, г. Москва, Морина, 134422, Мембрана</p>
                <p className={classes.map__title}>Почта</p>
                <p className={classes.map__maintext}>edusolutions@edu-solution.com</p>
            </div>
        </div>
    );
}

export default Map;