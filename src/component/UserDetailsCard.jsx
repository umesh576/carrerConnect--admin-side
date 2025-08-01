import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Appliedonpost from "./Appliedonpost";

const UserDetailsCard = ({ userId }) => {
  const [userData, setUserData] = useState({});
  const [userAppliedPost, setuserappliedPost] = useState([]);
  useEffect(() => {
    const fectchUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const userFullData = await response.json();
        const userData = await userFullData.data;
        console.log(userData);
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
    <div>
      <div></div>
      <div>
        <h1>User applied wuth this details</h1>
        <div>
          <p>Name: {userData.firstName + userData.lastName}</p>
        </div>
        {userData ? (
          <div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {userAppliedPost.map((item, index) => (
              <Appliedonpost
                appliedOnpostId={item}
                key={index}
                className="w-full"
              />
            ))}
          </div>
        ) : (
          //{" "}
          // </div>
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading applications...</p>
            </div>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default UserDetailsCard;
