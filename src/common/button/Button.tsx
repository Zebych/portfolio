import React from 'react';
import style from './Button.module.css'
type ButtonPropsType={
    buttonName:string
}
const Button:React.FC<ButtonPropsType> = (props) => {
    return <button className={style.button}>{props.buttonName}</button>
};

export default Button;