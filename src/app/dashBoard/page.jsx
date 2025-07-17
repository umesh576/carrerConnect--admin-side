"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Hello = () => {
  const router = useRouter();
  const [isLogin, setislogin] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      console.log("Token: ", token);
      const response = await fetch("http://localhost:5000/api/auth/check", {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      });
      console.log(response);
      const isLoginData = await response.json();
      if (!response.ok) {
        toast.error("You can't access page");
        router.push("/login");
        return;
      }
    };
    checkAuth();
  }, []);
  return (
    <div>
      {isLogin && (
        <div>
          <p>hellos</p>
        </div>
      )}
      {!isLogin && (
        <div>
          <p>k xa khaber</p>
        </div>
      )}
    </div>
  );
};

export default Hello;
