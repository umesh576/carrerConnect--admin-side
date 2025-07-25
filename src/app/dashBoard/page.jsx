"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import JobCategoryCard from "./../../component/jobCategory/JobCategory";
import HeroPage from "./../../component/heropage/page";
import JobCategoryPage from "../../component/jobCategory/jobcategoryPage";

const Dashboard = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

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
    <div className="">
      {isLogin ? (
        <div>
          <HeroPage />

          <div className="bg-white">
            <div className="w-full flex justify-center py-1">
              <h1 className="text-4xl font-extrabold text-black">
                Job categories
              </h1>
            </div>
            <div>
              <JobCategoryPage />
            </div>
          </div>
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
