import Link from "next/link";

export default function RecentJobs() {
  const recentJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Innovations Inc.",
      date: "2023-06-15",
      applications: 24,
      status: "Active",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Creative Solutions",
      date: "2023-06-14",
      applications: 18,
      status: "Active",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Data Systems LLC",
      date: "2023-06-12",
      applications: 15,
      status: "Active",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      company: "Growth Marketing Co.",
      date: "2023-06-10",
      applications: 9,
      status: "Active",
    },
  ];

  return (
    <div className="overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Job Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Company
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Applications
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentJobs.map((job) => (
            <tr key={job.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900">
                    <Link
                      href={`/admin/jobs/${job.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {job.title}
                    </Link>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{job.company}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {job.applications}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
