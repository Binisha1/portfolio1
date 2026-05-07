export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="space-container py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-xs text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} Binisha Naga. All rights reserved.
        </span>
        <span className="text-xs text-[var(--color-text-secondary)]">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
