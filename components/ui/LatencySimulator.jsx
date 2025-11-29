"use client";
import { useState, useEffect } from "react";

const LatencySimulator = ({ min = 10, max = 70, interval = 2500, prefix = "LATENCY: ", suffix = "ms", className = "" }) => {
  const [latency, setLatency] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomLatency = Math.floor(Math.random() * (max - min + 1)) + min;
      setLatency(randomLatency);
    }, interval);

    return () => clearInterval(timer);
  }, [min, max, interval]);

  return (
    <span className={className}>
      {prefix}{latency}{suffix}
    </span>
  );
};

export default LatencySimulator;
