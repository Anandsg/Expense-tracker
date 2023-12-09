import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        dispatch(authActions.logout());
        navigate('/', { replace: true });
    };

    const toggleTheme = () => {
        // Toggle the theme
        setIsDarkTheme(!isDarkTheme);

        // You can also update your CSS classes or use a theme provider to apply the theme
        // For simplicity, let's just toggle a body class here
        document.body.classList.toggle('dark-theme', isDarkTheme);
    };

    return (
        <div className={`bg-indigo-200 p-4 flex justify-between items-center ${isDarkTheme ? 'dark-theme' : ''}`}>
            <div className="flex items-center"> {/* Container for title and navigation links */}
                <div className="text-xl font-bold px-9">Expense Tracker</div>
                <div className="flex space-x-4 px-10">
                    <Link to='/welcome'>
                        <p className="px-4">Home</p>
                    </Link>
                    <Link to='/expenses'>
                        <p className="px-3">Expenses</p>
                    </Link>
                    <Link to='/updateProfile'>
                        <p className="px-3">Profile</p>
                    </Link>
                </div>
            </div>
            <div className="flex items-center">
                {/* Add the dark and light theme toggle icons */}
                <FontAwesomeIcon
                    icon={isDarkTheme ? faSun : faMoon}
                    className="text-black cursor-pointer mx-3"
                    onClick={toggleTheme}
                />
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-purple-300 mx-8 text-sm rounded-md"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header;
