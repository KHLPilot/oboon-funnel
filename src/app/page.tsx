"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================================
// 서비스 설정 상수 — 이 부분만 수정하면 됩니다
// ============================================================
const SERVICE_NAME = "맞춤매물 추천 서비스";
const PRICE_TEXT = "오픈 준비 중";
const PRICE_DETAIL = "상담 후 개별 안내";
const CONTACT_PHONE = "010-0000-0000";
const CONTACT_EMAIL = "contact@example.com";
// ============================================================

// ── 인라인 SVG 아이콘 ────────────────────────────────────────

function IconMapPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconChevronDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

// ── 이미지 플레이스홀더 ──────────────────────────────────────

function ImagePlaceholder({ description, className = "" }: { description: string; className?: string }) {
  return (
    <div className={`bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center gap-4 p-8 ${className}`}>
      <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <p className="text-slate-500 text-sm text-center leading-relaxed max-w-xs">
        📷 <strong>이미지 영역</strong><br />{description}
      </p>
    </div>
  );
}

// ── FAQ 아이템 ───────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 pr-4 text-sm sm:text-base">{question}</span>
        <span className={`text-blue-600 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <IconChevronDown />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-slate-50 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}

// ── 메인 페이지 ─────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* ── 헤더 ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <IconMapPin className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900 text-base sm:text-lg">{SERVICE_NAME}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/tests"
              className="hidden sm:inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              성향 테스트
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-800 transition-colors"
            >
              무료 상담 신청
            </a>
          </div>
        </div>
      </header>

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(ellipse at 20% 30%, rgba(96,165,250,0.5) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(129,140,248,0.3) 0%, transparent 55%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-200 text-xs font-medium">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                부동산 의사결정 보조 서비스
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                집 찾을 시간은 줄이고,
                <br /><span className="text-blue-400">나에게 맞는</span>
                <br />선택지만 남기세요
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md">
                자산·소득·희망지역·목적을 바탕으로 맞춤 매물을 찾아드립니다.
                직접 발품 대신 분석 리포트로, 혼자 가기 부담스러운 현장엔 동행까지.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-7 py-4 rounded-full font-bold text-base transition-colors shadow-lg shadow-blue-900/40"
                >
                  무료 상담 신청하기
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-full font-semibold text-base transition-colors"
                >
                  서비스 알아보기
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-slate-400">
                {["맞춤 매물 선별", "분석 리포트 제공", "현장 동행 가능"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <IconCheck className="w-3.5 h-3.5 text-blue-400" />{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImagePlaceholder
                description="노트북·태블릿으로 부동산 정보를 확인하는 직장인 또는 신혼부부 사진, 혹은 세련된 아파트 단지 전경. 밝고 신뢰감 있는 톤 / 비율 4:3"
                className="aspect-[4/3] border-slate-600 bg-slate-800/40 text-slate-400"
              />
              <div className="absolute -bottom-5 -left-2 sm:-left-6 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🏠</div>
                  <div>
                    <p className="text-xs text-slate-500">맞춤 매물 선별 완료</p>
                    <p className="text-sm font-bold text-slate-800">3개 매물 분석 리포트 준비</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-2 sm:-right-6 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📄</div>
                  <div>
                    <p className="text-xs text-slate-500">분석 리포트</p>
                    <p className="text-sm font-bold text-slate-800">장단점 상세 정리</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>혹시 이런 경험 있으신가요?</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">집 찾기, 생각보다 어렵고 불안합니다</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🔍", bg: "bg-orange-50", border: "border-orange-100", text: '"매물은 많은데 어떤 게 내 조건에 맞는지 모르겠어요"' },
              { emoji: "⏰", bg: "bg-red-50", border: "border-red-100", text: '"퇴근하고 나면 집 찾을 시간이 너무 부족해요"' },
              { emoji: "😰", bg: "bg-purple-50", border: "border-purple-100", text: '"분양 상담을 받아도 좋은 말만 듣는 것 같아 불안해요"' },
              { emoji: "💰", bg: "bg-amber-50", border: "border-amber-100", text: '"내 자금으로 실제로 가능한 매물인지 판단이 어려워요"' },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border ${item.border} rounded-2xl p-6 space-y-4`}>
                <div className="text-3xl">{item.emoji}</div>
                <p className="text-slate-700 leading-relaxed text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-10 text-base">이 모든 과정, 혼자 감당하기 너무 벅차지 않으셨나요?</p>
        </div>
      </section>

      {/* ── 3. Solution ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">대신 찾아보고, 분석해드립니다</h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto leading-relaxed">
              {SERVICE_NAME}는 단순 목록 제공이 아닙니다. 고객 상황에 맞는 매물을 선별하고,
              이해하기 쉬운 분석 리포트로 의사결정을 도와드리는 서비스입니다.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                { step: "01", emoji: "📋", title: "체크리스트 작성", desc: "자산·소득·희망지역·평형·입주계획·목적 등 기본 정보를 입력합니다" },
                { step: "02", emoji: "🔍", title: "조건 분석", desc: "입력 정보를 바탕으로 실현 가능한 조건과 예산 범위를 정리합니다" },
                { step: "03", emoji: "🏠", title: "맞춤 매물 선별", desc: "여러 플랫폼과 현장 정보를 탐색해 조건에 맞는 매물만 선별합니다" },
                { step: "04", emoji: "📄", title: "리포트 제공", desc: "장단점·입지·가격 적정성·리스크를 정리한 의사결정 참고용 리포트를 드립니다" },
                { step: "05", emoji: "🚶", title: "현장 동행 (선택)", desc: "필요 시 현장·모델하우스에 동행하여 확인 포인트를 함께 점검합니다" },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center gap-3">
                  <div className="relative z-10 w-20 h-20 bg-blue-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-200">
                    {item.emoji}
                  </div>
                  <span className="text-xs font-bold text-blue-600 tracking-widest">STEP {item.step}</span>
                  <h3 className="font-bold text-slate-800 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Service Features ── */}
      <section id="features" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">무엇을 도와드리나요?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🏠", bg: "bg-blue-50", border: "border-blue-100", title: "맞춤 매물 추천", desc: "보유 현금·월 소득·대출 가능성·희망지역·평형·실거주/투자 목적을 종합적으로 고려해 조건에 맞는 매물만 선별합니다.", points: ["여러 플랫폼과 현장 정보를 직접 탐색", "조건 미충족 매물은 무리하게 추천하지 않음"] },
              { emoji: "🔄", bg: "bg-indigo-50", border: "border-indigo-100", title: "대안 매물 제안", desc: "1순위 매물뿐 아니라 예산·지역·평형 등을 조정한 대안 매물도 함께 제안해 선택의 폭을 넓혀드립니다.", points: ["예산·조건 조정 시나리오 함께 검토", "1순위 외 대안 2~3개 추가 제안"] },
              { emoji: "📄", bg: "bg-green-50", border: "border-green-100", title: "매물 평가 리포트", desc: "분양상담 실무 경험과 감정평가 관점의 분석을 반영해 매물별 장단점·입지·가격 적정성·리스크·추천 사유를 정리합니다.", points: ["의사결정 참고용 자료 (법적 감정평가서 아님)", "왜 추천하는지, 무엇을 조심해야 하는지 명확히"] },
              { emoji: "🚶‍♂️", bg: "bg-amber-50", border: "border-amber-100", title: "현장 / 모델하우스 동행", desc: "혼자 방문하기 부담스러운 경우 동행하여 확인 포인트를 함께 점검합니다. 놓치기 쉬운 비용·일정·리스크를 같이 확인합니다.", points: ["현장 방문 시 체크포인트 동반 확인", "분양 상담 현장 동행 가능 (요청 시)"] },
              { emoji: "📚", bg: "bg-rose-50", border: "border-rose-100", title: "부동산 기본 정보 제공", desc: "분양·매매·대출·입지·계약 전 확인사항 등 초보자도 이해하기 쉬운 정보를 함께 안내합니다.", points: ["초보자 눈높이에 맞춘 설명", "계약 전 꼭 확인할 사항 안내"] },
              { emoji: "💬", bg: "bg-teal-50", border: "border-teal-100", title: "1:1 상담 및 Q&A", desc: "매물 탐색 전후 언제든 궁금한 점을 질문하고 내 상황에 맞는 답변을 받아볼 수 있습니다.", points: ["1:1 맞춤 상담 진행", "진행 중 변경 조건 빠르게 반영"] },
            ].map((f, i) => (
              <div key={i} className={`${f.bg} border ${f.border} rounded-2xl p-7 space-y-4`}>
                <div className="text-4xl">{f.emoji}</div>
                <h3 className="font-bold text-slate-900 text-lg">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-600 text-xs">
                      <IconCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Report Preview ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-6">
              <div>
                <SectionLabel>Report Preview</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">이런 형태의 분석 리포트를<br />제공합니다</h2>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                단순 매물 정보가 아니라 왜 이 매물을 추천하는지, 어떤 점은 주의해야 하는지를
                이해하기 쉬운 언어로 정리해 드립니다.<br /><br />
                본 리포트는 법적 감정평가서가 아닌{" "}
                <strong className="text-slate-700">의사결정 참고용 분석 자료</strong>입니다.
              </p>
              <ul className="space-y-3">
                {["장점·단점·리스크를 한눈에 정리", "입지·가격 적정성 분석 포함", "고객 조건 대비 추천 적합도 표시", "이해하기 쉬운 언어로 설명"].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-xs mb-0.5">매물 분석 리포트</p>
                  <p className="text-white font-bold text-base">OO아파트 102동 1404호</p>
                  <p className="text-blue-200 text-xs mt-0.5">서울 마포구 · 59㎡ · 분양</p>
                </div>
                <div className="bg-white/20 rounded-xl px-4 py-2 text-center flex-shrink-0">
                  <p className="text-blue-100 text-xs">추천 적합도</p>
                  <p className="text-white font-black text-2xl leading-tight">87<span className="text-sm font-normal">점</span></p>
                </div>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "매물 유형", value: "분양 아파트" },
                    { label: "예상 필요 자금", value: "약 3.2억 원" },
                    { label: "전용 면적", value: "59㎡ (약 24평)" },
                    { label: "입주 예정", value: "2026년 하반기" },
                  ].map((item) => (
                    <div key={item.label} className="bg-slate-50 rounded-xl p-3">
                      <p className="text-slate-400 text-xs">{item.label}</p>
                      <p className="text-slate-800 font-semibold text-sm mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">장점</p>
                  {["역세권 도보 8분, 직장 접근성 우수", "주변 시세 대비 약 5% 저평가 구간", "우수 학군 인접으로 실거주 가치 높음"].map((t, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-green-500 font-bold flex-shrink-0">✓</span>{t}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">주의할 점</p>
                  {["북향 세대로 일조권 제한 가능성 있음", "중도금 대출 규제 지역 해당 여부 사전 확인 필요"].map((t, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-orange-500 font-bold flex-shrink-0">!</span>{t}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-xs font-bold text-blue-600 mb-1.5">한 줄 의견</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    고객님의 자금 조건과 실거주 목적에 전반적으로 부합하는 매물입니다.
                    북향 세대 여부 및 대출 규제 확인 후 최종 검토를 권장드립니다.
                  </p>
                </div>
                <p className="text-slate-400 text-xs text-center">
                  ※ 의사결정 참고용 분석 자료이며, 법적 감정평가서나 수익 보장 자료가 아닙니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Process ── */}
      <section className="py-20 sm:py-24 bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-300 font-semibold text-xs uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">이렇게 진행됩니다</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-blue-800" />
            <div className="space-y-6">
              {[
                { step: "01", title: "체크리스트 작성", desc: "자산·소득·희망지역·평형·입주계획·목적 등을 작성합니다. 처음에 잘 모르셔도 괜찮습니다." },
                { step: "02", title: "조건 분석 및 범위 설정", desc: "작성 내용을 바탕으로 현실 가능한 매물 조건과 예산 범위를 함께 정리합니다." },
                { step: "03", title: "맞춤 매물 선별", desc: "여러 플랫폼과 현장 정보를 직접 탐색해 조건에 맞는 매물을 선별합니다. 조건 미충족 매물은 무리하게 추천하지 않습니다." },
                { step: "04", title: "분석 리포트 제공", desc: "매물별 장단점·입지·가격 적정성·리스크를 정리한 의사결정 참고용 리포트를 드립니다." },
                { step: "05", title: "필요 시 현장 동행", desc: "요청 시 현장·모델하우스에 동행합니다. 확인 포인트, 비용·일정·리스크를 함께 점검합니다." },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-5 sm:gap-8">
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                    <span className="text-white font-black text-sm sm:text-base">{item.step}</span>
                  </div>
                  <div className="flex-1 bg-blue-900/50 border border-blue-800/60 rounded-2xl p-5">
                    <h3 className="font-bold text-white text-base mb-1.5">{item.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Trust ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <ImagePlaceholder
                description="전문적인 1:1 상담 장면 (노트북·서류 앞에서 대화하는 모습), 또는 아파트 단지·모델하우스 앞 현장 동행 장면. 밝고 신뢰감 있는 자연스러운 톤 / 비율 4:3"
                className="aspect-[4/3]"
              />
            </div>
            <div className="space-y-8">
              <div>
                <SectionLabel>Why Us</SectionLabel>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">왜 저희와 함께하시나요?</h2>
              </div>
              <div className="space-y-6">
                {[
                  { emoji: "🎯", title: "분양상담 실무 경험 기반", desc: "분양상담 실무 경험을 바탕으로, 현장에서 놓치기 쉬운 조건과 리스크를 함께 짚어드립니다." },
                  { emoji: "🔎", title: "감정평가 관점의 가격·입지 검토", desc: "감정평가 관점의 분석을 반영해 매물의 가격 적정성과 입지 요소를 검토합니다." },
                  { emoji: "🤝", title: "무리한 추천보다 조건에 맞는 선택 우선", desc: "고객 상황에 맞지 않는 매물은 추천하지 않습니다. 조건에 맞는 선택이 장기적으로 옳다고 믿습니다." },
                  { emoji: "📋", title: "의사결정 참고용 분석 제공", desc: "법적 보증이나 수익 보장이 아닌, 고객이 스스로 판단할 수 있도록 근거 있는 분석 자료를 드립니다." },
                ].map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">{t.emoji}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{t.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed">
                  ⚠️ 계약 및 중개는 반드시 공인중개사 또는 분양 현장의 공식 절차를 통해 진행됩니다.
                  저희는 매물 탐색·분석·동행을 통해 의사결정을 보조하는 역할을 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 성향 테스트 배너 ── */}
      <section className="py-16 bg-oboon-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <div className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-4 py-1.5 rounded-full tracking-wide">
            OBOON 부동산 성향 테스트
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            나의 주거 성향을 먼저 알아볼까요?
          </h2>
          <p className="text-gray-400 text-base">
            랜드마크 유형 테스트, 집 유형 테스트 등 무료로 이용할 수 있어요.
          </p>
          <Link
            href="/tests"
            className="inline-flex items-center gap-2 bg-oboon-accent text-oboon-dark font-black px-8 py-4 rounded-full text-base hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-yellow-400/20"
          >
            성향 테스트 해보기 →
          </Link>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">자주 묻는 질문</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "비용은 얼마인가요?", a: `현재 ${PRICE_TEXT} 단계입니다. ${PRICE_DETAIL}. 오픈 후 정확한 안내를 드릴 예정이며, 먼저 무료 상담을 통해 서비스 범위와 비용을 확인하실 수 있습니다.` },
              { q: "추천받으면 꼭 계약해야 하나요?", a: "아닙니다. 최종 계약 여부는 전적으로 고객님의 결정입니다. 저희는 의사결정을 돕는 분석 자료와 상담을 제공하며, 계약을 강요하거나 대행하지 않습니다." },
              { q: "리포트는 법적 감정평가서인가요?", a: "아닙니다. 분양상담 실무 경험과 감정평가 관점의 분석을 반영한 의사결정 참고용 분석 자료입니다. 법적 효력이 있는 감정평가서가 아니며, 투자 수익을 보장하는 자료도 아닙니다." },
              { q: "현장 동행 서비스도 가능한가요?", a: "네, 가능합니다. 혼자 현장이나 모델하우스를 방문하기 부담스러우신 경우 동행하여 확인 포인트를 함께 점검해 드립니다. 동행 가능 여부 및 일정은 상담을 통해 조율합니다." },
              { q: "분양과 매매 모두 가능한가요?", a: "네, 고객님의 조건과 목적에 따라 분양 및 매매 모두 검토 가능합니다." },
              { q: "이 서비스는 공인중개업인가요?", a: "아닙니다. 공인중개업을 수행하지 않습니다. 실제 계약 및 중개는 반드시 공인중개사 또는 분양 현장의 공식 절차를 통해 이루어집니다." },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-7">
          <p className="text-blue-200 font-semibold text-xs uppercase tracking-widest">지금 시작하세요</p>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight">
            내 조건에 맞는 매물,<br />대신 찾아드리겠습니다
          </h2>
          <p className="text-blue-200 text-base max-w-md mx-auto leading-relaxed">
            무료 상담을 통해 어떤 도움이 가능한지 먼저 확인해 보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-base transition-colors shadow-xl shadow-blue-900/40"
            >
              📞 무료 상담 신청하기
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600/60 hover:bg-blue-500/70 text-white border border-blue-400/40 px-8 py-4 rounded-full font-bold text-base transition-colors"
            >
              ✉️ 이메일 문의하기
            </a>
          </div>
          <p className="text-blue-300 text-sm pt-2">
            현재 서비스 이용 요금: <strong className="text-white">{PRICE_TEXT}</strong> — {PRICE_DETAIL}
          </p>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-700 rounded-lg flex items-center justify-center">
                <IconMapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-bold">{SERVICE_NAME}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <Link href="/tests" className="hover:text-slate-300 transition-colors">성향 테스트</Link>
              <Link href="/about" className="hover:text-slate-300 transition-colors">서비스 소개</Link>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">개인정보처리방침</Link>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6">
            <p className="text-xs text-slate-500 leading-relaxed">
              본 서비스는 부동산 매물 탐색·분석 보조 서비스이며 공인중개업을 수행하지 않습니다.
              실제 계약 및 중개는 반드시 공인중개사 또는 분양 현장의 공식 절차를 통해 진행하시기 바랍니다.
              제공되는 분석 리포트는 의사결정 참고용 자료이며, 법적 효력이 있는 감정평가서나 수익 보장 자료가 아닙니다.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
