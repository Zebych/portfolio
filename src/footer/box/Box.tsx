import style from "../box/Box.module.scss";
import React from "react";

type BoxPropsType = {
    style: {}
    link?:string
}
export const Box: React.FC<BoxPropsType> = (props) => {
    return <div className={style.box} style={props.style}>
        <a>{props.link}</a>
    </div>
}