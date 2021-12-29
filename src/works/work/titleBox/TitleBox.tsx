import style from "./TitleBox.module.scss";
import React from "react";

type BoxPropsType = {
    icon: string
    link: string
    title: string
}
export const TitleBox: React.FC<BoxPropsType> = (props) => {
    return (
        <div className={style.box}>
            <a href={props.link}>
                <h3>{props.title}</h3>
                <img src={props.icon} alt={''} className={style.img}/>
            </a>
        </div>
    )
}