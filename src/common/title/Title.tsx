import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    title: string,
}
export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <h2 className={style.title}>{props.title}</h2>
    );
};
