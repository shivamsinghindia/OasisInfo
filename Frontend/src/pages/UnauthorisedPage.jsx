import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorisedPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Replace '/' with the desired path
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
        <p className="text-gray-700 mb-6">You do not have permission to access this page.</p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
          onClick={handleClick}
        >
          Go to Login Page
        </button>
      </div>
    </div>
  );
};

export default UnauthorisedPage;