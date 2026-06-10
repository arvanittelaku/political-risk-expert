import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Guides for Arbitration Counsel | Political Risk Expert UK",
  description:
    "Expert evidence guides for arbitration counsel on investment treaty arbitration, sanctions, political risk insurance, resource nationalism, UK investor-state arbitration, and ECT sunset provision.",
  path: "/guides",
});

export default function GuidesHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Guides for Arbitration Counsel"
        subtitle="Practical guides on instructing political risk expert witnesses for investment treaty arbitration, sanctions disputes, insurance claims, and UK investor-state proceedings."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: g.sections[0].paragraphs[0],
            href: `/guides/${g.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
