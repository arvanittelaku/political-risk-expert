import { SITE_URL } from "../constants";

export function isProductionSite(): boolean {
  const url = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
  return url.includes("politicalriskexpert.com") && !url.includes("localhost");
}
