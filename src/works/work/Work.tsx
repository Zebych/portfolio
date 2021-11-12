import React from 'react';
import style from './Work.module.scss'
import Button from "../../common/button/Button";

type WorkPropsType = {
    style: {}
    link?:string
    title:string
    shortDescription?:string
}
const Work: React.FC<WorkPropsType> = (props) => {

    return (
        <div className={style.work}>
            <div style={props.style} className={style.image} >
                <Button buttonName={'Watch'} link={props.link}/>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                  {props.shortDescription}
              </span>
        </div>
    );
};

export default Work;