import ContactHero from "@/components/contact/ContactHero";
import EmailBox from "@/components/contact/EmailBox";
import SocialsSection from "@/components/socials/SocialsSection";

const ContactPage = () => {
  return (
    <>
      <div className="mt-32">
        <ContactHero />
      </div>
      <EmailBox />
      <div className="mb-53.75">
        <SocialsSection />
      </div>
    </>
  );
};

export default ContactPage;
