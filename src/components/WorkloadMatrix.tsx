export const WorkloadMatrix = () => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const weeks = ["", "", "", "", "", "", ""];
  
  const workloadData = [
    [0, 0, 8, 0, 0, 0, 0],
    [0, 6, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 8],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 10, 0, 0, 0],
    [0, 0, 0, 0, 0, 12, 0],
    [14, 0, 0, 0, 0, 0, 0],
  ];

  const getCircleColor = (value: number) => {
    if (value === 0) return "bg-border";
    if (value <= 6) return "bg-success";
    if (value <= 10) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg">Projects Workload</h3>
        <select className="text-sm border border-border rounded-lg px-3 py-1 bg-background">
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex gap-2 mb-4">
            <div className="w-12" />
            {days.map((day, index) => (
              <div key={index} className="w-12 text-center text-xs text-muted-foreground font-medium">
                {day}
              </div>
            ))}
          </div>

          {workloadData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex gap-2 mb-2">
              <div className="w-12 flex items-center justify-center text-xs text-muted-foreground">
                {weeks[weekIndex]}
              </div>
              {week.map((value, dayIndex) => (
                <div
                  key={dayIndex}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-base hover:scale-110",
                      getCircleColor(value)
                    )}
                  >
                    {value > 0 && (
                      <span className="text-xs font-medium text-white">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
