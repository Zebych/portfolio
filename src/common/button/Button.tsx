import React from 'react';
import style from './Button.module.scss'

type ButtonPropsType = {
    buttonName: string
    link?: string | undefined
}
const Button: React.FC<ButtonPropsType> = (props) => {
    return <button className={style.button}>
        <a href={props.link}>{props.buttonName}</a>
    </button>
};

export default Button;