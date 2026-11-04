import type { Metadata } from "next";
import { works } from "@/data/works";
import { pageSocialMetadata } from "@/lib/metadata";

// page.tsx が "use client" のため、作品ごとの meta はここで指定する
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: work.title,
    description: work.desc.overview,
    ...pageSocialMetadata(work.title, work.desc.overview),
  };
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
