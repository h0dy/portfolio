import type { TechItem } from "@/utils/types";
import GridItem from "./GridItem";

const GridContainer = ({ list }: { list: TechItem[] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center sm:place-items-baseline mt-5">
      {list.map((item) => {
        return <GridItem key={item.label} item={item} />;
      })}
    </div>
  );
};

export default GridContainer;
