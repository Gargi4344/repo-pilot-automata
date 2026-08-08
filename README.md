# RepoPilot Launchpad

Build a premium, production-quality landing page for a product called:

REPOPILOT

RepoPilot is an autonomous AI software engineer that connects to a user's GitHub repository, understands the codebase, identifies useful engineering work, writes code, runs tests, creates commits, and prepares draft pull requests for human review.

I am attaching multiple reference images for the landing page.

IMPORTANT:
The attached images are VISUAL REFERENCES ONLY.

DO NOT:
- Put the images directly into the website
- Use screenshots as backgrounds
- Create a page that simply displays the images
- Copy unrelated design elements from the images
- Replace interactive UI with static images

Instead, RECREATE the designs as real React components using HTML, CSS, SVG, and animations.

The final implementation should visually match the reference images as closely as possible while making the interface fully responsive and interactive.

==================================================
TECH STACK — MUST FOLLOW
==================================================

Use exactly:

- React 19
- TypeScript
- Vite
- react-router-dom v7
- Tailwind CSS v4
- @tailwindcss/vite
- CSS-first Tailwind configuration using @theme
- NO tailwind.config.js
- lucide-react for interface icons
- clsx for conditional class names

Use hand-rolled UI primitives in:

src/components/ui/

Create/reuse:

- Button
- buttonVariants
- Card
- Container

Use a shadcn/ui-inspired architecture, but DO NOT install Radix UI unless absolutely necessary.

Do not introduce unnecessary UI libraries.

==================================================
DESIGN DIRECTION
==================================================

The entire website must follow a:

BLACK + WHITE + SUBTLE ACCENT

visual identity.

Primary background:
near-black / pure black.

Primary text:
white.

Secondary text:
muted gray.

Use accent colors VERY selectively for:
- active Git nodes
- successful tests
- agent status
- commit activity
- important interactive states

Do not turn the website into a colorful neon dashboard.

The overall feeling should be:

- premium
- minimal
- technical
- futuristic
- sophisticated
- developer-focused
- cinematic
- high-end infrastructure product

Think:

Linear
Vercel
Raycast
GitHub
Cursor

but with a completely original RepoPilot identity.

Avoid:
- generic AI gradients
- cartoon robots
- excessive glassmorphism
- excessive rounded cards
- excessive colors
- huge amounts of text
- generic SaaS templates

Whitespace is extremely important.

==================================================
BRAND
==================================================

Product name:

RepoPilot

Tagline:

Your repository. On autopilot.

The logo should be a custom minimal Git-inspired symbol.

DO NOT use a generic robot logo.

Create the logo using inline SVG.

The logo should communicate:

Git branches + navigation/autopilot + engineering.

GitHub does not have a lucide-react brand icon.

Therefore:

DO NOT import Github from lucide-react.

Instead create a clean hand-drawn inline SVG GitHub mark where needed.

==================================================
LANDING PAGE STRUCTURE
==================================================

Build the landing page as a sequence of visually connected sections.

The sections should feel like ONE continuous story.

Do not make every section look like an independent SaaS card grid.

The user should visually understand:

GitHub repository
        ↓
RepoPilot
        ↓
AI agents
        ↓
Code
        ↓
Tests
        ↓
Commit
        ↓
Draft PR
        ↓
Human review

==================================================
SECTION 1 — HERO
==================================================

Use the attached hero reference image as the primary visual reference.

The hero should be black/dark with white typography.

Navigation:

RepoPilot logo
How it works
Safety
GitHub
Pricing
Docs
Connect GitHub

Hero messaging:

YOUR AI SOFTWARE ENGINEER

Supporting text:

It reads your repository, finds work, writes code, tests it, and opens PRs — autonomously.

Primary CTA:

Connect GitHub

Secondary CTA:

See how it works

The hero background should contain a subtle animated Git branch graph.

The graph should NOT be a static image.

Build it with SVG.

Features:

- Git branch lines
- commit nodes
- subtle glow
- active node
- branch labels
- animated commit particle
- occasional commit pulse

Animation must remain subtle.

Do not distract from the headline.

==================================================
SECTION 2 — LIVE COMMIT ANIMATION
==================================================

Use the attached Live Commit reference image.

This section should visually demonstrate RepoPilot performing autonomous work.

Keep the content minimal.

Show a horizontal Git branch:

●────●────●────●

A glowing particle travels through the branch.

The state changes:

CODING

then

TESTING

then

COMMIT

Finally display a tiny floating notification:

✓ commit created

feat: improve authentication

2 files changed

The animation should loop.

The user should immediately understand:

RepoPilot is actively working on the repository.

