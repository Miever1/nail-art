import { notFound } from "next/navigation";
import { videoInfo } from "../../static-data/nail-info";
import TutorialDetailClient from "./TutorialDetailClient";

type PageProps = { params: Promise<{ id: string }> };

export default async function TutorialDetailPage({ params }: PageProps) {
  const { id } = await params;
  const video = videoInfo.find(v => String(v.id) === id);
  if (!video) return notFound();

  return <TutorialDetailClient video={video} />;
}

export async function generateStaticParams() {
  return videoInfo.map(v => ({ id: String(v.id) }));
}