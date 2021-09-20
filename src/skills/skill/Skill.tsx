import React from 'react';
import style from './Skill.module.scss'
import {Title} from "../../common/title/Title";

type SkillPropsType={
    style?:{}
    title:string
}
const Skill:React.FC<SkillPropsType> = (props) => {
    return (
        <div className={style.skill}>

          <div className={style.icon} style={props.style}></div>
         <Title title={props.title}/>
              <p>текстовое описание</p>
        </div>
    );
};

export default Skill;