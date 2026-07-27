import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/beauty-acupuncture", "/column", "/privacy"];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
