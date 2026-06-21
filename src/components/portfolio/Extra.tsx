import { Section } from "./Section";

export function Extra() {
  return (
    <Section
      id="extra"
      eyebrow="Beyond the IDE"
      title="Extracurricular & wins."
      subtitle="Where curiosity meets competition."
      dark
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="reveal md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Hackathon
          </p>
          <h3 className="text-display mt-4 text-4xl md:text-5xl text-white">
            Ranked 9th — COD-A-FESTX 1.0
          </h3>
          <p className="mt-4 text-white/70 text-lg">
            Organized by Lovely Professional University. A high-pressure
            problem-solving and rapid prototyping sprint that pushed
            architecture instincts, code quality, and team execution.
          </p>
        </div>
        <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-10 flex flex-col justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Education
          </p>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              B.Tech CSE
            </h3>
            <p className="mt-2 text-white/70">
              Lovely Professional University · Punjab
            </p>
            <p className="mt-1 text-white/50 text-sm">
              CGPA 7.35 · Since Aug 2022
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-white/70">
              TPS DAV Public School, Jamshedpur
            </p>
            <p className="text-xs text-white/50">
              Intermediate · 80% · 2020 – 2022
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
