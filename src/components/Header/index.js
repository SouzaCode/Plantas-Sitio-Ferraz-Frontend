import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

import user_default_image from "../../assets/user_default.jpg";
export default function Header() {


    return (
        <div className="header-container">
            <div className="site-info-container"><p>Minhas Plantas</p></div>
            <div className="searchbar-container"><form >
                <input type="text" placeholder="Buscar Código" />
            </form></div>
            <div className="header-user-area-container" >
                {localStorage.getItem("token") ? (<></>) : (<Link to="/login" ><p >Login</p></Link>
                )}
                <img src={localStorage.getItem("profile_image") ? "data:image/png;base64," + localStorage.getItem("profile_image") : user_default_image} className="header-user-img" alt="" />
            </div>
        </div>
    )
}