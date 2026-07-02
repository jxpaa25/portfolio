# Pavle Josić — Developer Portfolio (2026)

A minimalist, high-performance developer portfolio built with Next.js, tailored to showcase backend engineering expertise, distributed systems architecture, and application security principles.

## 🛠️ Technical Stack

- **Frontend Core:** Next.js (App Router), React, TypeScript
- **Styling & Motion:** Tailwind CSS, GSAP (GreenSock Animation Platform) with ScrollTrigger
- **Deployment & Optimization:** Vercel, Strict SEO Engineering

## ⚡ Key Engineering Features

- **Context-Aware Performance:** Implements a custom global `AnimationProvider` state to bypass heavy intro animations (blur, stagger entrances) on subsequent route changes (e.g., returning from the Resume view).
- **Isolate Motion Choreography:** Decoupled GSAP scroll triggers from component-level Tailwind transitions, avoiding visual layout thrashing and preserving native GPU acceleration.
- **Fluid Layout Transitions:** Adaptive design handling heavy display typography without compounding cumulative layout shifts (CLS).

## 🚀 Getting Started

To run this project locally, ensure you have Node.js installed.

```bash
# Clone the repository
git clone [https://github.com/jxpaa25/portfolio.git](https://github.com/jxpaa25/portfolio.git)

# Install dependencies
npm install

# Run the development server
npm run dev
```
