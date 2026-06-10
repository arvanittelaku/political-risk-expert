import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Glossary | Political Risk & Arbitration Terms",
  description:
    "Glossary of political risk, investment treaty arbitration, sanctions, and political risk insurance terms for UK arbitration counsel and commercial litigation solicitors.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Political Risk & Arbitration Glossary"
        subtitle="35 key terms for investment treaty arbitration, political risk insurance, sanctions disputes, and commercial arbitration with political risk elements."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
