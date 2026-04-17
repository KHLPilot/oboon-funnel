"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { ResultType } from "@/data/types";

interface Props {
  result: ResultType;
  testId: string;
}

export default function SharedResultOverlay({ result, testId }: Props) {
  const searchParams = useSearchParams();
  const isShared = searchParams.get("from") === "share";

  if (!isShared) return null;

  return (
    <>
      {/* 상단 배너 — 친구 결과임을 알림 */}
      <div className="w-full max-w-md mx-auto mb-4 px-1">
        <div className="bg-oboon-accent/10 border border-oboon-accent/30 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-xl flex-shrink-0">🔗</span>
          <div>
            <p className="text-oboon-dark text-xs font-bold">친구가 공유한 결과예요</p>
            <p className="text-gray-500 text-xs mt-0.5">나도 테스트해서 내 유형을 알아보세요!</p>
          </div>
        </div>
      </div>

      {/* 하단 고정 CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-100 px-5 py-4 safe-area-pb">
        <div className="max-w-md mx-auto space-y-2">
          <p className="text-center text-xs text-gray-400 mb-2">
            친구는 <span className="font-bold text-gray-700">{result.name}</span>이래요. 나는?
          </p>
          <Link
            href={`/${testId}/quiz`}
            className="
              block w-full text-center
              bg-oboon-accent text-oboon-dark
              font-black text-base
              py-4 rounded-2xl
              active:scale-[0.98] hover:brightness-110
              transition-all duration-150
              shadow-lg shadow-yellow-400/20
            "
          >
            나도 테스트하러 가기 →
          </Link>
        </div>
      </div>

      {/* 하단 고정 CTA 공간만큼 여백 */}
      <div className="h-32" />
    </>
  );
}
