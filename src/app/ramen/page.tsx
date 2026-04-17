"use client";

import { useState } from "react";
import Link from "next/link";
import { buildings, type Building } from "@/data/ramen/buildings";
import { items, type Item } from "@/data/ramen/items";

const OBOON_URL = "https://oboon.co.kr";
const MAX_BUILDINGS = 2;
const MAX_ITEMS = 3;

type Step = "building" | "item" | "result";

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

export default function RamenPage() {
  const [step, setStep] = useState<Step>("building");
  const [selectedBuildings, setSelectedBuildings] = useState<Building[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  function toggleBuilding(b: Building) {
    setSelectedBuildings((prev) => {
      if (prev.find((x) => x.id === b.id)) {
        return prev.filter((x) => x.id !== b.id);
      }
      if (prev.length >= MAX_BUILDINGS) return prev;
      return [...prev, b];
    });
  }

  function toggleItem(item: Item) {
    setSelectedItems((prev) => {
      if (prev.find((x) => x.id === item.id)) {
        return prev.filter((x) => x.id !== item.id);
      }
      if (prev.length >= MAX_ITEMS) return prev;
      return [...prev, item];
    });
  }

  function reset() {
    setStep("building");
    setSelectedBuildings([]);
    setSelectedItems([]);
  }

  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-oboon-dark px-5 py-5 sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <p className="text-oboon-accent text-xs font-black tracking-wide">
              OBOON 계산기
            </p>
            <h1 className="text-white font-black text-base leading-tight">
              이 집을 사려면 얼마나 필요할까?
            </h1>
          </div>
          <div className="flex gap-1">
            {(["building", "item", "result"] as Step[]).map((s, i) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-colors ${
                  step === s
                    ? "bg-oboon-accent"
                    : i < ["building", "item", "result"].indexOf(step)
                    ? "bg-white/40"
                    : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-md mx-auto w-full px-4 py-6">
        {/* STEP 1: 건물 선택 */}
        {step === "building" && (
          <div className="animate-fade-in">
            <div className="mb-5">
              <h2 className="text-lg font-black text-gray-900 mb-1">
                집을 골라보세요
              </h2>
              <p className="text-sm text-gray-400">
                최대 {MAX_BUILDINGS}개 선택 가능
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {buildings.map((b) => {
                const selected = !!selectedBuildings.find((x) => x.id === b.id);
                const disabled =
                  !selected && selectedBuildings.length >= MAX_BUILDINGS;
                return (
                  <button
                    key={b.id}
                    onClick={() => !disabled && toggleBuilding(b)}
                    className={`
                      text-left p-4 rounded-2xl border-2 transition-all duration-150
                      ${
                        selected
                          ? "border-oboon-primary bg-oboon-light"
                          : disabled
                          ? "border-gray-100 bg-gray-50 opacity-40 cursor-not-allowed"
                          : "border-gray-100 bg-white hover:border-oboon-primary active:scale-[0.97]"
                      }
                    `}
                  >
                    <div className="text-2xl mb-2">{b.emoji}</div>
                    <div className="font-bold text-gray-900 text-sm leading-snug mb-0.5">
                      {b.name}
                    </div>
                    <div className="text-xs text-gray-400">{b.location}</div>
                    <div className="text-xs text-gray-400">{b.area}</div>
                    <div
                      className={`text-xs font-black mt-1.5 ${
                        selected ? "text-oboon-primary" : "text-gray-600"
                      }`}
                    >
                      {formatPrice(b.price)}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep("item")}
              disabled={selectedBuildings.length === 0}
              className="
                w-full bg-oboon-primary text-white font-black text-base
                py-4 rounded-2xl transition-all duration-150
                active:scale-[0.98] hover:brightness-110
                disabled:opacity-30 disabled:cursor-not-allowed
              "
            >
              다음: 비교 물건 고르기 →
            </button>
          </div>
        )}

        {/* STEP 2: 물품 선택 */}
        {step === "item" && (
          <div className="animate-fade-in">
            <div className="mb-5">
              <button
                onClick={() => setStep("building")}
                className="text-xs text-gray-400 mb-3 flex items-center gap-1"
              >
                ← 건물 다시 고르기
              </button>
              <h2 className="text-lg font-black text-gray-900 mb-1">
                뭐랑 비교할까요?
              </h2>
              <p className="text-sm text-gray-400">
                최대 {MAX_ITEMS}개 선택 가능
              </p>
            </div>

            {/* 선택된 건물 미니 뱃지 */}
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedBuildings.map((b) => (
                <span
                  key={b.id}
                  className="inline-flex items-center gap-1.5 bg-oboon-dark text-white text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  {b.emoji} {b.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {items.map((item) => {
                const selected = !!selectedItems.find((x) => x.id === item.id);
                const disabled =
                  !selected && selectedItems.length >= MAX_ITEMS;
                return (
                  <button
                    key={item.id}
                    onClick={() => !disabled && toggleItem(item)}
                    className={`
                      text-center p-3 rounded-2xl border-2 transition-all duration-150
                      ${
                        selected
                          ? "border-oboon-primary bg-oboon-light"
                          : disabled
                          ? "border-gray-100 bg-gray-50 opacity-40 cursor-not-allowed"
                          : "border-gray-100 bg-white hover:border-oboon-primary active:scale-[0.97]"
                      }
                    `}
                  >
                    <div className="text-2xl mb-1">{item.emoji}</div>
                    <div className="text-xs font-bold text-gray-900 leading-snug">
                      {item.name}
                    </div>
                    <div
                      className={`text-[10px] font-black mt-1 ${
                        selected ? "text-oboon-primary" : "text-gray-400"
                      }`}
                    >
                      {item.price >= 1_000_000
                        ? formatPrice(item.price)
                        : `${item.price.toLocaleString()}원`}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setStep("result")}
              disabled={selectedItems.length === 0}
              className="
                w-full bg-oboon-accent text-oboon-dark font-black text-base
                py-4 rounded-2xl transition-all duration-150
                active:scale-[0.98] hover:brightness-110
                disabled:opacity-30 disabled:cursor-not-allowed
              "
            >
              계산하기 →
            </button>
          </div>
        )}

        {/* STEP 3: 결과 */}
        {step === "result" && (
          <div className="animate-fade-in">
            <div className="mb-5">
              <h2 className="text-lg font-black text-gray-900 mb-1">
                계산 결과
              </h2>
              <p className="text-sm text-gray-400">
                이 집을 사려면 얼마나 모아야 할까요?
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {selectedBuildings.map((b) => (
                <div
                  key={b.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* 건물 헤더 */}
                  <div className="bg-oboon-dark px-5 py-4 flex items-center gap-3">
                    <span className="text-3xl">{b.emoji}</span>
                    <div>
                      <div className="text-white font-black text-base">
                        {b.name}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {b.location} · {b.area}
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-oboon-accent font-black text-sm">
                        {formatPrice(b.price)}
                      </div>
                    </div>
                  </div>

                  {/* 물품별 계산 */}
                  <div className="divide-y divide-gray-50">
                    {selectedItems.map((item) => {
                      const count = Math.ceil(b.price / item.price);
                      const funText = item.funFact(count);
                      return (
                        <div key={item.id} className="px-5 py-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">{item.emoji}</span>
                            <span className="text-sm font-bold text-gray-700">
                              {item.name}
                            </span>
                          </div>
                          <div className="text-oboon-primary font-black text-2xl mb-3">
                            {formatCount(count, item.unit)}
                          </div>
                          <ul className="space-y-2">
                            {funText.map((line, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed"
                              >
                                <span className="mt-0.5 flex-shrink-0 text-gray-300">
                                  •
                                </span>
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* OBOON CTA */}
            <div className="bg-oboon-dark rounded-2xl p-5 mb-4">
              <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed">
                숫자가 실감이 안 나신다고요?
                <br />
                내 상황에서 실제로 살 수 있는 집을 찾아보세요.
              </p>
              <a
                href={OBOON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block w-full text-center
                  bg-oboon-accent text-oboon-dark
                  font-bold text-base
                  py-4 px-6 rounded-xl
                  active:scale-[0.98] hover:brightness-110
                  transition-all duration-150
                "
              >
                내 조건에 맞는 매물 보기
              </a>
              <p className="text-center text-xs text-gray-600 mt-2">
                OBOON · 부동산 조건 검증 서비스
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={reset}
                className="
                  w-full bg-white border-2 border-gray-100
                  text-gray-600 font-bold text-sm
                  py-3 rounded-xl hover:border-gray-200
                  transition-all duration-150 active:scale-[0.98]
                "
              >
                다시 계산하기
              </button>
              <Link
                href="/"
                className="text-xs text-gray-300 hover:text-gray-400 transition-colors"
              >
                다른 테스트 보기
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
