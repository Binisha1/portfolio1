"use client";

import { motion } from "framer-motion";

const ease = { type: "tween" as const, ease: "easeOut" as const, duration: 0.7 };

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* top-center radial glow — purple tint like Linear's hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(181,154,255,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="section-container pt-36 pb-28">

        {/* label with Linear-style colored accent bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.05 }}
          className="flex items-center gap-2 mb-6"
        >
          <span
            className="inline-block h-[6px] w-[12px] rounded"
            style={{ background: "#B59AFF" }}
          />
          <span className="text-xs text-[var(--color-text-tertiary)] tracking-wide">
            Full Stack Developer
          </span>
        </motion.div>

        {/* main heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.18 }}
          className="mb-6"
        >
          <h1 className="max-w-2xl leading-[1.12] mb-2">
            Hi, I&apos;m{" "}
            <span style={{ color: "#B59AFF" }}>Binisha.</span>
          </h1>
          <h1 className="max-w-3xl leading-[1.12]">
            I build products{" "}
            <span className="text-gradient">from idea to deployment.</span>
          </h1>
        </motion.div>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.32 }}
          className="max-w-lg text-[var(--color-text-secondary)] text-[1.05rem] leading-[1.7] mb-10"
        >
          I design and engineer full-stack web applications — pixel-perfect UIs
          in{" "}
          <span className="text-[#61dafb]">React</span> &{" "}
          <span className="text-[var(--color-text-primary)]">Next.js</span>,
          performant backends with{" "}
          <span className="text-[#009688]">FastAPI</span>, and scalable
          infrastructure on{" "}
          <span className="text-[#ff9900]">AWS</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.46 }}
          className="flex flex-wrap gap-3 items-center"
        >
          <a href="#projects" className="button-primary">
            View my work
          </a>
          <a
            href="/binisha-resume.pdf"
            download
            className="button-secondary border border-[var(--color-border)] rounded-[10px] px-3 py-1.5 hover:border-[rgb(55,57,65)] transition-colors text-xs"
          >
            Download Resume
          </a>
        </motion.div>

        {/* availability pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...ease, delay: 0.65 }}
          className="inline-flex items-center gap-2 mt-10 border border-[var(--color-border)] rounded-full px-3 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-green)] animate-pulse" />
          <span className="text-[0.72rem] text-[var(--color-text-secondary)]">
            Open to opportunities
          </span>
        </motion.div>
      </div>

      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-border)]" />
    </section>
  );
}
