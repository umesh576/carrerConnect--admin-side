import React from "react";

const JobCategoryCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-xl mx-auto hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.jobTitle}</h2>
      <p className="text-gray-600 mb-4">{data.decription}</p>

      <div className="flex flex-wrap gap-3">
        <button
          // onClick={() => onAddPost(data)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          ➕ Add Post
        </button>
        <button
          // onClick={() => onViewPosts(data)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition"
        >
          🔍 See Posts
        </button>
      </div>
    </div>
  );
};

export default JobCategoryCard;
