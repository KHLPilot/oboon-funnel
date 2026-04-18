"use client";

import { useState } from "react";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

const OBOON_URL = "https://oboon.co.kr";
const START_AMOUNT = 300_000_000; // 3억

function formatEok(won: number): string {
  const eok = won / 100_000_000;
  return `${eok % 1 === 0 ? eok.toFixed(0) : eok.toFixed(1)}억원`;
}

type StageChoice = { label: string; sub: string; multiplier: number; feedback: string };

const stages: {
  step: number;
  year: string;
  title: string;
  context: string;
  choices: StageChoice[];
}[] = [
  {
    step: 1,
    year: "2018년 1월",
    title: "어디에 투자할까?",
    context:
      "통장에 3억이 생겼습니다. 주변에서는 '지금이 마지막 기회'라고 말하고, 어떤 친구는 '거품이니 기다려라'고 합니다. 당신의 선택은?",
    choices: [
      {
        label: "서울 강남3구 소형 아파트",
        sub: "비싸도 강남은 강남이다 · 3억으로 가능한 소형 매수",
        multiplier: 3.2,
        feedback: "강남3구는 이후 3년간 평균 2배 이상 올랐습니다.",
      },
      {
        label: "서울 마포·성동·용산",
        sub: "핫플 지역 선점 · 가격 상승 여력이 크다",
        multiplier: 2.5,
        feedback: "마포·성동권은 2021년까지 평균 150% 상승했습니다.",
      },
      {
        label: "수도권 신도시 (판교·하남·과천)",
        sub: "GTX 개발 호재 · 서울보다 저렴하게 넓은 평수",
        multiplier: 2.0,
        feedback: "수도권 신도시는 2021년까지 평균 100% 상승했습니다.",
      },
      {
        label: "지방 광역시 (부산·대전·대구)",
        sub: "서울보다 훨씬 저렴 · 상승 여력 기대",
        multiplier: 1.3,
        feedback: "지방은 지역·시점에 따라 결과가 극명하게 갈렸습니다.",
      },
    ],
  },
  {
    step: 2,
    year: "매수 타이밍",
    title: "언제 살까?",
    context:
      "지역은 정했습니다. 그런데 친구는 '조금 더 기다려'라고 하고, 중개사는 '지금 안 사면 후회한다'고 합니다. 당신은 언제 매수하나요?",
    choices: [
      {
        label: "2018년 바로 매수",
        sub: "지금이 기회다 · 더 오르기 전에",
        multiplier: 1.0,
        feedback: "2018년은 본격 상승 전 마지막 저점이었습니다.",
      },
      {
        label: "2019년 조금 더 관망 후",
        sub: "한 번 더 지켜보자 · 확신이 생기면",
        multiplier: 0.88,
        feedback: "2019년에도 여전히 좋은 타이밍이었지만, 1년치 상승을 놓쳤습니다.",
      },
      {
        label: "2020년 코로나 폭락 때",
        sub: "공포에 사라는 격언 · 역발상 투자",
        multiplier: 0.93,
        feedback: "코로나 저점 매수는 탁월한 타이밍이었습니다. 이후 폭등 구간을 온전히 누렸습니다.",
      },
      {
        label: "2021년 '이제는 사야 한다'는 확신에",
        sub: "모두가 사는 분위기 · 안 사면 벼락거지",
        multiplier: 0.55,
        feedback: "2021년 고점 매수 이후 2022~2023년 급락을 맞았습니다.",
      },
    ],
  },
  {
    step: 3,
    year: "2021~현재",
    title: "팔까? 버틸까?",
    context:
      "집값이 많이 올랐습니다. 친구는 '지금 팔아서 차익 실현하라'고 하고, 유튜버는 '더 오른다 버텨라'고 합니다. 당신의 선택은?",
    choices: [
      {
        label: "2021년 최고점에 매도",
        sub: "지금이 팔 때다 · 차익을 현금으로",
        multiplier: 1.15,
        feedback: "고점 매도는 최선의 선택이었습니다. 이후 20~30% 조정이 왔습니다.",
      },
      {
        label: "현재까지 보유 중",
        sub: "장기 보유가 답이다 · 아직 팔 생각 없다",
        multiplier: 0.82,
        feedback: "고점 대비 하락했지만, 여전히 2018년 대비 높은 수준을 유지 중입니다.",
      },
      {
        label: "2022년 금리 인상 공포에 패닉셀",
        sub: "더 떨어지기 전에 · 손해 보더라도",
        multiplier: 0.60,
        feedback: "2022~23년 저점 매도는 아쉬운 선택이었습니다. 이후 일부 반등했습니다.",
      },
    ],
  },
];

type HistoryItem = {
  step: number;
  year: string;
  choiceLabel: string;
  feedback: string;
  assetAfter: number;
};

