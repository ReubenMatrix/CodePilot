import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function Output({ output }) {
  const { title } = useParams();
  console.log(title)

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/submissions', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <div className='h-[90vh] bg-black m-2 border-white rounded-md text-white flex flex-col justify-between'>
      <div className='p-2 flex-grow'>
        {output}
      </div>
      <div className='p-2'>
        <button
          onClick={submit}
          className='bg-cyan-400 rounded-md p-2 text-white w-full'
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Output;
