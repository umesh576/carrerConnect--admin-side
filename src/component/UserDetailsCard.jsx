import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserDetailsCard = ({ userId }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fectchUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        const userFullData = await response.json();
        const userData = await userFullData.data;
        if (response.ok) {
          console.log("user fetch sucessfully");
        }

        setUserData(userData);
      } catch (e) {
        console.log("user fetched error");
      }
    };

    // const fetchAppliedOnPost = async () => {
    //   try {
    //     const response = await fetch(``);
    //     if (response.ok) {
    //       console.log("user fetch sucessfully");
    //     }
    //   } catch (e) {
    //     console.log("user fetched error");
    //   }
    // };
  }, []);
  return <div>UserDetailsCard is this</div>;
};

export default UserDetailsCard;
