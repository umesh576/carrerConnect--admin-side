"use client";
import { useEffect, useState } from "react";
import LoginPage from "./login/page";
import { toast } from "react-toastify";
export default function Home() {
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const token = localStorage.getItem("authToken");
  //     console.log(token);
  //     if (!token) {
  //       toast.error("Please login first for go to dashboard.");
  //     }

  //     const authCheck = await fetch("http://localhost:5000/api/auth/check", {
  //       headers: {
  //         Authorization: `BEARER ${authtoken}`,
  //       },
  //     });
  //     console.log(token);
  //   };
  //   checkLogin();
  // }, []);

  return (
    <div>
      <LoginPage />
    </div>
  );
}
