import { Container } from "@/components/ui/Container";
import { Card, CardLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { clsx } from "clsx";

const tiers = [
  {
    name: "Solo",
    price: "$0",
    cadence: "/ month",
    blurb: "For one repository and one engineer.",
    features: ["1 repository", "20 agent runs / month", "Draft PRs", "Community support"],
    cta: "Start free",
    variant: "secondary" as const,
  },
  {
    name: "Team",
    price: "$79",
    cadence: "/ month",
    blurb: "Continuous autonomous engineering for a squad.",
    features: [
      "10 repositories",
      "Unlimited agent runs",
      "Custom conventions & guardrails",
      "Full audit log export",
      "Priority support",
    ],
    cta: "Connect GitHub",
    variant: "primary" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "Self-hosted runtime and compliance controls.",
    features: ["Unlimited repos", "Self-hosted agents", "SSO / SCIM", "SOC 2 & DPA", "Dedicated SE"],
    cta: "Talk to us",
    variant: "outline" as const,
  },
];

export function Pricing() {
  return (
    <section className="section-seam py-20 md:py-28" id="pricing">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <CardLabel tone="muted" className="justify-center">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Pricing
          </CardLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em]">
            Pay for merged work, not seats
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              glow={t.featured ? "accent" : "none"}
              className={clsx("flex flex-col p-6", t.featured && "lg:-mt-4 lg:pb-8")}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <p className="truncate font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                  {t.name}
                </p>
                {t.featured && (
                  <span className="shrink-0 rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[0.6rem] tracking-widest text-accent uppercase">
                    popular
                  </span>
                )}
              </div>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-[-0.03em]">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={t.variant} className="mt-7 w-full">
                {t.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
