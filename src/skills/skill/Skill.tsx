import React from 'react';
import style from './Skill.module.css'

const Skill = () => {
    return (
        <div className={style.skill}>
          <div className={style.icon}></div>
              <h3>Title</h3>
              <span className={style.description}>
                  текстовое описание
              </span>

        </div>
    );
};

export default Skill;