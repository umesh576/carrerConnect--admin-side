import StatsCard from "@/components/admin/StatsCard";
import RecentJobs from "@/components/admin/RecentJobs";
import SystemHealth from "@/components/admin/SystemHealth";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard
          title="Total Users"
          value="1,254"
          change="+12%"
          icon={<UsersIcon />}
        />
        <StatsCard
          title="Active Jobs"
          value="342"
          change="+5%"
          icon={<BriefcaseIcon />}
        />
        <StatsCard
          title="Applications"
          value="1,892"
          change="+23%"
          icon={<DocumentIcon />}
        />
        <StatsCard
          title="System Health"
          value="100%"
          change="Stable"
          icon={<ServerIcon />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Job Postings</h2>
          <RecentJobs />
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <SystemHealth />
        </div>
      </div>
    </div>
  );
}

// Placeholder icons - replace with your actual icon components
function UsersIcon() {
  return <div>👥</div>;
}
function BriefcaseIcon() {
  return <div>💼</div>;
}
function DocumentIcon() {
  return <div>📄</div>;
}
function ServerIcon() {
  return <div>🖥️</div>;
}
