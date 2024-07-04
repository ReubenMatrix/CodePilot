import React from 'react';

const SelectField = ({ id, label, value, onChange, options }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 border rounded"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
