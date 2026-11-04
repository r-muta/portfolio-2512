import type { Metadata } from "next";

// Next.js の metadata は openGraph / twitter をオブジェクトごと上書きするため、
// 子ページで openGraph を指定すると親の画像・site_name などが消える。
// 子ページはこの共通値を展開してから title / description だけ差し替える。

export const SITE_NAME = "R.MUKAI Portfolio";
export const SITE_TITLE = "Ryuta Mukai | Web Designer";
export const SITE_DESCRIPTION = "Web Designer based in Yokohama";

// src/app/opengraph-image.png（ファイル規約で /opengraph-image.png に配信される）
const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Web Design Portfolio R.MUKAI",
};

export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "ja_JP",
  siteName: SITE_NAME,
  images: [OG_IMAGE],
};

export const baseTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  images: [OG_IMAGE],
};

/** ページ固有の title / description から OGP・Twitter カードの meta を作る */
export function pageSocialMetadata(title: string, description: string): Pick<Metadata, "openGraph" | "twitter"> {
  const fullTitle = `${title} | Ryuta Mukai`;
  return {
    openGraph: { ...baseOpenGraph, title: fullTitle, description },
    twitter: { ...baseTwitter, title: fullTitle, description },
  };
}
