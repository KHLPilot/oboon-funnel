export type ResultType = {
  key: string;
  name: string;
  building: string;
  emoji: string;
  oneLiner: string;
  description: string;
  strength: string;
  risk: string;
  solution: string;
  ctaText: string;
  ctaSubtext: string;
};

export const results: Record<string, ResultType> = {
  upward: {
    key: "upward",
    name: "상승지향형",
    building: "롯데월드타워형",
    emoji: "🏙️",
    oneLiner: "위로 올라갈 기회를 먼저 잡는 사람",
    description:
      "당신은 큰 흐름을 보고 빠르게 선택하는 타입입니다. 남들보다 먼저 움직이는 것이 강점입니다.",
    strength: "기회를 놓치지 않고, 성장 가능성을 먼저 봅니다.",
    risk: "빠른 선택일수록 조건을 충분히 확인하지 못할 수 있습니다.",
    solution:
      "그래서 당신에게는 내 상황에 맞는 조건을 먼저 정리하는 과정이 중요합니다.",
    ctaText: "내 상황에 맞는 매물 확인하기",
    ctaSubtext: "빠른 선택일수록 기준이 필요합니다",
  },
  stable: {
    key: "stable",
    name: "안정선호형",
    building: "경복궁형",
    emoji: "🏯",
    oneLiner: "흔들리지 않는 선택을 하는 사람",
    description:
      "신중하게 비교하고 안정적인 선택을 선호하는 타입입니다.",
    strength: "리스크를 줄이고, 실패 가능성을 낮춥니다.",
    risk: "정보가 많을수록 오히려 결정이 늦어질 수 있습니다.",
    solution: "조건을 기준으로 정리된 정보가 중요합니다.",
    ctaText: "조건 기반으로 매물 비교하기",
    ctaSubtext: "많은 정보보다 중요한 건 정리된 기준입니다",
  },
  sensory: {
    key: "sensory",
    name: "감각선택형",
    building: "DDP형",
    emoji: "🔮",
    oneLiner: "느낌이 맞는 선택을 하는 사람",
    description:
      "당신은 감각과 직관을 중요하게 생각하는 타입입니다.",
    strength: "남들과 다른 선택을 할 수 있는 용기가 있습니다.",
    risk: "감각만으로 선택하면 실제 조건과 맞지 않을 수 있습니다.",
    solution: "감각과 조건을 함께 보는 기준이 필요합니다.",
    ctaText: "나에게 맞는 선택 기준 확인하기",
    ctaSubtext: "좋은 선택은 감각 + 조건입니다",
  },
  analytic: {
    key: "analytic",
    name: "분석관찰형",
    building: "남산타워형",
    emoji: "🗼",
    oneLiner: "전체를 보고 판단하는 사람",
    description:
      "비교와 분석을 통해 선택하는 타입입니다.",
    strength: "실수 확률이 낮고 합리적인 판단을 합니다.",
    risk: "너무 많은 비교는 결정 피로를 만들 수 있습니다.",
    solution: "핵심만 정리된 정보가 중요합니다.",
    ctaText: "핵심 기준으로 매물 보기",
    ctaSubtext: "모든 정보보다 중요한 건 핵심입니다",
  },
  practical: {
    key: "practical",
    name: "실용결정형",
    building: "코엑스형",
    emoji: "🏢",
    oneLiner: "결과로 판단하는 사람",
    description:
      "당신은 효율과 실용성을 기준으로 선택합니다.",
    strength: "시간과 비용을 낭비하지 않는 선택을 합니다.",
    risk: "조건이 많아질수록 놓치는 요소가 생길 수 있습니다.",
    solution: "핵심 조건 중심 정리가 필요합니다.",
    ctaText: "내 조건에 맞는 매물 보기",
    ctaSubtext: "결과는 조건에서 시작됩니다",
  },
  opportunity: {
    key: "opportunity",
    name: "기회선점형",
    building: "삼성무역센터형",
    emoji: "🏦",
    oneLiner: "기회를 먼저 잡는 사람",
    description:
      "시장 흐름을 빠르게 읽고 행동하는 타입입니다.",
    strength: "타이밍을 놓치지 않는 것이 강점입니다.",
    risk: "빠른 선택은 정보 부족으로 이어질 수 있습니다.",
    solution: "타이밍 + 조건을 함께 보는 것이 중요합니다.",
    ctaText: "기회에 맞는 매물 확인하기",
    ctaSubtext: "좋은 기회는 준비된 선택에서 나옵니다",
  },
  expansive: {
    key: "expansive",
    name: "확장지향형",
    building: "인천공항형",
    emoji: "✈️",
    oneLiner: "더 큰 가능성을 보는 사람",
    description:
      "하나의 선택보다 더 넓은 가능성을 고려하는 타입입니다.",
    strength: "확장성과 미래 가치를 잘 봅니다.",
    risk: "선택 범위가 넓어질수록 결정이 어려워질 수 있습니다.",
    solution:
      "조건을 기준으로 선택 범위를 좁히는 것이 중요합니다.",
    ctaText: "내 가능성에 맞는 선택 보기",
    ctaSubtext: "가능성은 기준이 있어야 현실이 됩니다",
  },
  planner: {
    key: "planner",
    name: "계획설계형",
    building: "세종정부청사형",
    emoji: "🏛️",
    oneLiner: "구조를 먼저 설계하는 사람",
    description:
      "기준과 계획을 세우고 선택하는 타입입니다.",
    strength: "체계적이고 안정적인 선택을 합니다.",
    risk: "계획에 너무 집중하면 기회를 놓칠 수 있습니다.",
    solution: "계획 + 실제 조건 검증이 함께 필요합니다.",
    ctaText: "내 기준에 맞는 매물 설계하기",
    ctaSubtext: "좋은 선택은 설계에서 시작됩니다",
  },
};
