
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobSearchPage from './components/JobSearchPage';
import JobPostPage from './components/JobPostPage';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
      
        <header className="bg-gray-800 text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">求人検索アプリ</h1>
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">求人検索</Link>
              <Link to="/post" className="hover:underline">求人投稿</Link>
            </nav>
          </div>
        </header>

        
        <div className="max-w-7xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/post" element={<JobPostPage />} />
            <Route path="/" element={<JobSearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;