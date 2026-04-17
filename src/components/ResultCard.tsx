"use client";

import Image from "next/image";
import type { ResultType } from "@/data/types";
import ShareButtons from "@/components/ShareButtons";
import AdUnit from "@/components/AdUnit";

interface ResultCardProps {
  result: ResultType;
}

const OBOON_URL = "https://oboon.co.kr";

const COLOR_MAP: Record<
  string,
  { bg: string; overlay: string; accent: string; badge: string }
> = {
  upward:      { bg: "from-slate-900 to-blue-950",     overlay: "from-slate-900/80 to-blue-950/60",    accent: "text-yellow-400",   badge: "bg-yellow-400 text-slate-900" },
  stable:      { bg: "from-stone-700 to-stone-900",    overlay: "from-stone-900/80 to-stone-700/60",   accent: "text-amber-300",    badge: "bg-amber-300 text-stone-900" },
  sensory:     { bg: "from-violet-900 to-fuchsia-900", overlay: "from-violet-900/80 to-fuchsia-900/60",accent: "text-fuchsia-300",  badge: "bg-fuchsia-400 text-white" },
  analytic:    { bg: "from-gray-800 to-red-950",       overlay: "from-gray-900/80 to-red-950/60",      accent: "text-red-400",      badge: "bg-red-400 text-white" },
  practical:   { bg: "from-zinc-800 to-blue-900",      overlay: "from-zinc-900/80 to-blue-900/60",     accent: "text-blue-300",     badge: "bg-blue-400 text-white" },
  opportunity: { bg: "from-amber-900 to-yellow-950",   overlay: "from-amber-900/80 to-yellow-950/60",  accent: "text-amber-300",    badge: "bg-amber-400 text-slate-900" },
  expansive:   { bg: "from-sky-900 to-indigo-900",     overlay: "from-sky-900/80 to-indigo-900/60",    accent: "text-sky-300",      badge: "bg-sky-400 text-white" },
  planner:     { bg: "from-teal-900 to-emerald-950",   overlay: "from-teal-900/80 to-emerald-950/60",  accent: "text-emerald-300",  badge: "bg-emerald-400 text-slate-900" },
  urban:       { bg: "from-slate-800 to-gray-900",     overlay: "from-slate-900/80 to-gray-900/60",    accent: "text-cyan-300",     badge: "bg-cyan-400 text-slate-900" },
  healing:     { bg: "from-green-900 to-emerald-950",  overlay: "from-green-900/80 to-emerald-950/60", accent: "text-green-300",    badge: "bg-green-400 text-slate-900" },
  premium:     { bg: "from-yellow-900 to-amber-950",   overlay: "from-yellow-900/80 to-amber-950/60",  accent: "text-yellow-300",   badge: "bg-yellow-400 text-slate-900" },
  budget:      { bg: "from-indigo-900 to-blue-950",    overlay: "from-indigo-900/80 to-blue-950/60",   accent: "text-indigo-300",   badge: "bg-indigo-400 text-white" },
  escape:      { bg: "from-stone-800 to-neutral-950",  overlay: "from-stone-900/80 to-neutral-950/60", accent: "text-orange-300",   badge: "bg-orange-400 text-slate-900" },
};

const FALLBACK = {
  bg: "from-slate-900 to-slate-800",
  overlay: "from-slate-900/80 to-slate-800/60",
  accent: "text-white",
  badge: "bg-white text-slate-900",
};

function FormattedText({
  text,
  baseClass = "text-gray-800 text-sm leading-relaxed",
}: {
  text: string;
  baseClass?: string;
}) {
  const paragraphs = text.split("\n\n");
  return (
    <div className="space-y-2 mt-1">
      {paragraphs.map((para, i) => {
        if (para.startsWith("→ ")) {
          return (
            <p key={i} className="text-sm font-extrabold text-gray-900 pt-1">
              {para}
            </p>
          );
        }
        return (
          <p key={i} className={baseClass}>
            {para}
          </p>
        );
      })}
    </div>
  );
}

