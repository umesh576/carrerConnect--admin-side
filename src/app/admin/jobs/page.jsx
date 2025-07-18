import DataTable from "@/components/admin/DataTable";
import Link from "next/link";

export default function JobsPage() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Company", accessor: "company" },
    { header: "Category", accessor: "category" },
    { header: "Type", accessor: "type" },
    { header: "Status", accessor: "status" },
    { header: "Applications", accessor: "applications" },
    { header: "Actions", accessor: "actions" },
  ];

  const data = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      category: "Development",
      type: "Full-time",
      status: "Active",
      applications: 24,
    },
    // More job data...
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Postings</h1>
        <Link
          href="/admin/jobs/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Create New Job
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
