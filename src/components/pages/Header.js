import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="bg-indigo-200 p-4 flex justify-between items-center">
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
            <button
                onClick={handleLogout}
                className="px-4 py-2 bg-purple-300 mx-5 text-sm  rounded-md"
            >
                Logout
            </button>
        </div>
    );
};


export default Header;
