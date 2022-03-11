import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from "./components/Header";
/*
import Login from './pages/Login';                          
import Register from './pages/Register';                    
import Profile from './pages/Profile';
import Produto from './pages/Product';
import Carrinho from './pages/Carrinho'
*/


export default function Routes() {

    return (<>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    </>
    );
}