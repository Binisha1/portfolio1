"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--color-border)]"
      style={{
        background:
          "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(104,204,88,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="section-container">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-block h-[6px] w-[12px] rounded"
            style={{ background: "rgb(104,204,88)" }}
          />
          <span className="text-xs text-[var(--color-text-tertiary)] tracking-wide">
            Career
          </span>
        </div>
        <h2 className="text-[1.8rem] leading-[2.2rem] md:text-[2.4rem] md:leading-[2.9rem] font-medium tracking-tighter text-[var(--color-text-primary)] mb-4 max-w-lg">
          Experience
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-12 max-w-md leading-relaxed">
          Places I&apos;ve worked and contributed to building real products.
        </p>

        <div className="relative">
          {/* vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-border)]"
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "tween" as const, ease: "easeOut" as const, duration: 0.5, delay: i * 0.12 }}
                className="relative pl-8"
              >
                {/* dot — green for current role (i===0), grey otherwise */}
                <span
                  className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                  style={{
                    borderColor: i === 0 ? "rgb(104,204,88)" : "var(--color-border)",
                    background: i === 0 ? "rgba(104,204,88,0.15)" : "var(--color-background)",
                  }}
                />

                <div className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-1">
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-[0.7rem] text-[var(--color-text-secondary)] tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] font-medium mb-2">
                    {exp.company}
                  </p>
                  {exp.desc && (
                    <p className="text-xs text-[var(--color-text-secondary)] leading-[1.6]">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
