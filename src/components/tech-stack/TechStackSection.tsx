import { techStack } from "@/utils/links";
import GridContainer from "../global/GridContainer";
import SectionTitle from "../global/SectionTitle";

const TechStackSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Tech Stack" />
      <GridContainer list={techStack} />
    </section>
  );
};

export default TechStackSection;
