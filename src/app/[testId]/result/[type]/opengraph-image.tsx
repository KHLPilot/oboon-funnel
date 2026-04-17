import { ImageResponse } from "next/og";
import { getTestData } from "@/data/tests/index";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

interface Props {
  params: { testId: string; type: string };
}

export default async function Image({ params }: Props) {
  const { testId, type } = params;
  const data = await getTestData(testId);
  const result = data?.results[type];

  const emoji = result?.emoji ?? "🏠";
  const building = result?.building ?? "OBOON 성향 테스트";
  const name = result?.name ?? "";
  const oneLiner = result?.oneLiner ?? "나의 부동산 성향을 알아봤어요";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0D1F33 0%, #1A3C5E 100%)",
          padding: "60px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: "#E8B84B",
            color: "#0D1F33",
            fontSize: 20,
            fontWeight: 900,
            padding: "8px 20px",
            borderRadius: 999,
            marginBottom: 32,
            letterSpacing: "0.05em",
          }}
        >
          OBOON 성향 테스트
        </div>

        {/* Emoji */}
        <div style={{ fontSize: 100, marginBottom: 24 }}>{emoji}</div>

        {/* Building name */}
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 22,
            marginBottom: 8,
          }}
        >
          {building}
        </div>

        {/* Type name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 900,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          나는 {name}!
        </div>

        {/* One liner */}
        <div
          style={{
            color: "#E8B84B",
            fontSize: 24,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          "{oneLiner}"
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "rgba(255,255,255,0.3)",
            fontSize: 18,
          }}
        >
          oboon.co.kr
        </div>
      </div>
    ),
    { ...size }
  );
}
