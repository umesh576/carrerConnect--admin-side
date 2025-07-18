import { BellIcon, SearchIcon } from "@heroicons/react/outline";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Mobile menu button and search (hidden on desktop) */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {/* Menu icon */}
          </button>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" />
          </button>

          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
