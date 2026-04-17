import type { QuizQuestion } from "@/data/types";

/**
 * 점수 키 목록
 * urban    도시형
 * healing  힐링형
 * premium  프리미엄추구형
 * budget   가성비형
 * escape   현실도피형
 */

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "집을 고를 때 가장 먼저 보는 것은?",
    options: [
      { text: "지하철 거리, 주변 인프라", score: ["urban"] },
      { text: "자연 환경과 조용함", score: ["healing"] },
      { text: "브랜드와 단지 수준", score: ["premium"] },
      { text: "전체 생활비 대비 부담", score: ["budget"] },
    ],
  },
  {
    id: 2,
    question: "퇴근 후 집에서 보내는 시간은?",
    options: [
      { text: "영상·게임 등 콘텐츠 소비", score: ["urban"] },
      { text: "휴식, 독서, 마음 정리", score: ["healing"] },
      { text: "인테리어·취향 공간 관리", score: ["premium"] },
      { text: "집밥 준비와 생활 관리", score: ["budget"] },
    ],
  },
  {
    id: 3,
    question: "예상치 못한 여유 자금이 생기면?",
    options: [
      { text: "더 좋은 위치로 이동", score: ["urban"] },
      { text: "자연 가까운 공간 마련", score: ["healing"] },
      { text: "고급 가전·인테리어 업그레이드", score: ["premium"] },
      { text: "저축하거나 실용적으로 사용", score: ["budget"] },
    ],
  },
  {
    id: 4,
    question: "이상적인 주말 오후는?",
    options: [
      { text: "핫플·카페·외출", score: ["urban"] },
      { text: "산책이나 조용한 휴식", score: ["healing"] },
      { text: "집에서 취향 생활 즐기기", score: ["premium"] },
      { text: "집에서 쉬며 에너지 충전", score: ["escape"] },
    ],
  },
  {
    id: 5,
    question: "집에서 가장 중요한 공간은?",
    options: [
      { text: "외출 동선이 편한 현관/위치", score: ["urban"] },
      { text: "채광 좋은 거실", score: ["healing"] },
      { text: "욕실·드레스룸 등 고급 공간", score: ["premium"] },
      { text: "실용적인 주방과 수납", score: ["budget"] },
    ],
  },
  {
    id: 6,
    question: "창밖 풍경을 고른다면?",
    options: [
      { text: "도시 야경과 빌딩 숲", score: ["urban"] },
      { text: "숲이나 자연 풍경", score: ["healing"] },
      { text: "탁 트인 고층 뷰", score: ["premium"] },
      { text: "아무도 없는 조용한 공간", score: ["escape"] },
    ],
  },
  {
    id: 7,
    question: "같은 가격이라면 어떤 선택을 할까?",
    options: [
      { text: "위치는 최고지만 작은 집", score: ["urban"] },
      { text: "조금 멀어도 쾌적한 환경", score: ["healing"] },
      { text: "브랜드와 마감이 좋은 집", score: ["premium"] },
      { text: "넓고 실용적인 구조", score: ["budget"] },
    ],
  },
  {
    id: 8,
    question: "집 근처 환경으로 더 중요한 것은?",
    options: [
      { text: "교통과 생활 편의시설", score: ["urban"] },
      { text: "공원과 산책로", score: ["healing"] },
      { text: "고급 상권과 분위기", score: ["premium"] },
      { text: "복잡하지 않은 조용함", score: ["escape"] },
    ],
  },
  {
    id: 9,
    question: "집에 있을 때 가장 원하는 느낌은?",
    options: [
      { text: "모든 게 가까운 편리함", score: ["urban"] },
      { text: "편안하고 안정된 느낌", score: ["healing"] },
      { text: "내 취향이 완성된 공간", score: ["premium"] },
      { text: "최소 비용으로 편안함 유지", score: ["budget"] },
    ],
  },
  {
    id: 10,
    question: "나에게 집이란 어떤 의미인가?",
    options: [
      { text: "도시 생활의 중심 거점", score: ["urban"] },
      { text: "몸과 마음을 회복하는 곳", score: ["healing"] },
      { text: "나를 보여주는 라이프스타일", score: ["premium"] },
      { text: "세상과 거리를 두는 공간", score: ["escape"] },
    ],
  },
];
