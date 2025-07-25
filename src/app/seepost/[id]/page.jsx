"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

const DynamicJobCategoryPage = () => {
  const [jobCategory, setJobCategory] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [isPost, setIspost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/jobcategory/getJobCategoryById/${id}`,
          {
            headers: {
              Authorization: `BEARER ${token}`,
            },
          }
        );
        if (!response.ok) {
          toast.error("This job category cannont required");
        }
        const jobcat = await response.json();
        const jobcatdat = await jobcat.data;
        console.log(jobcatdat);

        setJobCategory(jobcatdat);
      } catch (e) {
        toast.error("Some thing went wrong from the catch.");
      }
    };

    const fetchPost = async (postId) => {
      const response = await fetch(`http://localhost:5000/api/post/${postId}`);
    };

    fetchCategory();
  }, []);

  return (
    <div className="h-screen bg-white text-black">
      {jobCategory ? (
        <div>
          <div>
            <h1>{jobCategory.jobTitle}</h1>
          </div>
          <div>{jobCategory.decription}</div>
          <div>
            <div>
              <h1>Created post in the category.</h1>
            </div>
            <div>
              <p>post loadinggg...</p>
            </div>
          </div>
          <div>
            <Link href={"/"}>
              <button></button>
            </Link>
          </div>
        </div>
      ) : (
        <div>loading ......</div>
      )}

      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DynamicJobCategoryPage;
