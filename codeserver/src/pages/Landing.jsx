import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Email from '../components/Email';
import Section from '../components/Section';


function Landing() {
  return (
    <div className="flex flex-col justify-center min-h-[100dvh]">
      <main className="flex-1">
        <Header />
       <Section/>
        <Email />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Coding Website. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Landing;
