import { DollarSign, FolderKanban, Clock, Users } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { ProjectTable } from "@/components/ProjectTable";
import { ProgressGauge } from "@/components/ProgressGauge";
import { TaskList } from "@/components/TaskList";
import { WorkloadMatrix } from "@/components/WorkloadMatrix";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Overview</h2>
        <select className="text-sm border border-border rounded-lg px-3 py-2 bg-card">
          <option>Last 30 days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={DollarSign}
          title="Total revenue"
          value="$53,00989"
          change="5% increase from last month"
          colorClass="bg-metric-purple"
        />
        <MetricCard
          icon={FolderKanban}
          title="Projects"
          value="95 /100"
          change="10% decrease from last month"
          colorClass="bg-metric-orange"
        />
        <MetricCard
          icon={Clock}
          title="Time spent"
          value="1022 /1900 Hrs"
          change="8% increase from last week"
          colorClass="bg-metric-blue"
        />
        <MetricCard
          icon={Users}
          title="Resources"
          value="101 /120"
          change="3% increase from last month"
          colorClass="bg-metric-yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectTable />
        </div>
        <div>
          <ProgressGauge
            percentage={72}
            total={95}
            completed={26}
            delayed={35}
            ongoing={35}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskList />
        <WorkloadMatrix />
      </div>
    </div>
  );
};

export default Dashboard;
