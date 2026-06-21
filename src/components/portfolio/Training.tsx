import { Section } from "./Section";

export function Training() {
  return (
    <Section
      id="training"
      eyebrow="Training"
      title="Sharpening the craft."
      subtitle="Where I went deep on Java, Spring Boot, and React engineering."
    >
      <div className="reveal rounded-3xl border border-border p-10 md:p-14 bg-card shadow-card">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <h3 className="text-display text-3xl md:text-4xl">
              Java Full Stack + React
            </h3>
            <p className="mt-2 text-muted-foreground">Capgemini</p>
          </div>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Dec 2025 – May 2026
          </p>
        </div>
        <ul className="mt-8 grid md:grid-cols-2 gap-6 text-foreground/90">
          {[
            "Intensive full-stack bootcamp on Java, Spring Boot, and React.",
            "Built RESTful APIs with Spring Boot connected to React UIs.",
            "Practiced MVC and component-based architecture end-to-end.",
            "Shipped full-stack projects covering the entire web dev lifecycle.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2 w-1 h-1 rounded-full bg-foreground shrink-0" />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2">
          {["Java", "Spring Boot", "React", "REST APIs", "Maven", "HTML", "CSS", "JavaScript"].map(
            (s) => (
              <span
                key={s}
                className="rounded-full bg-secondary px-3 py-1 text-xs"
              >
                {s}
              </span>
            ),
          )}
        </div>
      </div>
    </Section>
  );
}
