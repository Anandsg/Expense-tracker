import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const EmailVerification = () => {
    const [mailUrl, setMailUrl] = useState("");
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            let tmp1 = mailUrl.split("oobCode=")[1];
            let tmp2 = tmp1.split("&apiKey=")[0];
            console.log(tmp2)
            console.log(tmp1)
            const resp = await axios.post(
                "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCYeO_oN8vi04oevMwTzHFSCuxOCgbLHe8",
                {
                    oobCode: tmp2,
                }
            );
            console.log(resp)
            if (resp.data.emailVerified === true) {
                console.log(resp);
                navigate("/welcome", { replace: true });
            }
        } catch (error) {
            window.alert("Please enter valid link...");
            console.log(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-bold mb-4">Verify your email</h2>
                <h3 className="text-md mb-4">Enter the code that we've sent to your email</h3>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">
                        Verification Code
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="verificationCode"
                        type="text"
                        placeholder="Enter code"
                        value={mailUrl}
                        onChange={(e) => setMailUrl(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmailVerification;
