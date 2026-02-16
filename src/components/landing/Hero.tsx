import DynamicTitle from "./DynamicTitle";
import HeroDescription from "./HeroDescription";

const titles = ["hody", "hasan", "h0dy?", "hassan", "idk"];
const description =
  "I'm a software developer and programmer based in Saudi Arabia, who is always open to learning and exploring new technologies";

const Hero = () => {
  return (
    <section className="hero-container">
      <DynamicTitle titles={titles} />
      <HeroDescription text={description} />
    </section>
  );
};

export default Hero;
