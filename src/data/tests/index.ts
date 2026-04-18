import type { QuizQuestion, ResultType } from "@/data/types";

export type TestType = "quiz" | "ramen" | "balance" | "escape";

export type TestMeta = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  questionCount: number;
  isLive: boolean;
  type: TestType;
  /** 허브 카드에서 보여줄 유형 태그 (예: "성향 테스트", "밸런스 게임", "계산기") */
  tag: string;
};

export const testRegistry: TestMeta[] = [
  {
    id: "landmark",
    title: "나는 어떤 랜드마크 건물일까?",
    description: "10가지 선택으로 알아보는 나의 부동산 의사결정 성향",
    emoji: "🏙️",
    questionCount: 10,
    isLive: true,
    type: "quiz",
    tag: "성향 테스트",
  },
  {
    id: "home-type",
    title: "나는 어떤 집 유형일까?",
    description: "도시형·힐링형·프리미엄형 등 5가지 주거 성향 분류",
    emoji: "🏠",
    questionCount: 10,
    isLive: true,
    type: "quiz",
    tag: "성향 테스트",
  },
  {
    id: "balance",
    title: "부동산 밸런스 게임",
    description: "5가지 극한 선택으로 알아보는 나의 부동산 가치관",
    emoji: "⚖️",
    questionCount: 5,
    isLive: true,
    type: "balance",
    tag: "밸런스 게임",
  },
  {
    id: "escape",
    title: "벼락거지 탈출 시뮬레이션",
    description: "2018년 3억으로 돌아간다면? 내 선택이 만드는 결말",
    emoji: "🎲",
    questionCount: 0,
    isLive: true,
    type: "escape",
    tag: "시뮬레이션",
  },
  {
    id: "ramen",
    title: "라면 몇 개로 이 집을 살 수 있을까?",
    description: "물가 대비 부동산 가격을 재미있게 비교하는 계산기",
    emoji: "🍜",
    questionCount: 0,
    isLive: true,
    type: "ramen",
    tag: "계산기",
  },
];

export type TestData = {
  questions: QuizQuestion[];
  results: Record<string, ResultType>;
};

/** testId로 해당 테스트의 questions + results를 반환 */
export async function getTestData(testId: string): Promise<TestData | null> {
  switch (testId) {
    case "landmark": {
      const { questions } = await import("@/data/tests/landmark/questions");
      const { results } = await import("@/data/tests/landmark/results");
      return { questions, results };
    }
    case "home-type": {
      const { questions } = await import("@/data/tests/home-type/questions");
      const { results } = await import("@/data/tests/home-type/results");
      return { questions, results };
    }
    default:
      return null;
  }
}

/** 유효한 quiz 타입 testId 목록 (generateStaticParams용) */
export function getQuizTestIds(): string[] {
  return testRegistry
    .filter((t) => t.type === "quiz" && t.isLive)
    .map((t) => t.id);
}
