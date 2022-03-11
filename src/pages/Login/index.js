import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'
import Header from "../../components/Header";

import './styles.css';


import logoImg from '../../assets/default_plant.jpg';

import vertical from '../../assets/vertical.png';

const MD5 = require("crypto-js/md5")
export default function Login() {
    const [email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        const hash_password = MD5((email + Senha)).toString()
        const data = {
            email,
            hash_password
        }
        try {
            const response = await api.post('/user/login', data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('profile_image', response.data.profile_image);
            console.log(response.data);
            history.push('/');
        } catch (err) {
            alert(err.response.data.Error);
        }

    }

    return (

        <> <Header />
            <div className="login-container">
                <div className="login-img-container">
                    <img className="logo-img" height="300px" width="auto" src={logoImg} alt="Logo" />
                </div>
                <div>
                    <img className="login-vertical" src={vertical} alt="Line" />
                </div>
                <div className="login-data-container">
                    <div className="login-title-container">
                        <p><b>Login</b></p>
                    </div>
                    <div className="login-form-container">
                        <form onSubmit={handleLogin}>
                            <input
                                type="email" placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                type="password" placeholder="Senha"
                                value={Senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                            <div className="login-button-container">
                                <button className="login-myButton">Login</button>
                                <Link to="/register">
                                    <div className="login-myButton2"> Registre-se</div>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    );
}