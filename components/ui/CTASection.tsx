import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-[#F5F7FA] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#1E2D45] sm:text-3xl">
          Instruct a Political Risk Expert Witness
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#374151]">
          Independent expert evidence for investment treaty arbitration, political risk insurance
          claims, sanctions disputes, and commercial arbitration in any jurisdiction. Impartial,
          jurisdiction-neutral analysis. Response within 1 business day.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#1565C0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1256a8]"
        >
          Instruct an Expert
        </Link>
      </div>
    </section>
  );
}
