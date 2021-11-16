import React, {FC} from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {contactsTC} from "../redux/contacts-reducer";
import {useDispatch} from "react-redux";

export type ContactsFormPropsType = {
    name: string
    email: string
    message: string
}
const ContactsForm: FC<InjectedFormProps<ContactsFormPropsType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={style.inputBlock}>
            <Field placeholder={'your name'} name={'name'} component={'input'}/>
            <Field placeholder={'your email'} name={'email'} component={'input'}/>
            <Field placeholder={'your message'} name={'message'} component={'textarea'}/>
            {error && <div className={style.err}>{error}</div>}
            <div className={style.button}>
                <Button buttonName={'Send'}/>
            </div>
        </form>

    )
}

const ContactsReduxForm = reduxForm<ContactsFormPropsType>({form: 'contacts'})(ContactsForm)

const Contacts = () => {
    const dispatch = useDispatch()
    const onSubmit = (formData: ContactsFormPropsType) => {
        dispatch(contactsTC(formData.name, formData.email, formData.message))
    }
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <ContactsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>

    )
}
export default Contacts;