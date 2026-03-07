import type { MetadataRoute } from "next";
import { sitemapRoutes, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map((route, index) => ({
    url: route === "/" ? siteUrl : `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