Do not add lots of explanatory text.

==================================================
SECTION 3 — FLOATING AI AGENTS
==================================================

Use the attached Floating Agent reference image.

Create minimal technical agent nodes.

Agents:

PLANNER
CODER
TESTER
REVIEWER

Do NOT use cartoon robots.

Use small technical icons.

Example:

◇
PLANNER

</>
CODER

✓
TESTER

◉
REVIEWER

Connect them using subtle Git-style lines.

The agents should slowly move around the repository graph.

When an agent becomes active, display a small status label.

Example:

● CODER

Writing 4 files...

or:

● TESTER

142 tests passing

Keep this section visually minimal.

==================================================
SECTION 4 — REPOSITORY RADAR
==================================================

Use the attached Repository Radar reference.

Create a large circular repository visualization.

Center:

RepoPilot

Around it:

Repository
Planner
Coder
Tester
Reviewer
GitHub

Connect the nodes using SVG lines.

The center node should have a subtle pulse.

Outer nodes should slowly orbit or shift.

Hovering an agent should highlight its connection to RepoPilot.

This should communicate:

RepoPilot coordinates the entire engineering workflow.

Do not overload this section with text.

==================================================
SECTION 5 — TERMINAL / WATCH IT WORK
==================================================

Use the attached terminal reference image.

Heading:

Watch it work.

Subtitle:

Every action is visible.

Create a premium black terminal window.

Header:

● REPOPILOT                     ● LIVE

Branch:

main → agent/auth-middleware

Terminal output should animate line by line:

$ analyzing repository...

✓ 248 files indexed

✓ 142 tests discovered

◇ found 7 improvement opportunities

</> implementing auth middleware

✓ tests passed

● draft PR ready

Include a blinking cursor.

The terminal must be REAL HTML/CSS.

Do not use an image.

The text should animate using React state/timers.

Once the final line appears, restart the sequence smoothly.

==================================================
SECTION 6 — SCROLL STORY / HOW IT WORKS
==================================================

Use the attached 16:9 workflow reference image.

Keep this section concise.

The section should tell a visual story:

01
UNDERSTAND

It understands your codebase.

↓

02
FIND WORK

It finds useful work.

↓

03
WRITE CHANGE

It writes the change.

↓

04
TEST EVERYTHING

It tests everything.

↓

05
CREATE COMMIT

It creates the commit.

↓

06
OPEN PR

It opens a draft PR.

IMPORTANT:

Do not create six huge text-heavy cards.

Instead, use a visual timeline with animated UI previews.

As the user scrolls:

- repository visualization appears
- branches form
- agent activates
- code appears
- tests pass
- commit node activates
- draft PR appears

Use scroll-triggered animation.

Use IntersectionObserver or an efficient animation approach.

Respect prefers-reduced-motion.

==================================================
SECTION 7 — AGENT + PR
==================================================

Use the attached Agent Working + PR reference image.

Combine BOTH concepts into one section.

Heading:

AI agents work.
You get pull requests.

Left side:

AGENT ACTIVE

CODER

Implementing authentication middleware

78%

+4 files

+17 tests

branch:
agent/auth-refresh

Behind the panel, show subtle Git branches.

Right side:

DRAFT PULL REQUEST

feat: improve authentication

pr-engineer wants to merge 6 commits

✓ Tests passed

✓ Security check passed

✓ AI review passed

Button:

Review draft PR

The PR panel should feel like a real GitHub pull request preview.

Do not make this section overly complicated.

==================================================
SECTION 8 — READY TO COMMIT
==================================================

Use the attached final "Ready to Commit" reference.

Keep this section simple and formal.

Heading:

All set. Ready to commit.

Supporting text:

RepoPilot has completed the work and prepared a draft pull request.

Show:

main
   ↓
agent/auth-refresh
   ↓
●

Then a compact PR panel:

DRAFT PULL REQUEST READY

feat: improve authentication

✓ Tests passed
✓ Checks passed
✓ AI review passed

[ View Draft PR ]

Keep this section significantly simpler than the Agent + PR section.

It should feel like the satisfying conclusion of the workflow.

==================================================
SECTION 9 — FINAL CTA
==================================================

Use the final CTA reference image as inspiration for the CONTENT and composition, but maintain the RepoPilot visual language from all previous sections.

Keep it extremely minimal.

Do not add another large information section.

Use:

READY TO MEET YOUR ENGINEER?

GitHub
        │
        ▼
    RepoPilot
        │
        ▼
   Draft PR

Primary button:

[ Connect GitHub ]

Create a clean visual connection between GitHub and RepoPilot.

The CTA should feel like the natural ending of the story.

