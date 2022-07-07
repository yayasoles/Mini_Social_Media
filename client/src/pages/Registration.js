import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Registration() {
    const initialValues = {
        userName: "",
        password: ""
    };
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required(),
        password: Yup.string().required().min(4).max(20)
    });
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth",data).then(()=>{
            console.log(" User SuccessFully Registered");
            document.querySelector(".password").value="";
            document.querySelector(".userName").value="";
        });
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">

                    <label>userName :</label>
                    <ErrorMessage name="userName" component="span" />
                    <Field id="inputCreatePost"   name="userName" className="userName" placeholder="Ex.Yaregal..." />

                    <label>password :</label>
                    <ErrorMessage name="password" component="span" />
                    <Field id="inputCreatePost" type="password" name="password" className="password" placeholder="password" />
                    <button type='submit'>Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration