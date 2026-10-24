"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function assertAdmin(): Promise<{ success: false; error: string } | null> {
  try {
    await requireAdmin();
    return null;
  } catch {
    return { success: false as const, error: "No autorizado" };
  }
}

export async function getBlogPosts() {
  return prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function createBlogPost(formData: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  mainImage: string;
}) {
  const denied = await assertAdmin();
  if (denied) return denied;
  try {
    const post = await prisma.blogPost.create({
      data: {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        mainImage: formData.mainImage || "/images/received_341214391902150.jpeg",
      },
    });
    revalidatePath("/blog");
    revalidatePath("/nosotros");
    return { success: true, post };
  } catch (error: unknown) {
    console.error("Error creating blog post:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to create post" };
  }
}

export async function updateBlogPost(
  id: string,
  formData: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    mainImage: string;
  }
) {
  const denied = await assertAdmin();
  if (denied) return denied;
  try {
    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        mainImage: formData.mainImage,
      },
    });
    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    revalidatePath("/nosotros");
    return { success: true, post };
  } catch (error: unknown) {
    console.error("Error updating blog post:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to update post" };
  }
}

export async function deleteBlogPost(id: string) {
  const denied = await assertAdmin();
  if (denied) return denied;
  try {
    const post = await prisma.blogPost.delete({
      where: { id },
    });
    revalidatePath("/blog");
    revalidatePath("/nosotros");
    return { success: true, post };
  } catch (error: unknown) {
    console.error("Error deleting blog post:", error);
    return { success: false, error: error instanceof Error ? error.message : "Failed to delete post" };
  }
}
