import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Email() {
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u5n932v', 
      'template_hs2rcku', 
      { email },
      'EZvM3Ayj9srpYajPq' 
    ).then((response) => {
      alert('Email sent successfully!');
    }).catch((err) => {
      alert('Failed to send email.');
    });

    setEmail('');
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Community</h2>
          <p className="mx-auto max-w-lg text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Connect with other aspiring developers, get support, and share your progress.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4">
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-black rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary whitespace-nowrap"
            >
              Sign Up
            </button>


          </form>
          <p className="text-xs text-muted-foreground text-center">
            Sign up to our newsletter to stay up-to-date.{' '}
            <a href="#" className="underline underline-offset-2 hover:text-primary">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Email;
