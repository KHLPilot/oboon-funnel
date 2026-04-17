import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { getTestData, getQuizTestIds, testRegistry } from "@/data/tests/index";
import ResultCard from "@/components/ResultCard";
import SharedResultOverlay from "@/components/SharedResultOverlay";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ testId: string; type: string }>;
}

export async function generateStaticParams() {
  const paths: { testId: string; type: string }[] = [];

  for (const testId of getQuizTestIds()) {
    const data = await getTestData(testId);
    if (!data) continue;
    for (const type of Object.keys(data.results)) {
      paths.push({ testId, type });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId, type } = await params;
  const data = await getTestData(testId);
  const result = data?.results[type];

  if (!result) return { title: "결과 없음 | OBOON" };

  return {
    title: `나는 ${result.building}! | OBOON`,
    description: `"${result.oneLiner}" — ${result.description.slice(0, 60)}...`,
  };
}

export default async function ResultPage({ params }: Props) {
  const { testId, type } = await params;
  const data = await getTestData(testId);
  const result = data?.results[type];
  const test = testRegistry.find((t) => t.id === testId);

  if (!result || !test) notFound();

  return (
    <main className="min-h-dvh bg-gray-50">
      <div className="max-w-md mx-auto px-5 py-10">
        {/* 공유 링크로 진입한 경우 상단 배너 표시 */}
        <Suspense>
          <SharedResultOverlay result={result} testId={testId} />
        </Suspense>

        <ResultCard result={result} />

        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href={`/${testId}/quiz`}
            className="
              inline-flex items-center gap-1.5
              text-sm font-semibold text-gray-600
              bg-white border border-gray-200
              px-5 py-2.5 rounded-full
              hover:bg-gray-50 hover:border-gray-300
              active:scale-[0.98] transition-all duration-150
              shadow-sm
            "
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 7H4M4 7L7 4M4 7L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            테스트 다시 하기
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href={`/${testId}/results`}
              className="
                text-xs font-medium text-gray-500
                bg-white border border-gray-200
                px-4 py-1.5 rounded-full
                hover:bg-gray-50 hover:text-gray-700
                transition-all duration-150
              "
            >
              전체 유형 보기
            </Link>
            <Link
              href="/"
              className="
                text-xs font-medium text-gray-500
                bg-white border border-gray-200
                px-4 py-1.5 rounded-full
                hover:bg-gray-50 hover:text-gray-700
                transition-all duration-150
              "
            >
              다른 테스트 보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
