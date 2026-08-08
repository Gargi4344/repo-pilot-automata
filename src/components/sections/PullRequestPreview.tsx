import { Container } from "@/components/ui/Container";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GithubMark, PullRequestMark } from "@/components/brand/Marks";
import { Check, FileCode2, MessageSquare, Plus, Minus } from "lucide-react";

const diff = [
  { type: "meta", text: "src/auth/session.ts" },
  { type: "ctx", text: "export async function createSession(userId: string) {" },
  { type: "del", text: "  const token = randomToken(32);" },
  { type: "add", text: "  const token = randomToken(48);" },
  { type: "add", text: "  const rotatesAt = Date.now() + SESSION_TTL_MS;" },
  { type: "ctx", text: "  await store.put(token, { userId, rotatesAt });" },
  { type: "ctx", text: "  return { token, rotatesAt };" },
  { type: "ctx", text: "}" },
];

const checks = [
  { label: "typecheck", detail: "passed in 6s" },
  { label: "unit tests", detail: "142 passing" },
  { label: "lint", detail: "no warnings" },
  { label: "self-review", detail: "no blocking issues" },
];

export function PullRequestPreview() {
  return (
    <section className="section-seam py-20 md:py-28" id="pull-request">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <CardLabel tone="muted" className="justify-center">
            <span className="h-1 w-1 rounded-full bg-violet" />
            Ready to commit
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            It ends where your review begins
          </h2>
          <p className="mt-4 text-muted-foreground">
            RepoPilot never merges. It hands you a clean draft PR with the full reasoning trail.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <Card glow="violet" className="overflow-hidden">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <PullRequestMark className="h-4 w-4 shrink-0 text-violet" />
                <p className="truncate text-sm font-medium">
                  feat(auth): rotate session tokens{" "}
                  <span className="text-muted-foreground">#482</span>
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[0.62rem] tracking-widest text-muted-foreground uppercase">
                draft
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border px-5 py-3 font-mono text-[0.7rem] text-muted-foreground">
              <span>repopilot wants to merge 3 commits into main</span>
              <span className="flex items-center gap-1 text-accent">
                <Plus className="h-3 w-3" />
                142
              </span>
              <span className="flex items-center gap-1 text-destructive">
                <Minus className="h-3 w-3" />
                23
              </span>
              <span className="flex items-center gap-1">
                <FileCode2 className="h-3 w-3" />4 files
              </span>
            </div>

            <div className="overflow-x-auto px-2 py-3 font-mono text-[0.75rem] leading-relaxed">
              {diff.map((l, i) => (
                <div
                  key={i}
                  className={
                    l.type === "meta"
                      ? "px-3 py-1.5 text-muted-foreground/70"
                      : l.type === "add"
                        ? "bg-accent/8 px-3 py-0.5 text-accent"
                        : l.type === "del"
                          ? "bg-destructive/8 px-3 py-0.5 text-destructive"
                          : "px-3 py-0.5 text-muted-foreground"
                  }
                >
                  <span className="mr-3 select-none opacity-50">
                    {l.type === "add" ? "+" : l.type === "del" ? "−" : l.type === "meta" ? "≡" : " "}
                  </span>
                  {l.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-border px-5 py-4">
              <Button size="sm" variant="accent">
                <Check className="h-4 w-4" />
                Approve
              </Button>
              <Button size="sm" variant="secondary">
                <MessageSquare className="h-4 w-4" />
                Request changes
              </Button>
              <span className="font-mono text-[0.68rem] text-muted-foreground">
                merge requires human approval
              </span>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2">
              <GithubMark className="h-4 w-4 text-muted-foreground" />
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                checks
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {checks.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm">{c.label}</span>
                  <span className="shrink-0 font-mono text-[0.68rem] text-muted-foreground">
                    {c.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-md border border-border bg-surface/60 p-4">
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-violet uppercase">
                agent summary
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                Session tokens were 32 bytes and never rotated. Increased entropy, added a TTL
                constant, and covered rotation with two regression tests.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
