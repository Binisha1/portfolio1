"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

const accentColors = ["#B59AFF", "#61dafb", "#6cc24a"];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="border-b border-[var(--color-border)]"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 80% 50%, rgba(242,153,74,0.04) 0%, transparent 70%)",
        }}
      >
        {/* header — two-column like Collaborative section */}
        <div className="section-container pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block h-[6px] w-[12px] rounded"
                  style={{ background: "rgb(242,153,74)" }}
                />
                <span className="text-xs text-[var(--color-text-tertiary)] tracking-wide">
                  Work
                </span>
              </div>
              <h2 className="text-[1.8rem] leading-[2.2rem] md:text-[2.4rem] md:leading-[2.9rem] font-medium tracking-tighter text-[var(--color-text-primary)]">
                Personal projects
              </h2>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-xs leading-relaxed lg:text-right">
              A collection of things I&apos;ve built — click any card to see
              the full story.
            </p>
          </div>
        </div>

        {/* horizontal scroll — same pattern as linearWebsiteClone Collaborative */}
        <div className="pb-16 overflow-x-scroll hide-scroll-bar scroll-smooth lg:pl-60">
          <div className="flex flex-nowrap gap-3 px-6">
            {PROJECTS.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                accent={accentColors[idx % accentColors.length]}
                onOpen={() => setSelected(project)}
              />
            ))}
            <div className="flex-shrink-0 w-6" aria-hidden />
          </div>
        </div>
      </section>

      {/* detail modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Card — exact Collaborative section structure ─────────── */
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  accent: string;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "tween" as const, ease: "easeOut" as const, duration: 0.45 }}
      className="flex-shrink-0"
    >
      <button
        onClick={onOpen}
        className="group border border-[hsla(0,0%,100%,0.05)] bg-[#141516] rounded-xl px-4 py-4 text-left transition-colors hover:bg-[#1a1b1c]"
      >
        <div className="w-[260px]">

          <div className="w-full mb-3 overflow-hidden rounded-lg">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.name}
                width={260}
                height={180}
                className="w-full h-[180px] object-contain duration-300 group-hover:shadow-lg group-hover:brightness-150"
              />
            ) : (
              <div className="w-full h-[180px] flex items-center justify-center duration-300 group-hover:brightness-150">
                <span className="text-4xl font-semibold text-[var(--color-text-secondary)]">
                  {project.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
          </div>

          {/* matches: <div className="flex group-hover:text-text-white justify-between font-medium text-start items-center"> */}
          <div className="flex group-hover:text-white justify-between font-medium text-start items-center">

            {/* matches: <span className="max-w-60 text-xs text-text-secondary">{text}<br/><span className="text-text-primary">{subtext}</span></span> */}
            <span className="max-w-[220px] text-xs text-[var(--color-text-secondary)]">
              {project.name}
              <br />
              <span className="text-[var(--color-text-primary)]">{project.tagline}</span>
            </span>

            {/* matches: <div className="w-5 h-5 ... rounded-full group-hover:bg-bg-quinary"> */}
            <div className="w-5 h-5 flex items-center justify-center rounded-full group-hover:bg-[#282828] transition-colors flex-shrink-0">
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="group-hover:brightness-[180]"
              >
                <path d="M6 1v10M1 6h10" />
              </svg>
            </div>
          </div>

        </div>
      </button>
    </motion.div>
  );
}

/* ── Modal ───────────────────────────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const accent = accentColors[idx % accentColors.length];

  return (
    /* backdrop */
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(8,9,10,0.8)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* panel */}
      <motion.div
        key="panel"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: "tween" as const, ease: "easeOut" as const, duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] rounded-2xl overflow-hidden max-h-[88vh] flex flex-col"
      >
        {/* colored top stripe */}
        <div
          className="h-[3px] w-full flex-shrink-0"
          style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
        />

        <div className="p-6 overflow-y-auto">
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-7 h-7 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[rgb(55,57,65)] transition-colors z-10"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>

          {/* logo + title + platform badges */}
          <div className="flex items-center gap-3 mb-4 pr-8">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.name}
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-lg flex-shrink-0"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-base font-semibold"
                style={{ background: `${accent}18`, color: accent }}
              >
                {project.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-[var(--color-text-primary)] tracking-tight">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[0.7rem] text-[var(--color-text-secondary)]">
                  {project.tagline}
                </span>
                {"platforms" in project && project.platforms && project.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-[0.55rem] px-1.5 py-0.5 rounded border font-medium tracking-wide uppercase"
                    style={{ borderColor: `${accent}40`, color: accent, background: `${accent}10` }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* links — top so recruiter never has to scroll */}
          <div className="flex flex-wrap gap-3 mb-5">
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary text-xs"
              >
                Web Demo →
              </a>
            )}
            {"mobile" in project && project.mobile && (
              <a
                href={project.mobile as string}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-[var(--color-border)] rounded-[10px] px-3 py-1.5 text-xs hover:border-[rgb(55,57,65)] transition-colors"
              >
                Mobile Build →
              </a>
            )}
            {project.gh && project.gh !== "#" && (
              <a
                href={project.gh}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary border border-[var(--color-border)] rounded-[10px] px-3 py-1.5 text-xs hover:border-[rgb(55,57,65)] transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>

          {/* optional image strip */}
          {"images" in project && project.images && project.images.length > 0 && (
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 hide-scroll-bar">
              {project.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  width={110}
                  height={200}
                  className="flex-shrink-0 rounded-lg object-cover h-[200px] w-[110px]"
                />
              ))}
            </div>
          )}

          {/* optional video */}
          {"video" in project && project.video && (
            <div className="mb-5 rounded-lg overflow-hidden">
              <video src={project.video} controls playsInline className="w-full max-h-[220px] rounded-lg" />
            </div>
          )}

          {/* description — each \n\n becomes its own paragraph */}
          <div className="mb-5 flex flex-col gap-3">
            {project.desc.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-[var(--color-text-secondary)] leading-[1.7]">
                {para}
              </p>
            ))}
          </div>

          {/* tech — grouped (developer-scannable) or flat pills */}
          {"techGroups" in project && project.techGroups ? (
            <div className="flex flex-col gap-3 mb-4">
              {project.techGroups.map((group) => (
                <div key={group.label}>
                  <span className="text-[0.58rem] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-1.5 block">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((t) => (
                      <span
                        key={t}
                        className="text-[0.65rem] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.65rem] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
