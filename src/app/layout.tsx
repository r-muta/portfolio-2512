import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, baseOpenGraph, baseTwitter } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// OGP画像などの絶対URLの基準。
// NEXT_PUBLIC_SITE_URL（独自ドメイン用）→ Vercel本番URL → デプロイ記録のURL の順で使う
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://portfolio-2512.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: "%s | Ryuta Mukai",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    ...baseOpenGraph,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    ...baseTwitter,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  // 検索結果に出さない（URLを知っている人だけが見る）
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-[1600px]">{children}</div>
      </body>
    </html>
  );
}
