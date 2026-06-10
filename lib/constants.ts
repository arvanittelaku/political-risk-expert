export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.politicalriskexpert.com";
export const SITE_NAME = "Political Risk Expert";
export const SITE_EMAIL = "info@politicalriskexpert.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/politicalriskexpert";

export const COLORS = {
  primary: "#1E2D45",
  accent: "#1565C0",
  highlight: "#C77B17",
  background: "#FFFFFF",
  sectionAlt: "#F5F7FA",
  border: "#D0D9E8",
  heading: "#1E2D45",
  body: "#374151",
} as const;
