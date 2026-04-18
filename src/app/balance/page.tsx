"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

const OBOON_URL = "https://oboon.co.kr";

const questions = [
  {
    situation: "같은 가격이라면?",
    a: { label: "역세권 10평 빌라", sub: "지하철 도보 2분 · 작지만 위치는 완벽" },
    b: { label: "역까지 15분 30평 아파트", sub: "공간은 넓지만 매일 걸어야 해" },
  },
  {
    situation: "내 집 마련, 어떻게?",
    a: { label: "지금 당장 3억 대출해서 매수", sub: "빚이 있어도 내 집이 생긴다" },
    b: { label: "10년 더 모아서 현금으로 산다", sub: "대출 없는 내 집 · 기다림이 답" },
  },
  {
    situation: "같은 예산이라면?",
    a: { label: "서울 도심 10평 구축", sub: "낡았지만 서울 주소가 있다" },
    b: { label: "경기도 신도시 30평 신축", sub: "넓고 새것이지만 서울은 아니다" },
  },
  {
    situation: "투자 방식을 고른다면?",
    a: { label: "개발 호재 지역 갭투자", sub: "오를 것 같은 곳에 먼저 들어간다" },
    b: { label: "비싸도 검증된 강남 실거주", sub: "비싸도 안전한 선택이 최고다" },
  },
  {
    situation: "부동산 전략은?",
    a: { label: "전세 살며 여러 채 투자", sub: "레버리지로 자산을 빠르게 늘린다" },
    b: { label: "대출 없이 한 채 실거주", sub: "빚 없는 삶이 진짜 자유다" },
  },
];

// 통계 타입: { q0_A: number, q0_B: number, ... }
type Stats = Record<string, number>;

function calcPct(stats: Stats, qi: number): { pctA: number; pctB: number } {
  const a = (stats[`q${qi}_A`] ?? 0);
  const b = (stats[`q${qi}_B`] ?? 0);
  const total = a + b;
  if (total === 0) return { pctA: 50, pctB: 50 };
  return { pctA: Math.round((a / total) * 100), pctB: 100 - Math.round((a / total) * 100) };
}

