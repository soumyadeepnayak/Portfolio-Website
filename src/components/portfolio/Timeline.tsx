import { Section } from "./Section";

const events = [
  {
    year: "2026",
    title: "FounderLink — Startup × Investor Platform",
    body: "Built microservices with Spring Boot & Spring Cloud. JWT auth, role-based access, 30% faster APIs.",
  },
  {
    year: "2025 – 2026",
    title: "Capgemini Java Full Stack + React",
    body: "Intensive bootcamp: Spring Boot, REST APIs, React, MVC, component architecture.",
  },
  {
    year: "2025",
    title: "Food Delivery API Testing",
    body: "Postman collections, data-driven tests, +60% coverage.",
  },
  {
    year: "2025",
    title: "E-commerce Checkout Automation",
    body: "Selenium + TestNG + Maven. −60% manual effort, −40% production bugs.",
  },
  {
    year: "2024",
    title: "IBM DevOps & Software Engineering",
    body: "Coursera certifications. DSA mastery via Abdul Bari.",
  },
  {
    year: "2022",
    title: "B.Tech CSE @ Lovely Professional University",
    body: "Computer Science & Engineering · CGPA 7.35.",
  },
];

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="The Journey"
      title="A timeline of building things."
      subtitle="From first lines of Java to shipping production-grade microservices."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <ul className="space-y-16">
          {events.map((e, i) => (
            <li
              key={e.year + e.title}
              className={`reveal relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div
                className={`pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-16" : "md:[direction:ltr] md:pl-16"
                }`}
              >
                <p className="text-sm text-muted-foreground tracking-widest uppercase">
                  {e.year}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                  {e.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{e.body}</p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground ring-4 ring-background" />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
