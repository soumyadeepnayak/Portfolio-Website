import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "React", "Tailwind CSS", "JUnit", "TestNG", "Mockito", "Selenium"],
  },
  {
    label: "Tools & Platforms",
    items: ["SQL", "Postman", "Maven", "Git"],
  },
  {
    label: "Soft Skills",
    items: ["Problem Solving", "Team Player", "Project Management"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills, sharpened."
      subtitle="The languages, frameworks, and instruments I reach for every day."
      dark
    >
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div
            key={g.label}
            className="reveal group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              {g.label}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white hover:text-black transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 marquee-mask overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] text-white/30 text-4xl md:text-6xl font-semibold tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Java</span><span>·</span>
              <span>Spring Boot</span><span>·</span>
              <span>React</span><span>·</span>
              <span>Microservices</span><span>·</span>
              <span>JWT</span><span>·</span>
              <span>Selenium</span><span>·</span>
              <span>TestNG</span><span>·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </Section>
  );
}
