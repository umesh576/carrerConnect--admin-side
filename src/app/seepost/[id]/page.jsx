"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import PostPage from "../../../component/postPage/PostPage";
import { useRouter } from "next/navigation";

const DynamicJobCategoryPage = () => {
  const router = useRouter();
  const [jobCategory, setJobCategory] = useState({});
  const [allPost, setAllPost] = useState([]);
  const [isPost, setIspost] = useState(false);
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
        // console.log(jobcatdat);

        setJobCategory(jobcatdat);
        setIspost(true);
        // console.log("niuce", jobcatdat.postCreatedOn);

        setAllPost(jobcatdat.postCreatedOn);
      } catch (e) {
        toast.error("Some thing went wrong from the catch.");
      }
    };

    fetchCategory();
  }, []);
  const createNewPost = () => {
    console.log("post is creating");
  };
  return (
    <div className="h-screen bg-white text-black">
      {jobCategory ? (
        <div>
          <div>
            <h1>Job category details</h1>
          </div>
          <div>
            <h1>{jobCategory.jobTitle}</h1>
          </div>
          <div>{jobCategory.decription}</div>
          <div>
            <div>
              <h1>Created post in the category.</h1>
            </div>
            <div>
              <div>
                <h1>Post details</h1>
              </div>
              {isPost ? (
                <div>
                  <div>
                    <PostPage allPostId={allPost} />
                  </div>
                </div>
              ) : (
                <div>loading ...</div>
              )}
            </div>
          </div>
          <div>
            <button className="bg-orange-300 p-3 rounded-lg text-1xl cursor-pointer">
              delete the category
            </button>
          </div>
          <div className="m-2">
            <button
              className="bg-orange-300 p-3 rounded-lg text-1xl cursor-pointer"
              onClick={createNewPost}
            >
              Create new post
            </button>
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
