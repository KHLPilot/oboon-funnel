import Link from "next/link";
import type { TestMeta } from "@/data/tests/index";

interface TestCardProps {
  test: TestMeta;
}

export default function TestCard({ test }: TestCardProps) {
  const href = test.isLive ? `/${test.id}` : `/${test.id}`;

  return (
    <Link
      href={href}
      className={`
        block rounded-2xl p-5 border-2 transition-all duration-150
        ${
          test.isLive
            ? "bg-white border-gray-100 hover:border-oboon-primary hover:shadow-md active:scale-[0.98]"
            : "bg-gray-50 border-gray-100 cursor-pointer opacity-70"
        }
      `}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{test.emoji}</span>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              test.isLive
                ? "bg-oboon-light text-oboon-primary"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {test.tag}
          </span>
          {!test.isLive && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-200 text-gray-400">
              준비 중
            </span>
          )}
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-base leading-snug mb-1">
        {test.title}
      </h3>
      <p className="text-xs text-gray-400 leading-relaxed">
        {test.description}
      </p>

      {test.isLive && test.questionCount > 0 && (
        <div className="mt-3 text-xs text-gray-300 font-medium">
          {test.questionCount}문항 · 약 2분
        </div>
      )}
    </Link>
  );
}
