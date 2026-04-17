// 모든 퀴즈 테스트에서 공통으로 사용하는 타입

export type QuizOption = {
  text: string;
  score: string[];
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: [QuizOption, QuizOption, QuizOption, QuizOption]; // 항상 4개
};

export type PhotoCredit = {
  author: string;
  source: "Freepik" | "Pexels" | "Unsplash" | "Pixabay" | "Getty Images Bank";
  url: string;
};

export type ResultType = {
  key: string;
  name: string;
  building: string;
  emoji: string;
  /** 랜드마크 이미지 (없으면 gradient만) */
  images?: {
    card: string;  // 1200x800 — ResultCard 히어로
    og: string;    // 1200x630 — OG 메타이미지
    thumb: string; // 600x600  — 썸네일 예비
  };
  photoCredits?: PhotoCredit[];
  oneLiner: string;
  description: string;
  strength: string;
  risk: string;
  solution: string;
  ctaText: string;
  ctaSubtext: string;
};
