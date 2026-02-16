import Loader from "@/components/global/Loader";

const StatsPage = () => {
  return (
    <section className="h-[89.5vh] grid place-items-center">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="capitalize font-semibold text-xl">coming soon</h1>
        <Loader />
      </div>
    </section>
  );
};

export default StatsPage;
