import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { riskTypes } from "@/data/risk-types";

export const metadata = createMetadata({
  title: "Types of Political Risk Requiring Expert Evidence UK",
  description:
    "Types of political risk requiring expert witness evidence in UK and international arbitration: expropriation, FET, sanctions, political violence, currency inconvertibility, and resource nationalism.",
  path: "/risk-types",
});

export default function RiskTypesHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Risk Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Types of Political Risk Requiring Expert Evidence"
        subtitle="Dedicated expert evidence for each category of political risk in investment treaty arbitration, political risk insurance, and commercial disputes."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={riskTypes.map((r) => ({
            title: r.title,
            description: r.content[0],
            href: `/risk-types/${r.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
