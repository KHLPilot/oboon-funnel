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
            href={`/${testId}`}
            className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-600 transition-colors"
          >
            테스트 다시 하기
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={`/${testId}/results`}
              className="text-xs text-gray-300 hover:text-gray-500 transition-colors"
            >
              전체 유형 보기
            </Link>
            <span className="text-gray-200 text-xs">·</span>
            <Link
              href="/"
              className="text-xs text-gray-300 hover:text-gray-500 transition-colors"
            >
              다른 테스트 보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
