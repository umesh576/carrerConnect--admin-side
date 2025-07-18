export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Personal Information</h2>
        </div>

        <div className="px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <p className="mt-1 text-sm text-gray-900">Admin User</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">admin@jobportal.com</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <p className="mt-1 text-sm text-gray-900">Super Admin</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Login
              </label>
              <p className="mt-1 text-sm text-gray-900">Today at 10:30 AM</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
