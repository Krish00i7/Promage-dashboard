interface ProgressGaugeProps {
  percentage: number;
  total: number;
  completed: number;
  delayed: number;
  ongoing: number;
}

export const ProgressGauge = ({
  percentage,
  total,
  completed,
  delayed,
  ongoing,
}: ProgressGaugeProps) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const completedOffset = circumference - (completed / total) * circumference;
  const delayedOffset = circumference - ((completed + delayed) / total) * circumference;
  const ongoingOffset = circumference - ((completed + delayed + ongoing) / total) * circumference;

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Overall Progress</h3>
        <select className="text-sm border border-border rounded-lg px-3 py-1 bg-background">
          <option>All</option>
        </select>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-52 h-52">
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="104"
              cy="104"
              r={radius}
              stroke="hsl(var(--border))"
              strokeWidth="16"
              fill="none"
            />
            <circle
              cx="104"
              cy="104"
              r={radius}
              stroke="hsl(var(--success))"
              strokeWidth="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={completedOffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            <circle
              cx="104"
              cy="104"
              r={radius}
              stroke="hsl(var(--warning))"
              strokeWidth="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={delayedOffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            <circle
              cx="104"
              cy="104"
              r={radius}
              stroke="hsl(var(--destructive))"
              strokeWidth="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={ongoingOffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{percentage}%</span>
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-xs text-muted-foreground">Total projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-success">{completed}</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-warning">{delayed}</p>
          <p className="text-xs text-muted-foreground">Delayed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-destructive">{ongoing}</p>
          <p className="text-xs text-muted-foreground">On-going</p>
        </div>
      </div>
    </div>
  );
};
