import type { ResultType } from "@/data/types";

export const results: Record<string, ResultType> = {
  urban: {
    key: "urban",
    name: "도시형",
    building: "도심 아파트형",
    emoji: "🌆",
    oneLiner: "도시의 속도로 살아가는 사람",
    description:
      "당신에게 집은 삶의 거점입니다. 편의시설과 교통이 가까울수록 삶의 질이 높아진다고 느낍니다.",
    strength: "시간 효율이 높고, 다양한 기회와 연결될 수 있습니다.",
    risk: "주거비가 높아지거나 소음·밀도에 피로감을 느낄 수 있습니다.",
    solution:
      "입지 조건과 실생활 편의를 함께 검증하는 과정이 필요합니다.",
    ctaText: "내 생활에 맞는 입지 확인하기",
    ctaSubtext: "좋은 입지는 기준이 있어야 찾을 수 있습니다",
  },
  healing: {
    key: "healing",
    name: "힐링형",
    building: "전원·저층 주거형",
    emoji: "🌿",
    oneLiner: "집에서 회복하는 사람",
    description:
      "당신에게 집은 충전의 공간입니다. 조용하고 자연 친화적인 환경에서 에너지를 채웁니다.",
    strength: "스트레스가 낮고 삶의 만족도가 높은 선택을 합니다.",
    risk: "편의시설 접근성이 떨어지면 생활 불편이 누적될 수 있습니다.",
    solution:
      "힐링 환경과 실생활 인프라의 균형점을 찾는 것이 핵심입니다.",
    ctaText: "나에게 맞는 주거 환경 확인하기",
    ctaSubtext: "쉬는 공간도 조건이 맞아야 합니다",
  },
  premium: {
    key: "premium",
    name: "프리미엄추구형",
    building: "고급 브랜드 아파트형",
    emoji: "✨",
    oneLiner: "삶의 질에 투자하는 사람",
    description:
      "당신에게 집은 라이프스타일의 표현입니다. 품질과 브랜드, 커뮤니티 수준을 중요하게 생각합니다.",
    strength: "자산 가치와 생활 만족도를 동시에 추구합니다.",
    risk: "예산 대비 실제 필요 조건을 초과하는 선택을 할 수 있습니다.",
    solution:
      "원하는 조건의 우선순위를 정하면 선택이 명확해집니다.",
    ctaText: "내 기준에 맞는 프리미엄 매물 보기",
    ctaSubtext: "좋은 집은 기준이 있어야 고를 수 있습니다",
  },
  budget: {
    key: "budget",
    name: "가성비형",
    building: "실속형 주거형",
    emoji: "💡",
    oneLiner: "현명하게 고르는 사람",
    description:
      "당신에게 집은 실용적인 선택입니다. 비용 대비 실생활 효용을 가장 중요하게 봅니다.",
    strength: "재정적으로 안정적이고, 불필요한 지출을 줄입니다.",
    risk: "가격만 보다가 입지나 품질의 중요한 차이를 놓칠 수 있습니다.",
    solution:
      "실제 조건과 총 지출 기준으로 비교하는 것이 중요합니다.",
    ctaText: "내 예산에 맞는 최적 매물 보기",
    ctaSubtext: "가성비는 조건을 알아야 보입니다",
  },
  escape: {
    key: "escape",
    name: "현실도피형",
    building: "나만의 아지트형",
    emoji: "🏕️",
    oneLiner: "일상을 벗어나고 싶은 사람",
    description:
      "당신에게 집은 세상과 단절된 나만의 공간입니다. 독립적이고 비일상적인 환경을 꿈꿉니다.",
    strength: "명확한 선호가 있어 자신에게 맞는 공간을 잘 찾아냅니다.",
    risk: "현실적인 생활 조건(출퇴근, 편의시설)과 충돌할 수 있습니다.",
    solution:
      "현실 조건과 이상적인 환경 사이의 타협점을 찾는 것이 핵심입니다.",
    ctaText: "나에게 맞는 독립 공간 찾아보기",
    ctaSubtext: "이상적인 공간도 조건 검증이 필요합니다",
  },
};
