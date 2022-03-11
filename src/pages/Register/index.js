import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import Header from "../../components/Header";

import "./styles.css";

import logoImg from "../../assets/default_plant.jpg";
import vertical from "../../assets/vertical.png";

//()=>{alert('Registrou-se')}

const MD5 = require("crypto-js/md5")
export default function Resgister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [confirma, setConfirma] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const hash_password = MD5((email + Senha)).toString()
        let path = "";
        const data = {
            name,
            email,
            hash_password
        };

        if (data.Senha !== data.confirma) alert(`As senhas não batem`);
        else {
            console.log(data);

            try {
                const response = await api.put("/user/register", data);
                alert(`Registrou-se`);

                history.push("/login");
            } catch (err) {
                alert(err.response.data.Error);
            }
        }

    }
    return (
        <> <Header />
            <div className="register-container">
                <div className="register-img-container">
                    <img
                        className="logo-img"
                        height="300px"
                        width="auto"
                        src={logoImg}
                        alt="Logo"
                    />
                </div>
                <div>
                    <img className="register-vertical" src={vertical} alt="Line" />
                </div>
                <div className="register-data-container">
                    <div className="register-title-container">
                        <p>
                            <b>Registro</b>
                        </p>
                    </div>
                    <div className="register-form-container">
                        <form onSubmit={handleRegister}>
                            <input
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={Senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Confirme a senha"
                                value={confirma}
                                onChange={(e) => setConfirma(e.target.value)}
                            />

                            <div className="register-button-container">
                                <button className="register-myButton" type="submit">
                                    Registar
                                </button>
                                <Link to="/login">
                                    <div className="register-myButton2">Login</div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    );
}