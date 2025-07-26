"use client";
import React from "react";
import PostCard from "../ui/postCard";

const PostPage = ({ allPostId }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {allPostId.map((items, index) => (
        <div key={index} className="w-full h-full">
          <PostCard postId={items} />
        </div>
      ))}
    </div>
  );
};

export default PostPage;
