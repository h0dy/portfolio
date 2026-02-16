import { infrastructureAndDevops } from "@/utils/links";
import GridContainer from "../global/GridContainer";
import SectionTitle from "../global/SectionTitle";

const InfrastructureAndDevops = () => {
  return (
    <section className="my-20">
      <SectionTitle text="Infrastructure / DevOps" />
      <GridContainer list={infrastructureAndDevops} />
    </section>
  );
};

export default InfrastructureAndDevops;
