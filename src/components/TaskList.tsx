import { useState } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  status: "approved" | "in-review" | "on-going";
}

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Create a user flow of social application design",
    status: "approved",
  },
  {
    id: "2",
    title: "Create a user flow of social application design",
    status: "in-review",
  },
  {
    id: "3",
    title: "Landing page design for Fintech project of singapore",
    status: "in-review",
  },
  {
    id: "4",
    title: "Interactive prototype for app screens of delarianz project",
    status: "on-going",
  },
  {
    id: "5",
    title: "Interactive prototype for app screens of delarianz project",
    status: "approved",
  },
];

export const TaskList = () => {
  const [activeTab, setActiveTab] = useState<"all" | "important" | "notes" | "links">("all");
  const [tasks] = useState<Task[]>(mockTasks);

  const getStatusBadge = (status: Task["status"]) => {
    const variants = {
      approved: "bg-success/10 text-success hover:bg-success/20",
      "in-review": "bg-destructive/10 text-destructive hover:bg-destructive/20",
      "on-going": "bg-warning/10 text-warning hover:bg-warning/20",
    };

    const labels = {
      approved: "Approved",
      "in-review": "In review",
      "on-going": "On-going",
    };

    return (
      <Badge className={cn("capitalize", variants[status])}>
        {labels[status]}
      </Badge>
    );
  };

  const tabs = [
    { id: "all", label: "All", count: 10 },
    { id: "important", label: "Important", count: null },
    { id: "notes", label: "Notes", count: 8 },
    { id: "links", label: "Links", count: 12 },
  ];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="font-semibold text-lg mb-4">Today task</h3>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-base",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {tab.label}
              {tab.count !== null && (
                <span className="ml-2 opacity-70">{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-3">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-base animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <p className="flex-1 text-sm">{task.title}</p>
            {getStatusBadge(task.status)}
          </div>
        ))}
      </div>
    </div>
  );
};
