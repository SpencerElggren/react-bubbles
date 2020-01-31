import React, { useState} from "react";
import {axiosWithAuth} from "../modules/axiosWithAuth";
import axios from 'axios'


const Login = (props) => {
    const [credentials, setCredentials] = useState({});

    const login = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:3000/api/login', {username: 'Lambda School', password: 'i<3Lambd4'})
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/bubble-page');
            })
    };

    const handleChange= e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
};
export default Login;
