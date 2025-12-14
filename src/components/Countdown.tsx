"use client";
import { useEffect, useState } from "react";

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, sec };
}

export default function Countdown({ date }: { date: string }) {
  const [t, setT] = useState(diff(new Date(date)));
  useEffect(() => {
    const id = setInterval(() => setT(diff(new Date(date))), 1000);
    return () => clearInterval(id);
  }, [date]);
  return (
    <div className="flex gap-4">
      {(["d", "h", "m", "sec"] as const).map((k) => (
        <div key={k} className="flex flex-col items-center">
          <div className="min-w-16 rounded-lg border border-charcoal bg-background px-4 py-2 text-offwhite [animation:bounce-neon_2.2s_ease-in-out_infinite]">
            {t[k].toString().padStart(2, "0")}
          </div>
          <span className="mt-1 text-ash">{k.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}
