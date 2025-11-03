// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = { params: { slug: string } };

// 可选：给一组兜底的 slug，防止构建时接口短暂不可达导致为空
const FALLBACK_SLUGS = ["top-10-nail-art-trends-2024"];

export async function generateStaticParams() {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) return FALLBACK_SLUGS.map((slug) => ({ slug }));

  try {
    // 静态导出阶段：必须可缓存，不能 no-store
    const res = await fetch(`${base}/blog`, { cache: "force-cache" });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const posts: Array<{ slug: string }> = await res.json();
    const slugs = posts?.map((p) => p.slug).filter(Boolean) ?? [];
    // 确保至少有一个，避免“必须有 generateStaticParams”的报错
    return (slugs.length ? slugs : FALLBACK_SLUGS).map((slug) => ({ slug }));
  } catch {
    // 接口挂了也要兜底，保证构建能继续
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }
}

export const dynamicParams = false; // 告诉 Next 只有上面那些 slug

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = params;
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) return notFound();

  try {
    // 这里同样不要 no-store（静态导出期不允许）
    const res = await fetch(`${base}/blog/by-slug/${encodeURIComponent(slug)}`, {
      cache: "force-cache",
    });
    if (!res.ok) return notFound();
    const post = await res.json();
    if (!post) return notFound();
    return <BlogDetailClient post={post} />;
  } catch {
    return notFound();
  }
}