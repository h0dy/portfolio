import { LangColors } from "@/utils/types";

const LangBar = ({
  lang,
  pct,
  animate,
}: {
  lang: string;
  pct: number;
  animate: boolean;
}) => {
  return (
    <div className="flex items-center gap-4">
      <span
        className="size-4 rounded-full shrink-0"
        style={{ background: LangColors[lang] }}
      />
      <span className="text-sm w-30 shrink-0">{lang}</span>
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: animate ? `${pct}%` : "0%",
            background: LangColors[lang],
          }}
        />
      </div>
      <span className="text-muted-foreground w-8 text-right">{pct}%</span>
    </div>
  );
};

export default LangBar;
