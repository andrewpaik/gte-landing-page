"use client";

const pairs = [
  { symbol: "BTC/USDT", price: "97,241.50", change: "+2.41%" },
  { symbol: "ETH/USDT", price: "3,312.80", change: "+1.87%" },
  { symbol: "SOL/USDT", price: "198.42", change: "+5.12%" },
  { symbol: "ARB/USDT", price: "1.23", change: "-0.34%" },
  { symbol: "AVAX/USDT", price: "42.15", change: "+3.08%" },
  { symbol: "LINK/USDT", price: "18.73", change: "+1.22%" },
  { symbol: "MATIC/USDT", price: "0.94", change: "-0.71%" },
  { symbol: "OP/USDT", price: "3.45", change: "+4.56%" },
];

export default function Ticker() {
  const items = [...pairs, ...pairs];

  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface/50 py-3">
      <div className="ticker-scroll flex w-max gap-8">
        {items.map((pair, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-heading text-sm font-bold tracking-wider text-foreground">
              {pair.symbol}
            </span>
            <span className="font-mono text-sm text-muted">{pair.price}</span>
            <span
              className={`font-mono text-xs font-medium ${
                pair.change.startsWith("+")
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {pair.change}
            </span>
            <span className="text-border">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
