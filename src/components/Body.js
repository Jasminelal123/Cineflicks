import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
    const dispatch = useDispatch();
  
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {    
            path: '/browse',
            element: <Browse />,
        },
    ]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName }));
            } else {
                dispatch(removeUser());
            }
        });

        
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
