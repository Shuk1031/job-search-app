/*import React from "react";

const JobList: React.FC = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">求人一覧</h3>
            <ul className="space-y-2">
                <li className="border border-gray-300 p-4 rounded bg-gray-50">
                    <span className="font-semibold">営業職 </span>| 年収:<span className="text-blue-500"> 350万円</span >
                </li>
                <li className="border border-gray-300 p-4 rounded bg-gray-50">
                    <span className="font-semibold">エンジニア</span>| 年収:<span className="text-blue-500"> 600万円</span >
                </li>
                
                
            </ul>
        </div>
    );
};
export default JobList;*/

import React from "react";

interface JobListProps {
    jobs: Array<{ id: number; title: string; salary: number; category: string }>;
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800">求人一覧</h3>
            <ul className="space-y-2">
                {jobs.map((job) => (
                    <li key={job.id} className="border border-gray-300 p-4 rounded bg-gray-50">
                        <span className="font-semibold">{job.title} </span>| 年収:<span className="text-blue-500"> {job.salary}万円</span >
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
