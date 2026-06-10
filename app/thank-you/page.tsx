import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Enquiry Received"
        subtitle="Thank you for contacting Political Risk Expert. We will respond within 1 business day."
      />
      <main className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="text-[#374151] leading-relaxed">
          Your instruction enquiry has been submitted successfully. A member of our team will review
          your requirements and contact you to discuss expert witness availability, qualifications,
          and next steps for your arbitration or litigation matter.
        </p>
        <p className="mt-4 text-sm text-[#374151]">
          For urgent tribunal deadlines, please note your deadline in any follow-up correspondence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[4px] border border-[#D0D9E8] px-6 py-3 text-sm font-medium text-[#1E2D45] hover:bg-[#F5F7FA]"
          >
            Return Home
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#1565C0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1256a8]"
          >
            How to Instruct
          </Link>
        </div>
      </main>
    </>
  );
}
