"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
const CeateCategories = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const jobTitle = formData.get("jobTitle");
    const decription = formData.get("decription");

    setLoading(true);
    const token = localStorage.getItem("authToken");
    console.log(token);
    if (!token) {
      router.push("/dashBoard");
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/jobcategory/jcategory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `BEARER ${token}`,
        },
        body: JSON.stringify({ jobTitle, decription }),
      }
    );

    if (response.ok) {
      setLoading(false);
      console.log("category created sucessfully");
      toast.success("New jobCategories added successfully.");

      setTimeout(() => {
        router.push("/dashBoard");
      }, 2000);
    } else {
      console.log("category created unsucessfully");
    }
  };
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div className="w-full bg-blue-300 h-screen flex items-center">
      <div className="w-full">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-black font-extrabold text-2xl text-center p-3">
            Create Jobcategories
          </h1>
          <form
            encType="multipart/form-data"
            onSubmit={handelSubmit}
            className="space-y-6 p-3"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Job Category Title*
                </label>
                <div>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Enter category title..."
                    required
                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="decription"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Job Category Description*
                </label>
                <div>
                  <input
                    type="text"
                    name="decription"
                    placeholder="Enter category description..."
                    required
                    className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CeateCategories;
