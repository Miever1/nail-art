import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = { params: { slug: string } };

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  const base = process.env.NEXT_PUBLIC_API_URL;

  if (!base) {
    console.error("NEXT_PUBLIC_API_URL is not set.");
    return notFound();
  }

  try {
    const res = await fetch(`${base}/blog/by-slug/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return notFound();
    const post = await res.json();
    if (!post) return notFound();

    return <BlogDetailClient post={post} />;
  } catch (err) {
    console.error("Failed to fetch blog by slug:", err);
    return notFound();
  }
}

export async function generateStaticParams() {
  const base = process.env.NEXT_PUBLIC_API_URL;

  const FALLBACK_SLUGS = ["top-10-nail-art-trends-2024"];

  if (!base) {
    console.warn("generateStaticParams: base URL missing, using fallback slugs");
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }

  try {
    const res = await fetch(`${base}/blog`, { cache: "no-store" });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const posts: Array<{ slug: string }> = await res.json();
    console.log("Posts:", posts.map((p) => p.slug));
    return posts.map((p) => ({ slug: p.slug }));
  } catch (e) {
    console.warn("generateStaticParams: fallback to [] -> using fallback slugs", e);
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }
}

export const dynamicParams = false;