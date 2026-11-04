import type { Metadata } from "next";
import { pageSocialMetadata } from "@/lib/metadata";

// 親の contact/layout.tsx が title を文字列で指定しているため、
// テンプレートが効かない。absolute でサイト名まで書く。
export const metadata: Metadata = {
  title: { absolute: "Thank You | Ryuta Mukai" },
  description: "お問い合わせありがとうございます。",
  ...pageSocialMetadata("Thank You", "お問い合わせありがとうございます。"),
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
