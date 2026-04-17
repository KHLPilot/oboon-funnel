import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oboon.co.kr"),
  title: "OBOON 부동산 성향 테스트",
  description:
    "나의 주거 성향을 알면 선택이 쉬워진다. 랜드마크 유형 테스트, 집 유형 테스트, 라면 계산기까지.",
  openGraph: {
    title: "OBOON 부동산 성향 테스트",
    description: "나의 주거 성향을 알면 선택이 쉬워진다.",
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7703189520308574"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
