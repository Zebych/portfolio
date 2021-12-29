import style from "../box/Box.module.scss";
import React from "react";

type BoxPropsType = {
    icon: string
    link: string
}
export const Box: React.FC<BoxPropsType> = (props) => {
    return <div className={style.box}>
        <a href={props.link}>
            <img src={props.icon} alt={''} className={style.img}/>
        </a>
    </div>
}