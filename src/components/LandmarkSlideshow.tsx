"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  "/images/landmarks/upward-1200.jpg",
  "/images/landmarks/stable-1200.jpg",
  "/images/landmarks/sensory-1200.jpg",
  "/images/landmarks/analytic-1200.jpg",
  "/images/landmarks/practical-1200.jpg",
  "/images/landmarks/opportunity-1200.jpg",
  "/images/landmarks/expansive-1200.jpg",
  "/images/landmarks/planner-1200.jpg",
];

export default function LandmarkSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % IMAGES.length;
      setPrev(current);
      setCurrent(next);
      setTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, 1200);
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 이전 이미지 (페이드아웃) */}
      {prev !== null && (
        <div
          className="absolute inset-0"
          style={{
            opacity: transitioning ? 0 : 1,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 1,
          }}
        >
          <Image
            src={IMAGES[prev]}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* 현재 이미지 (페이드인 + 줌) */}
      <div
        key={current}
        className="absolute inset-0"
        style={{
          opacity: 1,
          zIndex: 2,
          animation: "slowZoom 4s ease-out forwards",
        }}
      >
        <Image
          src={IMAGES[current]}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={current === 0}
        />
      </div>

      {/* 하단 인디케이터 도트 */}
      <div
        className="absolute bottom-20 left-0 right-0 flex justify-center gap-1.5"
        style={{ zIndex: 4 }}
      >
        {IMAGES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              backgroundColor: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* 그라디언트 오버레이 — 상하 */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 3,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
