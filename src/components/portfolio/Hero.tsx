import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-word",
          { y: 80, opacity: 0, duration: 1.1, stagger: 0.08 },
          "-=0.4",
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
        .from(".hero-meta", { opacity: 0, duration: 0.8, stagger: 0.05 }, "-=0.3");

      gsap.to(".hero-orb", {
        y: -30,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero"
    >
      <div className="hero-orb absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-foreground/[0.04] blur-3xl pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center pt-20">
        <p className="hero-eyebrow text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio · 2026
        </p>
        <h1 className="text-display mt-6 text-[clamp(2.8rem,9vw,8rem)] leading-[0.95]">
          <span className="hero-word inline-block mr-4">Building.</span>
          <span className="hero-word inline-block mr-4">Testing.</span>
          <span className="hero-word inline-block text-muted-foreground">
            Shipping.
          </span>
        </h1>
        <p className="hero-sub mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          I'm <span className="text-foreground font-medium">Soumyadeep Nayak</span>, a
          Java Full Stack developer crafting resilient backends with Spring Boot
          and refined interfaces with React.
        </p>
        <div className="mt-10 flex flex-nowrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="hero-cta inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-95 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="hero-cta inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Contact Me
          </a>
        </div>

        <div className="hero-meta mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-left max-w-4xl mx-auto">
          {[
            { k: "Focus", v: "Full Stack" },
            { k: "Stack", v: "Java · React" },
            { k: "Based in", v: "Punjab, India" },
            { k: "Rank", v: "9th @ COD-A-FESTX" },
          ].map((m) => (
            <div key={m.k} className="border-t border-border pt-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {m.k}
              </p>
              <p className="mt-1 text-base font-medium">{m.v}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
