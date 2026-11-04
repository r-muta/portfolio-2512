import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/metadata";

// page.tsx が "use client" のため、ページ固有の meta はここで指定する
export const metadata: Metadata = {
  title: "Profile",
  description: "Webデザイナー 向井龍太のプロフィール",
  ...pageSocialMetadata("Profile", "Webデザイナー 向井龍太のプロフィール"),
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
