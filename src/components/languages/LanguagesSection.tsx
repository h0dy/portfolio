import { languages } from "@/utils/links";
import GridContainer from "../global/GridContainer";
import SectionTitle from "../global/SectionTitle";

const LanguagesSection = () => {
  return (
    <section id="languages" className="my-10">
      <SectionTitle text="languages" />
      <GridContainer list={languages} />
    </section>
  );
};

export default LanguagesSection;
