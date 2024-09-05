import React from "react";

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
                
                {/*他の求人も追加出来ます */}
            </ul>
        </div>
    );
};
export default JobList;