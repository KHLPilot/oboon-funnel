import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | OBOON",
  description:
    "OBOON 서비스의 개인정보처리방침입니다. 본 사이트는 별도의 회원가입 없이 이용 가능하며, 개인정보를 직접 수집하지 않습니다.",
};

const sections = [
  {
    title: "수집하는 개인정보",
    body: "본 사이트는 별도의 회원가입 없이 이용 가능하며, 개인정보를 직접 수집하지 않습니다.",
  },
  {
    title: "광고 및 쿠키",
    body: "서비스 개선 및 광고 제공을 위해 Google AdSense를 사용할 수 있으며, 이 과정에서 쿠키가 사용될 수 있습니다. Google은 사용자의 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다.",
  },
  {
    title: "쿠키 설정",
    body: "사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-gray-50 flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-sm">
        {/* 헤더 */}
        <div className="mb-8">
          <span className="inline-block bg-gray-100 text-gray-500 text-xs font-black px-3 py-1 rounded-full mb-4 tracking-wide">
            법적 고지
          </span>
          <h1 className="text-2xl font-black text-gray-900 leading-snug">
            개인정보처리방침
          </h1>
        </div>

        {/* 본문 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-5 mb-6">
          {sections.map((section, i) => (
            <div key={i}>
              {i > 0 && <div className="border-t border-gray-100 mb-5" />}
              <p className="text-xs font-bold text-oboon-primary uppercase tracking-wider mb-2">
                {section.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mb-6">
          시행일: 2025년 1월 1일 · OBOON
        </p>

        {/* 홈으로 */}
        <Link
          href="/"
          className="
            block w-full text-center
            bg-gray-900 text-white
            font-bold text-base
            py-4 rounded-2xl
            hover:bg-gray-700 active:scale-[0.98]
            transition-all duration-150
          "
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
