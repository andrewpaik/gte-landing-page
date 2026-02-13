"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpeedLines from "./SpeedLines";

const features = [
  {
    metric: "100K TPS",
    title: "MegaETH Throughput",
    desc: "Built on MegaETH's EVM-compatible chain — designed for 100,000 transactions per second.",
  },
  {
    metric: "Sub-ms",
    title: "Order Matching",
    desc: "Hyper-optimized matching engine co-located with liquidity venues across the globe.",
  },
  {
    metric: "On-Chain",
    title: "Full Transparency",
    desc: "Every order, fill, and settlement is verifiable on-chain. No black boxes.",
  },
];

export default function Speed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="relative overflow-hidden py-32" ref={ref}>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <SpeedLines />
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-cyan uppercase">
            Technology
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Speed is the{" "}
            <span className="text-gradient-cyan">product</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            GTE V2 is a hyper-optimized exchange with sequencers geo-located in
            Tokyo and New Jersey — co-located with the world&apos;s major venues
            of price discovery.
          </p>
        </motion.div>

        {/* Gauge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="animated-border relative mx-auto mb-16 max-w-3xl rounded-3xl p-8 sm:p-12"
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Animated gauge */}
            <div className="relative mb-8 h-40 w-80">
              <svg viewBox="0 0 320 160" className="h-full w-full">
                <path
                  d="M 40 150 A 120 120 0 0 1 280 150"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 40 150 A 120 120 0 0 1 280 150"
                  fill="none"
                  stroke="url(#gaugeGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 0.95 } : {}}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#97e4f2" />
                    <stop offset="50%" stopColor="#ff7817" />
                    <stop offset="100%" stopColor="#ff4400" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="text-5xl font-bold text-orange"
                >
                  100K
                </motion.span>
                <span className="text-xs tracking-wider text-muted uppercase">
                  Transactions per Second
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-foreground">
                    {f.metric}
                  </p>
                  <p className="text-xs font-semibold tracking-wider text-orange uppercase">
                    {f.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
