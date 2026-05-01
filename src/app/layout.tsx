import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oboon.co.kr"),
  title: "맞춤매물 추천 서비스 | 내 조건에 맞는 매물, 대신 찾아드립니다",
  description:
    "자산·소득·희망지역·목적을 바탕으로 맞춤 매물을 찾아드립니다. 발품 대신 분석 리포트, 현장 동행까지 제공하는 부동산 의사결정 보조 서비스.",
  openGraph: {
    title: "맞춤매물 추천 서비스 | 내 조건에 맞는 매물, 대신 찾아드립니다",
    description: "자산·소득·희망지역·목적을 바탕으로 맞춤 매물을 찾아드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense — 서버 렌더링 HTML에 직접 포함 (크롤러 인식용) */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7703189520308574"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
