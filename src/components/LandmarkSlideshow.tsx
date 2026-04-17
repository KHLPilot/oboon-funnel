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
    }, 4000);
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
            transition: "opacity 1.8s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* 상하 그라디언트 오버레이 */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
