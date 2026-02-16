import { Mail } from "lucide-react";
import PageTitle from "../global/PageTitle";

const ContactHero = () => {
  return (
    <section className="">
      <div className="flex gap-x-2 items-center">
        <PageTitle text="Contact" />
        <Mail size={30} />
      </div>
      <p className="sm:text-xl text-base sm:tracking-wide py-5 text-muted-foreground">
        Contact me on my email or any of my social
      </p>
    </section>
  );
};

export default ContactHero;
