import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>
          <p className="mt-2 text-muted-foreground">Enter your credentials to access your account.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              placeholder="Enter your email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input 
              id="password" 
              type="password" 
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              placeholder="Enter your password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" 
              required 
            />
          </div>
          <button 
            type="submit" 
            onClick={async function handleSubmit(e){
                e.preventDefault()

                const response = axios.post('http://localhost:3000/api/v1/users/signin',{
                    email: email,
                    password: password
                })
                localStorage.setItem(response.data.token)
                navigate('/')
            }}
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium underline underline-offset-4">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
