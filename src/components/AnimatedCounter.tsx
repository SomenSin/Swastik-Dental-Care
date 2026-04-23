"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease out expo for a premium feel
      const easeOutExpo = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentCount = easeOutExpo * end;

      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