function getResultInfo(final: number): {
  emoji: string;
  title: string;
  subtitle: string;
  cta: string;
} {
  const gain = final - START_AMOUNT;
  if (final >= 800_000_000) {
    return {
      emoji: "🏰",
      title: "강남 건물주 직전",
      subtitle: `3억이 ${formatEok(final)}이 됐습니다 (+${formatEok(gain)})`,
      cta: "내 자산에 맞는 매물 확인하기",
    };
  }
  if (final >= 600_000_000) {
    return {
      emoji: "📈",
      title: "영리한 투자자",
      subtitle: `3억이 ${formatEok(final)}이 됐습니다 (+${formatEok(gain)})`,
      cta: "지금 내 조건에 맞는 매물 보기",
    };
  }
  if (final >= 400_000_000) {
    return {
      emoji: "🙂",
      title: "평균은 했다",
      subtitle: `3억이 ${formatEok(final)}이 됐습니다 (+${formatEok(gain)})`,
      cta: "더 좋은 선택, 지금 시작하기",
    };
  }
  if (final >= 300_000_000) {
    return {
      emoji: "😅",
      title: "아직 월세 신세",
      subtitle: `3억이 ${formatEok(final)}이 됐습니다 (+${formatEok(gain > 0 ? gain : 0)})`,
      cta: "지금이라도 제대로 알아보기",
    };
  }
  return {
    emoji: "😭",
    title: "벼락거지 확정",
    subtitle: `3억이 ${formatEok(final)}이 됐습니다 (${formatEok(Math.abs(gain))} 손실)`,
    cta: "지금 당장 조건 검토 시작하기",
  };
}

