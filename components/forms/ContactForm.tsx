"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import {
  PRACTICE_AREAS,
  RISK_TYPES,
  FORUMS,
  CLAIM_VALUES,
  URGENCY_OPTIONS,
} from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 max-w-full rounded-[4px] border border-[#D0D9E8] px-4 py-3 text-base text-[#374151] focus:border-[#1E2D45] focus:outline-none focus:ring-1 focus:ring-[#1E2D45] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#1E2D45]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      practiceArea: String(data.get("practice_area") ?? "").trim(),
      riskType: String(data.get("risk_type") ?? "").trim(),
      forum: String(data.get("forum") ?? "").trim(),
      claimValue: String(data.get("claim_value") ?? "").trim(),
      countries: String(data.get("countries") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      urgency: String(data.get("urgency") ?? "").trim(),
      _gotcha: String(data.get("_gotcha") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="company">
            Law Firm / Organisation *
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="practice_area">
            Practice Area
          </label>
          <select id="practice_area" name="practice_area" className={inputClass}>
            <option value="">Select practice area</option>
            {PRACTICE_AREAS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="risk_type">
            Risk Type
          </label>
          <select id="risk_type" name="risk_type" className={inputClass}>
            <option value="">Select risk type</option>
            {RISK_TYPES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="forum">
            Forum
          </label>
          <select id="forum" name="forum" className={inputClass}>
            <option value="">Select forum</option>
            {FORUMS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="claim_value">
            Approximate Claim Value
          </label>
          <select id="claim_value" name="claim_value" className={inputClass}>
            <option value="">Select claim value</option>
            {CLAIM_VALUES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="countries">
          Countries Involved
        </label>
        <input id="countries" name="countries" className={inputClass} placeholder="e.g. UK, Guinea, Russia" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="message">
          Brief Description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} min-h-[120px]`}
          placeholder="Describe the dispute, relevant government actions, and expert evidence required."
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="urgency">
          Urgency
        </label>
        <select id="urgency" name="urgency" className={inputClass}>
          <option value="">Select urgency</option>
          {URGENCY_OPTIONS.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#1565C0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1256a8] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Instruct an Expert"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
