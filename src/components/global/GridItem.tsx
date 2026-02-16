import type { TechItem } from "@/utils/types";
import { Link } from "lucide-react";
import { Button } from "../ui/button";

const GridItem = ({ item }: { item: TechItem }) => {
  return (
    <div className="item group">
      <div className="text-2xl">{item.icon}</div>
      <div className="w-40">
        <p className="capitalize text-xl ">{item.label}</p>
      </div>
      <Button variant="link" size="icon" asChild>
        <a target="_blank" href={item.url}>
          <Link className="size-5 group-hover:text-white dark:group-hover:text-black" />
        </a>
      </Button>
    </div>
  );
};

export default GridItem;
