import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { practiceAreas } from "@/data/practice-areas";
import { riskTypes } from "@/data/risk-types";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title:
    "Political Risk Expert Witness UK | Investment Treaty, Sanctions & Arbitration",
  description:
    "Find a qualified political risk expert witness in the UK. Independent experts for investment treaty arbitration, political risk insurance claims, sanctions disputes, and commercial arbitration.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Political Risk Expert Witness UK"
        subtitle="Independent expert evidence for investment treaty arbitration, political risk insurance claims, sanctions disputes, and commercial arbitration. Serving UK international arbitration counsel and commercial litigation solicitors."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1E2D45]">Practice Areas</h2>
        <p className="mt-3 max-w-3xl text-[#374151]">
          Political risk expert witnesses provide independent analysis of geopolitical, regulatory,
          and policy risks for the four principal forums where political risk evidence is required
          in UK and international proceedings.
        </p>
        <div className="mt-8">
          <CardGrid
            items={practiceAreas.map((p) => ({
              title: p.title,
              description: p.content[0],
              href: `/practice-areas/${p.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E2D45]">2025-2026 Arbitration Landscape</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link
              href="/political-risk-explained#sanctions-landscape"
              className="rounded-[8px] border border-[#D0D9E8] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-[#C77B17]">Sanctions in Arbitration</h3>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">
                Nearly 25% of ICC cases in Q1 2024 involved sanctions. Sanctions now shape how
                parties bring claims, perform contracts, and enforce awards through 2026.
              </p>
            </Link>
            <Link
              href="/political-risk-explained#uk-investor-state"
              className="rounded-[8px] border border-[#D0D9E8] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-[#C77B17]">UK Investor-State Arbitration</h3>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">
                The UK government is respondent in Woodhouse/West Cumbria Mining and Mikhail
                Fridman claims, a new frontier with over 80 bilateral investment treaties.
              </p>
            </Link>
            <Link
              href="/guides/ect-sunset-provision-guide"
              className="rounded-[8px] border border-[#D0D9E8] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-[#C77B17]">Energy Charter Treaty</h3>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">
                UK ECT withdrawal completed 2025. The sunset provision protects existing investments
                until April 2045.
              </p>
            </Link>
            <Link
              href="/political-risk-explained#resource-nationalism"
              className="rounded-[8px] border border-[#D0D9E8] bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-[#C77B17]">Resource Nationalism</h3>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">
                Mining licence revocations in West Africa, Latin America, and Central Asia are
                generating ICSID and commercial arbitrations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1E2D45]">Types of Political Risk</h2>
        <p className="mt-3 max-w-3xl text-[#374151]">
          Expert evidence on the political risk types that most frequently require independent
          analysis in investment treaty, insurance, and commercial disputes.
        </p>
        <div className="mt-8">
          <CardGrid
            items={riskTypes.map((r) => ({
              title: r.title,
              description: r.content[0].slice(0, 160) + "...",
              href: `/risk-types/${r.slug}`,
            }))}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/risk-types/expropriation-nationalisation"
            className="font-medium text-[#1565C0] hover:underline"
          >
            Expropriation and nationalisation expert evidence
          </Link>
          <Link
            href="/risk-types/sanctions-regulatory-risk"
            className="font-medium text-[#1565C0] hover:underline"
          >
            Sanctions and regulatory risk expert evidence
          </Link>
          <Link
            href="/risk-types/fair-equitable-treatment-breach"
            className="font-medium text-[#1565C0] hover:underline"
          >
            Fair and equitable treatment expert evidence
          </Link>
          <Link
            href="/risk-types/resource-nationalism"
            className="font-medium text-[#1565C0] hover:underline"
          >
            Resource nationalism expert evidence
          </Link>
          <Link href="/risk-types" className="font-medium text-[#1565C0] hover:underline">
            View all risk types
          </Link>
        </div>
      </section>

      <section className="border-t border-[#D0D9E8] bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1E2D45]">Instruct a Political Risk Expert</h2>
          <p className="mt-3 max-w-3xl text-[#374151]">
            Read the complete guide to political risk expert evidence, understand the instruction
            process, or contact us to discuss your matter.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/political-risk-explained"
              className="rounded-[8px] border border-[#D0D9E8] bg-[#F5F7FA] px-5 py-3 text-sm font-medium text-[#1565C0] hover:bg-white"
            >
              Political Risk in Litigation and Arbitration
            </Link>
            <Link
              href="/how-to-instruct"
              className="rounded-[8px] border border-[#D0D9E8] bg-[#F5F7FA] px-5 py-3 text-sm font-medium text-[#1565C0] hover:bg-white"
            >
              How to Instruct a Political Risk Expert
            </Link>
            <Link
              href="/contact"
              className="rounded-[8px] bg-[#1565C0] px-5 py-3 text-sm font-medium text-white hover:bg-[#1256A8]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1E2D45]">Expert Witness Services</h2>
          <p className="mt-3 max-w-3xl text-[#374151]">
            Eight specialist services for investment treaty arbitration, political risk insurance,
            sanctions disputes, and commercial arbitration with political risk elements.
          </p>
          <div className="mt-8">
            <CardGrid
              items={services.map((s) => ({
                title: s.title,
                description: s.description,
                href: `/services/${s.id}`,
              }))}
            />
          </div>
          <Link href="/services" className="mt-6 inline-block text-sm font-medium text-[#1565C0] hover:underline">
            View all services
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
