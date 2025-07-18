import Sidebar from "../../component/admin/SlideBar";
import Header from "../../component/admin/Header";
// import type { Metadata } from "next";

export const metadata = {
  title: "Job Portal Admin",
  description: "Admin dashboard for job portal system",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
