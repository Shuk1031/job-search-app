/*import React from "react";
import JobCategoryFilter from "./JobCategoryFilter";
import SalaryFilter from "./SalaryFilter";
import JobList from "./JobList";

const JobSearchPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
            
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
                <h1 className="text-xl font-bold mb-6 text-gray-800">求人検索</h1>
                <JobCategoryFilter />
                <SalaryFilter />
            </aside>

        
            <main className="flex-1 bg-white p-6 rounded-lg shadow-lg ml-0 md:ml-6">
                <JobList />
            </main>
        </div>
    );
};

export default JobSearchPage;*/
import React, { useState, useEffect } from "react";
import JobCategoryFilter from "./JobCategoryFilter";
import SalaryFilter from "./SalaryFilter";
import JobList from "./JobList";
import { fetchJobs } from "../api";

const JobSearchPage: React.FC = () => {
  const [category, setCategory] = useState<string>('');  // カテゴリの状態
  const [salary, setSalary] = useState<number>(0);  // 年収の状態（0は全ての年収）
  const [jobs, setJobs] = useState([]);  // 取得した求人のリスト
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);  // エラーメッセージ

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

    loadJobs();  // 初期ロード時に全求人を取得
  }, [category, salary]);  // フィルタ変更時も再取得

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-6">
      {/* サイドバー（フィルターセクション） */}
      <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
        <h1 className="text-xl font-bold mb-6 text-gray-800">求人検索</h1>
        <JobCategoryFilter onChangeCategory={setCategory} />
        <SalaryFilter onChangeSalary={setSalary} />
      </aside>

      {/* メインコンテンツ（求人リストセクション） */}
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