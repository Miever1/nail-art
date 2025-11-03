import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = { params: { slug: string } };

// Make this segment static-friendly for `output: "export"`
export const dynamic = "force-static";          // Ensures no dynamic rendering
export const dynamicParams = false;             // Only build the slugs we return
export const revalidate = false;                // or a number (e.g. 60) if you want ISR

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!; // e.g. "https://api.yoursite.com"

// --- Data helpers using Next's fetch ---
async function getAllSlugs() {
  try {
    const res = await fetch(`${API_BASE}/blog`, {
      // For export builds, avoid runtime caching signals unless you want ISR.
      // next: { revalidate: 60 }, // Uncomment if you want ISR
      cache: "force-cache",
    });
    if (!res.ok) return [];
    const posts: Array<{ slug: string }> = await res.json();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

async function getPost(slug: string) {
  const res = await fetch(`${API_BASE}/blog/by-slug/${slug}`, {
    // next: { revalidate: 60 }, // ISR option
    cache: "force-cache",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

// --- Required for `output: "export"` on a dynamic route ---
export async function generateStaticParams() {
  return await getAllSlugs();
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return <BlogDetailClient post={post} />;
}