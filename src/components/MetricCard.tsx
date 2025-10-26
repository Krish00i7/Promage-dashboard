import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  colorClass: string;
}

export const MetricCard = ({
  icon: Icon,
  title,
  value,
  change,
  colorClass,
}: MetricCardProps) => {
  const isPositive = change.includes("increase");
  
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-base animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4",
              colorClass
            )}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold mb-2">{value}</p>
          <div className="flex items-center gap-1 text-xs">
            <span className={isPositive ? "text-success" : "text-destructive"}>
              {isPositive ? "↑" : "↓"}
            </span>
            <span className="text-muted-foreground">{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
