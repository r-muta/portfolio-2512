import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 検索結果に出さない。画像・動画は <meta> を持てないのでヘッダーでも指定する。
  // ⚠️ robots.txt で Disallow しない（クロールを止めると noindex が読まれず、URLだけ残る）
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
