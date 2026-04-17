"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slot: string;
  className?: string;
}

const AD_CLIENT = "ca-pub-7703189520308574";

export default function AdUnit({ slot, className = "" }: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current || process.env.NODE_ENV !== "production") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // adsbygoogle 로드 전 호출 무시
    }
  }, [slot]);

  if (!slot) return null;

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-xl text-gray-400 text-xs ${className}`}
        style={{ minHeight: 100 }}
      >
        광고 영역 (개발 환경)
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
