import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or has been moved."
      />
      <main className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="text-[#374151]">
          If you need to instruct a political risk expert witness for investment treaty arbitration,
          political risk insurance, sanctions disputes, or commercial arbitration, please contact us
          directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[4px] border border-[#D0D9E8] px-6 py-3 text-sm font-medium text-[#1E2D45] hover:bg-[#F5F7FA]"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#1565C0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1256a8]"
          >
            Instruct an Expert
          </Link>
        </div>
      </main>
    </>
  );
}
