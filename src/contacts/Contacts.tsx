import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";

const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.inputBlock}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"Email"}/>
                    <textarea placeholder={"Your message"}/>
                    <div className={style.button}>
                        <Button buttonName={'Отправить'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;