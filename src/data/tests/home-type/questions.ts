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
    question: "집을 고를 때 가장 중요한 것은?",
    options: [
      { text: "역세권·편의시설 등 생활 인프라", score: ["urban"] },
      { text: "조용하고 녹지가 가까운 자연 환경", score: ["healing"] },
      { text: "브랜드·마감재·커뮤니티 수준", score: ["premium"] },
      { text: "관리비 포함 실제 월 지출 총액", score: ["budget"] },
    ],
  },
  {
    id: 2,
    question: "퇴근 후 집에서 가장 하고 싶은 것은?",
    options: [
      { text: "넷플릭스·게임 등 콘텐츠 소비", score: ["urban"] },
      { text: "식물 가꾸기·명상·독서", score: ["healing"] },
      { text: "인테리어 소품 정리·홈카페 즐기기", score: ["premium"] },
      { text: "요리하며 알뜰하게 집밥 먹기", score: ["budget"] },
    ],
  },
  {
    id: 3,
    question: "예상치 못한 목돈이 생겼다면?",
    options: [
      { text: "인테리어나 고급 가전에 아낌없이 투자한다", score: ["premium"] },
      { text: "저축하거나 실용적인 곳에만 쓴다", score: ["budget"] },
      { text: "도시 중심지에 더 가까운 집으로 이사한다", score: ["urban"] },
      { text: "시골이나 외곽에 나만의 작은 공간을 마련한다", score: ["escape"] },
    ],
  },
  {
    id: 4,
    question: "나에게 집이란?",
    options: [
      { text: "모든 것이 연결된 도시 생활의 거점", score: ["urban"] },
      { text: "하루를 회복하는 힐링 공간", score: ["healing"] },
      { text: "내 취향과 라이프스타일을 표현하는 곳", score: ["premium"] },
      { text: "세상과 단절된 나만의 아지트", score: ["escape"] },
    ],
  },
  {
    id: 5,
    question: "이상적인 주말 오전 풍경은?",
    options: [
      { text: "걸어서 5분 거리 카페에서 브런치", score: ["urban"] },
      { text: "발코니나 마당에서 커피 한 잔", score: ["healing"] },
      { text: "호텔 같은 욕실에서 여유롭게 목욕", score: ["premium"] },
      { text: "아무 계획 없이 혼자만의 시간", score: ["escape"] },
    ],
  },
  {
    id: 6,
    question: "집에서 창밖으로 보고 싶은 풍경은?",
    options: [
      { text: "활기찬 도시 야경과 스카이라인", score: ["urban"] },
      { text: "산이나 숲, 나무가 보이는 조용한 뷰", score: ["healing"] },
      { text: "한강 뷰나 고층에서 내려다보는 전경", score: ["premium"] },
      { text: "아무도 없는 탁 트인 들판이나 바다", score: ["escape"] },
    ],
  },
  {
    id: 7,
    question: "같은 예산이라면 어떤 집을 고르겠어요?",
    options: [
      { text: "좁더라도 핵심 입지, 좋은 마감재", score: ["premium"] },
      { text: "마감재는 평범해도 넓고 실용적인 구조", score: ["budget"] },
      { text: "역 바로 앞, 편의점 바로 옆", score: ["urban"] },
      { text: "조용한 골목 안쪽, 사람 없는 동네", score: ["healing", "escape"] },
    ],
  },
  {
    id: 8,
    question: "집에서 가장 중요한 공간은?",
    options: [
      { text: "드레스룸·욕실 등 라이프스타일 공간", score: ["premium"] },
      { text: "실용적인 수납과 주방", score: ["budget"] },
      { text: "창문이 크고 채광이 잘 드는 거실", score: ["healing"] },
      { text: "혼자만 들어올 수 있는 나만의 방", score: ["escape"] },
    ],
  },
  {
    id: 9,
    question: "집 근처에 반드시 있어야 하는 것은?",
    options: [
      { text: "지하철역, 대형마트, 병원", score: ["urban"] },
      { text: "공원, 산책로, 나무가 많은 골목", score: ["healing"] },
      { text: "맛집, 카페, 트렌디한 상권", score: ["premium"] },
      { text: "아무것도 없어도 괜찮다. 조용하면 된다", score: ["escape"] },
    ],
  },
  {
    id: 10,
    question: "집에 대한 나의 솔직한 생각은?",
    options: [
      { text: "집은 거점이다. 접근성이 전부다", score: ["urban"] },
      { text: "집은 쉬는 곳이다. 편하면 그걸로 충분하다", score: ["healing"] },
      { text: "집은 투자다. 자산 가치도 중요하다", score: ["premium"] },
      { text: "집은 피난처다. 세상과 거리를 두는 공간이다", score: ["escape"] },
    ],
  },
];
