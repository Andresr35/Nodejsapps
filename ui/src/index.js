import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";  
import { createRoot } from 'react-dom/client';

const msalInstance = new PublicClientApplication(msalConfig); 
const container = document.getElementById("root");
const root = createRoot(container);
root.render( 
    <React.StrictMode> 
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </React.StrictMode>  
);

reportWebVitals();

// ReactDOM.render(
// <App/>

// ,document.getElementById("root"));
 
