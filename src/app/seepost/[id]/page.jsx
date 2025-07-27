"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import PostPage from "../../../component/postPage/PostPage";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const DynamicJobCategoryPage = () => {
  const router = useRouter();
  const [jobCategory, setJobCategory] = useState({});
  const [allPost, setAllPost] = useState([]);
  const [isPost, setIspost] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/jobcategory/getJobCategoryById/${id}`,
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          }
        );
        if (!response.ok) {
          toast.error("This job category cannot be retrieved");
          throw new Error("Failed to fetch job category");
        }
        const jobcat = await response.json();
        const jobcatdat = await jobcat.data;

        setJobCategory(jobcatdat);
        setAllPost(jobcatdat.postCreatedOn || []);
        setIspost(true);
      } catch (e) {
        toast.error("Something went wrong");
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
  }, [id]);
  const handelGoback = async () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashBoard");
    }, 1000);
  };

  const createNewPost = () => {
    console.log("post is creating");
    // You might want to add navigation to create post page here
    router.push(`/createPost?categoryId=${id}`);
  };

  const handleDeleteCategory = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/");
      toast.error("plaease login first");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:5000/api/jobcategory/delJobCategory/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `BEARER ${token}`,
          },
        }
      );

      if (response.ok) {
        toast.success("Jobcategory sucessfully deleted.");
        router.push("/dashBoard");
      } else {
        toast.error("Something went wrong for delete Category.");
        console.error("Delete failed.");
      }
    } catch (e) {
      toast.error("Something went wrong.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {jobCategory ? (
          <div className="space-y-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Job Category Details
              </h1>
              <div className="flex space-x-3">
                <button
                  onClick={handleDeleteCategory}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  Delete Category
                </button>
                <button
                  onClick={createNewPost}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  Create New Post
                </button>
              </div>
            </div>

            {/* Category Details Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {jobCategory.jobTitle || "Untitled Category"}
              </h2>
              <p className="text-gray-600 mb-4">
                {jobCategory.decription || "No description provided."}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {allPost.length} Posts
                </span>
                {/* Add more tags if needed */}
              </div>
            </div>

            {/* Posts Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Posts in this Category
                </h2>
                <div className="mt-2 h-px bg-gray-200"></div>
              </div>

              {isPost ? (
                allPost.length > 0 ? (
                  <div className="space-y-6">
                    <PostPage allPostId={allPost} />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No posts
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get started by creating a new post in this category.
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={createNewPost}
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <svg
                          className="-ml-1 mr-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        New Post
                      </button>
                    </div>
                  </div>
                )
              ) : (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Category not found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              The requested job category could not be loaded.
            </p>
          </div>
        )}
        <div className="p-4">
          <button
            className=" border-1 py-3 px-8 rounded-lg bg-blue-500 text-white  hover:bg-orange-300 cursor-pointer"
            onClick={handelGoback}
          >
            {!loading ? <div>Back</div> : <div>Backing...</div>}
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DynamicJobCategoryPage;
