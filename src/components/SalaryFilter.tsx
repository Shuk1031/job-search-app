/*import React from "react";

const SalaryFilter: React.FC = () => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">年収</h3>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="300">300万円以上</option>
                <option value="500">500万円以上</option>
                
            </select>
        </div>
    );
};

export default SalaryFilter;*/

import React from "react";

interface SalaryFilterProps {
  onChangeSalary: (salary: number) => void;
}

const SalaryFilter: React.FC<SalaryFilterProps> = ({ onChangeSalary }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-4">年収</h3>
      <select 
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onChangeSalary(Number(e.target.value))}
      >
        <option value="300">300万円以上</option>
        <option value="500">500万円以上</option>
        <option value="700">700万円以上</option>
        {/* 他のオプションも追加可能 */}
      </select>
    </div>
  );
};

export default SalaryFilter;