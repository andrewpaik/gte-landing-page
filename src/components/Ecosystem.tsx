"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingParticles from "./FloatingParticles";

const fundingRounds = [
  { round: "Pre-Seed", amount: "$1.5M" },
  { round: "Seed", amount: "$6.9M" },
  { round: "Community (Echo)", amount: "$2.5M" },
  { round: "Series A", amount: "$15M", lead: "Paradigm" },
];

const investors = [
  "Paradigm",
  "Maven 11",
  "Wintermute",
  "Flow Traders",
  "Robot Ventures",
  "IMC Trading",
  "Alpen Capital",
  "CitizenX",
  "Kosmos Ventures",
  "Big Brain Holdings",
  "Karatage",
  "GSR",
  "MitonC",
  "Auros",
  "Manifold",
];

const angels = [
  { name: "Guy Young", title: "Founder, Ethena" },
  { name: "Max Resnick", title: "Anza" },
  { name: "Cobie", title: "Founder, Echo" },
];

const traders = [
  { name: "Wintermute", type: "Market Maker & Liquidity Provider" },
  { name: "Flow Traders", type: "Global Liquidity Provider" },
  { name: "IMC Trading", type: "Algorithmic Market Maker" },
  { name: "GSR", type: "Crypto Market Maker" },
  { name: "Auros", type: "Algorithmic Trading Firm" },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="relative overflow-hidden py-32" ref={ref}>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <FloatingParticles count={15} color="orange" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-orange uppercase">
            Ecosystem
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            $25M raised from the{" "}
            <span className="text-gradient-orange">best in crypto</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Backed by Paradigm and supported by the most active trading firms
            and builders in the industry. 700,000+ users on testnet.
          </p>
        </motion.div>

        {/* ─── FUNDING ROUNDS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-orange/40 to-transparent" />
            <h3 className="text-sm font-semibold tracking-widest text-orange uppercase">
              Funding
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-orange/40 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {fundingRounds.map((r, i) => (
              <motion.div
                key={r.round}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-5 text-center transition-all hover:border-orange/20"
              >
                <p className="text-2xl font-bold text-orange sm:text-3xl">
                  {r.amount}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {r.round}
                </p>
                {r.lead && (
                  <p className="mt-1 text-xs text-muted">Led by {r.lead}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── INVESTORS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
            <h3 className="text-sm font-semibold tracking-widest text-cyan uppercase">
              Funds &amp; Investors
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan/40 to-transparent" />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {investors.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                className="glass flex items-center justify-center rounded-xl p-4 text-center transition-all hover:border-cyan/20 hover:bg-cyan/5"
              >
                <span className="text-sm font-medium text-foreground/90">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── TRADERS / MARKET MAKERS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-orange/40 to-transparent" />
            <h3 className="text-sm font-semibold tracking-widest text-orange uppercase">
              Traders &amp; Market Makers
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-orange/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {traders.map((trader, i) => (
              <motion.div
                key={trader.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-orange/20 hover:bg-orange/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-sm font-bold text-orange">
                  {trader.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {trader.name}
                  </p>
                  <p className="text-xs text-muted">{trader.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── ANGELS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
            <h3 className="text-sm font-semibold tracking-widest text-cyan uppercase">
              Angel Investors
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {angels.map((angel, i) => (
              <motion.div
                key={angel.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-cyan/20 hover:bg-cyan/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange/20 to-cyan/20 text-sm font-bold text-foreground">
                  {angel.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {angel.name}
                  </p>
                  <p className="text-xs text-muted">{angel.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted">
            Founded by{" "}
            <span className="font-medium text-foreground/80">Matteo Lunghi</span>{" "}
            (ex-Palantir) and{" "}
            <span className="font-medium text-foreground/80">Enzo Coglitore</span>{" "}
            (ex-Alchemy Ventures). Team includes alumni from Palantir, GSR,
            Bitstamp, and AWS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
