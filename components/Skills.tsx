"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SKILL_DATA } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween" as const, ease: "easeOut" as const, duration: 0.45 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--color-border)]">
      <div className="section-container">
        {/* header */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-block h-[6px] w-[12px] rounded"
            style={{ background: "#B59AFF" }}
          />
          <span className="text-xs text-[var(--color-text-tertiary)] tracking-wide">
            Tech stack
          </span>
        </div>
        <h2 className="text-[1.8rem] leading-[2.1rem] md:text-[2.4rem] md:leading-[2.8rem] font-medium tracking-tighter text-[var(--color-text-primary)] mb-4 max-w-lg">
          Technologies I work with
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-10 max-w-md leading-relaxed">
          From responsive UIs to cloud infrastructure — the tools I reach for
          daily to ship production-ready software.
        </p>

        {/* grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {SKILL_DATA.map((skill) => (
            <motion.div key={skill.slug} variants={item} className="h-full">
              <div className="card h-full flex flex-col items-center justify-center gap-3 py-8 hover:bg-[#111213] transition-colors cursor-default">
                <Image
                  src={`https://cdn.simpleicons.org/${skill.slug}/${skill.col}`}
                  alt={skill.name}
                  width={52}
                  height={52}
                  className="w-[52px] h-[52px] object-contain"
                  unoptimized
                />
                <span className="text-xs text-[var(--color-text-secondary)] font-medium text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
