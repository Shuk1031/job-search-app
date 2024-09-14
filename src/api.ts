// API呼び出し用の関数 (api.ts)
import axios from 'axios';

// APIエンドポイントのURL（HerokuにデプロイしたバックエンドのURLを使います）
const API_URL = 'https://your-heroku-backend-url/api/v1';

// 求人一覧の取得
export const fetchJobs = async ({ category, salary }: { category: string; salary: number }) => {
  const response = await axios.get(`${API_URL}/jobs`, {
    params: { category, salary }
  });
  return response.data;
};

// 新しい求人の投稿
export const postJob = async (jobData: { title: string, salary: number, category: string }) => {
  const response = await axios.post(`${API_URL}/jobs`, jobData);
  return response.data;
};