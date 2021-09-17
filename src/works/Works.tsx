import React from 'react';
import style from './Works.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Work from "./work/Work";
import {Title} from "../common/title/Title";

const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={'My Works'}/>
                <div className={style.works}>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

export default Works;