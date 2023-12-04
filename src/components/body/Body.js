import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../auth/Login';
import Header from './Header';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        }
    ])
    return (
        <div>
            <Header />
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;