import { NextRequest, NextResponse } from "next/server";
import kv from "@/lib/kv";

// 시드값 — KV 데이터가 없을 때 기본값
const SEEDS: Record<string, number> = {
  q0_A: 420, q0_B: 580,
  q1_A: 640, q1_B: 360,
  q2_A: 570, q2_B: 430,
  q3_A: 380, q3_B: 620,
  q4_A: 310, q4_B: 690,
};

// GET /api/balance-stats — 현재 통계 반환
export async function GET() {
  try {
    const keys = Object.keys(SEEDS);
    const values = await kv.mget<number[]>(...keys);
    const result: Record<string, number> = {};
    keys.forEach((key, i) => {
      result[key] = (values[i] ?? 0) + SEEDS[key];
    });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(SEEDS);
  }
}

// POST /api/balance-stats — 선택 결과 누적
// body: { choices: ("A" | "B")[] }
export async function POST(req: NextRequest) {
  try {
    const { choices } = (await req.json()) as { choices: ("A" | "B")[] };
    if (!Array.isArray(choices) || choices.length !== 5) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    await Promise.all(choices.map((c, i) => kv.incr(`q${i}_${c}`)));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true, note: "error_ignored" });
  }
}
