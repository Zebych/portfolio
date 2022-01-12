import React, {memo} from 'react';

import {useFormik} from 'formik';

import Button from "../common/button/Button";
import {useDispatch} from "react-redux";
import {contactsTC} from "../redux/contacts-reducer";
import styles from "./Contacts.module.scss";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}
export const ContactsForm = memo(() => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 1) {
                errors.message = 'Invalid message';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(contactsTC(values.name, values.email, values.message));
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.inputBlock}>
            <input placeholder={'how can I call you'} {...formik.getFieldProps('name')}/>
            <input placeholder={'your email'} {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && (
                <div style={{color: 'red'}}>{formik.errors.email}</div>
            )}
            <textarea placeholder={'message'} {...formik.getFieldProps('message')}/>
            {formik.touched.message && formik.errors.message && (
                <div style={{color: 'red'}}>{formik.errors.message}</div>
            )}
            <div className={styles.button}>
                <Button buttonName={'Send'} >
                    buy
                </Button>
            </div>
        </form>
    );
});