export default function EscapePage() {
  const [step, setStep] = useState(0); // 0 = intro, 1~3 = stages, 4 = result
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const currentAsset = multipliers.reduce((acc, m) => acc * m, START_AMOUNT);

  function handleChoice(idx: number) {
    if (selectedIdx !== null) return;
    setSelectedIdx(idx);
    setTimeout(() => {
      const stage = stages[step - 1];
      const choice = stage.choices[idx];
      const newMultipliers = [...multipliers, choice.multiplier];
      const newAsset = newMultipliers.reduce((acc, m) => acc * m, START_AMOUNT);
      const newHistory: HistoryItem = {
        step: stage.step,
        year: stage.year,
        choiceLabel: choice.label,
        feedback: choice.feedback,
        assetAfter: newAsset,
      };
      setHistory((h) => [...h, newHistory]);
      setMultipliers(newMultipliers);
      if (step >= stages.length) {
        fetch("/api/counts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: "escape" }),
        }).catch(() => {});
        setStep(stages.length + 1);
      } else {
        setStep((s) => s + 1);
        setSelectedIdx(null);
      }
    }, 700);
  }

  function reset() {
    setStep(0);
    setMultipliers([]);
    setHistory([]);
    setSelectedIdx(null);
  }

  const finalAsset = multipliers.reduce((acc, m) => acc * m, START_AMOUNT);
  const resultInfo = step > stages.length ? getResultInfo(finalAsset) : null;

  // ── 인트로 ──
  if (step === 0) {
    return (
      <main className="min-h-dvh bg-oboon-dark flex flex-col items-center justify-center px-5 text-center">
        <div className="max-w-sm mx-auto">
          <div className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-wide">
            벼락거지 탈출 시뮬레이션
          </div>
          <div className="text-6xl mb-6">🎲</div>
          <h1 className="text-2xl font-black text-white mb-4 leading-tight">
            2018년으로 돌아간다면?
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            통장에 <span className="text-oboon-accent font-black">3억</span>이 있습니다.{"\n"}
            지역 선택부터 매도 타이밍까지,{"\n"}
            당신의 선택이 지금의 자산을 결정합니다.
          </p>
          <button
            onClick={() => setStep(1)}
            className="w-full bg-oboon-accent text-oboon-dark font-black text-base py-4 px-6 rounded-2xl active:scale-[0.98] hover:brightness-110 transition-all duration-150 shadow-lg shadow-yellow-400/20 mb-4"
          >
            시뮬레이션 시작하기 →
          </button>
          <Link href="/" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
            다른 테스트 보기
          </Link>
        </div>
      </main>
    );
  }

  // ── 결과 ──
  if (step > stages.length && resultInfo) {
    return (
      <main className="min-h-dvh bg-oboon-dark flex flex-col">
        <header className="px-5 pt-10 pb-6 text-center">
          <div className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-wide">
            최종 결과
          </div>
          <div className="text-6xl mb-4">{resultInfo.emoji}</div>
          <h1 className="text-2xl font-black text-white mb-2">{resultInfo.title}</h1>
          <p className="text-gray-300 text-sm font-semibold">{resultInfo.subtitle}</p>
        </header>

        <div className="flex-1 px-5 pb-10 max-w-md mx-auto w-full">
          {/* 자산 변화 */}
          <div className="bg-white/5 rounded-2xl p-5 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-1">시작 자산</p>
                <p className="text-white font-black text-lg">{formatEok(START_AMOUNT)}</p>
              </div>
              <div className="text-oboon-accent text-2xl">→</div>
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-1">최종 자산</p>
                <p className={`font-black text-lg ${finalAsset >= START_AMOUNT ? "text-oboon-accent" : "text-rose-400"}`}>
                  {formatEok(finalAsset)}
                </p>
              </div>
            </div>
            {/* 수익률 바 */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${finalAsset >= START_AMOUNT ? "bg-oboon-accent" : "bg-rose-500"}`}
                style={{ width: `${Math.min(100, (finalAsset / 1_000_000_000) * 100)}%` }}
              />
            </div>
          </div>

          {/* 선택 히스토리 */}
          <div className="bg-white/5 rounded-2xl p-5 mb-6 space-y-4">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">내 선택 돌아보기</p>
            {history.map((h, i) => (
              <div key={i} className="border-l-2 border-oboon-accent/30 pl-4">
                <p className="text-[10px] text-gray-500 font-bold mb-0.5">{h.year} · Step {h.step}</p>
                <p className="text-white text-sm font-bold mb-1">✓ {h.choiceLabel}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-1">{h.feedback}</p>
                <p className={`text-xs font-black ${h.assetAfter >= START_AMOUNT ? "text-oboon-accent" : "text-rose-400"}`}>
                  → {formatEok(h.assetAfter)}
                </p>
              </div>
            ))}
          </div>

          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_RESULT ?? ""}
            className="mb-6 rounded-xl overflow-hidden"
          />

          {/* CTA */}
          <div className="rounded-2xl overflow-hidden mb-4">
            <div className="bg-oboon-accent px-6 py-2.5 flex items-center justify-center gap-2">
              <span className="text-oboon-dark text-xs font-black tracking-widest uppercase">OBOON</span>
              <span className="text-oboon-dark/50 text-xs">·</span>
              <span className="text-oboon-dark text-xs font-medium">부동산 조건 검증 서비스</span>
            </div>
            <div className="bg-white/5 px-5 pt-5 pb-6">
              <p className="text-center text-white text-base font-semibold leading-snug mb-5">
                과거로 돌아갈 순 없지만,{"\n"}지금 최선의 선택은 할 수 있습니다.
              </p>
              <a
                href={OBOON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-oboon-accent text-oboon-dark font-black text-base py-4 px-6 rounded-xl active:scale-[0.98] hover:brightness-110 transition-all duration-150 shadow-lg shadow-yellow-400/20"
              >
                {resultInfo.cta}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-150"
            >
              다시 시도하기
            </button>
            <Link href="/" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              다른 테스트 보기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── 진행 중 ──
  const stage = stages[step - 1];

  return (
    <main className="min-h-dvh bg-oboon-dark flex flex-col">
      {/* Header */}
      <header className="px-5 py-4 sticky top-0 bg-oboon-dark z-10 border-b border-white/5">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="text-oboon-accent text-xs font-black tracking-wide">
              {stage.year} · Step {stage.step} / {stages.length}
            </p>
            <p className="text-gray-500 text-xs font-black">
              현재 자산 <span className="text-white">{formatEok(currentAsset)}</span>
            </p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-oboon-accent rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / stages.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-md mx-auto w-full px-5 py-6 flex flex-col">
        {/* 맥락 설명 */}
        <div className="mb-6">
          <h2 className="text-xl font-black text-white mb-3">{stage.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed bg-white/5 rounded-2xl p-4">
            {stage.context}
          </p>
        </div>

        {/* 이전 선택 히스토리 (요약) */}
        {history.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {history.map((h, i) => (
              <span key={i} className="text-[10px] font-bold text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                Step {h.step}: {h.choiceLabel}
              </span>
            ))}
          </div>
        )}

        {/* 선택지 */}
        <div className="flex flex-col gap-3">
          {stage.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={selectedIdx !== null}
              className={`
                w-full text-left p-5 rounded-2xl border transition-all duration-300
                ${selectedIdx === idx
                  ? "border-oboon-accent bg-oboon-accent/10"
                  : selectedIdx !== null
                  ? "border-white/5 bg-white/3 opacity-25"
                  : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 active:scale-[0.98]"
                }
              `}
            >
              <p className="text-white font-bold text-sm leading-snug mb-1">{choice.label}</p>
              <p className="text-gray-500 text-xs">{choice.sub}</p>
              {selectedIdx === idx && (
                <p className="text-oboon-accent text-xs font-bold mt-2">{choice.feedback}</p>
              )}
            </button>
          ))}
        </div>

        <p className="text-center text-gray-700 text-xs mt-auto pt-6">
          각 선택지의 실제 데이터를 바탕으로 시뮬레이션됩니다
        </p>
      </div>
    </main>
  );
}
