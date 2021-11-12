import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/title/Title";
import telegramImage from "../assets/image/Telegram-logo.png";
import vkImage from "../assets/image/192px-Vk_Logo.svg.png";
import linkedinImage from "../assets/image/free-icon-linkedin-174857.png";
import {Box} from "./box/Box";

const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Alex Zabirov'}/>
                <div className={style.rights}>+7 999 522 19 03</div>
                <div className={style.boxBlock}>
                    <Box icon={linkedinImage} link={'https://www.linkedin.com/in/alex-zabirov-6374ab218/'}/>
                    <Box icon={telegramImage} link={'https://t.me/AlexZabirov'}/>
                    <Box icon={vkImage} link={'https://vk.com/ip5084116'}/>
                </div>

            </div>
        </footer>
    );
};


export default Footer;