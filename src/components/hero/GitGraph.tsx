import { useState } from "react";
import { clsx } from "clsx";
import { usePrefersReducedMotion } from "@/lib/motion";

type Node = { id: string; x: number; y: number; label?: string; tone?: "plain" | "active" };

const nodes: Node[] = [
  { id: "a", x: 60, y: 250 },
  { id: "b", x: 140, y: 250 },
  { id: "c", x: 155, y: 172, label: "feature/auth" },
  { id: "d", x: 240, y: 172 },
  { id: "e", x: 350, y: 128 },
  { id: "f", x: 490, y: 128, label: "main" },
  { id: "g", x: 600, y: 128 },
  { id: "h", x: 700, y: 168 },
  { id: "i", x: 760, y: 168, label: "refactor/api" },
  { id: "j", x: 840, y: 198, tone: "active" },
  { id: "k", x: 900, y: 220 },
];

const paths = [
  "M20 250 H150",
  "M150 250 C 200 250 200 172 260 172 C 320 172 300 128 360 128",
  "M60 315 H210 C 280 315 250 250 330 250",
  "M360 128 H620",
  "M620 128 C 680 128 660 168 720 168",
  "M720 168 C 790 168 800 198 850 198 L 910 222",
];

export function GitGraph({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <svg
      viewBox="0 0 960 380"
      className={clsx("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="line-fade" x1="0" x2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.02" />
          <stop offset="35%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0.06" />
        </linearGradient>
        <filter id="node-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((d, i) => (
        <path
          key={d}
          id={`branch-${i}`}
          d={d}
          fill="none"
          stroke="url(#line-fade)"
          strokeWidth="1.25"
        />
      ))}

      {!reduced &&
        [0, 3, 5].map((i, k) => (
          <circle key={i} r="2.6" fill="white" filter="url(#node-glow)">
            <animateMotion
              dur={`${7 + k * 2}s`}
              repeatCount="indefinite"
              begin={`${k * 1.8}s`}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#branch-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur={`${7 + k * 2}s`}
              repeatCount="indefinite"
              begin={`${k * 1.8}s`}
            />
          </circle>
        ))}

      {nodes.map((n) => {
        const active = n.tone === "active";
        const isHover = hovered === n.id;
        return (
          <g key={n.id}>
            {(active || isHover) && (
              <circle
                cx={n.x}
                cy={n.y}
                r={active ? 13 : 10}
                fill="white"
                opacity="0.12"
                className={active && !reduced ? "animate-pulse-node" : undefined}
                style={{ transformOrigin: `${n.x}px ${n.y}px` }}
              />
            )}
            <circle
              cx={n.x}
              cy={n.y}
              r={active ? 6.5 : 4.5}
              fill={active || isHover ? "white" : "var(--color-background)"}
              stroke="white"
              strokeOpacity={active || isHover ? 1 : 0.4}
              strokeWidth="1.4"
              filter={active || isHover ? "url(#node-glow)" : undefined}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer transition-all"
              style={{ pointerEvents: "all" }}
            />
            {n.label && (
              <g>
                <rect
                  x={n.x - 62}
                  y={n.y - 58}
                  width="124"
                  height="28"
                  rx="7"
                  fill="var(--color-surface)"
                  stroke="var(--color-border-strong)"
                />
                <text
                  x={n.x}
                  y={n.y - 39}
                  textAnchor="middle"
                  className="fill-muted-foreground font-mono"
                  style={{ fontSize: 11.5 }}
                >
                  {n.label}
                </text>
                <line
                  x1={n.x}
                  y1={n.y - 30}
                  x2={n.x}
                  y2={n.y - 8}
                  stroke="var(--color-border-strong)"
                />
              </g>
            )}
            {isHover && (
              <g>
                <rect
                  x={n.x - 74}
                  y={n.y + 14}
                  width="148"
                  height="34"
                  rx="7"
                  fill="var(--color-popover)"
                  stroke="var(--color-border-strong)"
                />
                <text
                  x={n.x}
                  y={n.y + 35}
                  textAnchor="middle"
                  className="fill-muted-foreground font-mono"
                  style={{ fontSize: 11 }}
                >
                  commit {n.id.toUpperCase()}9f2c1 · +142 −23
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}
