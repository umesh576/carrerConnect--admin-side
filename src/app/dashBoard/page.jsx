"use client";
import JobCategoryCard from "../../component/jobCategory/JobCategory.jsx";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [jobCategoryData, setjobCategoryData] = useState[[]];

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const checkAuth = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/checkAdmin",
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          }
        );

        if (!response.ok) {
          toast.error("You can't access this page");
          router.push("/login");
          return;
        }

        setIsLogin(true); // Auth successful
      } catch (error) {
        toast.error("An error occurred");
        router.push("/login");
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    checkAuth();
    const fetchCategories = async () => {
      const response = await fetch(
        "http://localhost:5000/api/jobcategory/getJobCategory",
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        }
      );
      const jobCatData = await response.json();
      // const jobCategory = jobCatData.data;
      setjobCategoryData(jobCatData.data);
    };
    fetchCategories();
    console.log(jobCategoryData);
  }, [router]); // Only depends on `router`

  if (isLoading) {
    return <div>Loading...</div>; // Show loader while checking auth
  }

  return (
    <div>
      {isLogin ? (
        <div>
          <p>Welcome to the dashboard!</p>
          {/* {jobCategoryData.map((index, value) => {
            <JobCategoryCard key={index} catData={value} />;
          })} */}
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
