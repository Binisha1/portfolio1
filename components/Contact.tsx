"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONTACT_LINKS } from "@/lib/data";

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[var(--color-text-secondary)]"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--color-text-secondary)]"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "tween" as const, ease: "easeOut" as const, duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <p className="section-label">Get in touch</p>
        <h2 className="text-[1.8rem] leading-[2.2rem] md:text-[2.4rem] md:leading-[2.9rem] font-medium tracking-tighter text-[var(--color-text-primary)] mb-4 max-w-lg">
          Let&apos;s build something together
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-12 max-w-md leading-relaxed">
          I&apos;m open to full-time roles, freelance projects, and
          collaborations. Reach out via any channel below.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl"
        >
          {CONTACT_LINKS.map((link) => (
            <motion.a
              key={link.label}
              variants={itemAnim}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download ? true : undefined}
              className="card flex items-center gap-4 hover:bg-[#111213] group transition-colors"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] flex-shrink-0">
                {link.icon ? (
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                    unoptimized
                  />
                ) : link.label === "LinkedIn" ? (
                  <LinkedInIcon />
                ) : (
                  <FileIcon />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-white transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] truncate">
                  {link.sub}
                </p>
              </div>
              <span className="ml-auto text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors text-sm">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
