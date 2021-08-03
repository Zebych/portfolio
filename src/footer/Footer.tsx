import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/titel/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Alexandr Zabirov'} />
                <div>

                </div>
                <footer>Все права защищены</footer>
            </div>

        </div>
    );
};

export default Footer;