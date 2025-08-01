import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Appliedonpost = ({ appliedOnpostId, userId }) => {
  const [appliedOnpostdata, setappliedOnpostdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchAppliedOnPost = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/applypost/${id}`,
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          }
        );

        const apliedonpost = await response.json();
        const appliedOnbpostData = await apliedonpost.data;
        console.log(appliedOnbpostData);

        if (!response.ok) {
          toast.error("something went wrong in fetch appliedOnpost.");
        }
        setappliedOnpostdata(appliedOnbpostData);
      } catch (e) {
        console.log("appliedOnpost fetched error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAppliedOnPost(appliedOnpostId);
  }, [appliedOnpostId]);

  const handleDelete = () => {};
  const viewProfile = () => {};
  const acceptRequest = () => {};
  const viewResume = () => {};
  const handleclick = () => {};
  const userApplicationAccepted = () => {};
  const viewCoverLetter = () => {
    const filePath = appliedOnpostdata.coverLetter[0].replace(/\\/g, "/"); // 🔁 Replace backslash
    const encodedPath = encodeURIComponent(filePath);
    router.push(
      `/reviewCoverLetter?appliedOnpostId=${appliedOnpostdata.postId}&coverLetter=${encodedPath}`
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        Applicant aplied with Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name and Contact */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-black uppercase tracking-wider">
              Name
            </p>
            <p className="text-lg font-medium text-gray-900">
              {appliedOnpostdata.firstName + " " + appliedOnpostdata.lastname}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Contact Number
            </p>
            <p className="text-lg font-medium text-gray-900">
              {appliedOnpostdata.number}
            </p>
          </div>
        </div>

        {/* Experience and Email */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Experience
            </p>
            <p className="text-lg font-medium text-gray-900">
              {appliedOnpostdata.experience} years
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Email
            </p>
            <p className="text-lg font-medium text-gray-900 break-all">
              {appliedOnpostdata.email}
            </p>
          </div>
        </div>
      </div>

      {/* LinkedIn Profile */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          LinkedIn Profile
        </p>
        <a
          href="https://www.linkedin.com/in/lunesh-josh-475b81304/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-lg font-medium break-all underline hover:no-underline mt-1 inline-block"
        >
          {appliedOnpostdata.linkdenProfile}
        </a>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          onClick={viewResume}
        >
          View Resume
        </button>
        <button
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          onClick={viewCoverLetter}
        >
          View Cover Letter
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          onClick={userApplicationAccepted}
        >
          Accept
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          onClick={handleclick}
        >
          Reject
        </button>
        <button
          className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          onClick={handleDelete}
        >
          View profile
        </button>
        <button
          className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          onClick={handleDelete}
        >
          View real details
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Appliedonpost;
