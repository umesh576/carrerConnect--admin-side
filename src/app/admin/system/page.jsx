export default function SystemStatusPage() {
  const systemStats = [
    { name: "Server Uptime", value: "99.9%", status: "good" },
    { name: "Database", value: "Connected", status: "good" },
    { name: "Storage", value: "75% used", status: "warning" },
    { name: "Active Users", value: "243", status: "good" },
    { name: "Pending Jobs", value: "12", status: "good" },
    { name: "Last Backup", value: "2 hours ago", status: "good" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">System Status</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {systemStats.map((stat) => (
          <div
            key={stat.name}
            className={`bg-white p-4 rounded-lg shadow ${
              stat.status === "warning"
                ? "border-l-4 border-yellow-500"
                : stat.status === "error"
                ? "border-l-4 border-red-500"
                : ""
            }`}
          >
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <p className="mt-1 text-xl font-semibold text-gray-900">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              id: 1,
              action: "New job posted",
              time: "5 minutes ago",
              user: "Admin",
            },
            {
              id: 2,
              action: "User registered",
              time: "15 minutes ago",
              user: "John Doe",
            },
            // More activity items...
          ].map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-indigo-500">•</div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  {activity.action} by {activity.user}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
