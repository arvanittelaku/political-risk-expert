import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Political Risk Expert website.",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy" }];

  return (
    <PageShell title="Privacy Policy" breadcrumbs={crumbs}>
      <p className="mb-4 text-[#374151] leading-relaxed">
        Political Risk Expert (&quot;we&quot;, &quot;us&quot;) operates politicalriskexpert.com. This
        policy explains how we collect, use, and protect personal data when you use our website or
        submit an enquiry form.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1E2D45]">Data We Collect</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        When you submit our contact form, we collect your name, law firm or organisation, email
        address, phone number, practice area, risk type, forum, claim value, countries involved,
        case description, and urgency. We use this information to respond to your enquiry and match
        you with appropriate expert witness services.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1E2D45]">How We Use Your Data</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        We process enquiry data to respond to your instruction request, communicate about expert
        availability, and improve our services. We do not sell personal data to third parties. Data
        may be shared with expert witnesses and service providers involved in fulfilling your enquiry,
        subject to confidentiality obligations.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1E2D45]">Legal Basis</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        We process personal data on the basis of legitimate interests in responding to enquiries and
        providing expert witness referral services, and where applicable your consent when submitting
        the contact form.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1E2D45]">Your Rights</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Under UK GDPR, you have the right to access, rectify, erase, restrict processing, and object
        to processing of your personal data. Contact us at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#1565C0] hover:underline">
          {SITE_EMAIL}
        </a>{" "}
        to exercise these rights.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#1E2D45]">Contact</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        For privacy enquiries, contact{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#1565C0] hover:underline">
          {SITE_EMAIL}
        </a>
        .
      </p>
    </PageShell>
  );
}
