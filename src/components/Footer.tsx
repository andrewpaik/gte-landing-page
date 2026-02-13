"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/gte-logo_whi.svg"
              alt="GTE"
              width={60}
              height={24}
              className="h-5 w-auto opacity-50"
            />
            <span className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Liquid Labs Inc. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Docs", "Status"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-medium tracking-wider text-muted uppercase transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
