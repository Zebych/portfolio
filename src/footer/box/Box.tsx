import style from "../box/Box.module.scss";
import React from "react";

type BoxPropsType = {
    icon: string
    link: string
}
export const Box: React.FC<BoxPropsType> = ({link, icon}) => {
    return (
        <div className={style.box}>
            <a href={link} target="_blank">
                <img src={icon} alt={''} className={style.img}/>
            </a>
        </div>
    )
}