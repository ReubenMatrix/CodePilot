import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import codeImg from '../assets/code.webp'
import { UserContext } from '../context/UserContext';

function Header() {
  const { user } = useContext(UserContext);
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
    <section className="w-full mx-auto py-12 md:py-24 lg:py-32 items-center">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Learn to Code with Confidence
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our comprehensive coding website provides the resources and support you need to become a skilled
              developer.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link to='/problems'
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
              </Link>
          </div>
        </div>
        <img
            src={codeImg}
            alt="Hero"
            className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last w-[110vh] lg:aspect-square"
          />

      </div>
    </div>
  </section>
  )
}

export default Header
