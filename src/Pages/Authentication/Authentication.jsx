import React, { useState } from 'react';
import './Authentication.css';
import Signin from '../../Components/SignIn/Signin'
import Signup from '../../Components/Register/Signup';
import { Routes, Route } from "react-router-dom";


const Authentication = () => {
  
  const [currentPage, setCurrentPage] = useState("auth");

  const goToRegister = () => setCurrentPage("register");
  const goToAuth = () => setCurrentPage("auth");

  return (

    <>
  
      
       

      {/* Conditional rendering */}
      {currentPage === "auth" && <Signin onSignup={goToRegister} />}
      {currentPage === "register" && <Signup onRegisterClick={goToAuth} />}
    
    </>
  );
};

export default Authentication;

