import React from 'react';
import style from './RemoteWork.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";

const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <Title title={'Remote work'} />
               <Button buttonName={'Hire me'}/>
            </div>
        </div>
    );
};

export default RemoteWork;