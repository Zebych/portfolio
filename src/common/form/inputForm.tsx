import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import Button from "../button/Button";
import styles from '../../contacts/Contacts.module.scss'

type FormDataType = {
    email: string,
    password: string,
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form >
            <Field placeholder={'email'} name={'email'} component={'input'}/>
            <Field placeholder={'Password'} name={'password'} type={'password'}
                   component={'input'}/>
            <Button buttonName={'Отправить'}/>
        </form>
    )

}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    return (<div className={styles.inputBlock}>
            <LoginReduxForm/>
        </div>
    );
};

export default Login