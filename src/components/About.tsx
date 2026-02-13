"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "$25M", label: "Total Raised" },
  { value: "700K+", label: "Testnet Users" },
  { value: "100K", label: "TPS on MegaETH" },
  { value: "24/7", label: "Global Markets" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-sm font-medium tracking-widest text-orange uppercase">
              The Thesis
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              On-chain trading at{" "}
              <span className="text-gradient-orange">CEX speed</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              GTE is betting that the future of trading is fully on-chain — but
              with centralized exchange performance. We combine the speed traders
              expect from the largest CEXs with the self-custody and transparency
              that only DeFi can offer.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              Built exclusively on MegaETH, GTE is a hyper-optimized exchange
              designed for high-throughput, low-latency trading. Trade crypto,
              equities, and commodities from a single margin account — all fully
              non-custodial.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Multiple sequencers colocated with major venues of price discovery
              around the world — Tokyo for crypto, New Jersey for equities —
              unlock the best possible prices for every trader.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass group rounded-2xl p-6 transition-all hover:border-orange/20"
              >
                <p className="mb-1 text-3xl font-bold text-orange sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
