"use client";

import { useEffect, useState } from "react";
import type { ResultType } from "@/data/types";

interface ShareButtonsProps {
  result: ResultType;
}

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: object) => void;
      };
    };
  }
}

export default function ShareButtons({ result }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    if (!appKey) return;

    // 이미 로드된 경우
    if (window.Kakao?.isInitialized()) {
      setKakaoReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(appKey);
      }
      setKakaoReady(true);
    };
    document.head.appendChild(script);
  }, []);

  function handleKakaoShare() {
    if (!kakaoReady || !window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `나는 ${result.building}!`,
        description: `"${result.oneLiner}"\n나의 부동산 성향을 알아봤어요.`,
        // OG 이미지는 Next.js opengraph-image.tsx가 자동 생성 → 카카오가 meta 태그에서 수집
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      ],
    });
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API 미지원 환경 fallback
      const input = document.createElement("input");
      input.value = currentUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const hasKakaoKey = !!process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

  return (
    <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">
        결과 공유하기
      </p>
      <div className={`grid gap-2 ${hasKakaoKey ? "grid-cols-2" : "grid-cols-1"}`}>
        {/* 카카오톡 공유 */}
        {hasKakaoKey && (
          <button
            onClick={handleKakaoShare}
            disabled={!kakaoReady}
            className="
              flex items-center justify-center gap-2
              bg-[#FEE500] text-[#191919]
              font-bold text-sm py-3 px-4 rounded-xl
              active:scale-[0.97] hover:brightness-95
              transition-all duration-150
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            <KakaoIcon />
            카카오톡 공유
          </button>
        )}

        {/* 링크 복사 */}
        <button
          onClick={handleCopyLink}
          className="
            flex items-center justify-center gap-2
            bg-gray-100 text-gray-700
            font-bold text-sm py-3 px-4 rounded-xl
            active:scale-[0.97] hover:bg-gray-200
            transition-all duration-150
          "
        >
          {copied ? (
            <>
              <CheckIcon />
              복사됨!
            </>
          ) : (
            <>
              <LinkIcon />
              링크 복사
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function KakaoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C6.477 3 2 6.582 2 11c0 2.837 1.708 5.334 4.29 6.866L5.5 21l3.948-2.124C10.277 19.27 11.12 19.4 12 19.4c5.523 0 10-3.582 10-8.4S17.523 3 12 3z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
