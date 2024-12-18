import React from "react";
import "./styles/main.css";
import "./styles/test.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
  
);


// import ReactGA from 'react-ga';
// const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
// ReactGA.initialize(TRACKING_ID);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
