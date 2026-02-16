const PageTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold capitalize">
      {text}
    </h1>
  );
};

export default PageTitle;
