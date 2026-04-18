"use client";

import { useEffect } from "react";

export default function CountTracker({ testId }: { testId: string }) {
  useEffect(() => {
    fetch("/api/counts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: testId }),
    }).catch(() => {});
  // 마운트 1회만 실행
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
