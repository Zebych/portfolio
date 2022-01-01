import React from 'react';
import style from './Skill.module.scss'
import {Title} from "../../common/title/Title";

type SkillPropsType = {
    style?: {}
    title: string
}
const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.iconBox}>
                <div className={style.icon} style={props.style}/>
            </div>
            <div className={style.text}>
                <Title title={props.title}/>
            </div>

        </div>
    );
};

export default Skill;