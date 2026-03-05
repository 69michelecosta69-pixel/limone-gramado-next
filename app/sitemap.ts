import type { MetadataRoute } from "next";

const siteUrl = "https://www.limonegramado.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-03-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
