import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Simple test component first
const TestPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-600">Test Page Working!</h1>
      <p className="text-lg mt-4">If you see this, React is working.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;