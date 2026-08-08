import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubMark, RepoPilotMark } from "@/components/brand/Marks";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Safety", href: "#safety" },
  { label: "GitHub", href: "#pull-request" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled && "border-b border-border bg-background/80 backdrop-blur-xl",
      )}
    >
      <Container size="wide">
        <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6 md:h-20">

          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <RepoPilotMark className="h-6 w-6 shrink-0 text-foreground" />
            <span className="truncate text-[1.05rem] font-semibold tracking-tight">RepoPilot</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 justify-self-end">
            <Button size="sm" className="hidden sm:inline-flex" variant="secondary">
              <GithubMark className="h-4 w-4" />
              Connect GitHub
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <Container size="wide">
            <ul className="flex flex-col py-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-muted-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-4">
                <Button size="sm" variant="secondary" className="w-full">
                  <GithubMark className="h-4 w-4" />
                  Connect GitHub
                </Button>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
