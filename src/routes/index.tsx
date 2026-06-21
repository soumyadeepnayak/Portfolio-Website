import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Timeline } from "@/components/portfolio/Timeline";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Training } from "@/components/portfolio/Training";
import { Certificates } from "@/components/portfolio/Certificates";
import { Extra } from "@/components/portfolio/Extra";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soumyadeep Nayak — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Interactive portfolio of Soumyadeep Nayak — Java Full Stack Developer crafting Spring Boot microservices and refined React interfaces.",
      },
      { property: "og:title", content: "Soumyadeep Nayak — Portfolio" },
      {
        property: "og:description",
        content: "Java · Spring Boot · React · Microservices.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Extra />
      <Contact />
    </main>
  );
}
