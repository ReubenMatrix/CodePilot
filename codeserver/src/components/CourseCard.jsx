import React from 'react';

function CourseCard({ price, src, title, description, onEnroll }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={src} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                <p className="text-gray-900 font-bold mb-4">Price: ₹{price}</p>
                <button onClick={onEnroll} className="bg-cyan-500 text-white px-4 py-2 rounded-md">
                    Enroll Now
                </button>
            </div>
        </div>
    );
}

export default CourseCard;