==================================================
ANIMATION SYSTEM
==================================================

Animations are extremely important.

Use animations to communicate engineering activity.

Implement:

1. Git commit node pulses
2. Particles moving through branches
3. Agent nodes moving subtly
4. Terminal text typing
5. Tests changing from pending → passed
6. Commit node activating
7. Draft PR appearing
8. Scroll-triggered workflow transitions
9. Button hover effects
10. Subtle cursor interactions

Animations must be:

- smooth
- subtle
- professional
- performant

Do NOT use excessive bouncing.

Do NOT make elements constantly moving.

Use animation as storytelling.

==================================================
INTERACTION
==================================================

Hero Git nodes:

Hover → node highlights.

Agent nodes:

Hover → show agent status.

Commit nodes:

Hover → show commit information.

Terminal:

Animate automatically.

Workflow:

Animate based on scroll position.

CTA:

Connect GitHub button should be a real button ready for future GitHub OAuth integration.

==================================================
RESPONSIVE DESIGN
==================================================

Desktop:

Full visual experience.

Tablet:

Simplify Git graphs.

Mobile:

Prioritize readability.

Do not simply shrink desktop layouts.

On mobile:

- hide decorative branch complexity
- stack cards vertically
- reduce animation
- maintain visual hierarchy
- keep CTA prominent

==================================================
ACCESSIBILITY
==================================================

Use semantic HTML.

Buttons must be keyboard accessible.

Interactive elements need focus states.

Provide aria-labels where necessary.

Respect:

prefers-reduced-motion

When reduced motion is enabled:

- disable particle movement
- disable excessive node animation
- keep the content visible
- preserve the layout

Maintain good contrast between white text and black background.

==================================================
CODE ARCHITECTURE
==================================================

Organize the frontend cleanly.

Suggested structure:

src/
  components/
    ui/
      Button.tsx
      Card.tsx
      Container.tsx

    navigation/
      Navbar.tsx

    hero/
      Hero.tsx
      GitGraph.tsx
      CommitNode.tsx

    live-commit/
      LiveCommit.tsx

    agents/
      AgentNetwork.tsx
      AgentNode.tsx

    radar/
      RepositoryRadar.tsx

    terminal/
      LiveTerminal.tsx

    workflow/
      WorkflowTimeline.tsx
      WorkflowStep.tsx

    pull-request/
      AgentStatus.tsx
      PullRequestPreview.tsx

    cta/
      FinalCTA.tsx

  pages/
    LandingPage.tsx

  lib/
    utils.ts

Use reusable components.

Do not put the entire landing page into one enormous component.

==================================================
TAILWIND
==================================================

Use Tailwind CSS v4.

Use:

@tailwindcss/vite

Use CSS-first configuration.

Use @theme.

DO NOT create:

tailwind.config.js

Avoid arbitrary values everywhere.

Create reusable design tokens for:

- background
- foreground
- muted text
- borders
- accent
- success
- surfaces

==================================================
SVG
==================================================

Git graphs, repository radar, branch lines, and commit visualizations should be implemented using SVG.

Do not use canvas unless there is a strong performance reason.

Use SVG because:

- it scales perfectly
- it is easy to animate
- it fits the technical visual identity
- it remains responsive

==================================================
IMPORTANT DESIGN RULE
==================================================

The attached images are NOT separate websites.

They are different moments of ONE RepoPilot experience.

Create a consistent visual language across every section.

The page should feel like:

"You're watching an autonomous software engineer operate a Git repository in real time."

Not:

"You're looking at nine different SaaS UI examples."

==================================================
CONTENT RULE
==================================================

Keep copy concise.

Do not add unnecessary paragraphs.

Do not invent large sections of marketing copy.

Visual storytelling should do most of the work.

Use short headlines.

Use short supporting text.

Prioritize:

Git graph
agents
terminal
code
tests
commits
PR

==================================================
FINAL QUALITY BAR
==================================================

Before finishing:

1. Compare the implementation against ALL attached reference images.
2. Match spacing and proportions.
3. Match typography hierarchy.
4. Match black/white visual identity.
5. Make animations smooth.
6. Check mobile.
7. Check tablet.
8. Check desktop.
9. Remove unnecessary content.
10. Make sure no reference image is being displayed directly.
11. Make sure every major visual is implemented as an actual component.
12. Make sure the landing page feels premium and cohesive.

Do not stop after generating the first version.

Refine the visual design until it looks like a polished production SaaS/developer infrastructure product.

Most importantly:

BUILD THE DESIGN.
DO NOT DISPLAY THE REFERENCE IMAGES.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c181797b-7931-4be3-9df8-409218883bb9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
