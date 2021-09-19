import React from 'react';
import style from './Work.module.scss'
import Button from "../../common/button/Button";

const Work = () => {
    return (
        <div className={style.work}>
          <div className={style.icon}>
              <Button buttonName={'Watch'}/>
          </div>
              <h3>Название</h3>
              <span className={style.description}>
                  краткое текстовое описание
              </span>

        </div>
    );
};

export default Work;