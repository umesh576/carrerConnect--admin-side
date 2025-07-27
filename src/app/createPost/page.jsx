"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const CreatePostPage = () => {
  const { categoryId } = useSearchParams();
  return (
    <div className="w-full p-5 bg-white text-black">
      <div>
        <form>
          <div>
            <h1>Create new post</h1>
          </div>
          <div>
            <label htmlFor="title">Title*</label>
            <div>
              <input
                type="text"
                placeholder="Enter title.."
                name="title"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">description*</label>
            <div>
              <input
                type="text"
                placeholder="Enter description.."
                name="description"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="qualification">qualification*</label>
            <div>
              <input
                type="text"
                placeholder="Enter qualification.."
                name="qualification"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="title">salary*</label>
            <div>
              <input type="number" placeholder="Enter salary.." name="salary" />
            </div>
          </div>
          <div>
            <label htmlFor="experience">experience*</label>
            <div>
              <input
                type="number"
                placeholder="Enter experience.."
                name="experience"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="companyName">companyName*</label>
            <div>
              <input
                type="text"
                placeholder="Enter companyName.."
                name="companyName"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="picturePost">picturePost*</label>
            <div>
              <input
                type="file"
                placeholder="Enter picturePost.."
                name="picturePost"
                max={2}
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
