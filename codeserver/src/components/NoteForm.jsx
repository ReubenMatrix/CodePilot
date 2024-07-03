import axios from 'axios';
import React, { useState } from 'react';

function NoteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  async function handleSubmit(e){
    e.preventDefault()
    const res = await axios.post('http://localhost:3000/api/v1/notes/newNote',{
      title,
      content, 
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(res.data)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">New Note</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            placeholder="Enter note title"
            required
            className="mt-1 block w-full p-3 border-black rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            Note
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter note content"
            onChange={(e)=>{
              setContent(e.target.value)
            }}
            rows={5}
            required
            className="mt-1 block w-full p-3 border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-black hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-dark"
        >
          Save Note
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
