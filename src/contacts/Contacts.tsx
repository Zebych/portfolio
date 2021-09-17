import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} />
                <form className={style.inputBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <Button buttonName={'Отправить'}/>
                </form>


            </div>
        </div>
    );
};

export default Contacts;