import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/metadata";

// page.tsx が "use client" のため、ページ固有の meta はここで指定する
export const metadata: Metadata = {
  title: "Contact",
  description: "お仕事のご依頼・ご相談はこちらのフォームからお問い合わせください。",
  ...pageSocialMetadata("Contact", "お仕事のご依頼・ご相談はこちらのフォームからお問い合わせください。"),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
