"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SpeedLines from "./SpeedLines";
import FloatingParticles from "./FloatingParticles";
import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/GTE_Images-21.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        <SpeedLines />
        <FloatingParticles count={25} color="mixed" />

        {/* Pulsing gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-orange blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/5 px-5 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            <span className="text-xs font-medium tracking-widest text-orange uppercase">
              Built on MegaETH
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl md:text-8xl"
          >
            Trade Anything.
            <br />
            <span className="text-gradient-orange">Anywhere.</span>{" "}
            <span className="text-gradient-cyan">Anytime.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mb-4 max-w-3xl text-lg font-medium text-foreground/80 sm:text-xl"
          >
            The Global Token Exchange
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted"
          >
            CEX performance meets DeFi transparency. Fully on-chain trading with
            sub-millisecond execution, self-custody, and complete transparency —
            powered by MegaETH.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-orange px-8 py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(255,120,23,0.5)]"
            >
              <span className="relative z-10">Start Trading</span>
              <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:border-orange/30 hover:bg-orange/5"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-orange/30 p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-orange" />
          </motion.div>
        </motion.div>
      </div>

      <Ticker />
    </section>
  );
}
