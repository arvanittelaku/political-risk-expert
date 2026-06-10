import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="mt-10">
      {title ? (
        <h2 className="text-xl font-bold text-[#1E2D45] sm:text-2xl">{title}</h2>
      ) : null}
      <div className={title ? "mt-6 space-y-6" : "space-y-6"}>
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-[8px] border border-[#D0D9E8] bg-white p-5">
            <h3 className="font-semibold text-[#1E2D45]">{faq.question}</h3>
            <p className="mt-2 text-[#374151] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
