"use client";
import HeroPage from "../../component/heropage/page";
import JobCategoryCard from "../../component/jobCategory/JobCategory.jsx";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import JobCategoryCard from "./../../component/jobCategory/JobCategory";

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
          toast.error("You can't access this page please login first.");
          router.push("/login");
          return;
        }

        // await fetchCategories();

        const response = await fetch(
          "http://localhost:5000/api/jobcategory/getJobCategory",
          { headers: { Authorization: `BEARER ${token}` } }
        );

        if (response.ok) {
          console.log("hello");
        } else {
          console.log("hyyy");
        }
        const jobCatData = await response.json();

        const JobCategory = await jobCatData.data;

        setjobCategoryData(JobCategory);

        // // This will still show old state - that's expected!
        setIsLogin(true);
      } catch (error) {
        toast.error("An error occurred");
        router.push("/login");
      } finally {
        //this is setLoading
        setIsLoading(false); // Stop loading
      }
    };
    checkAuth();
  }, []); // Only depends on `router`

  if (isLoading) {
    return <div>Loading...</div>; // Show loader while checking auth
  }

  return (
    <div className="h-screen">
      {isLogin ? (
        <div>
          <p>Welcome to the dashboard!</p>
          {jobCategoryData ? (
            <div>
              {/* <p>hello hyyy</p>
               */}
              <HeroPage />
            </div>
          ) : (
            <div>
              <p>hello hyyy but byyy</p>
            </div>
          )}
          {/* {jobCategoryData.map((value, index) => {
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
