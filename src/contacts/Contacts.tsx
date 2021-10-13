import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";
import Login from "../common/form/inputForm";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'} />
                <form className={style.inputBlock}>
                    {/*<Login/>*/}
                    <input type="text"/>
                    <input type="text"/>
                    <textarea />
                    <div className={style.button}>
                        <Button buttonName={'Отправить'}/>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default Contacts;