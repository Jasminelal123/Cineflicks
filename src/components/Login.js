import React, { useState, useRef } from 'react';
import Header from './Header';
import bg from './utils/bg.jpg';
import { checkvalidateData } from './utils/Validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);  
    if (email.current) email.current.value = '';  
    if (password.current) password.current.value = '';  
    if (name.current) name.current.value = '';  
  };

  const handleButtonClick = () => {
    let message;
    if (isSignInForm) {
      message = checkvalidateData(email.current.value, password.current.value);
    } else {
      message = checkvalidateData(email.current.value, password.current.value, name.current.value);
    }
    setErrorMessage(message);
    if(message) return ;
    if(!isSignInForm)
      {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage)
          
        });
      }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  };

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img src={bg} alt='bg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12 p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-lg text-white'>
        <h1 className='font-bold text-white text-3xl py-4 m-2 '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (
          <input ref={name} type='text' placeholder='Full Name' className='px-4 py-2 m-2 w-full rounded-lg bg-slate-500 cursor-pointer' />
        )}
        <input ref={email} type='text' placeholder='Email or Mobile Number' className='px-4 py-2 m-2 w-full rounded-lg bg-slate-500 cursor-pointer' />
        <input ref={password} type='password' placeholder='Password' className='px-4 py-2 m-2 w-full rounded-lg bg-slate-500 cursor-pointer' />
        <p className='text-red-600 p-4'>{errorMessage}</p>
        <button className='bg-red-600 text-white py-2 m-2 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='px-4 m-2'>
          {isSignInForm ? "Don't have an account?" : "Already have an account?"} <span className='underline cursor-pointer' onClick={toggleSignUp}>{isSignInForm ? 'Sign Up' : 'Sign In'}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
