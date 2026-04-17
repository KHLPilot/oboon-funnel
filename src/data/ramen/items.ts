export type Item = {
  id: string;
  name: string;
  price: number; // 단위: 원
  emoji: string;
  unit: string; // "봉", "개", "마리" 등
  funFact: (count: number) => string[]; // 재미 문구 2~3줄
};

// 신라면 한 봉지 가로 길이 약 21cm 기준
const RAMEN_LENGTH_CM = 21;
const EARTH_CIRCUMFERENCE_CM = 40_075 * 1000 * 100;
const EVEREST_CM = 884_800; // 에베레스트 8,848m

// 로또 1등 확률 1/8,145,060
const LOTTO_ODDS = 8_145_060;

export const items: Item[] = [
  {
    id: "ramen",
    name: "신라면",
    price: 850,
    emoji: "🍜",
    unit: "봉",
    funFact: (count) => {
      const earthLaps = (count * RAMEN_LENGTH_CM) / EARTH_CIRCUMFERENCE_CM;
      const kmLength = Math.round((count * RAMEN_LENGTH_CM) / 100 / 1000);
      const everestLaps = Math.round((count * RAMEN_LENGTH_CM) / EVEREST_CM);
      const years = Math.round(count / 365);
      return [
        `일렬로 늘어놓으면 ${kmLength.toLocaleString()}km`,
        earthLaps >= 1
          ? `지구를 ${earthLaps.toFixed(1)}바퀴 감을 수 있어요 🌍`
          : `에베레스트를 ${everestLaps.toLocaleString()}번 쌓을 수 있어요 🏔️`,
        `하루 3끼 먹으면 ${years.toLocaleString()}년치 — 지금 당장 드세요`,
      ];
    },
  },
  {
    id: "dujjonkku",
    name: "두쫀쿠",
    price: 6_000,
    emoji: "🥐",
    unit: "개",
    funFact: (count) => {
      const weightTons = (count * 90) / 1_000_000; // 약 90g
      const elephants = Math.round(weightTons / 5);
      const years = Math.round(count / 365);
      const stackKm = Math.round((count * 0.04) / 1000); // 두께 약 4cm
      return [
        `하루 1개씩 먹으면 ${years.toLocaleString()}년치`,
        `무게만 ${weightTons.toFixed(0)}톤 — 코끼리 ${elephants.toLocaleString()}마리 무게예요 🐘`,
        `쌓으면 높이가 ${stackKm.toLocaleString()}km — 국제우주정거장(ISS)이 ${Math.round(stackKm / 400)}번 뜨는 높이`,
      ];
    },
  },
  {
    id: "triangle",
    name: "편의점 삼각김밥",
    price: 1_500,
    emoji: "🍙",
    unit: "개",
    funFact: (count) => {
      const years = Math.round(count / 365);
      const weightTons = Math.round((count * 100) / 1_000_000); // 약 100g
      const kmLength = Math.round((count * 0.12) / 1000); // 가로 약 12cm
      return [
        `하루 1개씩 먹으면 ${years.toLocaleString()}년치`,
        `무게 총 ${weightTons.toLocaleString()}톤 — 에펠탑(${Math.round(weightTons / 7324).toLocaleString()}개)만큼의 무게`,
        `일렬로 세우면 ${kmLength.toLocaleString()}km — 경부고속도로(416km) ${Math.round(kmLength / 416)}번`,
      ];
    },
  },
  {
    id: "tanghuru",
    name: "탕후루",
    price: 3_000,
    emoji: "🍡",
    unit: "꼬치",
    funFact: (count) => {
      const weightTons = Math.round((count * 150) / 1_000_000);
      const sugarKg = Math.round(count * 0.03); // 꼬치당 당 약 30g
      const kmLength = Math.round((count * 0.3) / 1000); // 꼬치 길이 약 30cm
      return [
        `꼬치를 이으면 ${kmLength.toLocaleString()}km — 서울에서 LA까지 1번`,
        `설탕만 ${sugarKg.toLocaleString()}kg — 하루 권장 섭취량의 ${(sugarKg / 0.025).toFixed(0)}일치 🫠`,
        `무게 ${weightTons.toLocaleString()}톤 — 이 건물 사느니 탕후루 공장 차리세요`,
      ];
    },
  },
  {
    id: "starbucks",
    name: "스타벅스 아메리카노",
    price: 4_500,
    emoji: "☕",
    unit: "잔",
    funFact: (count) => {
      const years = Math.round(count / 365);
      const caffeineMg = Math.round(count * 150); // 잔당 150mg 카페인
      const liters = Math.round(count * 0.35); // 톨 약 350ml
      return [
        `하루 1잔씩 마시면 ${years.toLocaleString()}년치 ☕`,
        `카페인 총 ${caffeineMg.toLocaleString()}mg — 치사량(${Math.round(caffeineMg / 150_000).toLocaleString()}배) 주의 🚨`,
        `총 ${liters.toLocaleString()}L — 올림픽 수영장 ${Math.max(1, Math.round(liters / 2_500)).toLocaleString()}개를 아메리카노로 채울 수 있어요`,
      ];
    },
  },
  {
    id: "soju",
    name: "소주",
    price: 1_800,
    emoji: "🍶",
    unit: "병",
    funFact: (count) => {
      const liters = Math.round(count * 0.36);
      const pools = Math.round(liters / 2_500);
      const years = Math.round(count / 365);
      const glasses = count * 7; // 병당 약 7잔
      return [
        `총 ${liters.toLocaleString()}L — 올림픽 수영장 ${pools}개를 소주로 채워요 🏊`,
        `잔으로 따지면 ${glasses.toLocaleString()}잔 — 하루 2잔씩 마셔도 ${years.toLocaleString()}년`,
        `전국민(5천만명)이 ${Math.round(count / 50_000_000)}병씩 나눠 마실 수 있어요`,
      ];
    },
  },
  {
    id: "chicken",
    name: "치킨 (배달)",
    price: 22_000,
    emoji: "🍗",
    unit: "마리",
    funFact: (count) => {
      const years = Math.round(count / 365);
      const weightTons = Math.round((count * 1.5) / 1000); // 마리당 약 1.5kg
      const deliveryFee = count * 3_000; // 배달비 약 3천원
      return [
        `매일 1마리씩 먹어도 ${years.toLocaleString()}년치 🍗`,
        `무게 총 ${weightTons.toLocaleString()}톤 — 배달기사님께 죄송합니다`,
        `배달비만 ${Math.round(deliveryFee / 100_000_000).toLocaleString()}억원 — 자동차 사는 게 나을 수도요 🛵`,
      ];
    },
  },
  {
    id: "lotto",
    name: "로또 (1장 5게임)",
    price: 5_000,
    emoji: "🎰",
    unit: "장",
    funFact: (count) => {
      const totalGames = count * 5; // 1장 = 5게임
      const wins = Math.floor(totalGames / LOTTO_ODDS);
      const prizeMoney = wins * 2_000_000_000; // 1등 평균 20억
      return [
        wins >= 1
          ? `${totalGames.toLocaleString()}게임 중 통계적으로 1등이 ${wins.toLocaleString()}번 나왔을 거예요 🎯`
          : `${totalGames.toLocaleString()}게임을 해도 1등 확률은 ${(totalGames / LOTTO_ODDS * 100).toFixed(2)}% — 벼락이 더 빠릅니다 ⚡`,
        wins >= 1
          ? `당첨금 합계만 ${Math.round(prizeMoney / 100_000_000).toLocaleString()}억원 — 이미 부자였겠네요`
          : `그래도 지금 이 집 값에 비하면 훨씬 현실적이에요`,
        `매주 1장씩 사면 ${Math.round(count / 52).toLocaleString()}년치 — 인생 계획이 필요합니다`,
      ];
    },
  },
  {
    id: "bread",
    name: "성심당 튀김소보로",
    price: 1_500,
    emoji: "🥧",
    unit: "개",
    funFact: (count) => {
      const years = Math.round(count / 365);
      const trainTrips = Math.round(count / 2); // 대전 왕복 기준
      const weightTons = Math.round((count * 0.08) / 1000); // 약 80g
      return [
        `매일 1개씩 먹으면 ${years.toLocaleString()}년치 🥧`,
        `대전 왕복 ${trainTrips.toLocaleString()}회 — KTX 타고 성심당 갔다 오면 됩니다`,
        `무게 총 ${weightTons.toLocaleString()}톤 — 대전시민 모두에게 나눠줄 수 있어요`,
      ];
    },
  },
  {
    id: "iphone",
    name: "아이폰 16 Pro",
    price: 1_900_000,
    emoji: "📱",
    unit: "대",
    funFact: (count) => {
      const worldPct = (count / 8_000_000_000) * 100;
      const weightTons = Math.round((count * 0.227) / 1000); // 227g
      const stackKm = Math.round((count * 0.0087) / 1000); // 두께 8.7mm
      return [
        `전 세계 인구의 ${worldPct.toFixed(2)}%에게 나눠줄 수 있어요 📱`,
        `쌓으면 높이 ${stackKm.toLocaleString()}km — 달까지 ${Math.round(stackKm / 384_400)}번`,
        `무게 ${weightTons.toLocaleString()}톤 — 애플 창업자 스티브 잡스도 이걸 보면 감동받을 거예요`,
      ];
    },
  },
  {
    id: "genesis",
    name: "제네시스 GV80",
    price: 72_000_000,
    emoji: "🚗",
    unit: "대",
    funFact: (count) => {
      const lineKm = Math.round((count * 4.9) / 1000);
      const weightTons = Math.round(count * 2.3); // 약 2.3톤
      const fuelCost = count * 8_000_000; // 풀탱 주유비 대략 8만원
      return [
        `일렬 주차하면 ${lineKm.toLocaleString()}km — 경부고속도로 ${Math.round(lineKm / 416)}번 길이 🛣️`,
        `총 무게 ${weightTons.toLocaleString()}톤 — 에펠탑 ${Math.round(weightTons / 7324)}개 무게`,
        `기름값만 ${Math.round(fuelCost / 100_000_000).toLocaleString()}억원 — 이쯤 되면 자가용 필요 없죠`,
      ];
    },
  },
  {
    id: "salary",
    name: "연봉 (직장인 중위)",
    price: 37_000_000,
    emoji: "💼",
    unit: "년치",
    funFact: (count) => {
      const months = count * 12;
      const days = count * 365;
      const coffee = Math.round((count * 37_000_000) / 4_500);
      return [
        `월급으로 따지면 ${months.toLocaleString()}개월 — ${count.toLocaleString()}년 무휴 근무 💼`,
        `하루도 쉬지 않으면 ${days.toLocaleString()}일 — 역사상 가장 열심히 일한 직장인`,
        `이 기간 동안 스타벅스 대신 물 마셨다면 ${coffee.toLocaleString()}잔 절약했을 거예요 ☕`,
      ];
    },
  },
];
