import Link from "next/link";
import type { TestMeta } from "@/data/tests/index";

interface TestCardProps {
  test: TestMeta;
  count?: number;
}

export default function TestCard({ test, count }: TestCardProps) {
  const href = `/${test.id}`;

  return (
    <Link
      href={href}
      className={`
        flex flex-col rounded-2xl p-3 border transition-all duration-150 aspect-square
        ${
          test.isLive
            ? "bg-white border-gray-100 hover:border-oboon-primary hover:shadow-md active:scale-[0.97]"
            : "bg-gray-50 border-gray-100 opacity-60 cursor-pointer"
        }
      `}
    >
      {/* 상단: 이모지 + 태그 */}
      <div className="flex items-start justify-between mb-auto">
        <span className="text-2xl leading-none">{test.emoji}</span>
        <span
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-tight ${
            test.isLive
              ? "bg-oboon-light text-oboon-primary"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {test.tag}
        </span>
      </div>

      {/* 하단: 제목 + 참여자 수 */}
      <div className="mt-2">
        <h3 className="font-bold text-gray-900 text-xs leading-snug line-clamp-3">
          {test.title}
        </h3>
        {!test.isLive && (
          <span className="text-[9px] font-bold text-gray-400 mt-1 block">준비 중</span>
        )}
        {test.isLive && count !== undefined && count >= 100 && (
          <span className="text-[9px] font-medium text-gray-400 mt-1 block">
            {count.toLocaleString()}명 참여
          </span>
        )}
      </div>
    </Link>
  );
}
