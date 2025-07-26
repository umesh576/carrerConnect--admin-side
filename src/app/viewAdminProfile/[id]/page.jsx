import { useParams } from "next/navigation";
import React from "react";

const ViewAdminProfile = () => {
  const { id } = useParams();
  return <div>ViewAdminProfile</div>;
};

export default ViewAdminProfile;
