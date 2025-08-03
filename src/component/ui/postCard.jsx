"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const PostCard = ({ postId }) => {
  const router = useRouter();
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return; // Add this guard clause

      try {
        setLoading(false);
        const response = await fetch(
          `http://localhost:5000/api/post/${postId}`
        );
        const postdata = await response.json();
        const allPostData = await postdata.data;

        if (response.ok) {
          setPostData(allPostData);
          setLoading(true);
        } else {
          throw new Error("Failed to fetch post");
        }
      } catch (e) {
        toast.error("Failed to load post data");
        console.error(e);
      }
    };

    fetchPost();
  }, [postId]); // Make sure postId is always included

  const handleSeeMore = () => {
    // Add your see more logic here
    console.log("See more clicked for post:", postId);
    router.push(`/postReviewpage/${postId}`);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log("Delete clicked for post:", postId);
    toast.warning("Delete functionality not implemented yet");
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
          {/* Post Header */}
          <div className="p-4 border-b border-gray-100">
            <h1 className="text-xl font-bold text-gray-800 line-clamp-2">
              {postData.title}
            </h1>
          </div>

          {/* Post Content */}
          <div className="p-4 flex-grow">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                Company:{" "}
                <span className="font-normal">
                  {postData.companyName || "Not specified"}
                </span>
              </h2>
              <p className="text-gray-600 mb-3 line-clamp-3">
                {postData.description || "No description provided."}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Experience:</p>
                  <p className="text-gray-600">{postData.experience || "-"}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Qualification:</p>
                  <p className="text-gray-600">
                    {postData.qualification || "-"}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Salary:</p>
                  <p className="text-gray-600">
                    {postData.salary || "Not specified"}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              {postData.picturePost && (
                <div className="mb-4">
                  <img
                    alt="Post image"
                    src={`http://localhost:3000/${postData.picturePost} `}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Post Footer */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between">
            <button
              onClick={handleSeeMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              See Details
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="animate-pulse flex space-x-4 items-center justify-center">
            <div className="rounded-full bg-gray-200 h-10 w-10"></div>
            <div className="text-gray-500">Loading post...</div>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        key={1}
      />
    </div>
  );
};

export default PostCard;
