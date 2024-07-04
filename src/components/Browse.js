import React from 'react';
import image from '../utils/logo.png';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Header from './Header';
const Browse = () => {
  const showGptSearch = useSelector((store) =>store.gpt.showGptSearch)
   
  useNowPlayingMovies();
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
        {/* <img className='w-44' src={image} alt='logo' />
        <button onClick={handleSignOut}>Sign Out</button> */}
      </div>
      <Header/>
     {
      showGptSearch?(<GptSearch/>):(<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)
     }
    </div>
  );
};

export default Browse;

