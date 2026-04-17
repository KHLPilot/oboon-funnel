import type { QuizQuestion } from "@/data/types";

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "마음에 드는 매물을 발견했을 때, 나의 첫 액션은?",
    options: [
      {
        text: "일단 연락부터 한다. 좋은 매물은 빨리 사라진다",
        score: ["opportunity"],
      },
      { text: "가격과 조건을 먼저 꼼꼼히 확인한다", score: ["analytic"] },
      {
        text: "바로 현장에 가서 분위기와 느낌을 직접 본다",
        score: ["sensory"],
      },
      { text: "미리 세운 기준에 맞는지 체크해본다", score: ["planner"] },
    ],
  },
  {
    id: 2,
    question: "집을 알아보기 시작할 때 나는?",
    options: [
      { text: "최근 가격 흐름이 어떤지 먼저 확인한다", score: ["analytic"] },
      {
        text: "내가 쓸 수 있는 예산 범위부터 정확히 계산한다",
        score: ["practical"],
      },
      { text: "앞으로 이 지역이 어떻게 변할지 먼저 본다", score: ["upward"] },
      { text: "어떤 집에서 살고 싶은지 감부터 잡는다", score: ["sensory"] },
    ],
  },
  {
    id: 3,
    question: "아래 매물 중 하나를 골라야 한다면?",
    options: [
      { text: "비싸도 나중에 더 오를 가능성이 큰 곳", score: ["upward"] },
      { text: "안정적으로 유지될 가능성이 높은 곳", score: ["stable"] },
      {
        text: "지금은 저평가됐지만 성장 가능성이 있는 곳",
        score: ["expansive"],
      },
      { text: "당장 살기 편하고 조건이 좋은 곳", score: ["practical"] },
    ],
  },
  {
    id: 4,
    question: "조건이 조금 아쉽지만 끌리는 매물이라면?",
    options: [
      { text: "조건보다 느낌이 더 중요하다. 일단 잡는다", score: ["sensory"] },
      { text: "애매하면 안 간다. 더 안전한 선택을 한다", score: ["stable"] },
      {
        text: "부족한 점을 다른 장점으로 커버할 수 있는지 본다",
        score: ["practical"],
      },
      { text: "더 좋은 선택이 있을지 계속 찾아본다", score: ["planner"] },
    ],
  },
  {
    id: 5,
    question: "안정 vs 성장, 둘 다 괜찮다면?",
    options: [
      { text: "성장 가능성이 더 큰 쪽을 선택한다", score: ["upward"] },
      { text: "결국 안정적인 선택이 더 중요하다", score: ["stable"] },
      { text: "내가 더 끌리는 쪽이 정답이다", score: ["sensory"] },
      { text: "내 기준에 더 잘 맞는 쪽을 고른다", score: ["planner"] },
    ],
  },
  {
    id: 6,
    question: "정보가 너무 많을 때 나는?",
    options: [
      { text: "중요한 정보만 빠르게 골라낸다", score: ["planner"] },
      { text: "믿을 수 있는 정보만 따로 정리한다", score: ["analytic"] },
      { text: "핵심만 보고 빠르게 판단한다", score: ["opportunity"] },
      {
        text: "일단 다 모아두고 나중에 한 번에 정리한다",
        score: ["expansive"],
      },
    ],
  },
  {
    id: 7,
    question: "집을 고를 때 가장 먼저 보는 것은?",
    options: [
      { text: "공간의 분위기와 나랑 맞는 느낌", score: ["sensory"] },
      { text: "실제로 얼마나 편하게 살 수 있는지", score: ["practical"] },
      { text: "가격 대비 괜찮은 선택인지", score: ["expansive"] },
      { text: "앞으로 더 좋아질 가능성이 있는지", score: ["upward"] },
    ],
  },
  {
    id: 8,
    question: "빠르게 실행하는 것 vs 실수를 줄이는 것",
    options: [
      { text: "먼저 움직이는 사람이 기회를 잡는다", score: ["opportunity"] },
      { text: "실수를 줄이는 게 더 중요하다", score: ["stable"] },
      { text: "확신이 들면 바로 움직인다", score: ["planner"] },
      { text: "정보가 모이면 빠르게 실행한다", score: ["expansive"] },
    ],
  },
  {
    id: 9,
    question: "마지막 선택을 앞두고 나는?",
    options: [
      { text: "지금 가장 끌리는 선택에 집중한다", score: ["sensory"] },
      { text: "놓친 부분이 없는지 다시 확인한다", score: ["stable"] },
      { text: "처음 세운 기준과 다시 비교해본다", score: ["opportunity"] },
      { text: "핵심 조건만 빠르게 다시 체크한다", score: ["analytic"] },
    ],
  },
  {
    id: 10,
    question: "최종 결정을 내릴 때 가장 중요한 건?",
    options: [
      { text: "지금 잡지 않으면 놓칠 것 같은 타이밍", score: ["opportunity"] },
      { text: "데이터상 손해 볼 가능성이 거의 없는 선택", score: ["analytic"] },
      { text: "실제로 살기 편한 환경인지", score: ["practical"] },
      { text: "앞으로 더 좋아질 가능성이 있는지", score: ["upward"] },
    ],
  },
];
