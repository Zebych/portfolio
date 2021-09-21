import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/title/Title";
import telegramImage from "../assets/image/Telegram-logo.png";
import vkImage from "../assets/image/192px-Vk_Logo.svg.png";
import whatsAppImage from "../assets/image/WhatsApp_logo-color-vertical.svg.png";
import {Box} from "./box/Box";

const Footer = () => {
    const telegram = {
        backgroundImage: `url(${telegramImage})`
    }
    const whatsApp = {
        backgroundImage: `url(${whatsAppImage})`
    }
    const vk = {
        backgroundImage: `url(${vkImage})`
    }
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Alex Zabirov'}/>
                <div className={style.boxBlock}>
                    <Box style={telegram}/>
                    <Box style={whatsApp}/>
                    <Box style={vk}/>
                </div>
                <footer className={style.rights}>Все права защищены</footer>
            </div>
        </div>
    );
};


export default Footer;