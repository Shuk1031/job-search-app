
import React, { useState, useEffect } from "react";
import JobCategoryFilter from "./JobCategoryFilter";
import SalaryFilter from "./SalaryFilter";
import JobList from "./JobList";
import { fetchJobs } from "../api";

const JobSearchPage: React.FC = () => {
  const [category, setCategory] = useState<string>('');  
  const [salary, setSalary] = useState<number>(0);  
  const [jobs, setJobs] = useState([]);  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      try {
        const fetchedJobs = await fetchJobs({ category, salary });
        setJobs(fetchedJobs);
      } catch (err) {
        setError("データの取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();  
  }, [category, salary]);  

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
      
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
        <h1 className="text-xl font-bold mb-6 text-gray-800">求人検索</h1>
        <JobCategoryFilter onChangeCategory={setCategory} />
        <SalaryFilter onChangeSalary={setSalary} />
      </aside>

      
      <main className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-0 md:ml-6">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : loading ? (
          <p>読み込み中...</p>
        ) : (
          <JobList jobs={jobs} />
        )}
      </main>
    </div>
  );
};

export default JobSearchPage;