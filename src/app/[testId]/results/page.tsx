import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTestData, testRegistry } from "@/data/tests/index";
import type { Metadata } from "next";
import type { ResultType } from "@/data/types";

interface Props {
  params: Promise<{ testId: string }>;
}

export async function generateStaticParams() {
  return testRegistry.map((t) => ({ testId: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { testId } = await params;
  const test = testRegistry.find((t) => t.id === testId);
  if (!test) return { title: "OBOON" };
  return {
    title: `전체 유형 보기 — ${test.title} | OBOON`,
    description: `${test.title}의 모든 결과 유형을 한눈에 확인하세요.`,
  };
}

const COLOR_MAP: Record<string, { bg: string; badge: string; accent: string }> = {
  upward:      { bg: "from-slate-900 to-blue-950",     badge: "bg-yellow-400 text-slate-900",  accent: "text-yellow-400" },
  stable:      { bg: "from-stone-700 to-stone-900",    badge: "bg-amber-300 text-stone-900",   accent: "text-amber-300" },
  sensory:     { bg: "from-violet-900 to-fuchsia-900", badge: "bg-fuchsia-400 text-white",     accent: "text-fuchsia-300" },
  analytic:    { bg: "from-gray-800 to-red-950",       badge: "bg-red-400 text-white",         accent: "text-red-400" },
  practical:   { bg: "from-zinc-800 to-blue-900",      badge: "bg-blue-400 text-white",        accent: "text-blue-300" },
  opportunity: { bg: "from-amber-900 to-yellow-950",   badge: "bg-amber-400 text-slate-900",   accent: "text-amber-300" },
  expansive:   { bg: "from-sky-900 to-indigo-900",     badge: "bg-sky-400 text-white",         accent: "text-sky-300" },
  planner:     { bg: "from-teal-900 to-emerald-950",   badge: "bg-emerald-400 text-slate-900", accent: "text-emerald-300" },
  urban:       { bg: "from-slate-800 to-gray-900",     badge: "bg-cyan-400 text-slate-900",    accent: "text-cyan-300" },
  healing:     { bg: "from-green-900 to-emerald-950",  badge: "bg-green-400 text-slate-900",   accent: "text-green-300" },
  premium:     { bg: "from-yellow-900 to-amber-950",   badge: "bg-yellow-400 text-slate-900",  accent: "text-yellow-300" },
  budget:      { bg: "from-indigo-900 to-blue-950",    badge: "bg-indigo-400 text-white",      accent: "text-indigo-300" },
  escape:      { bg: "from-stone-800 to-neutral-950",  badge: "bg-orange-400 text-slate-900",  accent: "text-orange-300" },
};
const FALLBACK = { bg: "from-slate-900 to-slate-800", badge: "bg-white text-slate-900", accent: "text-white" };

function ResultThumbnail({ result, testId }: { result: ResultType; testId: string }) {
  const color = COLOR_MAP[result.key] ?? FALLBACK;
  const hasImage = !!result.images?.card;

  return (
    <Link href={`/${testId}/result/${result.key}`} className="block group">
      <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        {/* 썸네일 이미지 or 그라디언트 */}
        <div className={`relative h-36 ${hasImage ? "" : `bg-gradient-to-br ${color.bg}`}`}>
          {hasImage ? (
            <>
              <Image
                src={result.images!.card}
                alt={result.building}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-5xl">
              {result.emoji}
            </div>
          )}
          {/* 유형 이름 — 하단 */}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
            <p className="text-white/70 text-[10px] font-medium">{result.building}</p>
            <p className="text-white text-sm font-black leading-tight">{result.name}</p>
          </div>
        </div>

        {/* 한줄 설명 */}
        <div className="bg-white px-3 py-2.5">
          <p className={`text-xs font-semibold ${color.accent.replace("text-", "text-").replace("-300", "-600").replace("-400", "-600")}`}>
            "{result.oneLiner}"
          </p>
        </div>
      </div>
    </Link>
  );
}

export default async function AllResultsPage({ params }: Props) {
  const { testId } = await params;
  const data = await getTestData(testId);
  const test = testRegistry.find((t) => t.id === testId);

  if (!data || !test) notFound();

  const resultList = Object.values(data.results);

  return (
    <main className="min-h-dvh bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center gap-3">
          <Link
            href={`/${testId}`}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            aria-label="테스트 홈으로"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div>
            <p className="text-xs text-gray-400">{test.title}</p>
            <h1 className="text-sm font-bold text-gray-900">전체 유형 보기</h1>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-8">
        <p className="text-gray-400 text-xs mb-6 text-center">
          총 {resultList.length}가지 유형 · 카드를 누르면 상세 결과를 볼 수 있어요
        </p>

        <div className="grid grid-cols-2 gap-3">
          {resultList.map((result) => (
            <ResultThumbnail key={result.key} result={result} testId={testId} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${testId}/quiz`}
            className="
              inline-block
              bg-oboon-accent text-oboon-dark
              font-black text-base
              px-8 py-4 rounded-2xl
              hover:brightness-110 active:scale-[0.98]
              transition-all duration-150
              shadow-lg shadow-yellow-400/20
            "
          >
            테스트 시작하기 →
          </Link>
        </div>
      </div>
    </main>
  );
}
