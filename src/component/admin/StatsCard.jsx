import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";

export default function StatsCard({ title, value, change, icon }) {
  const isPositive = !change.startsWith("-") && change !== "Stable";

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-md bg-indigo-500 text-white flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <span
            className={`inline-flex items-center font-medium ${
              change === "Stable"
                ? "text-gray-600"
                : isPositive
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {change !== "Stable" &&
              (isPositive ? (
                <ArrowUpIcon
                  className="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="-ml-1 mr-0.5 h-4 w-4 flex-shrink-0"
                  aria-hidden="true"
                />
              ))}
            {change}
          </span>
          <span className="ml-2 text-gray-500">vs last period</span>
        </div>
      </div>
    </div>
  );
}
