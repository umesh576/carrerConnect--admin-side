import JobForm from "@/components/admin/JobForm";

export default function NewJobPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Create New Job</h1>
        <button
          type="button"
          className="text-sm text-gray-500 hover:text-gray-700"
          onClick={() => window.history.back()}
        >
          Cancel
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <JobForm />
        </div>
      </div>
    </div>
  );
}
