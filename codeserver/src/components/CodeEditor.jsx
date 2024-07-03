import React, { useContext, useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { executeCode } from '../Api';


function CodeEditor({ updateOutput }) {
  const [value, setValue] = useState('');
  const editorRef = useRef();

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }


  async function runCode() {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      updateOutput('Please enter some code to run.');
      return;
    }
    try {
      const response = await executeCode(sourceCode);
      updateOutput(response.run.stdout); // Update the output with the response's stdout
    } catch (error) {
      updateOutput(`Error: ${error.message}`);
    }
  }

  return (
    <div className='flex flex-col rounded-md h-[90vh]'>
      <div className='p-2 bg-cyan-500 rounded-md'>
        Python
      </div>
      <div className='bg-black overflow-hidden flex-grow'>
        <Editor
          height="82vh"
          defaultLanguage="python"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          onMount={handleEditorDidMount}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
          }}
        />
      </div>
      <button onClick={runCode} className='bg-cyan-400 rounded-md p-1 items-center text-white'>
        Run
      </button>
    </div>
  );
}

export default CodeEditor;
