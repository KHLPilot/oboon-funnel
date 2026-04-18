"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { buildings, type Building } from "@/data/ramen/buildings";
import { items, type Item } from "@/data/ramen/items";
import AdUnit from "@/components/AdUnit";

const OBOON_URL = "https://oboon.co.kr";

function formatPrice(price: number): string {
  if (price >= 1_000_000_000_000) {
    return `${(price / 1_000_000_000_000).toFixed(0)}조원`;
  }
  if (price >= 100_000_000) {
    const eok = price / 100_000_000;
    return `${eok % 1 === 0 ? eok.toFixed(0) : eok.toFixed(1)}억원`;
  }
  return `${(price / 10_000).toLocaleString()}만원`;
}

function formatCount(count: number, unit: string): string {
  if (count >= 100_000_000) {
    const eok = (count / 100_000_000).toFixed(1);
    return `${eok}억 ${unit}`;
  }
  if (count >= 10_000) {
    const man = (count / 10_000).toFixed(1);
    return `${man}만 ${unit}`;
  }
  return `${count.toLocaleString()} ${unit}`;
}

/** 가로 스크롤 가능함을 알려주는 래퍼 — 오른쪽 끝 페이드 + 힌트 레이블 */
function ScrollHint({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      {/* 선택 개수 레이블 */}
      <p className="text-xs text-gray-400 mb-2.5">{label}</p>

      {/* 스크롤 컨테이너 + 오른쪽 페이드 */}
      <div className="relative">
        {children}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-transparent" />
      </div>

      {/* 힌트 — 카드 아래 중앙 */}
      <div className="flex items-center justify-center gap-1 mt-2.5 text-gray-400 text-xs font-medium">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        좌우로 밀어보세요
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="scale-x-[-1]">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// 가격 내림차순 (고가→저가)
const sortedBuildings = [...buildings].sort((a, b) => b.price - a.price);
// 가격 오름차순 (저가→고가)
const sortedItems = [...items].sort((a, b) => a.price - b.price);

export default function RamenPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const showResult = selectedBuilding !== null && selectedItem !== null;

  const prevShowResult = useRef(false);
  useEffect(() => {
    if (showResult) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      if (!prevShowResult.current) {
        fetch("/api/counts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: "ramen" }),
        }).catch(() => {});
      }
    }
    prevShowResult.current = showResult;
  }, [showResult, selectedBuilding?.id, selectedItem?.id]);

  const count = showResult ? Math.ceil(selectedBuilding.price / selectedItem.price) : 0;
  const funText = showResult ? selectedItem.funFact(count) : [];

  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-oboon-dark px-5 py-5 sticky top-0 z-10">
        <div className="max-w-md mx-auto">
          <p className="text-oboon-accent text-xs font-black tracking-wide mb-0.5">
            OBOON 계산기
          </p>
          <h1 className="text-white font-black text-base leading-tight">
            이 집을 사려면 얼마나 필요할까?
          </h1>
        </div>
      </header>

      <div className="flex-1 max-w-md mx-auto w-full">

        {/* ── SECTION 1: 집 선택 ── */}
        <section className="pt-6 pb-4 px-4">
          <h2 className="text-base font-black text-gray-900 mb-3">
            🏠 집을 골라보세요
          </h2>

          <ScrollHint label="1개 선택">
            <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
              {sortedBuildings.map((b) => {
                const selected = selectedBuilding?.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBuilding(selected ? null : b)}
                    className={`
                      flex-shrink-0 w-36 snap-start
                      text-left p-3.5 rounded-2xl border-2 transition-all duration-150
                      ${selected
                        ? "border-oboon-primary bg-oboon-light shadow-md"
                        : "border-gray-100 bg-white hover:border-gray-300 active:scale-[0.97]"
                      }
                    `}
                  >
                    <div className="text-2xl mb-2">{b.emoji}</div>
                    <div className="font-bold text-gray-900 text-xs leading-snug mb-0.5 line-clamp-2">
                      {b.name}
                    </div>
                    <div className="text-[10px] text-gray-400 leading-tight">{b.location}</div>
                    <div className="text-[10px] text-gray-400 leading-tight mb-2">{b.area}</div>
                    <div className={`text-xs font-black ${selected ? "text-oboon-primary" : "text-gray-700"}`}>
                      {formatPrice(b.price)}
                    </div>
                    {selected && (
                      <div className="mt-1.5 text-[10px] font-bold text-oboon-primary">✓ 선택됨</div>
                    )}
                  </button>
                );
              })}
              {/* 마지막에 여백 카드 — 끝이 없는 느낌 방지 */}
              <div className="flex-shrink-0 w-4" />
            </div>
          </ScrollHint>

          {/* 선택된 건물 요약 배지 */}
          {selectedBuilding ? (
            <div className="mt-3 flex items-center gap-2.5 bg-white border-2 border-oboon-primary/30 rounded-xl px-4 py-2.5 shadow-sm">
              <span className="text-xl">{selectedBuilding.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">{selectedBuilding.name}</p>
                <p className="text-[10px] text-gray-400">{selectedBuilding.location}</p>
              </div>
              <span className="text-xs font-black text-oboon-primary flex-shrink-0">
                {formatPrice(selectedBuilding.price)}
              </span>
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-gray-200 text-gray-300 text-xs">
              ← 집을 선택해주세요
            </div>
          )}
        </section>

        {/* 광고 + 구분선 */}
        <div className="px-4 my-1">
          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_CALC ?? ""}
            className="rounded-xl overflow-hidden"
          />
        </div>
        <div className="mx-4 border-t border-dashed border-gray-200 my-1" />

        {/* ── SECTION 2: 아이템 선택 ── */}
        <section className="pt-4 pb-4 px-4">
          <h2 className="text-base font-black text-gray-900 mb-3">
            🛒 뭐랑 비교할까요?
          </h2>

          <ScrollHint label="1개 선택">
            <div className="flex gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
              {sortedItems.map((item) => {
                const selected = selectedItem?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(selected ? null : item)}
                    className={`
                      flex-shrink-0 w-24 snap-start
                      text-center p-3 rounded-2xl border-2 transition-all duration-150
                      ${selected
                        ? "border-oboon-primary bg-oboon-light shadow-md"
                        : "border-gray-100 bg-white hover:border-gray-300 active:scale-[0.97]"
                      }
                    `}
                  >
                    <div className="text-2xl mb-1.5">{item.emoji}</div>
                    <div className="text-[11px] font-bold text-gray-900 leading-snug">
                      {item.name}
                    </div>
                    <div className={`text-[10px] font-black mt-1 ${selected ? "text-oboon-primary" : "text-gray-400"}`}>
                      {item.price >= 1_000_000
                        ? formatPrice(item.price)
                        : `${item.price.toLocaleString()}원`}
                    </div>
                    {selected && (
                      <div className="mt-1 text-[10px] font-bold text-oboon-primary">✓</div>
                    )}
                  </button>
                );
              })}
              <div className="flex-shrink-0 w-4" />
            </div>
          </ScrollHint>

          {/* 선택된 아이템 요약 배지 */}
          {selectedItem ? (
            <div className="mt-3 flex items-center gap-2.5 bg-white border-2 border-oboon-primary/30 rounded-xl px-4 py-2.5 shadow-sm">
              <span className="text-xl">{selectedItem.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">{selectedItem.name}</p>
              </div>
              <span className="text-xs font-black text-oboon-primary flex-shrink-0">
                {selectedItem.price >= 1_000_000
                  ? formatPrice(selectedItem.price)
                  : `${selectedItem.price.toLocaleString()}원`}
              </span>
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-gray-200 text-gray-300 text-xs">
              ← 아이템을 선택해주세요
            </div>
          )}
        </section>

        {/* ── SECTION 3: 결과 ── */}
        {showResult ? (
          <section ref={resultRef} className="px-4 pt-2 pb-10 animate-fade-in">
            <div className="border-t border-dashed border-gray-200 mb-4" />

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
              {/* 건물 헤더 */}
              <div className="bg-oboon-dark px-5 py-4 flex items-center gap-3">
                <span className="text-3xl">{selectedBuilding.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-black text-sm">{selectedBuilding.name}</div>
                  <div className="text-gray-400 text-xs">{selectedBuilding.location} · {selectedBuilding.area}</div>
                </div>
                <div className="text-oboon-accent font-black text-sm flex-shrink-0">
                  {formatPrice(selectedBuilding.price)}
                </div>
              </div>

              {/* 결과 */}
              <div className="px-5 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{selectedItem.emoji}</span>
                  <span className="text-sm font-bold text-gray-700">{selectedItem.name}</span>
                  <span className="text-xs text-gray-400">
                    ({selectedItem.price >= 1_000_000
                      ? formatPrice(selectedItem.price)
                      : `${selectedItem.price.toLocaleString()}원`})
                  </span>
                </div>
                <div className="text-oboon-primary font-black text-3xl mb-4">
                  {formatCount(count, selectedItem.unit)}
                </div>
                <ul className="space-y-2.5">
                  {funText.map((line, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-medium leading-relaxed">
                      <span className="mt-0.5 flex-shrink-0 text-gray-300">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 광고 */}
            <AdUnit
              slot={process.env.NEXT_PUBLIC_AD_SLOT_CALC ?? ""}
              className="mb-4 rounded-xl overflow-hidden"
            />

            {/* CTA */}
            <div className="bg-oboon-dark rounded-2xl overflow-hidden">
              <div className="bg-oboon-accent px-6 py-2.5 flex items-center justify-center gap-2">
                <span className="text-oboon-dark text-xs font-black tracking-widest uppercase">OBOON</span>
                <span className="text-oboon-dark/50 text-xs">·</span>
                <span className="text-oboon-dark text-xs font-medium">부동산 조건 검증 서비스</span>
              </div>
              <div className="px-5 pt-5 pb-6">
                <p className="text-center text-white text-sm font-semibold leading-snug mb-5">
                  숫자가 실감이 안 나신다고요?{"\n"}내 상황에서 실제로 살 수 있는 집을 찾아보세요.
                </p>
                <a
                  href={OBOON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full text-center
                    bg-oboon-accent text-oboon-dark
                    font-black text-base
                    py-4 px-6 rounded-xl
                    active:scale-[0.98] hover:brightness-110
                    transition-all duration-150
                    shadow-lg shadow-yellow-400/20
                  "
                >
                  내 조건에 맞는 매물 보기
                </a>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                다른 테스트 보기
              </Link>
            </div>
          </section>
        ) : (
          <div className="px-4 pb-10">
            <div className="flex items-center justify-center py-6 text-gray-300 text-sm">
              {!selectedBuilding && !selectedItem
                ? "집과 아이템을 선택하면 결과가 나와요 👆"
                : !selectedBuilding
                ? "집을 선택해주세요 👆"
                : "아이템을 선택해주세요 👆"}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
