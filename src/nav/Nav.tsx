import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss'
// import {PATH} from "./Routes";

const Nav = () => {
    return (
        <div className={style.header}>
            {/*<a href="" className={style.link} activeClassName={style.active}>Главная</a>*/}
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
            <div className={style.block}/>
            {/*<NavLink to={PATH.JUNIOR_PLUS} className={style.link} activeClassName={style.active}>JUNIOR+</NavLink>*/}
        </div>
    );
};

export default Nav;