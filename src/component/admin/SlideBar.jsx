import Link from "next/link";
import { adminMenuItems } from "@/lib/constants";

export default function Sidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-full">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-600">
          <h1 className="text-white font-bold text-xl">JobPortal Admin</h1>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto bg-white border-r">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {adminMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md group"
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
