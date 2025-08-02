"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";

const CoverLetterReviewpage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("appliedOnpostId");
  const file = searchParams.get("coverLetter");
  console.log(id, file);
  const router = useRouter();
  const handleback = () => {
    router.push(`postReviewpage/${id}`);
  };
  return (
    <div className="bg-white py-30">
      <div className="p-3">
        <h1 className="text-center text-3xl font-bold text-black">
          Cover letter of applicant
        </h1>
      </div>
      {file && (
        <div>
          <div className="flex justify-center ">
            <div className="w-200 p-5">
              <img src={`http://localhost:5000/${file}`} alt="image" />
              <p>this is cv</p>
            </div>
          </div>
          <div className="text-black flex justify-center">
            <button
              className="p-5 bg-blue-400 px-8 rounded-lg"
              onClick={handleback}
            >
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverLetterReviewpage;
