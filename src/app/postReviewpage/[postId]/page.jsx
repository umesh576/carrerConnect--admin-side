"use client";
import UserDetailsCard from "../../../component/UserDetailsCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const PostReviewPage = () => {
  const { postId } = useParams();
  const [postdata, setPostData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [appliedUser, setApplieduser] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/post/${postId}`
        );
        const postdat = await response.json();
        const postData = postdat.data;

        if (!response.ok) {
          toast.error("something went wrong at fetch post.");
        }
        setLoading(true);
        setPostData(postData);
        setApplieduser(postData.aapliedUser);
      } catch (e) {
        toast.error("Something went wrong in postfetch.");
      }
    };
    fetchPostDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isloading ? (
          <div className="space-y-8">
            {/* Post Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {postdata.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">
                    {postdata.companyName || "Company not specified"}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {postdata.description || "No description provided."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Experience
                    </p>
                    <p className="text-gray-800 font-medium">
                      {postdata.experience || "-"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Qualification
                    </p>
                    <p className="text-gray-800 font-medium">
                      {postdata.qualification || "-"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Salary
                    </p>
                    <p className="text-gray-800 font-medium">
                      {postdata.salary || "Not disclosed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicants Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Applicants for this Position
                </h2>
                <div className="border-b border-gray-200 mt-2"></div>
              </div>

              {appliedUser ? (
                <div>
                  {appliedUser.length > 0 ? (
                    <div>
                      {appliedUser.map((items, index) => (
                        // <div className="relative group overflow-hidden  rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
                        <div>
                          <UserDetailsCard
                            userId={items}
                            key={index}
                            className="transform transition-all duration-300 group-hover:-translate-y-0.5 relative z-10 h-full p-6"
                          />
                        </div>
                        // </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mb-6">
                        <svg
                          className="h-12 w-12 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        No applicants yet
                      </h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        This position hasn't received any applications yet.
                        Check back later or share this job post.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-100 opacity-60 animate-ping"></div>
                    <div className="relative animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-6"></div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Loading applicants
                  </h3>
                  <p className="text-gray-500">
                    Please wait while we fetch candidate details
                  </p>
                  <div className="mt-4 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full animate-progress"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading post details...</p>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default PostReviewPage;
