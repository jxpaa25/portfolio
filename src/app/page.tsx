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

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { hasVisited, setHasVisited } = useAnimation();

  useEffect(() => {
    // --- AKO KORISNIK PONOVO POSREĆUJE STRANICU ---
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

      // Izolovani i čisti ScrollTrigger za kontakt tekstove pri povratku
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

      // Elegantan fade-in bez pomeranja po y-osi za dugme pri povratku
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

    // --- PRVA PRAVA POSIETA SAJTU ---
    const ctx = gsap.context(() => {
      // 1. Unblur celog sajta
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

      // 2. Hero Stagger Entrance
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

      // 3. Technical Arsenal
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

    // 4. Contact Section Entrance (Prva poseta)
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

    // Suptilan uvod za dugme: samo nežan fade-in (opacity), bez pomeranja (y),
    // što eliminiše "skakanje" i čuva Tailwind transitions
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
            Hi, I'm{" "}
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
            I am a Software and Information Engineering student at Singidunum
            University in Belgrade, Serbia. My main focus is on{" "}
            <strong className="text-primary font-semibold">
              backend engineering
            </strong>
            ,{" "}
            <strong className="text-primary font-semibold">
              distributed system design
            </strong>
            , and building secure software. While I spend most of my time
            architecting robust server-side systems, I remain{" "}
            <strong className="text-primary font-semibold">
              stack-agnostic
            </strong>{" "}
            - often bridging the gap to the frontend with React and Next.js to
            ensure seamless end-to-end performance. I enjoy working on scalable
            platforms with a strong emphasis on{" "}
            <strong className="text-primary font-semibold">
              application security (AppSec)
            </strong>
            , aiming to write clean, resilient code through defensive design
            patterns.
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
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="tech-column opacity-0">
              <h3
                className="text-[11px] uppercase tracking-[0.15em] text-primary/70 mb-6"
                style={{ fontFamily: "var(--font-label-caps)" }}
              >
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>Solidity</Badge>
                <Badge>Java</Badge>
              </div>
            </div>
            <div className="tech-column opacity-0">
              <h3
                className="text-[11px] uppercase tracking-[0.15em] text-primary/70 mb-6"
                style={{ fontFamily: "var(--font-label-caps)" }}
              >
                Frameworks, Libs & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>React</Badge>
                <Badge>Nest.js</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>Express.js</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>GSAP</Badge>
                <Badge>Claude AI</Badge>
                <Badge>Postman</Badge>
              </div>
            </div>
            <div className="tech-column opacity-0">
              <h3
                className="text-[11px] uppercase tracking-[0.15em] text-primary/70 mb-6"
                style={{ fontFamily: "var(--font-label-caps)" }}
              >
                Backend, Ops & DBs
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Node.js</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Prisma ORM</Badge>
                <Badge>Docker</Badge>
                <Badge>Postgres</Badge>
                <Badge>Redis</Badge>
              </div>
            </div>
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
              description="A distributed backend system split into independent services for authentication and core restaurant operations. Built with containerized PostgreSQL databases for service isolation, using centralized JWT verification and strict role-based access control (RBAC) to secure system communication."
              tags={[
                "Spring Boot",
                "Java",
                "PostgreSQL",
                "Docker",
                "Microservices",
              ]}
              href="https://github.com/jxpaa25/restaurant-management-backend"
            />
            <ProjectCard
              title="Decentralized Automated Market Maker (AMM)"
              description="A Uniswap V2-style decentralized exchange implemented on Ethereum. It utilizes the Factory-Pair-Router pattern for dynamic liquidity pool deployment, manages LP token minting using the Constant Product Formula, and handles automated swaps with an integrated 0.3% protocol fee."
              tags={[
                "Solidity",
                "Smart Contracts",
                "ERC20",
                "OpenZeppelin",
                "DeFi Architecture",
              ]}
              href="https://github.com/jxpaa25/Web3AcademyTasks/tree/main"
            />
            <ProjectCard
              title="Tehnički Pregled Lazarević 1968"
              description="A deployed, live production website built with a focus on clean UI animations and strict SEO optimization to maximize search engine visibility and discoverability."
              tags={["Next.js", "GSAP", "Tailwind CSS", "Vercel"]}
              href="https://www.tehnickipregledlazarevic-pozarevac.rs/"
            />
            <ProjectCard
              title="NNCraft: Deep Learning Framework from Scratch"
              description="A neural network library built from the ground up using NumPy to understand underlying deep learning mechanics. Implements custom layer abstractions, manual backpropagation, advanced optimizers like Adam and RMSprop, and standard regularization techniques."
              tags={["Python", "NumPy", "Neural Networks", "Machine Learning"]}
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
            {/* Tekstovi sada imaju klasu 'contact-text' */}
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
              I'm always open to discussing new career opportunities, full-time
              engineering roles, or freelance full-stack projects. If you think
              my technical background aligns with your team's goals, or if you
              need help turning a business idea into a functional product -
              let's connect.
            </p>
            {/* Dugme je potpuno izolovano kroz klasu 'contact-btn' */}
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
                institution="Singidunum University (3rd year)"
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
