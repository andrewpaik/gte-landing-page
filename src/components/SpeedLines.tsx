"use client";

export default function SpeedLines() {
  const lines = Array.from({ length: 12 }, (_, i) => ({
    top: `${8 + i * 8}%`,
    width: `${100 + Math.random() * 200}px`,
    duration: `${2 + Math.random() * 3}s`,
    delay: `${Math.random() * 5}s`,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((line, i) => (
        <div
          key={i}
          className="speed-line"
          style={{
            top: line.top,
            width: line.width,
            opacity: line.opacity,
            ["--duration" as string]: line.duration,
            ["--delay" as string]: line.delay,
          }}
        />
      ))}
    </div>
  );
}
