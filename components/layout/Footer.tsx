import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";
import { practiceAreas } from "@/data/practice-areas";
import { riskTypes } from "@/data/risk-types";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#D0D9E8] bg-[#1E2D45] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C77B17]">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {practiceAreas.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C77B17]">Risk Types</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {riskTypes.slice(0, 4).map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/risk-types/${r.slug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/risk-types" className="text-[#C77B17] hover:underline">
                  View all risk types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C77B17]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/services" className="inline-flex min-h-[44px] items-center hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/political-risk-explained" className="inline-flex min-h-[44px] items-center hover:text-white">
                  Political Risk Explained
                </Link>
              </li>
              <li>
                <Link href="/guides" className="inline-flex min-h-[44px] items-center hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-white">
                  How to Instruct
                </Link>
              </li>
              <li>
                <Link href="/qualifications" className="inline-flex min-h-[44px] items-center hover:text-white">
                  Qualifications
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="inline-flex min-h-[44px] items-center hover:text-white">
                  Glossary
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-a-political-risk-expert"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  What Is a Political Risk Expert?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C77B17]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="break-all hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-[#C77B17] hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
            <h3 className="mb-4 mt-6 font-semibold text-[#C77B17]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          Political Risk Expert connects UK international arbitration counsel, commercial litigation
          solicitors, and political risk insurance counsel with qualified political risk expert
          witnesses. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
