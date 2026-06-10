import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a Political Risk Expert Witness? | UK Commercial & Arbitration Role",
  description:
    "A political risk expert witness provides independent analysis of geopolitical and regulatory risks for investment treaty arbitration, political risk insurance claims, and commercial disputes.",
  path: "/what-is-a-political-risk-expert",
});

export default function WhatIsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What Is a Political Risk Expert?" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a Political Risk Expert Witness?"
        subtitle="The role of political risk expert witnesses in UK and international arbitration and litigation."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          A political risk expert witness is an independent specialist who provides expert analysis
          and testimony on geopolitical, regulatory, and policy risks in legal proceedings. Unlike
          legal experts who interpret treaty text or contract clauses, political risk experts explain
          the factual political context of government actions, sanctions, political violence, and
          regulatory changes that are central to the dispute.
        </p>
        <p className="mb-4 text-[#374151] leading-relaxed">
          Political risk expert witnesses serve UK international arbitration counsel, commercial
          litigation solicitors, and political risk insurance counsel. They are instructed in
          investment treaty arbitration (ICSID, LCIA, ICC, UNCITRAL), political risk insurance
          coverage disputes, sanctions-related contract arbitrations, and commercial disputes with
          political risk elements.
        </p>
        <p className="mb-4 text-[#374151] leading-relaxed">
          The expert&apos;s role is to assist the tribunal or court with objective analysis based on
          their specialised knowledge. In investment treaty claims, they explain why host state conduct
          constituted expropriation or fair and equitable treatment breach in the political context of
          the time. In insurance claims, they establish whether a political peril occurred. In
          sanctions disputes, they analyse the regulatory framework and its impact on contractual
          performance.
        </p>
        <p className="mb-4 text-[#374151] leading-relaxed">
          Political risk experts must comply with CPR Part 35 in UK court proceedings and IBA Rules on
          Evidence in international arbitration. They must maintain independence and provide opinions
          within the bounds of their expertise, distinguishing political risk from commercial risk and
          explaining the limitations of their analysis where appropriate.
        </p>
        <p className="text-[#374151] leading-relaxed">
          Typical qualifications include a PhD or senior academic background in political science,
          international relations, or area studies, combined with applied experience at political
          risk consultancies and prior arbitration testimony. Country specialists and thematic
          specialists (sanctions, resource nationalism, political violence) serve different case
          profiles.
        </p>
      </PageShell>
    </>
  );
}
