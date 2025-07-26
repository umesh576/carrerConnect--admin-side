"use client";
import UserDetailsCard from "../../../component/UserDetailsCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const PostReviewPage = () => {
  const { postId } = useParams();
  const [postdata, setPostData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [appliedUser, setApplieduser] = useState([]);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/post/${postId}`
        );
        const postdat = await response.json();
        const postData = postdat.data;

        if (!response.ok) {
          toast.error("something went wrong at fetch post.");
          // console.log("post fetch sucessgully");
        }
        setLoading(true);
        setPostData(postData);
        //   if()
        setApplieduser(postData.aapliedUser);
      } catch (e) {
        // console.log("some thing wrong in th catch ");
        toast.error("Something went wrong in postfetch.");
      }
    };
    fetchPostDetails();
  }, []);

  return (
    <div>
      <div>
        {isloading ? (
          <div>
            <div className="bg-white  shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              {/* Post Header */}
              <div className="p-4 border-b border-gray-100">
                <h1 className="text-xl font-bold text-gray-800 line-clamp-2">
                  {postdata.title}
                </h1>
              </div>

              {/* Post Content */}
              <div className="p-4 flex-grow">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700 mb-1">
                    Company:{" "}
                    <span className="font-normal">
                      {postdata.companyName || "Not specified"}
                    </span>
                  </h2>
                  <p className="text-gray-600 mb-3 line-clamp-3">
                    {postdata.description || "No description provided."}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Experience:</p>
                      <p className="text-gray-600">
                        {postdata.experience || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">
                        Qualification:
                      </p>
                      <p className="text-gray-600">
                        {postdata.qualification || "-"}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Salary:</p>
                      <p className="text-gray-600">
                        {postdata.salary || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* {postdata.picturePost && (
                  <div className="mb-4">
                    <Image
                      width={400}
                      height={300}
                      alt="Post image"
                      src={
                        postdata.picturePost ||
                        "https://unsplash.com/s/photos/image"
                      }
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                )} */}
              </div>
            </div>
            <div>
              <div>
                <h1>User details who applied in the post</h1>
              </div>
              {appliedUser ? (
                <div>
                  {appliedUser.map((items, index) => {
                    return <UserDetailsCard userId={items} key={index} />;
                  })}
                </div>
              ) : (
                <div>fetching applied feature</div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p>loading...</p>
          </div>
        )}
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PostReviewPage;
