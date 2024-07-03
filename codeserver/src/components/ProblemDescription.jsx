import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

function ProblemDescription() {
    const [problem, setProblem] = useState(null);
    const { title } = useParams();
    const location = useLocation();
    const DOMAIN_NAME = "http://localhost:5173"

    useEffect(() => {
        async function fetchProblem() {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/problems/problem?title=${title}`);
                setProblem(res.data.problem);
            } catch (error) {
                console.error('Error fetching problem:', error);
            }
        }
        fetchProblem();
    }, [title]);

    if (!problem) {
        return <div>Loading...</div>;
    }

    return (
        <div className='desc m-5'>
            <h1 className='text-2xl font-bold'>{problem.title}</h1>
            <div className='flex items-center mt-2'>
                <p className='text-sm'>{problem.Topic}</p>
                <p className='text-sm text-white bg-black rounded-full p-2 ml-3'>Difficulty: {problem.difficulty}</p>
            </div>
            <p className='mt-2'>{problem.description}</p>

            <div className='mt-4'>
                <h2 className='text-lg font-semibold'>Test Cases:</h2>
                {problem.testCases.map((testCase, index) => (
                    <div key={index} className='border rounded-md bg-black p-5  mt-3'>
                        <h3 className='text-base text-white font-medium'>Test Case {index + 1}:</h3>
                        <p className='mt-2 text-white'><strong>Input:</strong> {testCase.input}</p>
                        <p className='mt-1 text-white'><strong>Output:</strong> {testCase.output}</p>
                    </div>
                ))}
            </div>

   
            <div className="mt-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold">Share Problem Link:</h2>
                <div className="mt-3">
                    <QRCode value={DOMAIN_NAME+location.pathname} size={128} />
                </div>
            </div>
        </div>
    );
}

export default ProblemDescription;
