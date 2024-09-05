import React from "react";
import JobCategoryFilter from "./JobCategoryFilter";
import SalaryFilter from "./SalaryFilter";
import JobList from "./JobList";

const JobSearchPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
            {/* サイドバー（フィルターセクション） */}
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
                <h1 className="text-xl font-bold mb-6 text-gray-800">求人検索</h1>
                <JobCategoryFilter />
                <SalaryFilter />
            </aside>

            {/* メインコンテンツ（求人リストセクション） */}
            <main className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-0 md:ml-6">
                <JobList />
            </main>
        </div>
    );
};

export default JobSearchPage;
