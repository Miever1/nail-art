import { notFound } from "next/navigation";
import { blogPosts } from "../../static-data/nail-info";
import BlogDetailClient from "./BlogDetailClient";

type PageProps = { params: Promise<{ id: string }> };

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) return notFound();

  return <BlogDetailClient post={post} />;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }));
}