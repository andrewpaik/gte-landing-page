"use client";

export default function FloatingParticles({ count = 20, color = "orange" }: { count?: number; color?: "orange" | "cyan" | "mixed" }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const c = color === "mixed" ? (i % 2 === 0 ? "orange" : "cyan") : color;
    return {
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 4,
      duration: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 10}s`,
      driftDuration: `${3 + Math.random() * 4}s`,
      color: c === "orange" ? "#ff7817" : "#97e4f2",
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `float-up ${p.duration} ${p.delay} linear infinite, drift ${p.driftDuration} ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
