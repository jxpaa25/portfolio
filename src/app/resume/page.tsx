"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 0;
        }
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
          .contact-links a,
          .contact-links span {
            font-size: 10.5px !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigation (WebPage only) */}
      <div className="w-full mx-auto px-8 pt-6 flex justify-between items-center no-print">
        {/* Back to Portfolio */}
        <Link
          href="/"
          className="clickable inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-slate-500 transition-colors border-b border-dashed border-white hover:border-slate-500 pb-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          <span>Portfolio</span>
        </Link>

        {/* Download PDF */}
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
                  Junior Full-Stack Developer
                </p>
                <span className="text-slate-300 text-xs">&bull;</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">
                  Belgrade, Serbia
                </span>
              </div>
            </div>

            {/* Contact links */}
            <div className="contact-links flex flex-wrap items-center gap-x-2 text-[10.5px] font-mono text-slate-400">
              <a
                href="mailto:pavlejosic2004@gmail.com"
                className="clickable hover:text-slate-900 hover:underline text-slate-700 font-medium"
              >
                pavlejosic2004@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://github.com/jxpaa25"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable hover:text-slate-900 hover:underline"
              >
                github.com/jxpaa25
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/pavlejosic/"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable hover:text-slate-900 hover:underline"
              >
                linkedin.com/in/pavlejosic
              </a>
              <span>•</span>
              <a
                href="https://portfolio-opal-iota-10.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="clickable hover:text-slate-900 hover:underline"
              >
                portfolio-opal-iota-10.vercel.app
              </a>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.08em] border-b border-slate-200 pb-0.5">
            Summary
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            Final-year Software and Information Engineering student at
            Singidunum University, looking for a junior full-stack role with a
            backend focus on TypeScript (Node.js, NestJS) and Java (Spring
            Boot). Experienced in building secure REST APIs with Spring Boot
            and NestJS, containerizing services with Docker, and deploying
            production web applications on Vercel.
          </p>
        </section>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.08em] border-b border-slate-200 pb-0.5">
            Skills
          </h2>
          <div className="flex flex-col text-xs text-slate-700">
            {[
              [
                "Languages:",
                "TypeScript, JavaScript, Java, Python, Solidity",
              ],
              [
                "Backend:",
                "Node.js, NestJS, Express, Spring Boot, REST APIs, JWT, RBAC",
              ],
              ["Frontend:", "React, Next.js, Tailwind CSS, GSAP"],
              [
                "Data & DevOps:",
                "PostgreSQL, Prisma, Docker, Git, CI/CD (GitHub Actions), Vercel",
              ],
              ["Testing:", "JUnit, Vitest"],
            ].map(([label, skills], i, rows) => (
              <div
                key={label}
                className={`flex items-baseline py-1 ${
                  i < rows.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <span className="text-[9px] uppercase tracking-widest text-slate-400 shrink-0 w-32 font-mono pr-2">
                  {label}
                </span>
                <span className="font-medium text-slate-800">{skills}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.08em] border-b border-slate-200 pb-0.5">
            Projects
          </h2>
          <div className="flex flex-col gap-3">
            {/* PROJECT 1 */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-bold text-sm text-slate-900">
                  Microservices Restaurant Management System
                </h3>
                <a
                  href="https://github.com/jxpaa25/restaurant-management-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  github.com/jxpaa25/restaurant-management-backend
                </a>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Java • Spring Boot • Spring Security • PostgreSQL • Docker • JWT
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-0.5 text-xs text-slate-600 leading-relaxed marker:text-slate-400 mt-0.5">
                <li>
                  Split the backend into an Identity service and a Restaurant
                  service, each with its own PostgreSQL database, so
                  authentication runs separately from menu, table and order
                  logic.
                </li>
                <li>
                  Built a shared library with the JWT filter and token
                  validation used by both services, and restricted endpoints by
                  role with Spring Security&apos;s @PreAuthorize.
                </li>
                <li>
                  Implemented the order lifecycle (pending, completed,
                  cancelled) in @Transactional service methods, so each order
                  change is saved in full or rolled back.
                </li>
                <li>
                  Containerized both services and their databases with Docker
                  Compose and published the REST API documentation as a Postman
                  collection.
                  {/* TODO: add the number of REST endpoints */}
                </li>
              </ul>
            </div>

            {/* PROJECT 2 */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-bold text-sm text-slate-900">
                  Tehnički Pregled Lazarević 1968
                </h3>
                <a
                  href="https://www.tehnickipregledlazarevic-pozarevac.rs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  tehnickipregledlazarevic-pozarevac.rs
                </a>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Next.js • TypeScript • Tailwind CSS • GSAP • Vercel
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-0.5 text-xs text-slate-600 leading-relaxed marker:text-slate-400 mt-0.5">
                <li>
                  Built the production website for a vehicle inspection
                  business in Požarevac, working out the requirements directly
                  with the owner.
                </li>
                <li>
                  Deployed it on Vercel and connected the business&apos;s custom
                  .rs domain.
                </li>
                <li>
                  Implemented technical SEO for local search: schema.org
                  LocalBusiness structured data, a sitemap and robots file, and
                  a statically generated page with its own metadata for each
                  service.
                  {/* TODO: add Lighthouse SEO/performance score */}
                  {/* TODO: add Search Console clicks or local search ranking */}
                </li>
                <li>
                  Built responsive layouts and scroll animations with Tailwind
                  CSS and GSAP.
                </li>
              </ul>
            </div>

            {/* PROJECT 3 */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-bold text-sm text-slate-900">
                  Decentralized Automated Market Maker (AMM)
                </h3>
                <a
                  href="https://github.com/jxpaa25/Web3AcademyTasks/tree/main/amm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  github.com/jxpaa25/Web3AcademyTasks/tree/main/amm
                </a>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Solidity • ERC20 • OpenZeppelin
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-0.5 text-xs text-slate-600 leading-relaxed marker:text-slate-400 mt-0.5">
                <li>
                  Built a Uniswap V2-style decentralized exchange and deployed it
                  to the Ethereum Sepolia testnet.
                </li>
                <li>
                  Implemented the Factory-Pair-Router architecture, where the
                  factory deploys a liquidity pool contract for each token pair.
                </li>
                <li>
                  Wrote the pair logic that mints LP tokens using the constant
                  product formula and charges a protocol fee on swaps.
                </li>
              </ul>
            </div>

            {/* PROJECT 4 */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="font-bold text-sm text-slate-900">
                  NNCraft: Deep Learning Framework from Scratch
                </h3>
                <a
                  href="https://github.com/jxpaa25/NNCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clickable text-[11px] font-mono text-slate-400 hover:underline"
                >
                  github.com/jxpaa25/NNCraft
                </a>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Python • NumPy
              </p>
              <ul className="list-disc pl-4 flex flex-col gap-0.5 text-xs text-slate-600 leading-relaxed marker:text-slate-400 mt-0.5">
                <li>
                  Built a dense neural network library using only NumPy, to
                  learn how frameworks such as PyTorch work internally.
                </li>
                <li>
                  Implemented matrix-based backpropagation, ReLU and sigmoid
                  activations, and five loss functions, including MSE and
                  cross-entropy.
                </li>
                <li>
                  Added SGD with momentum, AdaGrad, AdaDelta, RMSprop and Adam
                  optimizers, plus dropout and L1/L2 regularization.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2.5">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.08em] border-b border-slate-200 pb-0.5">
            Education
          </h2>
          <div className="flex flex-col gap-3 relative pl-4 border-l border-slate-200 ml-1">
            <div className="relative">
              <div className="absolute -left-5.25 top-1 w-2.5 h-2.5 rounded-full bg-slate-900"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xs text-slate-900">
                    B.Sc. Software and Information Engineering
                  </h3>
                  <p className="text-[11px] text-slate-600">
                    Singidunum University, Belgrade. Final (4th) year.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  2023 – Expected 2027
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
                    Electrotechnical School &quot;Rade Končar&quot;
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  2019 – 2023
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
