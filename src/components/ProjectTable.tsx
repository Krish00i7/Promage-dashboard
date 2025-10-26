import { useState } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  manager: string;
  dueDate: string;
  status: "completed" | "delayed" | "at-risk" | "on-going";
  progress: number;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Nelsa web development",
    manager: "Om prakash rao",
    dueDate: "May 25, 2023",
    status: "completed",
    progress: 100,
  },
  {
    id: "2",
    name: "Datacube AI app",
    manager: "Neilsan mando",
    dueDate: "Jun 20, 2023",
    status: "delayed",
    progress: 35,
  },
  {
    id: "3",
    name: "Media channel branding",
    manager: "Tiruvelly priya",
    dueDate: "July 13, 2023",
    status: "at-risk",
    progress: 68,
  },
  {
    id: "4",
    name: "Cortex iOS app development",
    manager: "Matte hannery",
    dueDate: "Dec 20, 2023",
    status: "completed",
    progress: 100,
  },
  {
    id: "5",
    name: "Website builder development",
    manager: "Sukumar reo",
    dueDate: "Mar 16, 2024",
    status: "on-going",
    progress: 50,
  },
];

export const ProjectTable = () => {
  const [projects] = useState<Project[]>(mockProjects);

  const getStatusBadge = (status: Project["status"]) => {
    const variants = {
      completed: "bg-success/10 text-success hover:bg-success/20",
      delayed: "bg-warning/10 text-warning hover:bg-warning/20",
      "at-risk": "bg-destructive/10 text-destructive hover:bg-destructive/20",
      "on-going": "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
    };

    return (
      <Badge className={cn("capitalize", variants[status])}>{status}</Badge>
    );
  };

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Project summary</h3>
          <div className="flex gap-2">
            <select className="text-sm border border-border rounded-lg px-3 py-1 bg-background">
              <option>Project</option>
            </select>
            <select className="text-sm border border-border rounded-lg px-3 py-1 bg-background">
              <option>Project manager</option>
            </select>
            <select className="text-sm border border-border rounded-lg px-3 py-1 bg-background">
              <option>Status</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">
                Name
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">
                Project manager
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">
                Due date
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">
                Status
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project.id}
                className="border-b border-border hover:bg-secondary/50 transition-colors duration-base"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="py-4 px-6">
                  <span className="font-medium">{project.name}</span>
                </td>
                <td className="py-4 px-6 text-muted-foreground">
                  {project.manager}
                </td>
                <td className="py-4 px-6 text-muted-foreground">
                  {project.dueDate}
                </td>
                <td className="py-4 px-6">{getStatusBadge(project.status)}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          project.status === "completed" && "bg-success",
                          project.status === "delayed" && "bg-warning",
                          project.status === "at-risk" && "bg-destructive",
                          project.status === "on-going" && "bg-blue-500"
                        )}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12">
                      {project.progress}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
