import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from '../assets/image/k2HOtf-VgNk.jpg'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}` }>
                <div className={style.greetings}>
                    <span>Alex Zabirov</span>
                    <h1>Front-end Developer</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}>
                    <img src={photo}/>
                </div>
            </div>
        </div>
    );
};

export default Main;