import { NextRequest, NextResponse } from "next/server";
import { getCounts, incrementCount, TEST_IDS } from "@/lib/counts";

// GET /api/counts — 전체 참여자 수 반환
export async function GET() {
  const result = await getCounts();
  return NextResponse.json(result);
}

// POST /api/counts — 참여자 수 +1
// body: { id: "landmark" | "home-type" | ... }
export async function POST(req: NextRequest) {
  try {
    const { id } = (await req.json()) as { id: string };
    if (!(TEST_IDS as string[]).includes(id)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    await incrementCount(id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true, note: "error_ignored" });
  }
}
