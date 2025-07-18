export default function SystemHealth() {
  const systemMetrics = [
    { name: "Server Load", value: "24%", status: "normal" },
    { name: "Database", value: "Connected", status: "normal" },
    { name: "Response Time", value: "142ms", status: "normal" },
    { name: "Uptime", value: "99.98%", status: "normal" },
    { name: "Storage", value: "65% used", status: "warning" },
  ];

  return (
    <div className="space-y-4">
      {systemMetrics.map((metric) => (
        <div key={metric.name} className="flex items-start">
          <div
            className={`flex-shrink-0 mt-1 h-3 w-3 rounded-full ${
              metric.status === "normal"
                ? "bg-green-500"
                : metric.status === "warning"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            aria-hidden="true"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{metric.name}</p>
            <p className="text-sm text-gray-500">{metric.value}</p>
          </div>
        </div>
      ))}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Last checked: {new Date().toLocaleString()}
        </p>
      </div>
    </div>
  );
}
