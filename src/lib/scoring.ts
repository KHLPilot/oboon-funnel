/**
 * 범용 점수 집계 함수
 *
 * 동작:
 * - 각 질문 선택 시 option.score 배열(1~2개) 누적
 * - 전체 답변 완료 후 ScoreMap(key → count) 집계
 * - 최고 count를 가진 key 반환
 *
 * 동점 처리:
 * - 동점인 key들 중 TIEBREAK_PRIORITY 배열 기준 가장 앞에 있는 것 반환
 * - 테스트별 점수 key가 달라도 집계 로직 자체는 동일하게 동작
 */

const TIEBREAK_PRIORITY = [
  // landmark
  "upward", "opportunity", "analytic", "stable",
  "planner", "practical", "expansive", "sensory",
  // home-type
  "urban", "premium", "budget", "healing", "escape",
];

/**
 * 답변에서 수집한 모든 score key 배열을 받아 최종 결과 key를 반환
 *
 * @param scoreKeys - 각 질문 선택 시 누적된 score key 배열
 * @returns 최다 점수 유형의 key
 *
 * @example
 * const keys = answers.flatMap(a => a.score);
 * const result = getResultType(keys); // "upward"
 */
export function getResultType(scoreKeys: string[]): string {
  const map: Record<string, number> = {};

  for (const key of scoreKeys) {
    map[key] = (map[key] ?? 0) + 1;
  }

  if (Object.keys(map).length === 0) return TIEBREAK_PRIORITY[0];

  const maxScore = Math.max(...Object.values(map));

  // 우선순위 리스트에서 동점 중 가장 앞에 있는 것 반환
  for (const key of TIEBREAK_PRIORITY) {
    if (map[key] === maxScore) return key;
  }

  // TIEBREAK_PRIORITY에 없는 새 키가 최고점이면 그대로 반환
  const [topKey] = Object.entries(map)
    .filter(([, v]) => v === maxScore)
    .map(([k]) => k);

  return topKey;
}
