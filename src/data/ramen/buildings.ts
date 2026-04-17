export type Building = {
  id: string;
  name: string;
  location: string;
  area: string;
  price: number; // 단위: 원
  emoji: string;
  hint: string; // 유명 거주자 힌트
};

export const buildings: Building[] = [
  {
    id: "eterno",
    name: "에테르노 청담",
    location: "강남구 청담동",
    area: "전용 244㎡",
    price: 20_000_000_000,
    emoji: "👑",
    hint: "국내 최고가 아파트 중 하나",
  },
  {
    id: "galleria",
    name: "갤러리아 포레",
    location: "성동구 성수동",
    area: "전용 273㎡",
    price: 15_000_000_000,
    emoji: "🏛️",
    hint: "한강뷰 초고가 단지",
  },
  {
    id: "ph129",
    name: "PH129",
    location: "서초구 반포동",
    area: "전용 179㎡",
    price: 13_000_000_000,
    emoji: "🌇",
    hint: "래미안 원베일리 펜트하우스",
  },
  {
    id: "nine",
    name: "나인원 한남",
    location: "용산구 한남동",
    area: "전용 244㎡",
    price: 11_000_000_000,
    emoji: "💎",
    hint: "유명 연예인 다수 거주",
  },
  {
    id: "hannamthehill",
    name: "한남더힐",
    location: "용산구 한남동",
    area: "전용 244㎡",
    price: 10_000_000_000,
    emoji: "🏔️",
    hint: "대한민국 대표 최고급 주거단지",
  },
  {
    id: "trimaje",
    name: "트리마제",
    location: "성동구 성수동",
    area: "전용 175㎡",
    price: 8_500_000_000,
    emoji: "🌃",
    hint: "성수동 한강뷰 랜드마크",
  },
  {
    id: "parkone",
    name: "파크원",
    location: "영등포구 여의도",
    area: "전용 150㎡",
    price: 7_000_000_000,
    emoji: "🏢",
    hint: "여의도 초고층 주상복합",
  },
  {
    id: "tower",
    name: "타워팰리스",
    location: "강남구 도곡동",
    area: "전용 165㎡",
    price: 4_500_000_000,
    emoji: "🗼",
    hint: "강남 대표 고급 주거단지",
  },
  {
    id: "acro",
    name: "아크로리버파크",
    location: "서초구 반포동",
    area: "전용 84㎡",
    price: 4_500_000_000,
    emoji: "🌊",
    hint: "한강 조망 반포 대장 아파트",
  },
  {
    id: "raemian",
    name: "래미안 퍼스티지",
    location: "서초구 반포동",
    area: "전용 84㎡",
    price: 3_800_000_000,
    emoji: "🏠",
    hint: "반포 핵심 입지 대단지",
  },
];