export default function BalancePage() {
  const [current, setCurrent] = useState(0);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);
  const [chosen, setChosen] = useState<"A" | "B" | null>(null);
  const [done, setDone] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  const total = questions.length;
  const progress = (current / total) * 100;

  function handleChoose(choice: "A" | "B") {
    if (chosen) return;
    setChosen(choice);
    setTimeout(() => {
      const next = [...choices, choice];
      if (current + 1 >= total) {
        setChoices(next);
        // 완료 시 서버에 선택 기록 전송 + 최신 통계 조회
        // 선택 통계 저장 + 참여자 수 +1
        fetch("/api/counts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: "balance" }),
        }).catch(() => {});
        fetch("/api/balance-stats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ choices: next }),
        }).finally(() => {
          fetch("/api/balance-stats")
            .then((r) => r.json())
            .then((data) => setStats(data))
            .catch(() => {});
        });
        setDone(true);
      } else {
        setChoices(next);
        setCurrent((p) => p + 1);
        setChosen(null);
      }
    }, 600);
  }

  // 결과 화면 진입 시 stats가 아직 없으면 로드
  useEffect(() => {
    if (done && !stats) {
      fetch("/api/balance-stats")
        .then((r) => r.json())
        .then((data) => setStats(data))
        .catch(() => {});
    }
  }, [done, stats]);

  function reset() {
    setCurrent(0);
    setChoices([]);
    setChosen(null);
    setDone(false);
    setStats(null);
  }

  const q = questions[current];

  // ── 결과 화면 ──
  if (done) {
    const aCount = choices.filter((c) => c === "A").length;

    return (
      <main className="min-h-dvh bg-oboon-dark flex flex-col">
        <header className="px-5 pt-10 pb-6 text-center">
          <div className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-4 py-1.5 rounded-full mb-5 tracking-wide">
            다른 사람들의 선택
          </div>
          <p className="text-gray-400 text-sm">
            당신은 <span className="text-oboon-accent font-black">A를 {aCount}번</span> 골랐어요.
            <br />다른 사람들은 어떻게 선택했을까요?
          </p>
        </header>

        <div className="flex-1 px-5 pb-10 max-w-md mx-auto w-full space-y-3">
          {!stats ? (
            <div className="text-center py-10 text-gray-600 text-sm">통계 불러오는 중...</div>
          ) : null}
          {questions.map((q, i) => {
            const myChoice = choices[i];
            const { pctA: statA, pctB: statB } = stats
              ? calcPct(stats, i)
              : { pctA: 50, pctB: 50 };
            const pickedA = myChoice === "A";

            return (
              <div key={i} className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                  Q{i + 1} · {q.situation}
                </p>

                {/* A 선택지 */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      {pickedA && (
                        <span className="text-[10px] font-black text-oboon-accent bg-oboon-accent/15 px-1.5 py-0.5 rounded-full">
                          내 선택
                        </span>
                      )}
                      <span className={`text-xs font-bold ${pickedA ? "text-white" : "text-gray-400"}`}>
                        {q.a.label}
                      </span>
                    </div>
                    <span className={`text-sm font-black flex-shrink-0 ml-2 ${pickedA ? "text-oboon-accent" : "text-gray-500"}`}>
                      {statA}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${pickedA ? "bg-oboon-accent" : "bg-gray-600"}`}
                      style={{ width: `${statA}%` }}
                    />
                  </div>
                </div>

                {/* B 선택지 */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      {!pickedA && (
                        <span className="text-[10px] font-black text-white bg-white/15 px-1.5 py-0.5 rounded-full">
                          내 선택
                        </span>
                      )}
                      <span className={`text-xs font-bold ${!pickedA ? "text-white" : "text-gray-400"}`}>
                        {q.b.label}
                      </span>
                    </div>
                    <span className={`text-sm font-black flex-shrink-0 ml-2 ${!pickedA ? "text-white" : "text-gray-500"}`}>
                      {statB}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${!pickedA ? "bg-white" : "bg-gray-600"}`}
                      style={{ width: `${statB}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_RESULT ?? ""}
            className="rounded-xl overflow-hidden"
          />

          {/* CTA */}
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-oboon-accent px-6 py-2.5 flex items-center justify-center gap-2">
              <span className="text-oboon-dark text-xs font-black tracking-widest uppercase">OBOON</span>
              <span className="text-oboon-dark/50 text-xs">·</span>
              <span className="text-oboon-dark text-xs font-medium">부동산 조건 검증 서비스</span>
            </div>
            <div className="bg-white/5 px-5 pt-5 pb-6">
              <p className="text-center text-white text-base font-semibold leading-snug mb-5">
                내 선택 기준에 맞는 매물,<br />실제로 검증해볼까요?
              </p>
              <a
                href={OBOON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-oboon-accent text-oboon-dark font-black text-base py-4 px-6 rounded-xl active:scale-[0.98] hover:brightness-110 transition-all duration-150 shadow-lg shadow-yellow-400/20"
              >
                내 조건에 맞는 매물 보기
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-150"
            >
              다시 하기
            </button>
            <Link href="/" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              다른 테스트 보기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── 게임 진행 ──
  return (
    <main className="min-h-dvh bg-oboon-dark flex flex-col">
      <header className="px-5 py-5 sticky top-0 bg-oboon-dark z-10 border-b border-white/5">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <p className="text-oboon-accent text-xs font-black tracking-wide">
              밸런스 게임 {current + 1} / {total}
            </p>
            <p className="text-gray-600 text-xs">{Math.round(progress)}% 완료</p>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-oboon-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-md mx-auto w-full px-5 py-8">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center mb-2">
          {q.situation}
        </p>

        <div className="flex flex-col gap-3 mt-2 flex-1 justify-center">
          {/* A */}
          <button
            onClick={() => handleChoose("A")}
            disabled={!!chosen}
            className={`
              w-full text-left p-6 rounded-3xl border-2 transition-all duration-300
              ${chosen === "A"
                ? "border-oboon-accent bg-oboon-accent/10 scale-[1.02]"
                : chosen === "B"
                ? "border-white/5 bg-white/5 opacity-30"
                : "border-white/10 bg-white/5 hover:border-oboon-accent/50 hover:bg-white/10 active:scale-[0.98]"
              }
            `}
          >
            <span className={`text-[10px] font-black tracking-widest uppercase mb-3 block ${chosen === "A" ? "text-oboon-accent" : "text-gray-600"}`}>
              A
            </span>
            <p className="text-white font-black text-xl leading-snug mb-2">{q.a.label}</p>
            <p className="text-gray-400 text-sm">{q.a.sub}</p>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-600 text-xs font-black tracking-widest">VS</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* B */}
          <button
            onClick={() => handleChoose("B")}
            disabled={!!chosen}
            className={`
              w-full text-left p-6 rounded-3xl border-2 transition-all duration-300
              ${chosen === "B"
                ? "border-white bg-white/10 scale-[1.02]"
                : chosen === "A"
                ? "border-white/5 bg-white/5 opacity-30"
                : "border-white/10 bg-white/5 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
              }
            `}
          >
            <span className={`text-[10px] font-black tracking-widest uppercase mb-3 block ${chosen === "B" ? "text-white" : "text-gray-600"}`}>
              B
            </span>
            <p className="text-white font-black text-xl leading-snug mb-2">{q.b.label}</p>
            <p className="text-gray-400 text-sm">{q.b.sub}</p>
          </button>
        </div>

        <p className="text-center text-gray-700 text-xs mt-8">
          솔직하게 고르세요 — 정답은 없습니다
        </p>
      </div>
    </main>
  );
}
