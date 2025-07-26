"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const PostReviewPage = () => {
  const { postId } = useParams();
  const [postdata, setPostData] = useState([]);
  const [isloading, setLoading] = useState(false);

  const fetchPostDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/post/${postId}`);
      console.log("umesh");
      const postdat = await response.json().data;
      console.log(postdat);
      if (response.ok) {
        console.log("post fetch sucessgully");
        isloading(true);
      }
      //   if()
    } catch (e) {
      console.log("some thing wrong in th catch ");
    }
    fetchPostDetails();
  };
  return (
    <div>
      <div>
        {isloading ? (
          <div>
            <p>post fetched</p>
          </div>
        ) : (
          <div>
            <p>loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostReviewPage;
