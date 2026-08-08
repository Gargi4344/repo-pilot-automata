import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { LiveCommit } from "@/components/sections/LiveCommit";
import { AgentNetwork } from "@/components/sections/AgentNetwork";
import { RepositoryRadar } from "@/components/sections/RepositoryRadar";
import { Workflow } from "@/components/sections/Workflow";
import { LiveTerminal } from "@/components/sections/LiveTerminal";
import { PullRequestPreview } from "@/components/sections/PullRequestPreview";
import { Safety } from "@/components/sections/Safety";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA, Footer } from "@/components/sections/FinalCTA";

const title = "RepoPilot — Autonomous AI Software Engineer for GitHub";
const description =
  "RepoPilot connects to your GitHub repo, understands the codebase, writes code, runs tests, commits, and opens draft pull requests for human review.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="sr-only">RepoPilot — autonomous AI software engineer for GitHub</h1>
        <Hero />
        <LiveCommit />
        <AgentNetwork />
        <RepositoryRadar />
        <Workflow />
        <LiveTerminal />
        <PullRequestPreview />
        <Safety />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
