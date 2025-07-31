// src/HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div className="flex items-center justify-center bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to My React Site!
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          This is a demonstration of a multi-page React application using `react-router-dom`. Explore the documentation and articles sections!
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/documentation" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
            Go to Documentation
          </a>
          <a href="/articles" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
            Read Articles
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
