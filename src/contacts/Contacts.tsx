import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Button from "../common/button/Button";
import Title from "../common/titel/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} />
                <div className={style.inputBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </div>
                <Button buttonName={'Отправить'}/>

            </div>
        </div>
    );
};

export default Contacts;