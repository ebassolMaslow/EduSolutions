import React from "react";
import classes from './Partners.module.scss';
import forchan from '../../assets/images/forchan.svg'
import Odnoklassniki from '../../assets/images/Odnoklassniki.svg'
import twitter from '../../assets/images/twitter.svg'
import snapchat from '../../assets/images/snapchat.svg'

const Partners = () => {
    return (
        <>
            <h2 className={classes.Partners__title}>Сотрудничаем с ведущими компаниями</h2>
            <p className={classes.Partners__subtitle}>Собираем лучшие вакансии в отрасли, готовим к интервью и рекомендуем вас компаниям-партнёрам.
            </p>
            <div className={classes.Partners__div_partners}>
                <div className={classes.Partners__div_partners_top}>
                    <a className={classes.Partners__img}><img src={forchan} alt="партнёр" />forchan</a>
                    <a className={classes.Partners__img}><img src={Odnoklassniki} alt="партнёр" />Odnoklassniki</a>
                </div>
                <div className={classes.Partners__div_partners_bottom}>
                    <a className={classes.Partners__img}><img src={twitter} alt="партнёр" />twitter</a>
                    <a className={classes.Partners__img}><img src={snapchat} alt="партнёр" />snapchat</a>
                </div>
            </div>
        </>
    );
}

export default Partners;