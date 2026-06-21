import { Section } from "./Section";

const certs = [
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "Coursera",
    date: "November 2024",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "Coursera",
    date: "June 2024",
  },
  {
    title: "Mastering Data Structures & Algorithms (C / C++)",
    issuer: "Udemy · Abdul Bari",
    date: "April 2024",
  },
];

export function Certificates() {
  return (
    <Section
      id="certificates"
      eyebrow="Credentials"
      title="Certified, and curious."
      subtitle="Continuous learning is the actual stack."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <div
            key={c.title}
            className="reveal group rounded-3xl border border-border p-8 hover:bg-secondary transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1}
              </span>
              <span className="w-10 h-10 rounded-full border border-border grid place-items-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                ✓
              </span>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
