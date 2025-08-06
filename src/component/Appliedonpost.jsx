import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Appliedonpost = ({ appliedOnpostId }) => {
  const [appliedOnpostdata, setappliedOnpostdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const router = useRouter();

  const fetchAppliedOnPost = async (id) => {
    const token = localStorage.getItem("authToken");
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
      console.log("data", appliedOnbpostData);

      if (!response.ok) {
        toast.error("something went wrong in fetch appliedOnpost.");
      }
      setappliedOnpostdata(appliedOnbpostData);
    } catch (e) {
      toast.error("something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAppliedOnPost(appliedOnpostId);
  }, []);

  const handleReject = async () => {
    setIsLoading(false);
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        `http://localhost:5000/api/useraccpet/reject/${appliedOnpostId}`,
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        }
      );
      if (response.ok) {
        toast.error("rejected.");
        console.log(okey);
      } else {
        console.log("not okey");
      }
    } catch (error) {
      toast.error("some thing went wrong.");
    }
  };
  const viewResume = () => {
    router.push(
      `/reviewCoverLetter?appliedOnpostId=${appliedOnpostdata.postId}&coverLetter=${appliedOnpostdata.resume[0]}`
    );
  };

  const viewCoverLetter = () => {
    router.push(
      `/reviewCoverLetter?appliedOnpostId=${appliedOnpostdata.postId}&coverLetter=${appliedOnpostdata.coverLetter[0]}`
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const inputDate = new Date(formdata.get("interviewDate"));
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    const data = {
      applyOnpostId: appliedOnpostdata._id,
      interviewDate: inputDate,
      interviewTime: inputDate,
      place: formdata.get("location"),
      experience: appliedOnpostdata.experience,
      resume: appliedOnpostdata.resume,
      coverLetter: appliedOnpostdata.coverLetter,
      firstName: appliedOnpostdata.firstName,
      lastname: appliedOnpostdata.lastname,
      email: appliedOnpostdata.email,
      number: appliedOnpostdata.number,
      postId: appliedOnpostdata.postId,
      linkdenProfile: appliedOnpostdata.linkdenProfile,
      userId: appliedOnpostdata.userId,
    };

    if (inputDate > today) {
      if (
        formdata.get("location") !== "" ||
        formdata.get("interviewTime" !== "")
      ) {
        const response = await fetch(
          `http://localhost:5000/api/useraccpet/acceptApplication`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          toast.error("Something went wrong.");
        } else {
          toast.success("user can select for the interview.");
        }
        setShowDialog(!showDialog);
      } else {
        console.log("hello");
      }
    } else {
      toast.error("you enter the past date.");
    }
  };
  return (
    <div>
      {showDialog == true ? (
        <div>
          {showDialog && (
            <div>
              <form
                onSubmit={handleFormSubmit}
                className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
              >
                <div className="space-y-4">
                  {/* Header with close button */}
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Schedule Interview
                    </h2>
                    <button
                      onClick={() => setShowDialog(!showDialog)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      aria-label="Close"
                    >
                      <span className="text-xl">×</span>
                    </button>
                  </div>

                  {/* Date and Time inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="interviewDate"
                        className="block text-sm font-medium text-black mb-1"
                      >
                        Interview Date
                      </label>
                      <input
                        type="date"
                        name="interviewDate"
                        id="interviewDate"
                        className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interviewTime"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Interview Time
                      </label>
                      <input
                        type="time"
                        name="interviewTime"
                        id="interviewTime"
                        className="w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="interviewTime"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Interview Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Location"
                        className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Details
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Applicant aplied with Details
            </h1>

            {appliedOnpostdata ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name and Contact */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-semibold text-black uppercase tracking-wider">
                        Name
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        {appliedOnpostdata.firstName +
                          " " +
                          appliedOnpostdata.lastname}
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
                    onClick={() => {
                      setShowDialog(true);
                    }}
                  >
                    Accept
                  </button>
                  <button
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
                    onClick={handleReject}
                  >
                    {isLoading ? <p>Reject</p> : <p>Rejecting</p>}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-green-600 text-center">
                <p>User details is already reviewed.</p>
              </div>
            )}

            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appliedonpost;
