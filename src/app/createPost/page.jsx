"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const CreatePostPage = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const handleSubmit = async (e) => {
    if (!token) {
      toast.error("Please login first.");
      setTimeout(() => {
        router.push("/");
      }, 600);
    }
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("jobCategoryid", categoryId);

    try {
      const response = await fetch("http://localhost:5000/api/post/add", {
        method: "POST",
        headers: {
          Authorization: `BEARER ${token}`,
        },
        body: formData,
      });
      console.log(await response.json());
      if (response.ok) {
        toast.success("Post was sucessfully created.");
        router.push(`/seepost/${categoryId}`);
      } else {
        toast.error("Something went wrong from backend.");
      }
    } catch (e) {
      console.log("Something went Wrong.");
    }
  };
  const handleGoBack = () => {
    setLoading(false);
    setTimeout(() => {
      router.push(`/seepost/${categoryId}`);
    }, 500);
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Create New Post
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title*
              </label>
              <input
                type="text"
                placeholder="Enter title.."
                name="title"
                required
                className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Enter companyName.."
                name="companyName"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description*
              </label>
              <textarea
                placeholder="Enter description.."
                name="description"
                required
                rows={3}
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Qualification */}
            <div className="space-y-2">
              <label
                htmlFor="qualification"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification*
              </label>
              <input
                type="text"
                placeholder="Enter qualification.."
                name="qualification"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <label
                htmlFor="salary"
                className="block text-sm font-medium text-gray-700"
              >
                Salary*
              </label>
              <input
                type="number"
                placeholder="Enter salary.."
                name="salary"
                required
                className="w-full px-4 text-black py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700"
              >
                Experience (years)*
              </label>
              <input
                type="number"
                placeholder="Enter experience.."
                name="experience"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Picture Upload */}
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="picturePost"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image*
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                  </div>
                  <input
                    className="text-black"
                    type="file"
                    name="picturePost"
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <button
              type="button"
              onClick={handleGoBack}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {!loading ? "Backing..." : "Back"}
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Post
            </button>
          </div>
        </form>
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

export default CreatePostPage;
