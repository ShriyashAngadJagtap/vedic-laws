import type { SyntheticEvent } from "react";
import corporateLeadership from "@/assets/programs/corporate-leadership.webp";
import executiveCoaching from "@/assets/programs/executive-coaching.webp";
import studentCareer from "@/assets/programs/student-career-guidance.webp";
import lifeMentoring from "@/assets/programs/life-mentoring.webp";
import holisticDevelopment from "@/assets/programs/holistic-development.webp";
import educationalConsulting from "@/assets/programs/educational-consulting.webp";
import teacherTraining from "@/assets/programs/teacher-training.webp";
import personalTransformation from "@/assets/programs/personal-transformation.webp";
import { SectionHeading } from "./Shared";

const PROGRAMS = [
  { title: "Corporate Leadership Programs", image: corporateLeadership },
  { title: "Executive Coaching", image: executiveCoaching },
  { title: "Student Career Guidance", image: studentCareer },
  { title: "Life Mentoring", image: lifeMentoring },
  { title: "Holistic Development", image: holisticDevelopment },
  { title: "Educational Consulting", image: educationalConsulting },
  { title: "Teacher Training", image: teacherTraining },
  { title: "Personal Transformation", image: personalTransformation },
] as const;

function protectImage(e: SyntheticEvent) {
  e.preventDefault();
}

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--sand) 70%, transparent) 40%, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Programs & Engagements"
          title="Ways to work"
          italic="together."
          subtitle="From private executive coaching to institutional transformation — every engagement is designed around the person or organisation it serves."
        />

        <div
          className="mt-16 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8"
          onContextMenu={protectImage}
        >
          {PROGRAMS.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group relative block w-full overflow-hidden shadow-[0_18px_40px_-28px_color-mix(in_oklab,var(--forest-deep)_45%,transparent)] transition-transform duration-500 hover:-translate-y-1"
              aria-label={`${p.title} — enquire`}
              onContextMenu={protectImage}
              onDragStart={protectImage}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                draggable={false}
                onContextMenu={protectImage}
                onDragStart={protectImage}
                className="img-protected block h-auto w-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
