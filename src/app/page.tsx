import { testRegistry } from "@/data/tests/index";
import TestCard from "@/components/TestCard";
import AdUnit from "@/components/AdUnit";

export default function HubPage() {
  const liveTests = testRegistry.filter((t) => t.isLive);
  const comingSoonTests = testRegistry.filter((t) => !t.isLive);

  return (
    <main className="min-h-dvh bg-oboon-dark flex flex-col">
      {/* Header */}
      <header className="px-5 pt-12 pb-6 text-center">
        <div className="inline-block bg-oboon-accent text-oboon-dark text-xs font-black px-4 py-1.5 rounded-full mb-4 tracking-wide">
          OBOON
        </div>
        <h1 className="text-2xl font-black text-white leading-tight mb-2">
          부동산 성향 테스트
        </h1>
        <p className="text-gray-400 text-sm">
          나의 주거 성향을 알면 선택이 쉬워진다
        </p>
      </header>

      {/* Test list */}
      <div className="flex-1 px-5 pb-10 max-w-md mx-auto w-full">
        {/* Live tests */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-1">
            지금 바로 해볼 수 있어요
          </h2>
          <div className="flex flex-col gap-3">
            {liveTests.map((test) => (
              <TestCard key={test.id} test={test} />
            ))}
          </div>
        </section>

        {/* 광고 */}
        <AdUnit
          slot={process.env.NEXT_PUBLIC_AD_SLOT_HOME ?? ""}
          className="mb-6 rounded-xl overflow-hidden"
        />

        {/* Coming soon */}
        {comingSoonTests.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 px-1">
              준비 중
            </h2>
            <div className="flex flex-col gap-3">
              {comingSoonTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 pb-8 text-center">
        <p className="text-gray-700 text-xs">
          모든 테스트 결과는 oboon.co.kr 로 연결됩니다
        </p>
      </div>
    </main>
  );
}
