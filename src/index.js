import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import whatsup from "./assets/icons/whatsup.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <a target="_blank" href='https://wa.me/8801751299132'
      className='fixed bottom-6 left-6 z-50 w-20 h-20 rounded-full flex justify-center items-center bg-primary hover:bg-darkPrimary border-[3px] border-white hover:scale-125 duration-300 shadow-secondary'>
      <img className='w-10 h-10' src={whatsup} alt="" />
    </a>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
