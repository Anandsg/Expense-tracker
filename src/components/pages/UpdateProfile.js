import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import image from "../../../src/assets/Github.png";
import browse from "../../../src/assets/Browse.png";
import { updateProfile } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const UpdateProfile = () => {

    const name = useRef(null);
    const profileUrl = useRef(null);

    const handleUpdateProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: profileUrl.current.value,
        }).then(() => {
            alert('Profile updated')
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div>
            <div className='flex justify-between px-8 border border-b-4'>
                <p className='font-serif p-5 font-semibold'>Winners never quit, quitters never win.</p>
                <div className='flex items-center text-md bg-purple-200 my-2 px-6 font-serif rounded-lg'>
                    <div className='p-2 my-0 font-light'>Your Profile is 64% completed a complete Profile <br />
                        has a higher chance of landing a job.
                        <Link className='ml-1 text-red-900'>Complete Now.</Link>
                    </div>
                </div>
            </div>
            <div className='py-8 flex justify-between items-center w-6/12 mx-auto'>
                <h1 className='font-semibold text-xl'>Contact details</h1>
                <button className='bg-purple-300 p-2 text-sm rounded-md'>Cancel</button>
            </div>
            <div className='flex items-center w-6/12 mx-auto justify-center'>
                <img src={image} alt='github'
                    className='w-7 mx-2' />
                <h2 className='font-semibold'> Name:</h2>
                <input
                    ref={name}
                    className='p-1 border mx-4' />
                <img src={browse} alt='browse'
                    className='w-8' />
                <h2 className='font-semibold'>Photo URL:</h2>
                <input
                    ref={profileUrl}
                    className='p-1 border px-2 mx-4' />
            </div>
            <div className='flex items-center w-6/12 mx-auto my-16'>
                <button className='bg-purple-300 p-2 text-sm rounded-md'
                    onClick={handleUpdateProfile}
                >Update</button>
            </div>

        </div>
    );
}
export default UpdateProfile;
