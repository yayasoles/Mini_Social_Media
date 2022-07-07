import React from 'react';
import {useHistory} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


function CreatePost() {
    let history=useHistory();
    const initialValues={
        title:"",
        postText:"",
        userName:""
    };
    const validationSchema=Yup.object().shape({
        title:Yup.string().required(),
        postText:Yup.string().required(),
        userName:Yup.string().min(3).max(15).required()
    });
    const onSubmit=(data)=>{
        axios.post("http://localhost:3001/posts",data).then((response)=>{
            // alert('successfully added');
            history.push("/");
        });
    };
    return (
        <div className="createPostPage" >
            <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Title :</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field className="inputCreatePost" name ="title" placeholder="Ex.titile..."/>
                    <label>Post :</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field className="inputCreatePost" name ="postText" placeholder="Ex.News..."/>
                    <label>userName :</label>
                    <ErrorMessage name="userName" component="span"/>
                    <Field className="inputCreatePost" name ="userName" placeholder="Ex.Yaregal..."/>
                    <button type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost