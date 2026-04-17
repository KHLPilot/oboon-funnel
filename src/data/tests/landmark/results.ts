import type { ResultType } from "@/data/types";

export const results: Record<string, ResultType> = {
  upward: {
    key: "upward",
    name: "상승지향형",
    building: "롯데월드타워형",
    emoji: "🏙️",
    images: {
      card: "/images/landmarks/upward-1200.jpg",
      og: "/images/landmarks/upward-og.jpg",
      thumb: "/images/landmarks/upward-600.jpg",
    },
    photoCredits: [
      {
        author: "lifeforstock",
        source: "Freepik",
        url: "https://kr.freepik.com/free-photo/beautiful-architecture-building-lotte-tower_3801455.htm",
      },
    ],
    oneLiner: "오를 것을 먼저 보는 사람",
    description:
      "시장 흐름보다 반 발 앞서 움직이는 유형입니다. '좋은 타이밍은 기다리는 게 아니라 잡는 것'이라는 신념으로, 성장 가능성이 보이는 순간 과감하게 행동합니다. 기회 앞에서 주저하는 것이 가장 큰 손실이라고 생각합니다.",
    strength:
      "상승 신호를 본능적으로 감지하고, 결정적인 순간에 흔들림 없이 움직입니다. 빠른 실행력 덕분에 남들보다 한 발 앞선 선택을 해본 경험이 있습니다.",
    risk: "속도가 강점이지만, 충분한 검토 없이 내린 결정은 리스크로 돌아올 수 있습니다. 상승 기대만으로 조건의 빈틈을 놓치지 않도록 주의하세요.",
    solution:
      "삼성무역센터형과 찰떡궁합! 당신의 상승 감각에 기회를 정확히 포착하는 타이밍 능력이 더해지면, 막을 수 없는 조합이 됩니다.",
    ctaText: "내 상황에 맞는 매물 확인하기",
    ctaSubtext: "빠른 선택일수록 기준이 필요합니다",
  },

  stable: {
    key: "stable",
    name: "안정선호형",
    building: "경복궁형",
    emoji: "🏯",
    images: {
      card: "/images/landmarks/stable-1200.jpg",
      og: "/images/landmarks/stable-og.jpg",
      thumb: "/images/landmarks/stable-600.jpg",
    },
    photoCredits: [
      {
        author: "lifeforstock",
        source: "Freepik",
        url: "https://kr.freepik.com/free-photo/gyeongbokgung-palace_3799969.htm",
      },
    ],
    oneLiner: "흔들리지 않는 선택을 하는 사람",
    description:
      "흔들리지 않는 선택이 최고의 선택이라고 믿는 유형입니다. 충동적으로 움직이는 대신, 검증된 안정성과 낮은 리스크를 기준으로 천천히 그리고 확실하게 나아갑니다.",
    strength:
      "감정보다 이성을 앞세우는 냉철함이 강점입니다. 시장이 흔들릴 때도 원칙을 지키며, 잃지 않는 선택을 반복하는 능력이 있습니다.",
    risk: "지나친 신중함이 결정을 미루게 만들 수 있습니다. 완벽한 확신을 기다리다가 좋은 기회를 놓치는 경우도 있다는 점을 기억하세요.",
    solution:
      "남산타워형과 찰떡궁합! 데이터로 안전함을 확인해주는 분석형 파트너와 함께라면, 신중한 선택이 더욱 단단해집니다.",
    ctaText: "조건 기반으로 매물 비교하기",
    ctaSubtext: "많은 정보보다 중요한 건 정리된 기준입니다",
  },

  sensory: {
    key: "sensory",
    name: "감각선택형",
    building: "DDP형",
    emoji: "🔮",
    images: {
      card: "/images/landmarks/sensory-1200.jpg",
      og: "/images/landmarks/sensory-og.jpg",
      thumb: "/images/landmarks/sensory-600.jpg",
    },
    photoCredits: [
      {
        author: "Theodore Nguyen",
        source: "Pexels",
        url: "https://www.pexels.com/ko-kr/photo/31892067/",
      },
      {
        author: "Farrel Nobel",
        source: "Unsplash",
        url: "https://unsplash.com/ko/@farrelnobel",
      },
    ],
    oneLiner: "느낌이 맞는 선택을 하는 사람",
    description:
      "숫자보다 현장에서 느끼는 감각을 더 신뢰하는 유형입니다. 매물을 봤을 때 '이곳이다'라는 확신이 드는 직관, 그게 당신의 가장 강력한 의사결정 도구입니다.",
    strength:
      "남들이 데이터로만 판단할 때, 당신은 공간이 주는 에너지와 가능성을 읽습니다. 숨겨진 매력을 발견하는 탁월한 안목으로 독보적인 선택을 해냅니다.",
    risk: "감각은 강력하지만, 조건과 수치를 함께 살피지 않으면 나중에 후회할 수 있습니다. 직관에 최소한의 검증을 더하는 습관을 들여보세요.",
    solution:
      "코엑스형과 찰떡궁합! 당신의 감각 있는 선택에 실용적인 조건 검토가 더해지면, 느낌도 좋고 손해도 없는 완벽한 결정이 됩니다.",
    ctaText: "나에게 맞는 선택 기준 확인하기",
    ctaSubtext: "좋은 선택은 감각 + 조건입니다",
  },

  analytic: {
    key: "analytic",
    name: "분석관찰형",
    building: "남산타워형",
    emoji: "🗼",
    images: {
      card: "/images/landmarks/analytic-1200.jpg",
      og: "/images/landmarks/analytic-og.jpg",
      thumb: "/images/landmarks/analytic-600.jpg",
    },
    photoCredits: [
      {
        author: "lifeforstock",
        source: "Freepik",
        url: "https://kr.freepik.com/free-photo/beautiful-architecture-building-n-seoul-tower_3798311.htm",
      },
    ],
    oneLiner: "전체를 보고 판단하는 사람",
    description:
      "전체를 조망하며 데이터와 논리로 판단하는 유형입니다. 충분한 정보가 모이기 전까지는 결정하지 않으며, 숫자로 설명되지 않는 것은 쉽게 믿지 않습니다.",
    strength:
      "리스크를 구조적으로 파악하고 손실 가능성을 사전에 차단합니다. 근거 있는 선택으로 장기적으로 안정적인 결과를 만들어내는 것이 진짜 강점입니다.",
    risk: "완벽한 분석을 추구하다 보면 결정 타이밍을 놓칠 수 있습니다. 때로는 70%의 확신으로도 충분히 좋은 선택을 할 수 있다는 걸 기억하세요.",
    solution:
      "경복궁형과 찰떡궁합! 안정을 중시하는 신중한 파트너와 함께라면, 데이터와 원칙이 만나 흔들리지 않는 선택을 완성합니다.",
    ctaText: "핵심 기준으로 매물 보기",
    ctaSubtext: "모든 정보보다 중요한 건 핵심입니다",
  },

  practical: {
    key: "practical",
    name: "실용결정형",
    building: "코엑스형",
    emoji: "🏢",
    images: {
      card: "/images/landmarks/practical-1200.jpg",
      og: "/images/landmarks/practical-og.jpg",
      thumb: "/images/landmarks/practical-600.jpg",
    },
    photoCredits: [
      {
        author: "rawkkim",
        source: "Unsplash",
        url: "https://unsplash.com/ko/@rawkkim",
      },
    ],
    oneLiner: "결과로 판단하는 사람",
    description:
      "복잡한 것을 좋아하지 않고, 실질적인 가치에 집중하는 유형입니다. '살기 좋은 집이 좋은 집'이라는 명확한 기준을 갖고 있으며, 실용성으로 빠르게 판단합니다.",
    strength:
      "핵심을 빠르게 짚어내고 불필요한 고민 없이 실행합니다. 실생활 만족도가 높은 선택을 하는 능력 덕분에, 결정 이후 후회가 적습니다.",
    risk: "당장의 편의에 집중하다 보면 장기적인 자산 가치나 미래 변화를 놓칠 수 있습니다. 지금뿐 아니라 5년 후의 모습도 함께 그려보세요.",
    solution:
      "DDP형과 찰떡궁합! 실용적 판단에 감각 있는 시각이 더해지면, 조건도 좋고 느낌도 좋은 선택을 동시에 잡을 수 있습니다.",
    ctaText: "내 조건에 맞는 매물 보기",
    ctaSubtext: "결과는 조건에서 시작됩니다",
  },

  opportunity: {
    key: "opportunity",
    name: "기회선점형",
    building: "삼성무역센터형",
    emoji: "🏦",
    images: {
      card: "/images/landmarks/opportunity-1200.jpg",
      og: "/images/landmarks/opportunity-og.jpg",
      thumb: "/images/landmarks/opportunity-600.jpg",
    },
    photoCredits: [
      {
        author: "Getty Images Bank",
        source: "Getty Images Bank",
        url: "https://www.gettyimagesbank.com/s/?st=union&lv=&mi=2&q=a12230147",
      },
    ],
    oneLiner: "기회를 먼저 잡는 사람",
    description:
      "시장보다 한 발 앞서 움직이는 유형입니다. 기회를 발견하는 순간 망설임 없이 선점하며, 타이밍이 전부라는 사실을 몸으로 알고 있습니다.",
    strength:
      "타이밍 감각이 탁월하며, 남들이 주저할 때 먼저 행동해 실질적인 결과를 만들어냅니다. 기회의 창이 열렸을 때 빠르게 치고 들어가는 실행력이 최대 강점입니다.",
    risk: "속도를 추구하다 보면 정보가 불충분한 상태에서 결정하는 경우가 생깁니다. 빠른 실행과 최소한의 검증, 이 두 가지를 동시에 챙기는 습관이 필요합니다.",
    solution:
      "롯데월드타워형과 찰떡궁합! 성장 가능성을 먼저 읽는 눈과 기회를 잡는 타이밍이 만나면, 시장에서 가장 앞서나가는 조합이 됩니다.",
    ctaText: "기회에 맞는 매물 확인하기",
    ctaSubtext: "좋은 기회는 준비된 선택에서 나옵니다",
  },

  expansive: {
    key: "expansive",
    name: "확장지향형",
    building: "인천공항형",
    emoji: "✈️",
    images: {
      card: "/images/landmarks/expansive-1200.jpg",
      og: "/images/landmarks/expansive-og.jpg",
      thumb: "/images/landmarks/expansive-600.jpg",
    },
    photoCredits: [
      {
        author: "Pond Juprasong",
        source: "Unsplash",
        url: "https://unsplash.com/ko/@pondjup",
      },
      {
        author: "Shawn",
        source: "Unsplash",
        url: "https://unsplash.com/ko/@shawnanggg",
      },
    ],
    oneLiner: "더 큰 가능성을 보는 사람",
    description:
      "하나의 선택지에 머물지 않고 더 넓은 가능성을 탐색하는 유형입니다. 선택지가 많을수록 더 좋은 결정을 내릴 수 있다는 믿음으로, 항상 시야를 넓게 유지합니다.",
    strength:
      "다양한 관점으로 선택지를 비교하며, 남들이 보지 못한 성장 가능성을 발견합니다. 편견 없이 여러 가능성을 열어두는 열린 사고방식이 강점입니다.",
    risk: "너무 많은 가능성을 열어두면 정작 결정을 내리기가 어려워집니다. 탐색과 결정 사이의 균형을 찾는 것, 그게 지금 당신에게 가장 필요한 역량입니다.",
    solution:
      "서울시청형과 찰떡궁합! 넓은 탐색 끝에 구조적인 기준으로 결론을 내려주는 파트너와 함께라면, 가능성이 현실이 됩니다.",
    ctaText: "내 가능성에 맞는 선택 보기",
    ctaSubtext: "가능성은 기준이 있어야 현실이 됩니다",
  },

  planner: {
    key: "planner",
    name: "계획설계형",
    building: "서울시청형",
    emoji: "🏛️",
    images: {
      card: "/images/landmarks/planner-1200.jpg",
      og: "/images/landmarks/planner-og.jpg",
      thumb: "/images/landmarks/planner-600.jpg",
    },
    photoCredits: [
      {
        author: "KS KYUNG",
        source: "Unsplash",
        url: "https://unsplash.com/ko/@mygallery",
      },
      {
        author: "용한 배",
        source: "Pixabay",
        url: "https://pixabay.com/ko/users/yhbae-4048436/",
      },
    ],
    oneLiner: "구조를 먼저 설계하는 사람",
    description:
      "움직이기 전에 먼저 설계하는 유형입니다. 기준이 명확하고, 그 기준에서 벗어나는 선택은 아무리 매력적이어도 쉽게 받아들이지 않습니다.",
    strength:
      "충동적인 결정을 하지 않으며, 탄탄한 근거 위에서 내린 선택이라 후회가 적습니다. 계획이 있는 선택은 실행 과정에서도 흔들리지 않습니다.",
    risk: "계획이 지나치게 완벽해지려 하면 실행이 늦어집니다. 완벽한 계획보다 실행 가능한 계획이 더 좋은 결과를 만든다는 점, 잊지 마세요.",
    solution:
      "인천공항형과 찰떡궁합! 다양한 가능성을 탐색해온 파트너와 함께라면, 넓은 시야와 탄탄한 기준이 만나 완성도 높은 선택이 가능합니다.",
    ctaText: "내 기준에 맞는 매물 설계하기",
    ctaSubtext: "좋은 선택은 설계에서 시작됩니다",
  },
};
