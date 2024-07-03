import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function SignUp() {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [totalSubmissions, setTotalSubmissions] = useState(0);
    const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>
          <p className="mt-2 text-muted-foreground">Create your account to get started.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input 
              id="name" 
              type="text" 
              onChange={(e)=>{
                setName(e.target.value)
              }}
              placeholder="Enter your name" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              onChange={(e)=>{
                setEmail(e.target.value)
              }} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea 
              id="bio" 
              placeholder="Tell us about yourself"
              onChange={(e)=>{
                setBio(e.target.value)
              }} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit" 
            onClick={async function handleSubmit(e){
                e.preventDefault()

                const response = await axios.post('http://localhost:3000/api/v1/users/signup', {
                            name: name,
                            bio: bio,
                            email: email,
                            password: password,
                            isAdmin: isAdmin,
                            totalSubmissions: totalSubmissions,
            
                });
                localStorage.setItem('token',response.data.token)
                navigate('/')
                console.log(response.data)


            }}
            className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
