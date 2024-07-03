import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


export default function Navbar() {
  const {user} = useContext(UserContext)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user !== undefined) {
      setIsLoaded(true);
    }
  }, [user]);

  if (!isLoaded) {
    return <div>Loading...</div>; 
  }


  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link to='/' className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>

        <span className="sr-only">Coding Website</span>
      </Link>

      {user ? (
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to='/problems' className="text-sm font-medium hover:underline underline-offset-4">
          Problems
        </Link>
        <Link to='/notes' className="text-sm font-medium hover:underline underline-offset-4">
          Notes
        </Link>
        <Link to='/courses' className="text-sm font-medium hover:underline underline-offset-4">
          Courses
        </Link>
        <Link to='/profile' className="text-sm font-medium hover:underline underline-offset-4">
          Profile
        </Link>
      </nav>

      ):(
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavLink to="/signin" className="text-sm font-medium hover:underline underline-offset-4">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="text-sm font-medium hover:underline underline-offset-4">
            Sign Up
          </NavLink>
        </nav>

      )}
    </header>

  )
}
