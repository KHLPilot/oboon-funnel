export type QuizOption = {
  text: string;
  score: string[];
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: {
    A: QuizOption;
    B: QuizOption;
  };
};

/**
 * 점수 키 목록
 * upward      상승지향형 / 롯데월드타워형
 * stable      안정선호형 / 경복궁형
 * sensory     감각선택형 / DDP형
 * analytic    분석관찰형 / 남산타워형
 * practical   실용결정형 / 코엑스형
 * opportunity 기회선점형 / 삼성무역센터형
 * expansive   확장지향형 / 인천공항형
 * planner     계획설계형 / 세종정부청사형
 *
 * 분포: upward 3, stable 3, analytic 3, planner 3
 *       sensory 2, practical 2, opportunity 2, expansive 2
 */
export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "마음에 드는 매물을 발견했을 때, 나는?",
    options: {
      A: {
        text: "일단 연락부터 한다. 기회는 기다려주지 않는다",
        score: ["upward"],
      },
      B: {
        text: "충분히 조건을 확인한 뒤 결정한다",
        score: ["stable"],
      },
    },
  },
  {
    id: 2,
    question: "직감이 끌리는 곳과 수치가 좋은 곳, 둘 중 하나를 골라야 한다면?",
    options: {
      A: {
        text: "직감이 끌리는 곳을 선택한다",
        score: ["sensory"],
      },
      B: {
        text: "수치와 데이터가 좋은 곳을 선택한다",
        score: ["analytic"],
      },
    },
  },
  {
    id: 3,
    question: "집을 처음 알아볼 때 나는?",
    options: {
      A: {
        text: "일단 현장부터 나가서 여러 곳을 직접 본다",
        score: ["practical"],
      },
      B: {
        text: "예산, 지역, 우선순위를 먼저 문서로 정리한다",
        score: ["planner"],
      },
    },
  },
  {
    id: 4,
    question: "조건이 조금 애매하지만 기회가 좋아 보인다. 나는?",
    options: {
      A: {
        text: "타이밍이 중요하다. 일단 잡는다",
        score: ["opportunity"],
      },
      B: {
        text: "더 좋은 선택지가 있을 수 있다. 더 탐색한다",
        score: ["expansive"],
      },
    },
  },
  {
    id: 5,
    question: "안정적인 A와 성장 가능성이 큰 B, 둘 다 예산 안에 든다면?",
    options: {
      A: {
        text: "성장 가능성이 크다면 지금 올라타야 한다",
        score: ["upward"],
      },
      B: {
        text: "내가 세운 기준에 맞는 안정적인 선택을 한다",
        score: ["planner"],
      },
    },
  },
  {
    id: 6,
    question: "정보가 너무 많을 때 나는?",
    options: {
      A: {
        text: "핵심 수치와 전체 흐름을 직접 분석해서 판단한다",
        score: ["analytic"],
      },
      B: {
        text: "이미 검증된 정보나 조건을 기준으로 안전하게 결정한다",
        score: ["stable"],
      },
    },
  },
  {
    id: 7,
    question: "집을 고를 때 가장 먼저 확인하는 것은?",
    options: {
      A: {
        text: "공간의 분위기와 느낌이 나와 맞는지",
        score: ["sensory"],
      },
      B: {
        text: "실생활에서 얼마나 효율적으로 쓸 수 있는지",
        score: ["practical"],
      },
    },
  },
  {
    id: 8,
    question: "빠르게 실행하는 것과 실수를 줄이는 것, 더 중요한 건?",
    options: {
      A: {
        text: "먼저 움직이는 사람이 기회를 잡는다",
        score: ["opportunity"],
      },
      B: {
        text: "계획을 충분히 세운 뒤 행동하는 게 낫다",
        score: ["planner"],
      },
    },
  },
  {
    id: 9,
    question: "마지막 선택 앞에서 나는?",
    options: {
      A: {
        text: "지금 가장 좋아 보이는 곳에 집중한다",
        score: ["upward"],
      },
      B: {
        text: "혹시 놓친 가능성은 없는지 더 살펴본다",
        score: ["expansive"],
      },
    },
  },
  {
    id: 10,
    question: "선택을 마무리할 때 최종적으로 확인하는 것은?",
    options: {
      A: {
        text: "수치와 조건을 다시 한 번 검토해서 확인한다",
        score: ["analytic"],
      },
      B: {
        text: "내가 처음에 세웠던 기준과 어긋나지 않는지 확인한다",
        score: ["stable"],
      },
    },
  },
];
