import LangBar from "./LangBar";

const GithubLanguages = ({
  langs,
  animateLangs,
  totalLang,
}: {
  langs: [string, number][];
  animateLangs: boolean;
  totalLang: number;
}) => {
  return (
    <section className="space-y-3 my-15.5">
      <p className="uppercase tracking-widest text-muted-foreground">
        Top languages
      </p>
      <div className="space-y-2.5">
        {langs.map(([lang, count]) => (
          <LangBar
            key={lang}
            lang={lang}
            pct={Math.round((count / totalLang) * 100)}
            animate={animateLangs}
          />
        ))}
      </div>
    </section>
  );
};

export default GithubLanguages;
