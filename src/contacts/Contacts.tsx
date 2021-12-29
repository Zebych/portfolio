import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/title/Title";
import {ContactsForm} from "./ContactsForm";

const Contacts = () => {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <ContactsForm/>
            </div>
        </div>

    )
}
export default Contacts;