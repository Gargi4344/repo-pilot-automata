import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubMark } from "@/components/brand/Marks";
import { GitGraph } from "./GitGraph";
import { Card } from "@/components/ui/Card";
import { Check, Eye, Lock, Play, Shield, Sparkles, Code2, GitBranch } from "lucide-react";

const activity = [
  { name: "Coder", detail: "Implementing auth middleware", meta: "4 files changed", icon: Code2, pct: 62 },
  { name: "Tester", detail: "Running tests", meta: "142 passing", icon: Check, pct: 84 },
  { name: "Reviewer", detail: "Reviewing changes", meta: "No issues found", icon: Eye, pct: 40 },
  { name: "Planner", detail: "Analyzing codebase", meta: "7 tasks found", icon: GitBranch, pct: 26 },
];

const trust = [
  { label: "No direct push", icon: Lock },
  { label: "Isolated worktrees", icon: Shield },
  { label: "Human approved", icon: Eye },
  { label: "Never auto-merge", icon: GitBranch },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-10 h-[420px] opacity-70 md:opacity-100">
        <div className="hidden h-full w-full sm:block">
          <GitGraph />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-64 bg-[radial-gradient(ellipse_at_center,oklch(1_0_0/6%),transparent_70%)]" />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Autonomous by design
          </div>

          <h1 className="mt-7 text-[clamp(2.6rem,8vw,5.2rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-glow">
            Your AI software
            <br />
            engineer
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-[1.02rem] leading-relaxed text-muted-foreground">
            It reads your repository, finds work, writes code, tests it, and opens PRs —{" "}
            <span className="text-foreground/80">autonomously.</span>
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" aria-label="Connect your GitHub account">
              <GithubMark className="h-4.5 w-4.5" />
              Connect GitHub
            </Button>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">
                <Play className="h-4 w-4" />
                See how it works
              </Button>
            </a>
          </div>
        </div>

        <Card className="mt-14 overflow-hidden md:mt-20">
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-node" />
              Live activity
            </div>
            <span className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground">
              View all activity
            </span>
          </div>
          <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {activity.map((a) => (
              <div key={a.name} className="flex min-w-0 items-center gap-4 px-5 py-5">
                <RingIcon pct={a.pct}>
                  <a.icon className="h-4 w-4 text-foreground" />
                </RingIcon>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{a.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.detail}</p>
                  <p className="truncate font-mono text-[0.7rem] text-accent/80">{a.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-muted-foreground">
          <span className="font-mono tracking-[0.2em] uppercase">Trusted by developers</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          {trust.map((t) => (
            <span key={t.label} className="flex items-center gap-2">
              <t.icon className="h-3.5 w-3.5" />
              {t.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RingIcon({ pct, children }: { pct: number; children: React.ReactNode }) {
  const r = 21;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid h-13 w-13 shrink-0 place-items-center">
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" stroke="var(--color-border)" strokeWidth="1.5" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={`${(c * pct) / 100} ${c}`}
        />
      </svg>
      {children}
    </div>
  );
}
