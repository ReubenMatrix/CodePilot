import React from 'react';

const TestCaseField = ({ index, testCase, onChange }) => {
  return (
    <div key={index} className="grid grid-cols-2 gap-2 mb-2">
      <input
        className="w-full px-3 py-2 border rounded"
        placeholder="Input"
        value={testCase.input}
        onChange={(e) => onChange(index, 'input', e.target.value)}
      />
      <input
        className="w-full px-3 py-2 border rounded"
        placeholder="Output"
        value={testCase.output}
        onChange={(e) => onChange(index, 'output', e.target.value)}
      />
    </div>
  );
};

export default TestCaseField;
