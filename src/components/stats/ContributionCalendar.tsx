import { calLevelColor } from "@/utils/helpers";
import { useState } from "react";

const ContributionCalendar = ({
  cells,
}: {
  cells: { date: string; count: number; level: number }[];
}) => {
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const weeks: { date: string; count: number; level: number }[][] = [];
  for (let w = 0; w < 52; w++) {
    weeks.push(cells.slice(w * 7, w * 7 + 7));
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="relative m-1">
      <div className="flex gap-0 w-full">
        <div className="flex flex-col gap-0.75 mr-1.5 shrink-0">
          {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
            <span
              key={i}
              className="text-xs text-muted-foreground leading-3.5 h-3.5"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="flex-1 overflow-x-auto">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(52, 1fr)`,
              gap: "3px",
            }}
          >
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.75">
                {week.map((cell, di) => (
                  <div
                    key={di}
                    className="size-3.5 rounded-full cursor-pointer transition-opacity hover:opacity-80"
                    style={{ backgroundColor: calLevelColor(cell.level) }}
                    onMouseEnter={(e) => {
                      const rect = (
                        e.target as HTMLElement
                      ).getBoundingClientRect();
                      const container = (e.target as HTMLElement)
                        .closest(".relative")!
                        .getBoundingClientRect();
                      setTooltip({
                        text: `${cell.count} contributions on ${formatDate(
                          cell.date
                        )}`,
                        x: rect.left - container.left + 5,
                        y: rect.top - container.top - 28,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {tooltip && (
        <div
          className="absolute z-10 px-2 py-1 text-xs rounded bg-foreground text-background pointer-events-none whitespace-nowrap"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default ContributionCalendar;
