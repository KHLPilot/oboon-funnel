import Link from "next/link";

export default function WorldcupPage() {
  return (
    <main className="min-h-dvh bg-oboon-dark flex flex-col items-center justify-center px-5 text-center">
      <span className="text-6xl mb-6">🏆</span>
      <div className="inline-block bg-gray-700 text-gray-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
        준비 중
      </div>
      <h1 className="text-2xl font-black text-white mb-3">
        부동산 이상형 월드컵
      </h1>
      <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-10">
        16강 토너먼트로 결정하는 나의 이상적인 주거 조건.
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
