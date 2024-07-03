
import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import ProblemDescription from '../components/ProblemDescription';
import Output from '../components/Output';


function Solving() {
    const [output, setOutput] = useState('');

    const updateOutput = (newOutput) => {
      setOutput(newOutput);
    };
  return (
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 items-center justify-center mx-auto'>
        <div className='flex top-2 justify-center'>
          <ProblemDescription />
        </div>
        <div className='min-h-[90vh]'>
        <CodeEditor updateOutput={updateOutput} />
        </div>
        <div>
        <Output output={output} />
        </div>
      </div>
  );
}

export default Solving;


