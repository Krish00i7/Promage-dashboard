import { LayoutDashboard, FolderKanban, ListTodo, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: FolderKanban, label: "Projects", path: "/projects" },
    { icon: ListTodo, label: "Tasks", path: "/tasks" },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border h-screen flex flex-col sticky top-0">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">Promage</span>
        </div>
      </div>

      <div className="p-4">
        <Button className="w-full justify-start gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
          <Plus className="w-5 h-5" />
          Create new project
        </Button>
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-all duration-base",
                "hover:bg-secondary",
                isActive && "bg-secondary text-primary font-medium"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
