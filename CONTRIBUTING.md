# Contributing to dsec-website

The public marketing site at **dsec.club**. Next.js 16 (App Router) +
TypeScript + Tailwind v4. It has **no database of its own** — it reads the public
`/website/*` feed from `dsec-api` and degrades to placeholders when a feed is
unset. It holds **no database credentials**; the only secrets it carries are
service keys for the contact/sponsor forms (Resend, Turnstile, Notion, Telegram)
and the revalidate hook. Keep it that way — no direct DB access.

## Ground rules

1. **No secrets in the repo.** No `.env`, tokens, or API keys in a commit — ever.
   Config comes from environment variables (`.env.example` documents them).
2. **No student IDs or private contact details — ever** — in fixtures, tests, or
   sample content, and the **showcase-project fixtures are deliberately
   fictional**. (The committee roster in `src/lib/content.ts` is real, published
   with the committee's consent — that's the one intentional exception, not a
   licence to add more real personal data.)
3. **No direct database access.** The site reads club data only through the
   `dsec-api` `/website` feed — never a direct DB connection or a DB credential.
   If you need new club data on the site, add it to that feed.
4. **Ask before you widen scope.** Anything touching `src/lib/api.ts` (the feed
   boundary) is maintainer-reviewed — see [CODEOWNERS](.github/CODEOWNERS).

## How to contribute

1. Branch from `main`: `git checkout -b feat/<short-name>` (or `fix/…`, `docs/…`).
2. Make the change. Run the full local gate:
   ```bash
   npm run typecheck && npm run lint && npm run build
   ```
   The build must pass **with no environment set** — every feed has a fallback.
3. Open a PR against `main`. Fill in the template. Link the issue.
4. A code owner reviews. On merge to `main`, Vercel deploys to dsec.club
   automatically — so a green `main` is a live site. Don't merge a broken build.

Local dev: `npm install` then `npm run dev` (port 3000). With no `DSEC_API_URL`
set, `/projects` renders the fixture showcase so you can build UI with zero
credentials; fixtures never appear in a production build (double-gated on
`NODE_ENV` **and** `VERCEL`).

## Student-project showcase — content policy

The showcase displays real student work. Two rules are non-negotiable because
they protect visitors and the club:

- **No binary hosting.** The site never serves or hosts a student-supplied
  executable, installer, APK, or firmware image from any `*.dsec.club` origin.
  Link out to the source (GitHub, a Releases page, itch.io) via a `noindex`
  redirect instead. A browser-sandboxed web build (a page that runs in the tab)
  is fine; a file the visitor downloads and runs is not.
- **Takedown is asymmetric — unpublish alone, republish with two.** This is a
  **governance rule the committee follows by hand** (not yet enforced in code —
  the hub currently lets any authorised writer toggle publish either way). Any
  single committee member may **unpublish** immediately, no second approval needed
  (removing something harmful must be fast); putting it **back** should wait on a
  **second** committee member. When in doubt, unpublish first and discuss after.

Submissions do **not** come through this repo. They will route through the member
portal (`dsec-app`); a human approves every one. The scoring rubric is advisory
only and never publishes anything on its own.

## What needs a maintainer

Open an issue and flag it — don't just send a PR — if you want to:

- change `src/lib/api.ts` or how the site decides prod vs. dev,
- add a new external dependency, credential, or build-time secret,
- change the showcase content policy above.
