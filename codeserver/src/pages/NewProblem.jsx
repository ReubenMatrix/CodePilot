import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/NewProblem/InputField';
import SelectField from '../components/NewProblem/SelectField';
import TestCaseField from '../components/NewProblem/TestCaseField';
import TextareaField from '../components/NewProblem/TextArea';




const Component = () => {
  const [problemName, setProblemName] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [testCases, setTestCases] = useState([{ input: '', output: '' }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: '', output: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/problems/newproblem', {
        title: problemName,
        description,
        Topic: topic,
        difficulty,
        testCases,
      });

      if (response.status === 200) {
        setSuccess('Problem submitted successfully!');
        setError('');
        // Clear form fields if needed
        setProblemName('');
        setTopic('');
        setDescription('');
        setDifficulty('');
        setTestCases([{ input: '', output: '' }]);
      } else {
        setError(response.data.error || 'Something went wrong');
        setSuccess('');
      }
    } catch (error) {
      setError('Failed to submit the problem');
      setSuccess('');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 border rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-xl font-bold">Submit a Programming Problem</h2>
          <p>Fill out the form below to submit a new programming problem.</p>
        </div>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        {success && <div className="mb-4 text-green-500">{success}</div>}
        <div className="grid gap-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <InputField
              id="name"
              label="Problem Name"
              placeholder="Enter the problem name"
              value={problemName}
              onChange={(e) => setProblemName(e.target.value)}
            />
            <SelectField
              id="topic"
              label="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              options={[
                { value: 'algorithms', label: 'Algorithms' },
                { value: 'data-structures', label: 'Data Structures' },
                { value: 'dynamic-programming', label: 'Dynamic Programming' },
                { value: 'graphs', label: 'Graphs' },
                { value: 'math', label: 'Math' },
                { value: 'strings', label: 'Strings' },
                { value: 'linked-list', label: 'Linked List' },
              ]}
            />
          </div>
          <TextareaField
            id="description"
            label="Problem Description"
            placeholder="Provide a detailed description of the problem"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              id="difficulty"
              label="Difficulty Level"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              options={[
                { value: 'easy', label: 'Easy' },
                { value: 'medium', label: 'Medium' },
                { value: 'hard', label: 'Hard' },
              ]}
            />
            <div className="space-y-2">
              <label htmlFor="test-cases" className="block font-medium">
                Test Cases
              </label>
              {testCases.map((testCase, index) => (
                <TestCaseField
                  key={index}
                  index={index}
                  testCase={testCase}
                  onChange={handleTestCaseChange}
                />
              ))}
              <button
                type="button"
                className="px-4 py-2 bg-black text-white rounded"
                onClick={addTestCase}
              >
                Add Test Case
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-black text-white rounded">
            Submit Problem
          </button>
        </div>
      </form>
    </div>
  );
};

export default Component;
