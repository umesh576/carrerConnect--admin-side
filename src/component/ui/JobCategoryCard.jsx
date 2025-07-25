"use client";

import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const JobCategoryCard = ({ data }) => {
  const router = useRouter();
  const token = localStorage.getItem("authToken");

  const onDeletePost = async (dataId) => {
    try {
      console.log(dataId);
      const response = await fetch(
        `http://localhost:5000/api/jobcategory/delJobCategory/${dataId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `BEARER ${token}`,
            // "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Jobcategory sucessfully deleted.");
      } else {
        toast.error("Something went wrong for delete Category.");
        console.error("Delete failed.");
      }
    } catch (e) {
      toast.error("Something went wrong.");
    }
  };
  const onViewPosts = async (dataId) => {
    router.push(`/seepost/${dataId}`);
  };
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
          onClick={() => onViewPosts(data._id)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition"
        >
          🔍 See Posts
        </button>
        <button
          onClick={() => onDeletePost(data._id)}
          className="bg-red-400 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition"
        >
          🗑️ Delete
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobCategoryCard;
