import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Appliedonpost from "./Appliedonpost";
import Profile from "./../app/profile/page";

const UserDetailsCard = ({ userId }) => {
  const [userData, setUserData] = useState({});
  const [userAppliedPost, setuserappliedPost] = useState([]);
  useEffect(() => {
    const fectchUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const userFullData = await response.json();
        const userData = await userFullData.data;
        console.log(userData.profile);
        if (!response.ok) {
          toast.error("getting some error in the fetch user");
        }

        setUserData(userData);
        setuserappliedPost(userData.appliedOnPost);
      } catch (e) {
        console.log("user fetched error");
      }
    };

    fectchUser(userId);
  }, []);
  return (
    // <div className="space-y-6 py-4">
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Applied User Details
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
          <img
            src={`http://localhost:5000/${userData.profile}`}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <div>
            <p className="text-gray-600 font-medium">Name:</p>
            <p className="text-gray-800">
              {userData.firstName + " " + userData.lastName}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Email:</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Phone:</p>
            <p className="text-gray-800">{userData.phoneNumber}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Gender:</p>
            <p className="text-gray-800">{userData.gender}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Role:</p>
            <p className="text-gray-800">{userData.role}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Skill:</p>
            <p className="text-gray-800">{userData.skill}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-600 font-medium">Address:</p>
            <p className="text-gray-800">{userData.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Applied Positions
        </h2>

        {userData ? (
          <div className="space-y-4">
            {userAppliedPost.map((item, index) => (
              <Appliedonpost
                appliedOnpostId={item}
                key={index}
                className="w-full border rounded-lg p-4 hover:shadow transition-shadow"
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading applications...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetailsCard;
