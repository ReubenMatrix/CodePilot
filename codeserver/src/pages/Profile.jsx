

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export default function Profile() {
    const { user, setUser } = useContext(UserContext);



    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/signup');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <main className="flex-1 px-4 md:px-6">
                <div className="container mx-auto max-w-3xl py-12">
                    <div className="grid gap-8">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-15">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                <div className="grid gap-1 flex-1 items-center">
                                    <div className="text-2xl font-bold">{user.name}</div>
                                    <div className="text-sm text-gray-600">{user.email}</div>
                                    <div className="text-sm text-gray-600">{user.bio}</div>
                                </div>
                                <div className='flex flex-col mt-3 items-center'>
                                    <div className="flex items-center justify-center w-20 h-20 text-black text-sm border border-black rounded-full">
                                        {user.totalSubmissions}
                                    </div>
                                    <div className='mt-3'>Total Submissions</div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={handleLogout}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-dark"
                                >
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}



