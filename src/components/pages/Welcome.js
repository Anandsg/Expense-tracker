import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const Welcome = () => {
    return (
        <>
            <Header />
            <div className='flex justify-between px-8 border border-b-4'>
                <p className='font-serif p-5 font-semibold'>Welcome to expense tracker!!!</p>
                <div className='flex items-center text-md bg-purple-200 my-2 px-6 font-serif rounded-lg'>
                    <p className='p-2'>Your profile is incomplete </p>
                    <span>
                        <Link to='/updateProfile' className='ml-1 text-red-900'>Complete Now.</Link>
                    </span>
                </div>
            </div>
        </>
    );
}
export default Welcome;