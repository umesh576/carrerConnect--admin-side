import React, { useEffect, useState } from "react";
import JobCategoryCard from "../ui/JobCategoryCard";

const JobCategoryPage = () => {
  const [jobCategoryData, setjobCategoryData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchJobCategroy = async () => {
      const response = await fetch(
        "http://localhost:5000/api/jobcategory/getJobCategory",
        { headers: { Authorization: `BEARER ${token}` } }
      );

      if (response.ok) {
        setisLoading(true);
      }

      const jobCatData = await response.json();
      const JobCategory = await jobCatData.data;
      console.log(JobCategory);
      setjobCategoryData(JobCategory);
    };
    fetchJobCategroy();
  }, []);

  console.log("last one", jobCategoryData);

  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          jobCategoryData && jobCategoryData.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {jobCategoryData.map((item, index) => (
                <JobCategoryCard data={item} key={index} />
              ))}
            </div>
          ) : (
            <div className="text-center text-red-600 text-lg font-semibold">
              No job categories found.
            </div>
          )
        ) : (
          <div className="text-center text-gray-600 text-lg font-medium">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCategoryPage;
