const Footer = () => {
  return (
    <footer className="sticky bottom-0 left-0 w-full z-50 mx-auto container">
      <div className="border-b-2 border-foreground dark:border-white" />
      <div className="backdrop-blur-xl py-2 capitalize text-center">
        Made with 💖 by{" "}
        <a
          target="_blank"
          className="font-semibold hover:underline"
          href="https://github.com/h0dy"
        >
          hody
        </a>
      </div>
    </footer>
  );
};

export default Footer;
