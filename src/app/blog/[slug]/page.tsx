import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import { api } from "@/shared/lib/api";

type PageProps = { params: { slug: string } };

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  try {
    const res = await api.get(`/blog/by-slug/${slug}`);
    const post = res.data;
    if (!post) return notFound();
    return <BlogDetailClient post={post} />;
  } catch (err) {
    console.error("Failed to fetch blog by slug:", err);
    return notFound();
  }
}

export async function generateStaticParams() {
  try {
    const res = await api.get("/blog");
    const posts: Array<{ slug: string }> = res.data ?? [];
    console.log("Posts:", posts.map(p => p.slug));
    return posts.map((p) => ({ slug: p.slug }));
  } catch (e) {
    console.warn("generateStaticParams: fallback to [] due to fetch error", e);
    return [];
  }
}