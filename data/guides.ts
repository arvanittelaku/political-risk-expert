export type Guide = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "investment-treaty-arbitration-guide",
    title: "Investment Treaty Arbitration Guide",
    h1: "Political Risk Expert Evidence in Investment Treaty Arbitration: A Guide for Counsel",
    metaTitle:
      "Investment Treaty Arbitration Expert Evidence Guide | Political Risk UK",
    metaDescription:
      "Guide for counsel on political risk expert evidence in investment treaty arbitration. BITs, expropriation, FET, Chorzow Factory, IBA Rules, and UK BIT network.",
    sections: [
      {
        heading: "The Role of Political Risk Experts in Treaty Arbitration",
        paragraphs: [
          "Investment treaty arbitration protects foreign investors against host state conduct that breaches bilateral investment treaties, the Energy Charter Treaty, or other investment protection instruments. Political risk expert witnesses provide the factual and political context that tribunals need to assess whether conduct amounted to expropriation, fair and equitable treatment breach, or other treaty violations.",
          "Unlike legal experts who interpret treaty text, political risk experts explain what happened in the host state, why it happened, and how it fits within the country's political and regulatory environment at the relevant time.",
        ],
      },
      {
        heading: "Key Treaty Standards",
        paragraphs: [
          "Expropriation claims require analysis of direct seizure, indirect regulatory measures, and creeping expropriation. The Chorzow Factory standard requires full reparation at fair market value. FET claims focus on legitimate expectations, due process, transparency, and proportionality.",
          "Full protection and security, umbrella clauses, and most favoured nation provisions may also be in issue depending on the applicable BIT.",
        ],
      },
      {
        heading: "Expert Evidence Procedure",
        paragraphs: [
          "IBA Rules on Evidence Article 5 governs party-appointed experts in most international arbitrations. Reports must state instructions, methodology, assumptions, and confirm independence. Concurrent expert evidence (hot-tubbing) is increasingly common for political risk issues.",
          "Early instruction allows experts to identify relevant country documentation, assess case theory, and coordinate with quantum experts on valuation assumptions.",
        ],
      },
      {
        heading: "UK BIT Network",
        paragraphs: [
          "The UK maintains over 80 bilateral investment treaties. With the UK now respondent in investor-state arbitrations including Woodhouse/West Cumbria Mining and Fridman claims, UK regulatory and policy expertise is increasingly in demand for both claimant and respondent counsel.",
        ],
      },
    ],
  },
  {
    slug: "sanctions-arbitration-2025-guide",
    title: "Sanctions Arbitration 2025-2026 Guide",
    h1: "Sanctions and International Arbitration 2025-2026: Expert Evidence Guide",
    metaTitle: "Sanctions Arbitration 2025-2026 Expert Evidence Guide UK",
    metaDescription:
      "Guide to sanctions in international arbitration 2025-2026. 25% of ICC cases, Russia-Ukraine, Iran re-sanctions, blocking regulations, and expert evidence approach.",
    sections: [
      {
        heading: "Sanctions as the Main Event",
        paragraphs: [
          "Sanctions are no longer the backdrop to international arbitration; they are the main event. Nearly 25% of ICC cases in Q1 2024 involved sanctions, and the trend is expected to continue through 2026.",
          "Parties dispute force majeure, frustration, impossibility, and the lawfulness of performance under overlapping UK, EU, and US sanctions regimes.",
        ],
      },
      {
        heading: "Russia-Ukraine and Iran Sanctions",
        paragraphs: [
          "Russia-Ukraine sanctions have generated the largest volume of sanctions-related arbitration. Iran re-sanctions in 2025 have renewed complexity for parties with Middle East operations and supply chains.",
          "Experts must analyse the sanctions landscape at specific dates, not present-day designations, and address how regulatory changes affected contractual obligations.",
        ],
      },
      {
        heading: "Blocking Regulations",
        paragraphs: [
          "EU and UK blocking regulations prohibit compliance with certain foreign sanctions, creating conflicting legal obligations. Experts explain the regulatory framework and what performance options were available to parties.",
        ],
      },
      {
        heading: "Expert Evidence Approach",
        paragraphs: [
          "Sanctions experts should be instructed early with the contract, applicable law, and relevant dates. Reports should address foreseeability, impossibility, and the interaction between jurisdictions' sanctions regimes with reference to specific contractual clauses.",
        ],
      },
    ],
  },
  {
    slug: "political-risk-insurance-guide",
    title: "Political Risk Insurance Guide",
    h1: "Political Risk Insurance Claims: Expert Evidence Guide",
    metaTitle: "Political Risk Insurance Expert Evidence Guide UK",
    metaDescription:
      "Guide to expert evidence in political risk insurance claims. PRTC structure, expropriation vs regulation, political violence triggers, and currency inconvertibility.",
    sections: [
      {
        heading: "PRTC Policy Structure",
        paragraphs: [
          "Political Risk, Trade Credit and Political Violence (PRTC) policies cover expropriation, political violence, currency inconvertibility, and contract frustration. Lloyd's market wording varies and requires careful policy analysis.",
          "Coverage disputes turn on whether the loss event constitutes a covered peril and whether exclusions apply.",
        ],
      },
      {
        heading: "Expropriation vs Regulation",
        paragraphs: [
          "The boundary between expropriation and legitimate regulation is the most contested area in political risk insurance. Experts analyse the host state's conduct, its cumulative effect, and whether the investor was targeted discriminatorily.",
        ],
      },
      {
        heading: "Political Violence and Currency Triggers",
        paragraphs: [
          "Political violence claims require analysis of whether events constitute war, insurrection, or politically motivated violence rather than ordinary crime. Currency claims require analysis of waiting period compliance and the cause of exchange restrictions.",
        ],
      },
      {
        heading: "Insurer vs Policyholder Experts",
        paragraphs: [
          "Each party typically appoints independent experts. Single joint experts may be appropriate for narrow coverage questions. Experts must understand both the policy wording and the political facts on the ground.",
        ],
      },
    ],
  },
  {
    slug: "resource-nationalism-guide",
    title: "Resource Nationalism Guide",
    h1: "Resource Nationalism in 2025-2026: Expert Evidence Guide for Arbitration Counsel",
    metaTitle: "Resource Nationalism Expert Evidence Guide 2025-2026 UK",
    metaDescription:
      "Guide to resource nationalism expert evidence. West Africa mining, Latin America energy, Central Asia infrastructure, BIT protections, and ICSID claims.",
    sections: [
      {
        heading: "The Resource Nationalism Surge",
        paragraphs: [
          "Resource nationalism has intensified in West Africa, Latin America, and Central Asia in 2024-2026. States are revoking mining licences, imposing windfall taxes, and forcing contract renegotiation to capture greater resource rents.",
          "These measures generate both commercial contract disputes and investment treaty claims.",
        ],
      },
      {
        heading: "Regional Focus",
        paragraphs: [
          "West Africa has seen significant mining licence actions in Guinea, Mali, and Burkina Faso following political transitions. Latin America continues energy nationalism trends. Central Asia infrastructure investments face regulatory uncertainty.",
        ],
      },
      {
        heading: "BIT Protections and ICSID Claims",
        paragraphs: [
          "Foreign investors may bring ICSID claims where resource nationalism measures breach expropriation, FET, or full protection and security standards. Political risk experts establish the political context; legal teams frame treaty arguments.",
        ],
      },
      {
        heading: "Instructing Experts",
        paragraphs: [
          "Counsel should instruct country/regional specialists with mining or energy sector knowledge. Experts need access to licence documentation, government communications, and regulatory history.",
        ],
      },
    ],
  },
  {
    slug: "uk-investor-state-guide",
    title: "UK Investor-State Guide",
    h1: "UK as Respondent in Investor-State Arbitration: What Counsel Need to Know",
    metaTitle: "UK Investor-State Arbitration Guide | Expert Evidence",
    metaDescription:
      "Guide for counsel on UK investor-state arbitration. Woodhouse/West Cumbria Mining and Fridman claims, UK BIT network, NSI Act 2021, and expert evidence.",
    sections: [
      {
        heading: "A New Frontier for the UK",
        paragraphs: [
          "The UK government is respondent in active investor-state arbitrations including Woodhouse/West Cumbria Mining and Mr Mikhail Fridman's claim. These cases represent the first significant UK investor-state disputes in the modern era.",
          "With over 80 BITs in force, the UK is likely to face further claims as foreign investors test treaty protections against UK regulatory action.",
        ],
      },
      {
        heading: "UK Regulatory Context",
        paragraphs: [
          "The National Security and Investment Act 2021 allows review and blocking of foreign investments affecting national security. Planning, environmental, and licensing decisions may also give rise to treaty claims.",
          "Expert evidence on the political and policy rationale for government decisions is essential for both claimants and respondents.",
        ],
      },
      {
        heading: "Expert Evidence for UK ISDS",
        paragraphs: [
          "Experts must understand UK administrative and regulatory processes, the policy context of government decisions, and how UK conduct compares to international minimum standards under applicable treaties.",
        ],
      },
    ],
  },
  {
    slug: "ect-sunset-provision-guide",
    title: "ECT Sunset Provision Guide",
    h1: "Energy Charter Treaty After UK Withdrawal: Expert Evidence Guide",
    metaTitle: "ECT Sunset Provision Expert Evidence Guide UK",
    metaDescription:
      "Guide to Energy Charter Treaty disputes after UK withdrawal. Sunset provision to April 2045, modernised treaty, and expert evidence in remaining ECT claims.",
    sections: [
      {
        heading: "UK Withdrawal Completed 2025",
        paragraphs: [
          "The UK completed its withdrawal from the Energy Charter Treaty in 2025 as part of broader energy transition policy. However, the sunset provision protects existing investments until April 2045.",
          "ECT disputes involving UK investments and UK-based investors will continue for decades.",
        ],
      },
      {
        heading: "Sunset Provision Mechanics",
        paragraphs: [
          "Qualifying investments made before withdrawal retain treaty protection for twenty years. Experts must analyse whether investments qualify and whether challenged measures occurred during the protected period.",
        ],
      },
      {
        heading: "Modernised Treaty and Net Zero",
        paragraphs: [
          "The modernised ECT reflects tension between climate commitments and investor protection. Energy policy changes, subsidy withdrawals, and regulatory reforms remain central to ECT claims.",
        ],
      },
      {
        heading: "Expert Evidence in ECT Claims",
        paragraphs: [
          "ECT arbitration requires analysis of regulatory measures, legitimate expectations in the energy sector, and the political context of policy changes. Country and sector specialists are typically required.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
