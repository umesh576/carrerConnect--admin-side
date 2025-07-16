import LoginForm from "@/component/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login to Continue
        </h2>{" "}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
