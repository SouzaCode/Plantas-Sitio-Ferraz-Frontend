import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const dotenv = require("dotenv")

dotenv.config({
    path: ".env",
});

ReactDOM.render(<App />, document.getElementById('root'));