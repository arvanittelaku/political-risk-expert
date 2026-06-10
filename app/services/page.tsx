import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { serviceNode } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Political Risk Expert Witness Services UK",
  description:
    "Political risk expert witness services for investment treaty arbitration, political risk insurance, sanctions analysis, expropriation, FET, political violence, and country risk reports.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={services.map((s) => serviceNode(s.id, s.title, s.description))}
      />
      <PageShell
        title="Political Risk Expert Witness Services"
        subtitle="Eight specialist expert witness services for UK international arbitration counsel, commercial litigation solicitors, and political risk insurance counsel."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
        <p className="mt-8 text-sm text-[#374151]">
          Select a service to view scope, expert approach, and frequently asked questions.
        </p>
      </PageShell>
    </>
  );
}
