"use client";
import React from "react";

const HeroPage = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-blue-600 text-white px-8  shadow-lg  bg-gradient-to-br from-black/10 to-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Your Admin Dashboard
        </h1>

        <p className="text-base md:text-lg mb-6 opacity-90">
          Manage job postings, applicants, and company profiles with ease. Get
          insights with our comprehensive analytics.
        </p>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded text-base md:text-lg font-semibold">
            View Analytics
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-600 text-white px-6 py-2 rounded text-base md:text-lg font-semibold">
            Manage Jobs
          </button>
        </div>

        <div className="flex justify-around flex-wrap gap-4 mt-6">
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold">1,240</h2>
            <p className="text-sm">Active Jobs</p>
          </div>
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold">5,689</h2>
            <p className="text-sm">Total Applicants</p>
          </div>
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold">87</h2>
            <p className="text-sm">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
