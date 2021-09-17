import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/title/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Alexandr Zabirov'} />
                <div className={style.boxBlock}>
                    <div className={style.box}>box</div>
                    <div className={style.box}>box</div>
                    <div className={style.box}>box</div>
                    <div className={style.box}>box</div>
                </div>
                <footer className={style.rights}>Все права защищены</footer>
            </div>

        </div>
    );
};

export default Footer;