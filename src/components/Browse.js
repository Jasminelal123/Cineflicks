import React from 'react';
import image from './utils/logo.png';
import { auth } from './utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div>
      <div className='absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-30'>
        <img className='w-44' src={image} alt='logo' />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      
    </div>
  );
};

export default Browse;
