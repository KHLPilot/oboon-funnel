import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 소개 | OBOON",
  description:
    "OBOON은 사용자의 성향을 기반으로 주거 유형을 분석하고, 더 적합한 주거 방향을 제시하는 테스트 서비스입니다.",
};

export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm">
        {/* 헤더 */}
        <div className="mb-8">
          <span className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-3 py-1 rounded-full mb-4 tracking-wide">
            서비스 소개
          </span>
          <h1 className="text-2xl font-black text-gray-900 leading-snug">
            이 서비스는<br />무엇인가요?
          </h1>
        </div>

        {/* 본문 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5 mb-6">
          <div>
            <p className="text-gray-700 text-base leading-relaxed">
              이 사이트는 사용자의 성향을 기반으로 어떤 주거 유형과 맞는지 분석하고, 그에 맞는 매물을 탐색할 수 있도록 돕는 테스트 서비스입니다.
            </p>
          </div>
          <div className="border-t border-gray-100" />
          <div>
            <p className="text-gray-700 text-base leading-relaxed">
              단순한 매물 검색이 아니라, 사용자의 선택 방식과 판단 기준을 바탕으로 더 적합한 주거 방향을 제시하는 것을 목표로 합니다.
            </p>
          </div>
        </div>

        {/* 홈으로 */}
        <Link
          href="/"
          className="
            block w-full text-center
            bg-oboon-accent text-oboon-dark
            font-black text-base
            py-4 rounded-2xl
            hover:brightness-110 active:scale-[0.98]
            transition-all duration-150
            shadow-lg shadow-yellow-400/20
          "
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
