import { notFound } from "next/navigation";
import Link from "next/link";
import { testRegistry } from "@/data/tests/index";
import LandmarkSlideshow from "@/components/LandmarkSlideshow";
import type { Metadata } from "next";

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
    title: `${test.title} | OBOON`,
    description: test.description,
  };
}

export default async function TestLandingPage({ params }: Props) {
  const { testId } = await params;
  const test = testRegistry.find((t) => t.id === testId);

  if (!test) notFound();

  // 준비 중인 테스트는 coming soon 페이지 표시
  if (!test.isLive) {
    return (
      <main className="min-h-dvh bg-oboon-dark flex flex-col items-center justify-center px-5 text-center">
        <span className="text-6xl mb-6">{test.emoji}</span>
        <div className="inline-block bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
          준비 중
        </div>
        <h1 className="text-2xl font-black text-white mb-3">{test.title}</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-10">
          {test.description}
          <br />
          <span className="text-gray-600">곧 공개됩니다.</span>
        </p>
        <Link
          href="/"
          className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-300 transition-colors"
        >
          ← 다른 테스트 보기
        </Link>
      </main>
    );
  }

  const hasSlideshow = test.id === "landmark";

  return (
    <main className="relative min-h-dvh flex flex-col overflow-hidden">
      {/* 배경 */}
      {hasSlideshow ? (
        <LandmarkSlideshow />
      ) : (
        <div className="absolute inset-0 bg-oboon-dark" />
      )}

      {/* 콘텐츠 — 상하로 나눠서 타이틀은 중앙, CTA는 하단 고정 */}
      <div className="relative flex-1 flex flex-col" style={{ zIndex: 3 }}>
        {/* 중앙 타이틀 영역 */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center pb-8">
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-oboon-accent inline-block" />
            {test.tag}
          </div>

          {!hasSlideshow && <div className="text-6xl mb-5">{test.emoji}</div>}

          <h1 className="text-3xl font-black text-white leading-tight mb-3" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            {test.title}
          </h1>

          <p className="text-white/70 text-sm leading-relaxed max-w-xs" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            {test.description}
          </p>
        </div>

        {/* 하단 CTA */}
        <div className="px-6 pb-6 flex flex-col items-center gap-3">
          <Link
            href={`/${test.id}/quiz`}
            className="
              w-full max-w-xs block text-center
              bg-oboon-accent text-oboon-dark
              font-black text-lg
              py-4 rounded-2xl
              active:scale-[0.98]
              hover:brightness-110
              transition-all duration-150
              shadow-2xl shadow-black/40
            "
          >
            테스트 시작하기 →
          </Link>

          <p className="text-white/50 text-xs">
            약 2분 소요 · {test.questionCount}문항
          </p>

          <div className="flex items-center gap-4 mt-1">
            <Link
              href="/"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              ← 다른 테스트 보기
            </Link>
            {test.type === "quiz" && (
              <>
                <span className="text-white/20 text-xs">·</span>
                <Link
                  href={`/${test.id}/results`}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  전체 유형 보기
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
