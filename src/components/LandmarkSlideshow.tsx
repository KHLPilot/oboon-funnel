"use client";

import Image from "next/image";

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

// 끊김 없는 루프를 위해 2배로 복제
const STRIP = [...IMAGES, ...IMAGES];

export default function LandmarkSlideshow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 가로 스크롤 스트립 */}
      <div
        className="absolute top-0 left-0 h-full flex"
        style={{ animation: "scrollStrip 28s linear infinite" }}
      >
        {STRIP.map((src, i) => (
          <div
            key={i}
            className="relative h-full flex-shrink-0"
            style={{ width: "56vw" }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="56vw"
              priority={i < 3}
            />
          </div>
        ))}
      </div>

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
