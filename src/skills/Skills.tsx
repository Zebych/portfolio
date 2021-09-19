import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import {Title} from "../common/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

export default Skills;