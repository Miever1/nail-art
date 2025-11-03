// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = { params: { slug: string } };

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;

  // ✅ 建议优先用仅服务器可见的环境变量（没有就回退到 public）
  const base =
    process.env.API_INTERNAL_URL || process.env.NEXT_PUBLIC_API_URL;

  if (!base) {
    console.error("API base URL is not set");
    return notFound();
  }

  try {
    // ✅ 服务端请求后端，不受 CORS 影响
    const res = await fetch(`${base}/blog/by-slug/${encodeURIComponent(slug)}`, {
      // 强制每次到后端取
      cache: "no-store",
      // 如果后端用自签证书，必要时加上：
      // next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, await res.text());
      return notFound();
    }

    const post = await res.json();
    if (!post) return notFound();

    return <BlogDetailClient post={post} />;
  } catch (err) {
    console.error("Failed to fetch blog by slug:", err);
    return notFound();
  }
}

// ✅ 明确告诉 Next 这是动态页面（配合去掉 output: "export"）
export const dynamic = "force-dynamic";