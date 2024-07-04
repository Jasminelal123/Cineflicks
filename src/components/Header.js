import React, { useEffect } from 'react';
import image from '../utils/logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
        }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleGptSearch = () => {
    console.log('GPT Search button clicked');
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    console.log('showGptSearch state:', showGptSearch);
  }, [showGptSearch]);

  return (
    <div className='absolute w-screen flex justify-between bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={image} alt='logo' />
      {user?.uid && (
        <div className='flex p-2'>
          <button onClick={handleGptSearch} className='py-2 px-4 mx-4 my-2 bg-purple-500 text-white rounded-lg'>
            GPT search
          </button>
          <button 
            className='py-2 px-4 mx-4 my-2 bg-red-500 text-white rounded-lg font-bold' 
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;