import React from 'react';
import style from './Button.module.scss'

type ButtonPropsType = {
    buttonName: string
    link?: string | undefined
}
const Button: React.FC<ButtonPropsType> = ({link, buttonName}) => {
    return <button className={style.button} >
        <a href={link} target="_blank" rel="noreferrer">{buttonName}</a>
    </button>
};

export default Button;