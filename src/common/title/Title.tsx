import React from 'react';
import style from './Title.module.scss'

type TitlePropsType = {
    title: string,
}
export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    )
}
