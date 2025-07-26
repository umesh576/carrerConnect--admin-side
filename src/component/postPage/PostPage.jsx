"use client";
import React from "react";
import PostCard from "../ui/postCard";

const PostPage = ({ allPostId }) => {
  return (
    <div>
      <div>
        {allPostId.map((items, index) => {
          return <PostCard postId={items} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PostPage;
