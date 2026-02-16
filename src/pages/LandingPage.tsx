import Hero from "@/components/landing/Hero";
import InfrastructureAndDevops from "@/components/infrastructure-devOps/InfrastructureAndDevOps";
import LanguagesSection from "@/components/languages/LanguagesSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SocialsSection from "@/components/socials/SocialsSection";
import TechStackSection from "@/components/tech-stack/TechStackSection";

const Landing = () => {
  return (
    <>
      <Hero />
      <LanguagesSection />
      <TechStackSection />
      <InfrastructureAndDevops />
      <ProjectsSection />
      <SocialsSection />
    </>
  );
};

export default Landing;
