import DataTable from "@/components/admin/DataTable";

export default function JobCategoriesPage() {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Slug", accessor: "slug" },
    { header: "Jobs Count", accessor: "count" },
    { header: "Status", accessor: "status" },
    { header: "Actions", accessor: "actions" },
  ];

  const data = [
    {
      id: 1,
      name: "Development",
      slug: "development",
      count: 124,
      status: "Active",
    },
    { id: 2, name: "Design", slug: "design", count: 87, status: "Active" },
    // More category data...
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Categories</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add New Category
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
