import { Container } from "@/components/ui/Container";
import { CardLabel } from "@/components/ui/Card";
import { Brain, Code2, TestTube2, Eye } from "lucide-react";
import { clsx } from "clsx";

const agents = [
  {
    id: "planner",
    name: "Planner",
    icon: Brain,
    task: "Scans the repo, ranks issues, drafts a plan",
    output: "7 tasks queued",
    pos: "md:col-start-1 md:row-start-1",
  },
  {
    id: "coder",
    name: "Coder",
    icon: Code2,
    task: "Writes the patch in an isolated worktree",
    output: "4 files changed",
    pos: "md:col-start-3 md:row-start-1 md:mt-16",
  },
  {
    id: "tester",
    name: "Tester",
    icon: TestTube2,
    task: "Runs unit, type and integration checks",
    output: "142 passing",
    pos: "md:col-start-1 md:row-start-2 md:mb-10",
  },
  {
    id: "reviewer",
    name: "Reviewer",
    icon: Eye,
    task: "Self-reviews the diff before humans do",
    output: "0 blocking issues",
    pos: "md:col-start-3 md:row-start-2 md:mt-4",
  },
];

export function AgentNetwork() {
  return (
    <section className="section-seam relative overflow-hidden py-20 md:py-28" id="agents">
      <div className="pointer-events-none absolute inset-0 grid-faint opacity-25" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <CardLabel tone="muted" className="justify-center">
            <span className="h-1 w-1 rounded-full bg-violet" />
            Agent mesh
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Four specialists, one Git history
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each agent owns one job and hands off through commits — not chat messages.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-x-14">
          <svg
            viewBox="0 0 800 400"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden="true"
          >
            {[
              "M180 110 C 300 110 320 200 400 200",
              "M620 130 C 500 130 480 200 400 200",
              "M180 300 C 300 300 320 200 400 200",
              "M620 290 C 500 290 480 200 400 200",
            ].map((d, i) => (
              <g key={d}>
                <path d={d} fill="none" stroke="var(--color-border-strong)" strokeWidth="1" />
                <circle r="2.4" fill="var(--color-violet)">
                  <animateMotion dur={`${4 + i}s`} repeatCount="indefinite" path={d} />
                </circle>
              </g>
            ))}
          </svg>

          {agents.slice(0, 2).map((a) => (
            <AgentCard key={a.id} {...a} />
          ))}

          <div className="order-first md:order-none md:col-start-2 md:row-span-2 md:row-start-1">
            <div className="relative mx-auto grid aspect-square w-full max-w-[220px] place-items-center rounded-full border border-border-strong bg-surface/60 backdrop-blur">
              <div className="absolute inset-4 rounded-full border border-dashed border-border animate-orbit-slow" />
              <div className="text-center">
                <p className="font-mono text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                  orchestrator
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-tight">RepoPilot</p>
                <p className="mt-1 font-mono text-[0.65rem] text-accent">runtime · active</p>
              </div>
            </div>
          </div>

          {agents.slice(2).map((a) => (
            <AgentCard key={a.id} {...a} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function AgentCard({
  name,
  icon: Icon,
  task,
  output,
  pos,
}: {
  name: string;
  icon: typeof Brain;
  task: string;
  output: string;
  pos: string;
}) {
  return (
    <div
      className={clsx(
        "group relative rounded-lg border border-border bg-card/85 p-5 backdrop-blur transition-colors hover:border-border-strong",
        pos,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface-2">
          <Icon className="h-4 w-4" />
        </span>
        <p className="min-w-0 truncate font-mono text-[0.72rem] tracking-[0.2em] uppercase">
          {name}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{task}</p>
      <p className="mt-3 font-mono text-[0.7rem] text-accent/85">{output}</p>
      <span className="absolute top-5 right-5 h-1.5 w-1.5 rounded-full bg-violet animate-pulse-node" />
    </div>
  );
}
