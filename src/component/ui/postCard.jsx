"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";

const PostCard = ({ postId }) => {
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/post/${postId}`
        );
        const postdata = await response.json();
        const allPostData = await postdata.data;
        if (response.ok) {
          //   setAllPost();
          setPostData(allPostData);
          setLoading(true);
          //   console.log("umesh");
        }
      } catch (e) {
        // toast.error("something went wrong in fetch post.");
      }
    };
    fetchPost();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <div>
            <div>
              <h1>{postData.title}</h1>
            </div>
            <div>
              <h1>Company Name: {postData.companyName}</h1>
              <p>Description:{postData.description}</p>
              <p>Experiences: {postData.experience}</p>
              <p>Qualification: {postData.qualification}</p>
              <p>salary: {postData.salary}</p>
            </div>
          </div>
          {/* <div>
            {postData.picturePost && (
              <Image
                width={1000}
                height={1000}
                alt="image"
                src={
                  postData.picturePost || "https://unsplash.com/s/photos/image"
                }
                className="rounded-lg object-cover"
              />
            )}
          </div> */}
          <div>
            <button>See more</button>
          </div>
          <div>
            <button>Delete post</button>
          </div>
        </div>
      ) : (
        <div>
          <p>post loading..</p>
        </div>
      )}
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PostCard;
