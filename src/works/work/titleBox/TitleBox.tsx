import style from "./TitleBox.module.scss";
import React from "react";

type BoxPropsType = {
    icon: string
    link: string
    title: string
}
export const TitleBox: React.FC<BoxPropsType> = ({icon,link,title}) => {
    return (
        <div className={style.box}>
            <a href={link}>
                <h3>{title}</h3>
                <img src={icon} alt={''} className={style.img}/>
            </a>
        </div>
    )
}