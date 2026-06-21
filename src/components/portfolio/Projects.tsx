import { Section } from "./Section";

const projects = [
  {
    name: "FounderLink",
    tag: "Microservices · Spring Cloud",
    period: "Mar 2026 – May 2026",
    description:
      "A startup–investor platform built on Spring Boot microservices. JWT-secured, role-based, and 30% faster APIs across four distinct user profiles.",
    bullets: [
      "Spring Cloud service discovery & gateway",
      "Granular role-based access (4 profiles)",
      "Listings, discovery filters, investment lifecycle",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Cloud", "JWT"],
    accent: "from-zinc-900 to-zinc-700",
    href: "https://github.com/soumyadeepnayak",
  },
  {
    name: "Food Delivery API Testing",
    tag: "API · Postman",
    period: "Apr 2025 – May 2025",
    description:
      "A comprehensive automated API test suite validating restaurants, menus, and order flows with dynamic test scripts and data-driven coverage.",
    bullets: [
      "Reusable Postman Collections",
      "JSON payload + status + latency checks",
      "+60% test coverage via data-driven runs",
    ],
    stack: ["Postman", "REST", "JSON"],
    accent: "from-neutral-800 to-neutral-600",
  },
  {
    name: "E-commerce Checkout Automation",
    tag: "QA · Selenium",
    period: "Jan 2025 – Feb 2025",
    description:
      "End-to-end automation for cart, payment, and order confirmation flows. Cut manual testing by 60% and production bugs by 40%.",
    bullets: [
      "Reusable Page Object Models",
      "Selenium + TestNG + Maven",
      "Critical checkout coverage",
    ],
    stack: ["Selenium", "Java", "TestNG", "Maven"],
    accent: "from-stone-800 to-stone-600",
    href: "https://github.com/soumyadeepnayak",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects worth talking about."
      subtitle="Three case studies. One philosophy: ship well-tested, well-architected software."
    >
      <div className="space-y-8">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="reveal group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card hover:shadow-elegant transition-all duration-500"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div
                className={`relative md:col-span-2 min-h-[280px] bg-gradient-to-br ${p.accent} p-10 flex flex-col justify-between text-white overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
                <p className="relative text-xs uppercase tracking-[0.3em] text-white/70">
                  {p.tag}
                </p>
                <div className="relative">
                  <p className="text-xs text-white/60">{p.period}</p>
                  <h3 className="text-display text-4xl md:text-5xl mt-2 leading-none">
                    {p.name}
                  </h3>
                </div>
                <p className="absolute bottom-4 right-6 text-6xl md:text-8xl font-bold text-white/10 leading-none">
                  0{i + 1}
                </p>

              </div>
              <div className="md:col-span-3 p-10">
                <p className="text-lg text-foreground/90">{p.description}</p>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-foreground shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium group/link"
                  >
                    View on GitHub
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