function CreditLine({ credits }: { credits: ResultType["photoCredits"] }) {
  if (!credits?.length) return null;
  return (
    <p className="text-center text-[10px] text-gray-500 mt-3 leading-relaxed">
      📷{" "}
      {credits.map((c, i) => (
        <span key={i}>
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-400"
          >
            {c.author}
          </a>
          {" "}({c.source}){i < credits.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}

export default function ResultCard({ result }: ResultCardProps) {
  const color = COLOR_MAP[result.key] ?? FALLBACK;
  const hasImage = !!result.images?.card;

  return (
    <div className="animate-fade-in w-full max-w-md mx-auto">
      {/* Hero */}
      <div
        className={`relative rounded-3xl mb-6 overflow-hidden ${hasImage ? "" : `bg-gradient-to-br ${color.bg}`}`}
      >
        {hasImage ? (
          /* 이미지를 전체 히어로로 — 텍스트는 하단 그라디언트 위에 오버레이 */
          <div className="relative w-full h-80">
            <Image
              src={result.images!.card}
              alt={result.building}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
            {/* 하단 40% → 완전 불투명 그라디언트 (텍스트 가독성) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* 배지 — 좌상단 */}
            <span className={`absolute top-5 left-5 text-xs font-bold px-3 py-1 rounded-full ${color.badge}`}>
              나의 유형
            </span>
            {/* 텍스트 — 하단 */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
              <p className="text-white font-extrabold text-xs tracking-widest uppercase mb-1.5 drop-shadow">
                📍 {result.building}
              </p>
              <h1 className="text-3xl font-black text-white mb-1.5 drop-shadow-lg">
                {result.name}
              </h1>
              <p className={`text-sm font-semibold drop-shadow ${color.accent}`}>
                "{result.oneLiner}"
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white" />
            </div>
            <div className="relative z-10 p-8">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${color.badge}`}>
                나의 유형
              </span>
              <div className="text-6xl mb-4">{result.emoji}</div>
              <p className="text-white/60 text-sm font-medium mb-1">
                {result.building}
              </p>
              <h1 className="text-2xl font-black text-white mb-2">
                {result.name}
              </h1>
              <p className={`text-base font-semibold ${color.accent}`}>
                "{result.oneLiner}"
              </p>
            </div>
          </>
        )}
      </div>

      {/* 성향 설명 */}
      <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm border border-gray-100">
        <FormattedText
          text={result.description}
          baseClass="text-gray-700 text-base leading-relaxed"
        />
      </div>

      {/* 강점 / 리스크 / 해결 방향 */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100 space-y-4">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            강점
          </span>
          <FormattedText text={result.strength} />
        </div>
        <div className="border-t border-gray-100" />
        <div>
          <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
            주의점
          </span>
          <FormattedText text={result.risk} />
        </div>
        <div className="border-t border-gray-100" />
        <div>
          <span className="text-xs font-bold text-oboon-primary uppercase tracking-wider">
            찰떡궁합
          </span>
          <FormattedText text={result.solution} />
        </div>
      </div>

      {/* 공유 */}
      <ShareButtons result={result} />

      {/* 광고 */}
      <AdUnit
        slot={process.env.NEXT_PUBLIC_AD_SLOT_RESULT ?? ""}
        className="mb-6 rounded-xl overflow-hidden"
      />

      {/* CTA */}
      <div className="bg-oboon-dark rounded-2xl overflow-hidden">
        {/* 상단 브랜드 바 */}
        <div className="bg-oboon-accent px-6 py-2.5 flex items-center justify-center gap-2">
          <span className="text-oboon-dark text-xs font-black tracking-widest uppercase">OBOON</span>
          <span className="text-oboon-dark/50 text-xs">·</span>
          <span className="text-oboon-dark text-xs font-medium">부동산 조건 검증 서비스</span>
        </div>

        <div className="px-6 pt-5 pb-6">
          {/* 한줄 문구 */}
          <p className="text-center text-white text-base font-semibold leading-snug mb-5">
            {result.ctaSubtext}
          </p>

          {/* 버튼 */}
          <a
            href={OBOON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center
              bg-oboon-accent text-oboon-dark
              font-black text-base
              py-4 px-6 rounded-xl
              active:scale-[0.98]
              hover:brightness-110
              transition-all duration-150
              shadow-lg shadow-yellow-400/20
            "
          >
            {result.ctaText}
          </a>

          {/* 사진 출처 */}
          <CreditLine credits={result.photoCredits} />
        </div>
      </div>
    </div>
  );
}
