import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import user_default_image from "../../assets/user_default.jpg";
export default function Header() {
    const [userImage, setUserImage] = useState("");
    const [userToken, setUserToken] = useState("");
    function handleLogout() {
        localStorage.clear();
        setUserImage("");
        setUserToken("");
    }
    useEffect(async () => {
        setUserImage(localStorage.getItem("profile_image"));
        setUserToken(localStorage.getItem("token"));

    }, []);
    return (
        <div className="header-container">
            <Link to="/" className="site-info-container"><p>Minhas Plantas</p></Link>
            <div className="searchbar-container"><form >
                <input className="navbar-input" type="text" placeholder="Buscar Código" />
            </form></div>
            <div className="header-user-area-container" >
                {userToken ? (
                    <>
                        <img src={userImage && userImage !== "" && userImage !== "null" ? "data:image/png;base64," + userImage : user_default_image} className="header-user-img" alt="" />
                        <p className="logout-text" onClick={() => { handleLogout() }}>Logout</p></>
                )

                    : (
                        <div className="users-functions">
                            <Link to="/login" ><p >Login</p></Link>
                            <Link to="/register" ><p >registre-se</p></Link>
                        </div>
                    )}



            </div>
        </div>
    )
}