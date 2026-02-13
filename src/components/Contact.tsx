"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange/5 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-orange uppercase">
            Get Started
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to <span className="text-gradient-orange">trade</span>?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-muted">
            Join 700,000+ users already on the GTE testnet. Get notified when
            mainnet launches.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 sm:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-orange/50"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-orange/50"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
              Organization
            </label>
            <input
              type="text"
              placeholder="Fund, trading firm, or project"
              className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-orange/50"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-xs font-medium tracking-wider text-muted uppercase">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your trading needs..."
              className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-orange/50"
            />
          </div>

          <button
            type="submit"
            className="group relative mt-8 w-full overflow-hidden rounded-full bg-orange py-4 text-sm font-semibold text-background transition-all hover:shadow-[0_0_40px_rgba(255,120,23,0.4)]"
          >
            <span className="relative z-10">Get Early Access</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
