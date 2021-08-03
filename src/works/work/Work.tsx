import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.work}>
          <div className={style.icon}>
              <button className={style.button}>Смотреть</button>
          </div>
              <h3>Название</h3>
              <span className={style.description}>
                  краткое текстовое описание
              </span>

        </div>
    );
};

export default Work;