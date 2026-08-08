import { Container } from "@/components/ui/Container";
import { Card, CardLabel } from "@/components/ui/Card";
import { GitBranch, Lock, ScrollText, ShieldCheck, Undo2, UserCheck } from "lucide-react";

const guarantees = [
  {
    icon: Lock,
    title: "No direct push",
    body: "RepoPilot has no write access to protected branches. It only creates its own branches.",
  },
  {
    icon: UserCheck,
    title: "Human in the loop",
    body: "Every change lands as a draft PR. A human approves and merges — always.",
  },
  {
    icon: GitBranch,
    title: "Isolated worktrees",
    body: "Each task runs in its own sandboxed checkout so failures never touch your tree.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    body: "Plans, edits, test output and self-reviews are logged and replayable per run.",
  },
  {
    icon: Undo2,
    title: "Reversible by default",
    body: "Close the PR and nothing remains. No hidden state, no lingering branches.",
  },
  {
    icon: ShieldCheck,
    title: "Scoped credentials",
    body: "Least-privilege OAuth scopes, per-repo opt-in, and revocable in one click.",
  },
];

export function Safety() {
  return (
    <section className="section-seam py-20 md:py-28" id="safety">
      <Container>
        <div className="max-w-2xl">
          <CardLabel tone="muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Safety model
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Autonomy with hard boundaries
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Autonomous does not mean unsupervised. RepoPilot is constrained by design.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <Card
              key={g.title}
              className="group p-5 transition-colors hover:border-border-strong"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface-2">
                <g.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-[0.98rem] font-medium tracking-tight">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
