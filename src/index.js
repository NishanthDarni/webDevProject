import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import reportWebVitals from './reportWebVitals';
import Sell from './components/Sell'
import User from './components/User'
import Buy from './components/Buy'
import Search from './components/Search'
import MyProducts from './components/MyProducts'
import Interest from './components/Interest'
import {Routes,Route, BrowserRouter,Link} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
//if login store login details, if logout null those values 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/buy" element={<Buy/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/interests' element={<Interest/>}/>
      <Route path='/MyProducts' element={<MyProducts/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
