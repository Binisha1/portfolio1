import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truth Trap Privacy Policy — Diginara",
  description: "Privacy policy for Truth Trap: Imposter Game by Diginara.",
  alternates: { canonical: "https://binishanaga.com.np/truth-trap/privacy" },
};

export default function TruthTrapPrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-16 text-[var(--color-text-tertiary)]">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-[var(--color-text-secondary)] hover:text-white">← binishanaga.com.np</a>
        <header className="mt-12 border-b border-[var(--color-border)] pb-8">
          <p className="section-label">Diginara</p>
          <h1>Truth Trap Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">Last updated: August 2, 2026</p>
        </header>
        <div className="space-y-10 py-10 text-[0.98rem] leading-7">
          <section><h2 className="mb-3 text-xl font-medium text-white">Overview</h2><p>Truth Trap: Imposter Game (“Truth Trap”, “the app”) is an offline party game published by Diginara. This policy explains what information the app handles and how it is used.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Information we collect</h2><p>The current version of Truth Trap does not collect, transmit, or sell personal information. It does not require an account, login, internet connection, location access, contacts, camera, or microphone.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Information stored on your device</h2><p>The app may store game preferences and previously used prompt identifiers locally on your device. This local data is used only to improve replay variety. Diginara cannot access it, and it is removed when you uninstall the app or clear its app data.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Third-party services and advertising</h2><p>The current version does not include advertising, analytics, payments, or third-party data-collection SDKs. If this changes, this policy will be updated before those features are introduced.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Children’s privacy</h2><p>Truth Trap is a general-audience party game and is not directed specifically to children. We do not knowingly collect personal information from anyone, including children.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Changes to this policy</h2><p>We may update this policy when the app’s features or data practices change. The updated version will be published on this page with a new “Last updated” date.</p></section>
          <section><h2 className="mb-3 text-xl font-medium text-white">Contact</h2><p>Questions about this policy can be sent to <a className="text-white underline underline-offset-4" href="mailto:binisha4200@gmail.com">binisha4200@gmail.com</a>.</p></section>
        </div>
      </article>
    </main>
  );
}
