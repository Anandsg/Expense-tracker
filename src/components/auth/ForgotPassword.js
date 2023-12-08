import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [passEmail, setPassEmail] = useState('');
    const [loading, setIsLoading] = useState(false);
    const [mailSent, setMailSent] = useState(false);

    const handleEmailLink = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const resp = await axios.post(
                'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCYeO_oN8vi04oevMwTzHFSCuxOCgbLHe8',
                {
                    requestType: 'PASSWORD_RESET',
                    email: passEmail,
                }
            )
            if (resp.status === 200) {
                setMailSent(true)
                setPassEmail('')
            } else {
                alert('Please enter valid email...')
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            window.alert('Please enter valid email...')
            console.log(error.message)
            setPassEmail('')
        }
    }
    const handleLoginClick = () => {
        console.log('Navigate to login page');
    };

    return (
        <div className="flex items-center justify-center pt-[9%]">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Forgot Password</h2>
                </div>

                <form className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            onChange={(e) => setPassEmail(e.target.value)}
                        />
                    </div>

                    <p className="text-sm text-gray-500">
                        Enter your email address and we'll send you a link to reset your password.
                    </p>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleEmailLink}
                        >
                            Send Link
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center">
                    <p>
                        Already a user?{' '}
                        <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleLoginClick}>
                            Login
                        </Link>
                    </p>
                </div>

                {loading && (
                    <div className="text-center mt-4">
                        <p className="text-gray-500">Wait a second! Loading...</p>
                    </div>
                )}

                {mailSent && !loading && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
                        <p>The login mail has been sent.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;