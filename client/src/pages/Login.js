import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom"

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let history=useHistory();
    const login = () => {
        const data = {
            userName: userName,
            password: password
        };
        axios.post("http://localhost:3001/auth/login", data).then(async (response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data);
                history.push("/")
            }
        });
    }
    return (
        <div className='loginContainer'>
            <input type="text" placeholder='User Name' onChange={(event) => { setUserName(event.target.value); }} />
            <input type="password" placeholder='Password' onChange={(event) => { setPassword(event.target.value); }} />
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login