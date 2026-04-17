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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* key 변경으로 active될 때마다 animation 재시작 */}
          <div
            key={i === current ? `${src}-on` : `${src}-off`}
            className="absolute inset-0"
            style={{ animation: i === current ? "kenBurns 7s ease-out forwards" : "none" }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}
      {/* 텍스트 가독성을 위한 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/60" style={{ zIndex: 2 }} />
    </div>
  );
}
