import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  dark = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sec-eyebrow, .sec-title, .sec-sub", {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
      });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          },
        );
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-28 md:py-40 px-6 ${dark ? "bg-dark-section" : ""}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className={`sec-eyebrow text-xs uppercase tracking-[0.3em] ${
                dark ? "text-white/50" : "text-muted-foreground"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="sec-title text-display mt-4 text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]">
            {title}
          </h2>
          {subtitle && (
            <p
              className={`sec-sub mt-6 text-lg md:text-xl ${
                dark ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
