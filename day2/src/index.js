import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Name from './Name';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Name/>
    <Skill/>
    <Project/>
    <Contact/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
