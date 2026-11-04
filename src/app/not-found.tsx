import type { Metadata } from "next";
import { GlobalHeader } from "@/components/GlobalHeader";

export const metadata: Metadata = {
  title: "404 Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#FCFCFC]" />

      <GlobalHeader />

      <main className="relative min-h-screen text-slate-900">
        <div className="flex flex-col items-center justify-center min-h-screen px-[20px]">
          <div className="text-center">
            <h1 className="font-inter font-bold text-[80px] md:text-[128px] leading-none tracking-[-0.02em] mb-[10px]">
              404
            </h1>

            <p className="font-inter font-normal text-[16px] md:text-[20px] uppercase tracking-[0.15em] mb-[30px] text-slate-900">
              Page Not Found
            </p>

            <p className="font-noto font-normal text-[12px] md:text-[14px] leading-relaxed text-slate-600">
              お探しのページは見つかりません。<br />
              お腹が空いていたので、僕が美味しくいただきました🤤
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
