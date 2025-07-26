import React from "react";
import { useParams } from "next/navigation";

const ViewUserProfile = () => {
  const { id } = useParams();

  return <div>ViewUserProfile</div>;
};

export default ViewUserProfile;
