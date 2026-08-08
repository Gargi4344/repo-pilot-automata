import { Container } from "@/components/ui/Container";
import { CardLabel } from "@/components/ui/Card";
import { useInView } from "@/lib/motion";
import { clsx } from "clsx";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Grant read + branch access to a repository. No direct push permission, ever.",
    meta: "oauth · scoped",
  },
  {
    n: "02",
    title: "Understand",
    body: "The codebase is indexed into a semantic map of modules, tests, owners and churn.",
    meta: "1,248 files indexed",
  },
  {
    n: "03",
    title: "Identify work",
    body: "Candidate tasks are ranked by impact, risk and blast radius before anything is written.",
    meta: "7 tasks ranked",
  },
  {
    n: "04",
    title: "Write code",
    body: "Changes land in an isolated worktree on a dedicated branch, one task at a time.",
    meta: "+142 −23",
  },
  {
    n: "05",
    title: "Test & self-review",
    body: "Types, unit and integration suites run, then the diff is reviewed against your conventions.",
    meta: "142 passing",
  },
  {
    n: "06",
    title: "Draft pull request",
    body: "A described, commit-clean draft PR waits for a human to approve and merge.",
    meta: "PR #482 draft",
  },
];

export function Workflow() {
  return (
    <section className="section-seam py-20 md:py-28" id="how-it-works">
      <Container>
        <div className="max-w-2xl">
          <CardLabel tone="muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            How it works
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Six steps from repo to pull request
          </h2>
        </div>

        <ol className="relative mt-16 border-l border-border pl-6 sm:pl-10">
          {steps.map((s, i) => (
            <Step key={s.n} {...s} last={i === steps.length - 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  meta,
  last,
}: {
  n: string;
  title: string;
  body: string;
  meta: string;
  last: boolean;
}) {
  const { ref, inView } = useInView<HTMLLIElement>(0.5);
  return (
    <li
      ref={ref}
      className={clsx(
        "relative transition-all duration-700",
        last ? "pb-0" : "pb-12 sm:pb-16",
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-30",
      )}
    >
      <span
        className={clsx(
          "absolute top-1.5 -left-[27px] h-2.5 w-2.5 rounded-full border transition-colors duration-500 sm:-left-[43px]",
          inView ? "border-accent bg-accent shadow-[0_0_18px_2px_var(--color-accent)]" : "border-border-strong bg-background",
        )}
      />
      <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8">
        <span className="font-mono text-sm text-muted-foreground/60">{n}</span>
        <div className="min-w-0">
          <h3 className="text-lg font-medium tracking-tight sm:text-xl">{title}</h3>
          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{body}</p>
          <p className="mt-3 font-mono text-[0.7rem] tracking-[0.14em] text-accent/80 uppercase">
            {meta}
          </p>
        </div>
      </div>
    </li>
  );
}
