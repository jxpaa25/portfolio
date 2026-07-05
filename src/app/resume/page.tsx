"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
            font-size: 11px !important;
          }
          p,
          span,
          li,
          a {
            font-size: 11px !important;
            line-height: 1.4 !important;
            color: #000000 !important;
          }
          h3 {
            font-size: 13px !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigacija koja se vidi samo na ekranu */}
      <div className="w-full mx-auto px-8 pt-6 flex justify-between items-center no-print">
        {/* Nazad na Portfolio */}
        <Link
          href="/"
          className="clickable inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-slate-500 transition-colors border-b border-dashed border-white hover:border-slate-500 pb-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Portfolio</span>
        </Link>

        {/* Preuzimanje PDF-a */}
        <a
          href="/Pavle Josic - Resume.pdf"
          download="Pavle_Josic_Resume.pdf"
          className="clickable inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-slate-500 transition-colors border-b border-dashed border-white hover:border-slate-500 pb-0.5"
        >
          <span>Download PDF</span>
        </a>
      </div>

      <div className="bg-white text-slate-900 font-sans antialiased py-6 px-8 max-w-[210mm] mx-auto flex flex-col gap-5">
        <header className="border-b border-slate-300 pb-3">
          <div className="flex flex-col gap-1.5">
            <div>
              <h1
                className="text-3xl font-normal tracking-tight text-slate-900"
                style={{
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Pavle Josić
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-sm text-slate-500 font-light">
                  Full-Stack Developer
                </p>
                <span className="text-slate-300 text-xs">&bull;</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">
                  Belgrade, Serbia
                </span>
              </div>
            </div>

            {/* Kontakt linkovi sa dodatim portfoliom na prvom mestu */}
            <div className="flex flex-wrap items-center gap-x-3 text-[11px] font-mono text-slate-400">
              <a
                href="https://portfolio-opal-iota-10.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable hover:text-slate-900 hover:underline text-slate-700 font-medium"
              >
                portfolio-opal-iota-10.vercel.app
              </a>
              <span>•</span>
              <a
                href="mailto:pavlejosic2004@gmail.com"
                className="clickable hover:text-slate-900 hover:underline"
              >
                pavlejosic2004@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/pavlejosic/"
                target="_blank"
                className="clickable hover:text-slate-900 hover:underline"
              >
                linkedin.com/in/pavlejosic
              </a>
              <span>•</span>
              <a
                href="https://github.com/jxpaa25"
                target="_blank"
                className="clickable hover:text-slate-900 hover:underline"
              >
                github.com/jxpaa25
              </a>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.25em] border-b border-slate-200 pb-0.5">
            Profile Summary
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed text-justify max-w-3xl">
            Software and Information Engineering student with a strong
            specialization in backend engineering, distributed systems, and
            application security (AppSec). Stack-agnostic developer experienced
            in building scalable server-side architectures, implementing
            defensive design patterns, and bridging the gap to frontend
            operations using modern frameworks to ensure seamless end-to-end
            performance.
          </p>
        </section>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.25em] border-b border-slate-200 pb-0.5">
            Technical Arsenal
          </h2>
          <div className="flex flex-col text-xs text-slate-700 border-t border-slate-100">
            <div className="flex items-baseline py-1.5 border-b border-slate-100">
              <span className="text-[9px] uppercase tracking-widest text-slate-400 shrink-0 w-36 font-mono pr-2">
                Languages:
              </span>
              <span className="font-medium text-slate-800">
                JavaScript • TypeScript • Python • Solidity • Java
              </span>
            </div>

            <div className="flex items-baseline py-1.5 border-b border-slate-100">
              <span className="text-[9px] uppercase tracking-widest text-slate-400 shrink-0 w-36 font-mono pr-2">
                Frameworks, Libs & Tools:
              </span>
              <span className="font-medium text-slate-800">
                Next.js • React • Nest.js • Spring Boot • Express.js • Tailwind
                CSS • GSAP • Claude AI • Postman
              </span>
            </div>

            <div className="flex items-baseline py-1.5 border-b border-slate-100">
              <span className="text-[9px] uppercase tracking-widest text-slate-400 shrink-0 w-36 font-mono pr-2">
                Backend, Ops & DBs:
              </span>
              <span className="font-medium text-slate-800">
                Node.js • PostgreSQL • Prisma ORM • Docker • Redis
              </span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.25em] border-b border-slate-200 pb-0.5">
            Selected Works
          </h2>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-900">
                  Microservices Restaurant Management System
                </h3>
                <a
                  href="https://github.com/jxpaa25/restaurant-management-backend"
                  target="_blank"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  GitHub &rarr;
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-mono">
                <span>Spring Boot</span> • <span>Java</span> •
                <span>PostgreSQL</span> • <span>Docker</span> •
                <span>Microservices</span> • <span>JWT</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed text-justify mt-0.5">
                Architected and deployed a distributed backend ecosystem split
                into decentralized microservices for decoupled authentication
                and core enterprise operations. Utilized containerized
                PostgreSQL instances to enforce strict database-per-service
                isolation, integrated a centralized JWT validation layer, and
                established strict Role-Based Access Control (RBAC) to harden
                inter-service communication mesh.
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-900">
                  Decentralized Automated Market Maker (AMM)
                </h3>
                <a
                  href="https://github.com/jxpaa25/Web3AcademyTasks/tree/main"
                  target="_blank"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  GitHub &rarr;
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-mono">
                <span>Solidity</span> • <span>Smart Contracts</span> •
                <span>ERC20</span> • <span>OpenZeppelin</span> •
                <span>DeFi Architecture</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed text-justify mt-0.5">
                Engineered a Uniswap V2-style decentralized financial exchange
                deployed on Ethereum testnets. Implemented the
                Factory-Pair-Router structural pattern for deterministic and
                dynamic liquidity pool deployments. Developed smart contracts
                managing LP token minting through the Constant Product Formula
                and governed reliable on-chain token swaps backed by automated
                protocol fee generation layers.
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-900">
                  Tehnički Pregled Lazarević 1968
                </h3>
                <a
                  href="https://www.tehnickipregledlazarevic-pozarevac.rs/"
                  target="_blank"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  Live Link &rarr;
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-mono">
                <span>Next.js</span> • <span>GSAP</span> •
                <span>Tailwind CSS</span> • <span>Vercel</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed text-justify mt-0.5">
                Developed and shipped a live web platform for a technical
                inspection business with a strict focus on high-performance UX.
                Engineered responsive, fluid layout sequences using GSAP and
                Tailwind CSS. Implemented advanced Search Engine Optimization
                (SEO) strategies to maximize local discovery, search crawl
                indexing performance, and keyword ranking metrics.
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-900">
                  NNCraft: Deep Learning Framework from Scratch
                </h3>
                <a
                  href="https://github.com/jxpaa25/NNCraft"
                  target="_blank"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  GitHub &rarr;
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-mono">
                <span>Python</span> • <span>NumPy</span> •
                <span>Linear Algebra</span> •<span>Machine Learning</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed text-justify mt-0.5">
                Built a dense neural network framework from scratch using pure
                NumPy to isolate and analyze foundational mathematical mechanics
                of machine learning. Authored abstractions for custom network
                layers, designed manual matrix-based backpropagation pipelines,
                and natively implemented optimized training constraints
                including Adam, RMSprop, and regularizers.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.25em] border-b border-slate-200 pb-0.5">
            Education & Timeline
          </h2>
          <div className="flex flex-col gap-3 relative pl-4 border-l border-slate-200 ml-1">
            <div className="relative">
              <div className="absolute -left-5.25 top-1 w-2.5 h-2.5 rounded-full bg-slate-900"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xs text-slate-900">
                    Software and Information Engineering
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    Singidunum University (3rd year)
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  2023 — Present
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-5.25 top-1 w-2.5 h-2.5 rounded-full bg-slate-300"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xs text-slate-900">
                    Information Technology
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    Electrotechnical School "Rade Končar"
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  2019 — 2023
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
