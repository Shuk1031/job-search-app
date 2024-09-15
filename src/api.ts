import axios from 'axios';

// APIエンドポイントのURL（環境変数から取得）
const API_URL = process.env.REACT_APP_API_URL || 'https://lit-scrubland-20921-8222011ed7f3.herokuapp.com/api/v1';

// 求人一覧の取得
export const fetchJobs = async ({ category, salary }: { category: string; salary: number }) => {
  try {
    const response = await axios.get(`${API_URL}/jobs`, {
      params: { category, salary },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('求人の取得に失敗しました。');
  }
};

// 新しい求人の投稿
export const postJob = async (jobData: { title: string, salary: number, category: string }) => {
  try {
    const response = await axios.post(`${API_URL}/jobs`, jobData);
    return response.data;
  } catch (error) {
    console.error('Error posting job:', error);
    throw new Error('求人の投稿に失敗しました。');
  }
};