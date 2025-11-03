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

// ✅ 强制动态渲染（运行时加载，不静态导出）
export const dynamic = "force-dynamic";