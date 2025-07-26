import React, { useEffect, useState } from "react";

const Appliedonpost = ({ appliedOnpostId }) => {
  const [appliedOnpostdata, setappliedOnpostdata] = useState([]);

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

        if (response.ok) {
          console.log("appliedOnpost fetch sucessfully");
        }
        setappliedOnpostdata(appliedOnbpostData);
      } catch (e) {
        console.log("appliedOnpost fetched error");
      }
    };
    fetchAppliedOnPost(appliedOnpostId);
  }, []);
  return (
    <div>
      <div>user enter details is: </div>
      {appliedOnpostdata ? (
        <div>
          <p>
            Name: {appliedOnpostdata.firstName + appliedOnpostdata.lastname}
          </p>
          <p>Number: {appliedOnpostdata.number}</p>
          <p>Experience:{appliedOnpostdata.experience}</p>
          <p>
            Email:
            {appliedOnpostdata.email}
          </p>
          <p>
            Linkden:{" "}
            <a href={appliedOnpostdata.linkdenProfile}>
              {appliedOnpostdata.linkdenProfile}
            </a>
          </p>
          <div>
            <button>View resume</button>
          </div>
          <div>
            <button>View coverletter</button>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Appliedonpost;
