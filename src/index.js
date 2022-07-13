import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter}from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import"bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App/>
   </BrowserRouter>
  </React.StrictMode>
 
);


