"use client";
import JobCategoryCard from "../../component/jobCategory/JobCategory.jsx";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [jobCategoryData, setjobCategoryData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("plase login first");
      router.push("/login");
    }

    const checkAuth = async () => {
      try {
        const authresponse = await fetch(
          "http://localhost:5000/api/auth/checkAdmin",
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          }
        );

        if (!authresponse.ok) {
          toast.error("You can't access this page");
          router.push("/login");
          return;
        }

        setIsLogin(true); // Auth successful
        // await fetchCategories();
        const response = await fetch(
          "http://localhost:5000/api/jobcategory/getJobCategory",
          { headers: { Authorization: `BEARER ${token}` } }
        );
        const jobCatData = await response.json();
        console.log("API Response:", jobCatData);
        console.log("Data to set:", jobCatData?.data);

        // Ensure we're setting a proper array
        const dataToSet = Array.isArray(jobCatData?.data)
          ? jobCatData.data
          : [];

        setjobCategoryData(dataToSet);

        // This will still show old state - that's expected!
        console.log("Current state (will be old):", jobCategoryData);
      } catch (error) {
        toast.error("An error occurred");
        router.push("/login");
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    checkAuth();
  }, [jobCategoryDat]); // Only depends on `router`

  if (isLoading) {
    return <div>Loading...</div>; // Show loader while checking auth
  }

  return (
    <div>
      {isLogin ? (
        <div>
          <p>Welcome to the dashboard!</p>
          {jobCategoryData.map((value, index) => {
            <JobCategoryCard key={index} catData={value} />;
          })}
        </div>
      ) : (
        <div className="text-center text-red-500">
          <p>Access denied. Redirecting...</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
