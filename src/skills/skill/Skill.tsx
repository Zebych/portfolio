import React from 'react';
import style from './Skill.module.css'
import {Title} from "../../common/title/Title";

const Skill = () => {
    return (
        <div className={style.skill}>
          <div className={style.icon}></div>
         <Title title={'title'}/>
              <span className={style.description}>
                  текстовое описание
              </span>

        </div>
    );
};

export default Skill;