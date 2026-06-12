import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://fundoachamaqui.com";

  // Static URLs
  const staticRoutes = [
    "",
    "/alojamiento",
    "/rooms",
    "/actividades",
    "/galeria",
    "/contacto",
    "/nosotros",
    "/testimonios",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Fetch rooms dynamically
  let roomRoutes: any[] = [];
  try {
    const rooms = await prisma.room.findMany({
      select: { slug: true, updatedAt: true },
    });
    roomRoutes = rooms.map((room) => ({
      url: `${baseUrl}/rooms/${room.slug}`,
      lastModified: room.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap rooms fetch error:", error);
  }

  // Fetch blog posts dynamically
  let blogRoutes: any[] = [];
  try {
    const posts = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true },
    });
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Sitemap blogs fetch error:", error);
  }

  return [...staticRoutes, ...roomRoutes, ...blogRoutes];
}
