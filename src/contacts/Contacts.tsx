import React, {FC} from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Button from "../common/button/Button";
import {Title} from "../common/title/Title";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {contactsTC} from "../redux/contacts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";

export type ContactsFormPropsType = {
    name: string
    email: string
    message: string
}
const ContactsForm: FC<InjectedFormProps<ContactsFormPropsType>> = ({handleSubmit, error}) => {
    return (

        <form onSubmit={handleSubmit} >
            <Field placeholder={'your name'} name={'name'} component={'input'}/>
            <Field placeholder={'your email'} name={'email'} component={'input'}/>
            <Field placeholder={'your message'} name={'message'} component={'textarea'}/>
            {error && <div className={style.err}>{error}</div>}
            <div className={style.button}>
                <Button buttonName={'Send'}/>
            </div>
            {/*<input type="text" placeholder={"Your mame"}/>*/}
            {/*<input type="text" placeholder={"Your email"}/>*/}
            {/*<textarea placeholder={"Your message"}/>*/}
            {/*<div className={style.button}>*/}
            {/*    <Button buttonName={'Отправить'}/>*/}
            {/*</div>*/}
        </form>

    );
};

const ContactsReduxForm = reduxForm<ContactsFormPropsType>({form: 'contacts'})(ContactsForm)
/*
type ContactsPropsType={
  contacts:(formData: ContactsFormPropsType)=>void
}*/
const Contacts = (props: any) => {
    const dispatch=useDispatch()
    // const contactsState=useSelector<AppStateType>(state=>state.contacts)
    const onSubmit = (formData: ContactsFormPropsType) => {
        dispatch(contactsTC(formData.name, formData.email, formData.message))
    }
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <div className={style.inputBlock}>
                    <ContactsReduxForm onSubmit={onSubmit}/>
                </div>

            </div>
        </div>

    );
};
export default Contacts;