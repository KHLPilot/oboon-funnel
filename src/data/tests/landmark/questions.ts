import type { QuizQuestion } from "@/data/types";

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "관심 가는 매물을 발견했을 때, 나는?",
    options: [
      {
        text: "남들보다 먼저 확보할 수 있는지부터 확인한다",
        score: ["opportunity"],
      },
      { text: "거래 데이터와 조건을 먼저 분석한다", score: ["analytic"] },
      { text: "직접 가서 공간이 주는 느낌을 확인한다", score: ["sensory"] },
      { text: "내가 정한 기준에 맞는지 하나씩 비교한다", score: ["planner"] },
    ],
  },
  {
    id: 2,
    question: "처음 집을 알아볼 때 가장 먼저 하는 행동은?",
    options: [
      { text: "자금 범위와 대출 가능 금액을 계산한다", score: ["practical"] },
      { text: "앞으로 가치가 커질 지역인지 판단한다", score: ["upward"] },
      { text: "가격이 크게 흔들리지 않는 지역인지 본다", score: ["stable"] },
      {
        text: "해당 지역 외 다른 선택지들도 함께 탐색한다",
        score: ["expansive"],
      },
    ],
  },
  {
    id: 3,
    question: "같은 가격대라면 어떤 매물을 고르는 편인가?",
    options: [
      { text: "지금보다 미래 가치 상승이 기대되는 곳", score: ["upward"] },
      { text: "가격 변동이 적고 안정적인 입지", score: ["stable"] },
      { text: "생활 편의성이 뛰어난 실거주 중심 입지", score: ["practical"] },
      {
        text: "다른 선택지로 확장할 수 있는 유연한 입지",
        score: ["expansive"],
      },
    ],
  },
  {
    id: 4,
    question: "조건이 완벽하지 않은 매물을 보면 나는?",
    options: [
      { text: "지금 기회라고 판단되면 바로 움직인다", score: ["opportunity"] },
      {
        text: "부족한 요소가 위험이 될 수 있는지 분석한다",
        score: ["analytic"],
      },
      { text: "직접 느꼈을 때 괜찮으면 선택한다", score: ["sensory"] },
      { text: "계획에 맞지 않으면 과감히 제외한다", score: ["planner"] },
    ],
  },
  {
    id: 5,
    question: "두 선택지 중 고민될 때 나의 기준은?",
    options: [
      { text: "실제 생활 편의가 더 좋은 쪽을 선택한다", score: ["practical"] },
      { text: "앞으로 더 상승 여력이 있는 쪽을 고른다", score: ["upward"] },
      {
        text: "안정적으로 유지될 가능성이 높은 쪽을 선택한다",
        score: ["stable"],
      },
      {
        text: "더 다양한 방향으로 활용 가능한 쪽을 선택한다",
        score: ["expansive"],
      },
    ],
  },
  {
    id: 6,
    question: "정보가 많을수록 나는 어떻게 판단하는가?",
    options: [
      { text: "핵심만 빠르게 파악하고 결정을 내린다", score: ["opportunity"] },
      { text: "신뢰 가능한 데이터만 선별해서 본다", score: ["analytic"] },
      { text: "직접 경험하거나 체감한 정보를 더 믿는다", score: ["sensory"] },
      { text: "항목별로 정리해 비교 구조를 만든다", score: ["planner"] },
    ],
  },
  {
    id: 7,
    question: "집을 볼 때 가장 먼저 중요하게 보는 요소는?",
    options: [
      { text: "실생활에서 얼마나 편리한 구조인지", score: ["practical"] },
      { text: "앞으로 지역이 성장할 가능성", score: ["upward"] },
      { text: "가격이 안정적으로 유지될 수 있는지", score: ["stable"] },
      { text: "주변까지 포함한 확장 가능성", score: ["expansive"] },
    ],
  },
  {
    id: 8,
    question: "확신이 부족한 상황에서 나는 어떻게 행동하는가?",
    options: [
      { text: "타이밍을 놓치기 전에 먼저 움직인다", score: ["opportunity"] },
      { text: "데이터가 더 확보될 때까지 기다린다", score: ["analytic"] },
      { text: "직접 보고 느껴본 뒤 결정한다", score: ["sensory"] },
      { text: "기준을 다시 점검한 뒤 판단한다", score: ["planner"] },
    ],
  },
  {
    id: 9,
    question: "최종 결정을 앞둔 순간 나는 무엇을 떠올리는가?",
    options: [
      {
        text: "이 선택이 실제 생활에 얼마나 도움이 될지",
        score: ["practical"],
      },
      { text: "이 선택이 미래에 얼마나 가치가 오를지", score: ["upward"] },
      { text: "이 선택이 안전한 선택인지", score: ["stable"] },
      { text: "이 선택이 다음 기회로 이어질 수 있을지", score: ["expansive"] },
    ],
  },
  {
    id: 10,
    question: "결정을 내리는 마지막 기준은?",
    options: [
      { text: "지금 잡지 않으면 놓칠 기회인지", score: ["opportunity"] },
      { text: "객관적인 데이터로 납득 가능한 선택인지", score: ["analytic"] },
      { text: "내가 직접 느꼈을 때 확신이 드는지", score: ["sensory"] },
      { text: "내 계획과 흐름에 맞는 선택인지", score: ["planner"] },
    ],
  },
];
