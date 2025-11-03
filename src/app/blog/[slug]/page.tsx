import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import { api } from "@/shared/lib/api";

type PageProps = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage(props: PageProps) {
  const { slug } = await props.params;

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
  const res = await api.get("/blog");
  const posts: Array<{ slug: string }> = res.data ?? [];
  return posts.map((p) => ({ slug: p.slug }));
}