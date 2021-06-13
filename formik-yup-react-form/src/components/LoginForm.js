import React from 'react';
import { Formik, Form } from 'formik';
import {InputComponent} from './InputComponent';
import * as Yup from 'yup';

export const LoginForm = () => {
    const validate = Yup.object({
        firstName : Yup.string()
            .max(15, 'Must be less than 15 characters')
            .required('First name Required'),
        lastName : Yup.string()
            .max(15, 'Must be less than 15 characters')
            .required('Last name Required'),
        email : Yup.string()
            .email('Email is Invalid')
            .required('Email is Required'),
        password : Yup.string()
            .min(6, 'Password must be atleast 6 characters')
            .required('Password is Required'),
        confirmPassword : Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must watch')
            .required('Confirm Password is Required'),      
    });
    return(
        <Formik
        initialValues={{
            firstName : "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }}
        validationSchema = {validate}
        onSubmit = {values => {
            console.log(values);
        }}
        >
            {formik => (
                <div>
                    
                    <h1 className="my-4 font-weight-bold-display-4">
                            Sign Up
                    </h1>
                    <Form>
                        <InputComponent type="text" name="firstName" label="First Name"/>
                        <InputComponent type="text" name="lastName" label="Last Name"/>
                        <InputComponent type="email" name="email" label="Email"/>
                        <InputComponent type="password" name="password" label="Password"/>
                        <InputComponent type="password" name="confirmPassword" label="Confirm Password"/>
                        <button type="reset" className="btn btn-danger mt-3" style={{marginRight: "1rem"}}>Reset</button>
                        <button type="submit" className="btn btn-primary mt-3">Register</button>
                        
                    </Form>
                </div>
            )}
        </Formik>
        
    )
};