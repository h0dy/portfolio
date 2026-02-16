import { socials } from "@/utils/links";
import GridContainer from "../global/GridContainer";
import SectionTitle from "../global/SectionTitle";

const SocialsSection = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Socials" />
      <GridContainer list={socials} />
    </section>
  );
};

export default SocialsSection;
