import React from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selected, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-800 text-sm font-semibold mb-2">{label}</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-3 border border-gray-300 bg-white rounded-lg shadow-md text-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150
                   hover:border-blue-400 hover:shadow-lg"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
