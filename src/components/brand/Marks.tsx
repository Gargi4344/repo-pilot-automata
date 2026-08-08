export function RepoPilotMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* autopilot needle */}
      <path d="M16 4.5 L21.5 26 L16 21.5 L10.5 26 Z" opacity="0.95" />
      {/* git branch arcs */}
      <path d="M8 11a8.5 8.5 0 0 0 0 12" opacity="0.45" />
      <path d="M24 11a8.5 8.5 0 0 1 0 12" opacity="0.45" />
      <circle cx="8" cy="11" r="1.6" />
      <circle cx="24" cy="23" r="1.6" />
    </svg>
  );
}

export function GithubMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.98 3.22 9.2 7.7 10.7.56.1.77-.25.77-.55v-1.9c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 1.73 2.63 1.23 3.27.94.1-.73.39-1.23.71-1.51-2.5-.29-5.13-1.26-5.13-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.45.11-3 0 0 .94-.3 3.09 1.16a10.6 10.6 0 0 1 5.62 0c2.14-1.46 3.08-1.16 3.08-1.16.62 1.55.23 2.71.12 3 .72.79 1.15 1.8 1.15 3.04 0 4.35-2.64 5.3-5.15 5.58.4.36.76 1.06.76 2.14v3.17c0 .3.2.66.78.55 4.47-1.5 7.69-5.72 7.69-10.7C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

export function PullRequestMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="6.5" cy="5.5" r="2.2" />
      <circle cx="6.5" cy="18.5" r="2.2" />
      <circle cx="17.5" cy="18.5" r="2.2" />
      <path d="M6.5 7.7v8.6" />
      <path d="M17.5 16.3V9.5a2.5 2.5 0 0 0-2.5-2.5h-3.6" />
      <path d="m13.3 4.9-1.9 2.1 1.9 2.1" />
    </svg>
  );
}
