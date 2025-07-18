"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");

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
      const response = await fetch("");
    };
  }, [router]); // Only depends on `router`

  if (isLoading) {
    return <div>Loading...</div>; // Show loader while checking auth
  }

  return (
    <div>
      {isLogin ? (
        <div>
          <p>Welcome to the dashboard!</p>
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
