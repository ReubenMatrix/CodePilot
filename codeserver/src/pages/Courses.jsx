import React from 'react';
import CourseCard from '../components/CourseCard';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/v1/checkout'; 

function Courses() {
    const makePayment = async (course) => {
        const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);

        const body = {
            courseId: course.id,
            price: course.price,
            title: course.title,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(`${apiUrl}/create-checkout-session`, body, { headers });
            const { sessionId } = response.data;

            const result = await stripe.redirectToCheckout({ sessionId });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error during payment:', error);
        }
    };

    const courses = [
        {
            id: '1',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Introduction to Web Development',
            description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript.',
        },
        {
            id: '2',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Mastering React.js',
            description: 'Dive deep into the world of React.js and learn how to build modern web applications.',
        },
        {
            id: '3',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Data Structures and Algorithms',
            description: 'Explore the fundamental data structures and algorithms used in computer science.',
        },
        {
            id: '4',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Machine Learning for Beginners',
            description: 'Get started with the fundamentals of machine learning and build your first models.',
        },
        {
            id: '5',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Ethical Hacking Fundamentals',
            description: 'Learn the basics of ethical hacking and cybersecurity to protect your systems.',
        },
        {
            id: '6',
            price: 3000,
            src: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Advanced Python Programming',
            description: 'Take your Python skills to the next level and explore advanced concepts and libraries.',
        },
    ];

    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">All Courses</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        price={course.price}
                        src={course.src}
                        title={course.title}
                        description={course.description}
                        onEnroll={() => makePayment(course)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;
