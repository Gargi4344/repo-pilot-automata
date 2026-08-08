import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardLabel } from "@/components/ui/Card";
import { usePrefersReducedMotion, useInView } from "@/lib/motion";
import { clsx } from "clsx";

type Line = { tone: "cmd" | "ok" | "info" | "warn" | "dim"; text: string };

const lines: Line[] = [
  { tone: "cmd", text: "repopilot connect github.com/acme/checkout" },
  { tone: "dim", text: "cloning · 1,248 files · 84k LOC indexed" },
  { tone: "info", text: "planner: 7 candidate tasks ranked by impact" },
  { tone: "cmd", text: "repopilot run --task rotate-session-tokens" },
  { tone: "dim", text: "coder: editing src/auth/session.ts (+142 −23)" },
  { tone: "ok", text: "tester: 142 passing · 0 failing · 3.8s" },
  { tone: "warn", text: "reviewer: 1 suggestion — extract token TTL constant" },
  { tone: "dim", text: "coder: applied reviewer suggestion" },
  { tone: "ok", text: "commit a9f2c1 feat(auth): rotate session tokens" },
  { tone: "info", text: "draft PR #482 opened · awaiting human review" },
];

export function LiveTerminal() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setCount(lines.length);
      return;
    }
    const id = setInterval(() => {
      setCount((c) => (c >= lines.length ? c : c + 1));
    }, 700);
    return () => clearInterval(id);
  }, [inView, reduced]);

  return (
    <section className="section-seam py-20 md:py-28" id="terminal">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <CardLabel tone="muted" className="justify-center">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Live logs
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Fully auditable, line by line
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every decision, edit and test run is streamed as a log you can replay.
          </p>
        </div>

        <Card ref={undefined} className="mt-14 overflow-hidden bg-background/90">
          <div className="flex items-center gap-3 border-b border-border bg-surface/60 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            </div>
            <p className="min-w-0 flex-1 truncate text-center font-mono text-[0.7rem] text-muted-foreground">
              repopilot — acme/checkout — agent runtime
            </p>
            <span className="font-mono text-[0.65rem] tracking-widest text-accent uppercase">
              live
            </span>
          </div>

          <div
            ref={ref}
            className="min-h-[340px] space-y-2 px-5 py-6 font-mono text-[0.78rem] leading-relaxed sm:px-7 sm:text-[0.83rem]"
          >
            {lines.slice(0, count).map((l, i) => (
              <p key={i} className="animate-rise">
                <span className="mr-3 text-muted-foreground/40 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.tone === "cmd" && <span className="mr-2 text-accent">❯</span>}
                <span
                  className={clsx(
                    l.tone === "cmd" && "text-foreground",
                    l.tone === "ok" && "text-accent",
                    l.tone === "info" && "text-info",
                    l.tone === "warn" && "text-warn",
                    l.tone === "dim" && "text-muted-foreground",
                  )}
                >
                  {l.text}
                </span>
              </p>
            ))}
            {count < lines.length && (
              <p>
                <span className="mr-3 text-muted-foreground/40 select-none">
                  {String(count + 1).padStart(2, "0")}
                </span>
                <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-accent animate-blink" />
              </p>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
}
