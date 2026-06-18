import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Instruct a Political Risk Expert Witness UK",
  description:
    "Instruct a political risk expert witness for investment treaty arbitration, political risk insurance, sanctions disputes, or commercial arbitration. Response within 1 business day.",
  path: "/contact",
  noindex: true,
  follow: true,
});

const trustPoints = [
  "Investment treaty and insurance expertise",
  "Sanctions arbitration specialists",
  "CPR Part 35 and IBA Rules",
  "Response within 1 business day",
];

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Instruct a Political Risk Expert Witness"
        subtitle="Complete the form below and we will match your matter with a qualified political risk expert witness."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-[#374151] leading-relaxed">
          We handle instructions for disputes in any jurisdiction and forum. Specify the countries
          involved, the arbitration or court seat, and the political risk at issue in the form below.
          Expert matching is based on regional or thematic expertise required by your matter, not on
          a predetermined geographic focus. Response within one business day.
        </p>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded-[8px] border border-[#D0D9E8] bg-[#F5F7FA] p-6">
            <h2 className="text-lg font-semibold text-[#1E2D45]">Why Instruct Through Us</h2>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-[#374151]">
                  <span className="text-[#1565C0]" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
