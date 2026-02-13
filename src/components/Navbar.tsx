"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full px-6 py-3">
        <a href="#" className="flex items-center">
          <Image
            src="/images/gte-logo_ora.svg"
            alt="GTE"
            width={80}
            height={32}
            className="h-7 w-auto"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-orange px-5 py-2 text-sm font-semibold text-background transition-all hover:shadow-[0_0_20px_rgba(255,120,23,0.4)] md:block"
        >
          Launch App
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-20 left-4 right-4 flex flex-col gap-2 rounded-2xl p-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-background"
          >
            Launch App
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
