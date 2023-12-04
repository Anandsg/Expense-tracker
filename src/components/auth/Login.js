import React, { useState } from "react";
// import Header from "../body/Header";

const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignUpForm(!isSignUpForm)
    }
    return (
        <div className="flex">
            {/* <Header /> */}
            <form className="w-full md:w-3/12 p-4 md:p-10 my-40 md:mx-auto right-0 left-0 border">
                <h2 className="text-center text-xl">{isSignUpForm ? "Sign Up" : "Login"}</h2>
                {!isSignUpForm && <input
                    type="text"
                    placeholder="Name"
                    className="p-2 flex my-3 border w-full rounded-md text-sm"
                />}
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 flex my-3 border w-full rounded-md text-sm"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 my-3 flex border w-full rounded-md text-sm"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="p-2 my-3 flex border w-full rounded-md text-sm"
                />
                <button
                    className="p-2 my-4 bg-blue-500 text-white w-full rounded-md">
                    {isSignUpForm ?
                        "Sign Up" : "Login"}
                </button>
                {isSignUpForm ?
                    <div className="flex bg-blue-100 p-2 rounded-md justify-center">
                        <p className="rounded-md text-sm px-2 text-center">
                            Have an account? </p>
                        <p className=" text-sm cursor-pointer hover:underline"
                            onClick={toggleSignInForm}>
                            Login
                        </p>
                    </div> :
                    <div className="flex bg-blue-100 p-2 rounded-md justify-center">
                        <p className="rounded-md text-sm px-2 text-center">
                            Don't have an account?</p>
                        <p className=" text-sm cursor-pointer hover:underline"
                            onClick={toggleSignInForm}>
                            Sign Up
                        </p>
                    </div>}
            </form>
        </div>
    );
};

export default Login;