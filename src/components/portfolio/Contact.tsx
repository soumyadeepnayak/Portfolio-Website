import { Section } from "./Section";

const channels = [
  {
    label: "Email",
    value: "soumyadeep1211s@gmail.com",
    href: "mailto:soumyadeep1211s@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "soumyadeep-nayak",
    href: "https://www.linkedin.com/in/soumyadeep-nayak-/",
  },
  {
    label: "GitHub",
    value: "soumyadeepnayak",
    href: "https://github.com/soumyadeepnayak",
  },
  {
    label: "Phone",
    value: "+91 89182 19266",
    href: "tel:+918918219266",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's Build"
      title="Have an idea? Let's make it real."
      subtitle="Open to full-stack roles, freelance builds, and collaborations on something genuinely good."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="reveal group flex items-center justify-between rounded-2xl border border-border p-6 hover:bg-foreground hover:text-background transition-colors"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground group-hover:text-background/60">
                {c.label}
              </p>
              <p className="mt-1 text-lg font-medium">{c.value}</p>
            </div>
            <span className="text-2xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>

      <footer className="mt-24 pt-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Soumyadeep Nayak. Crafted with care.</p>
        <p>Designed in the spirit of clarity.</p>
      </footer>
    </Section>
  );
}
