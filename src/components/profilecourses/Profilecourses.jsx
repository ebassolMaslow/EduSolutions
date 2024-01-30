import React from "react";
import classes from './Profilecourses.module.scss';
import SearchBtnBlack from "./components/Searchbtnblack/SearchBtnBlack";
import search_icon_black from '../../assets/images/search_icon_black.svg'
import python from '../../assets/images/python_icon.svg'
import CardProfile from "../ui/cards/CardProfile";
import Graph from '../../assets/images/graph_icon.svg'
import testingIcon from '../../assets/images/testing_engineer-icon.svg'


const Profilecourses = () => {
    return (
        <>
            <h2 className={classes.Profilecourses__title}>Ваши курсы</h2>
            <div className={classes.Profilecourses__div_search}>
                <SearchBtnBlack search={{
                    photo: search_icon_black
                }} />
            </div>
            <div className={classes.Profilecourses__background}>
                <div className={classes.Profilecourses__body}>
                    <CardProfile cardsp={{
                        color: '#48E048',
                        title: 'Python-разработчик',
                        photo: python
                    }} />
                    <CardProfile cardsp={{
                        color: '#F46E5C',
                        title: 'Графический дизайнер',
                        photo: Graph
                    }} />
                    <CardProfile cardsp={{
                        color: '#586EE1',
                        title: 'Инженер по тестированию',
                        photo: testingIcon
                    }} />

                </div>
            </div>
        </>
    );
}

export default Profilecourses;