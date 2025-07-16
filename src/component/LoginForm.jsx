"use client";
import React, { useState } from "react";
import Link from "next/link";
import Input from "./ui/Input";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      toast.error("something went wrong");
      return;
    }
    const loginStatus = await response.json();
    const userData = loginStatus.data;
    console.log(userData.role);
    if (userData.role !== "Admin") {
      toast.error("You cannot Access this page.");
      return;
    }
    router.push("/dashBoard");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Button type="submit">Login</Button> */}
      <Link href="/signup" className="text-blue-600 hover:underline">
        Don't have an account? Sign up
      </Link>{" "}
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 cursor-pointer"
      >
        Login
      </button>
      <ToastContainer />
    </form>
  );
};

export default LoginForm;
