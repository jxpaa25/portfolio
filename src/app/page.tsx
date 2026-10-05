"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Briefcase, Mail, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TimelineItem } from "@/components/ui/TimelineItem";
import Link from "next/link";
import { useAnimation } from "@/components/context/AnimationProvider";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "Solidity"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Spring Boot",
      "REST APIs",
      "JWT",
      "RBAC",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Data & DevOps",
    skills: [
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Git",
      "CI/CD (GitHub Actions)",
      "Vercel",
    ],
  },
  {
    title: "Testing",
    skills: ["JUnit", "Vitest"],
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { hasVisited, setHasVisited } = useAnimation();

  useEffect(() => {
    if (hasVisited) {
      if (containerRef.current) containerRef.current.style.filter = "blur(0px)";
      const heroElements = heroRef.current?.children;
      if (heroElements) {
        gsap.set(heroElements, { opacity: 1, y: 0 });
      }

      gsap.fromTo(
        ".tech-column",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      const contactTexts =
        contactRef.current?.querySelectorAll(".contact-text");
      if (contactTexts && contactTexts.length > 0) {
        gsap.fromTo(
          contactTexts,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      const contactBtn = contactRef.current?.querySelector(".contact-btn");
      if (contactBtn) {
        gsap.fromTo(
          contactBtn,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power1.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { filter: "blur(20px)", opacity: 0.8 },
        {
          filter: "blur(0px)",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          onComplete: () => setHasVisited(true),
        },
      );

      const heroElements = heroRef.current?.children;
      if (heroElements) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            stagger: 0.15,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            delay: 0.4,
          },
        );
      }

      gsap.fromTo(
        ".tech-column",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.2,
        },
      );
    }, containerRef);

    const contactTexts = contactRef.current?.querySelectorAll(".contact-text");
    if (contactTexts && contactTexts.length > 0) {
      gsap.fromTo(
        contactTexts,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    const contactBtn = contactRef.current?.querySelector(".contact-btn");
    if (contactBtn) {
      gsap.fromTo(
        contactBtn,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }

    return () => ctx.revert();
  }, [hasVisited, setHasVisited]);

  return (
    <div
      ref={containerRef}
      style={{ filter: hasVisited ? "blur(0px)" : "blur(20px)" }}
      className="min-h-screen flex flex-col"
    >
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-32 md:pt-48 pb-32 md:pb-48 flex flex-col gap-32 md:gap-64 flex-1">
        {/* Hero Section */}
        <section ref={heroRef}>
          <h1
            className="text-display-lg-mobile md:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-primary mb-20 opacity-0"
            style={{ fontFamily: "var(--font-display-lg)" }}
          >
            Hi, I&apos;m{" "}
            <span className="text-on-surface-variant font-light">
              Pavle Josić
            </span>
            .<br />
            Full-Stack Developer.
          </h1>

          <p
            className="text-md md:text-lg text-on-surface-variant/80 font-normal leading-relaxed max-w-240 mb-12 tracking-wide opacity-0"
            style={{ fontFamily: "var(--font-body-lg)" }}
          >
            I&apos;m a final-year Software and Information Engineering student at
            Singidunum University, looking for a junior full-stack role with a
            backend focus on{" "}
            <strong className="text-primary font-semibold">
              TypeScript (Node.js, NestJS)
            </strong>{" "}
            and{" "}
            <strong className="text-primary font-semibold">
              Java (Spring Boot)
            </strong>
            . Experienced in building secure REST APIs with Spring Boot and
            NestJS, containerizing services with Docker, and deploying
            production web applications on Vercel.
          </p>

          <div
            className="flex flex-wrap gap-3.5 opacity-0"
            style={{ fontFamily: "var(--font-label-caps)" }}
          >
            <a
              className="clickable inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/40 border border-border-subtle/50 rounded-full hover:border-primary transition-colors group"
              href="https://github.com/jxpaa25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="text-[12px] tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                GitHub
              </span>
            </a>
            <a
              className="clickable inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/40 border border-border-subtle/50 rounded-full hover:border-primary transition-colors group"
              href="https://www.linkedin.com/in/pavlejosic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Briefcase className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="text-[12px] tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                LinkedIn
              </span>
            </a>
            <a
              className="clickable inline-flex items-center gap-2 px-5 py-2.5 bg-surface-elevated/40 border border-border-subtle/50 rounded-full hover:border-primary transition-colors group"
              href="mailto:pavlejosic2004@gmail.com"
            >
              <Mail className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="text-[12px] tracking-wider text-on-surface-variant group-hover:text-primary transition-colors">
                Email
              </span>
            </a>
            <Link
              className="clickable inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-[#0B0B0B] border border-primary rounded-full hover:bg-transparent hover:text-primary transition-colors group"
              href="/resume"
            >
              <FileText className="w-4 h-4" />
              <span className="text-[12px] tracking-wider font-semibold">
                Resume
              </span>
            </Link>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="tech-section">
          <h2
            className="text-[10px] text-text-muted uppercase tracking-[0.25em] mb-12 border-b border-border-subtle/40 pb-4"
            style={{ fontFamily: "var(--font-label-caps)" }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillGroups.map((group) => (
              <div key={group.title} className="tech-column opacity-0">
                <h3
                  className="text-[11px] uppercase tracking-[0.15em] text-primary/70 mb-6"
                  style={{ fontFamily: "var(--font-label-caps)" }}
                >
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects List Section */}
        <section>
          <h2
            className="text-[10px] text-text-muted uppercase tracking-[0.25em] mb-12 border-b border-border-subtle/40 pb-4"
            style={{ fontFamily: "var(--font-label-caps)" }}
          >
            Selected Works
          </h2>
          <div className="flex flex-col gap-10">
            <ProjectCard
              title="Microservices Restaurant Management System"
              description="Spring Boot backend split into an Identity service and a Restaurant service, each with its own PostgreSQL database. A shared library handles JWT validation for both services, endpoints are restricted by role with @PreAuthorize, and the whole system runs in Docker Compose."
              tags={[
                "Java",
                "Spring Boot",
                "Spring Security",
                "PostgreSQL",
                "Docker",
                "JWT",
              ]}
              href="https://github.com/jxpaa25/restaurant-management-backend"
            />
            <ProjectCard
              title="Tehnički Pregled Lazarević 1968"
              description="Production website for a vehicle inspection business in Požarevac. I worked out the requirements with the owner, deployed the site on Vercel with the business's own .rs domain, and set up technical SEO for local search: structured data, a sitemap, and a page with its own metadata for each service."
              tags={["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"]}
              href="https://www.tehnickipregledlazarevic-pozarevac.rs/"
            />
            <ProjectCard
              title="Decentralized Automated Market Maker (AMM)"
              description="Uniswap V2-style decentralized exchange deployed to the Ethereum Sepolia testnet. It uses the Factory-Pair-Router architecture: the factory deploys a liquidity pool for each token pair, and the pair contract mints LP tokens with the constant product formula and charges a protocol fee on swaps."
              tags={["Solidity", "ERC20", "OpenZeppelin"]}
              href="https://github.com/jxpaa25/Web3AcademyTasks/tree/main/amm"
            />
            <ProjectCard
              title="NNCraft: Deep Learning Framework from Scratch"
              description="Dense neural network library written with only NumPy, built to learn how frameworks such as PyTorch work internally. It implements matrix-based backpropagation, five loss functions, the SGD, AdaGrad, AdaDelta, RMSprop and Adam optimizers, and dropout and L1/L2 regularization."
              tags={["Python", "NumPy"]}
              href="https://github.com/jxpaa25/NNCraft"
            />
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section ref={contactRef}>
          <h2
            className="text-[10px] text-text-muted uppercase tracking-[0.25em] mb-12 border-b border-border-subtle/40 pb-4"
            style={{ fontFamily: "var(--font-label-caps)" }}
          >
            Get In Touch
          </h2>
          <div className="max-w-3xl">
            <h3
              className="contact-text text-3xl md:text-5xl text-primary font-normal tracking-tight mb-6 leading-[1.15] opacity-0"
              style={{ fontFamily: "var(--font-display-lg)" }}
            >
              Looking for a dedicated developer?
            </h3>
            <p
              className="contact-text text-md md:text-lg text-on-surface-variant/85 font-normal leading-relaxed mb-8 opacity-0"
              style={{ fontFamily: "var(--font-body-lg)" }}
            >
              I&apos;m looking for a junior full-stack or backend developer role. If
              my background fits what your team needs, send me an email.
            </p>
            <a
              className="contact-btn clickable inline-flex items-center gap-2 px-6 py-3 bg-primary text-[#0B0B0B] border border-primary rounded-full hover:bg-transparent hover:text-primary transition-all duration-300 font-semibold text-sm opacity-0"
              href="mailto:pavlejosic2004@gmail.com"
              style={{ fontFamily: "var(--font-label-caps)" }}
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-background w-full border-t border-border-subtle/40 mt-auto"
        style={{ fontFamily: "var(--font-body-md)" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-12">
          <div className="flex-1 w-full">
            <h2
              className="text-[10px] text-text-muted uppercase tracking-[0.25em] mb-8"
              style={{ fontFamily: "var(--font-label-caps)" }}
            >
              Education & Timeline
            </h2>
            <div className="relative pl-6 border-l border-border-subtle/40">
              <TimelineItem
                title="Software and Information Engineering"
                date="2023 — Now"
                institution="Singidunum University (final year)"
                isFirst={true}
              />
              <TimelineItem
                title="Information Technology"
                date="2019 — 2023"
                institution="Electrotechnical School Rade Končar"
                isFirst={false}
              />
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-primary"
              style={{ fontFamily: "var(--font-label-caps)" }}
            >
              Pavle Josić
            </span>
            <p
              className="text-[11px] tracking-wide text-text-muted"
              style={{ fontFamily: "var(--font-code-sm)" }}
            >
              © 2026 Developer Portfolio
            </p>
            <div
              className="flex gap-5 mt-2"
              style={{ fontFamily: "var(--font-code-sm)" }}
            >
              <a
                className="clickable text-[11px] tracking-wide text-text-muted hover:text-primary transition-all"
                href="https://github.com/jxpaa25"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="clickable text-[11px] tracking-wide text-text-muted hover:text-primary transition-all"
                href="https://www.linkedin.com/in/pavlejosic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="clickable text-[11px] tracking-wide text-text-muted hover:text-primary transition-all"
                href="mailto:pavlejosic2004@gmail.com"
              >
                Email
              </a>
              <Link
                className="clickable text-[11px] tracking-wide text-text-muted hover:text-primary transition-all"
                href="/resume"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
