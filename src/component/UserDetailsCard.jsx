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
    <div>
      {userData ? (
        <div>
          {userAppliedPost.map((item, index) => {
            return <Appliedonpost appliedOnpostId={item} key={index} />;
          })}
        </div>
      ) : (
        <div>
          <p>defghi</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsCard;
