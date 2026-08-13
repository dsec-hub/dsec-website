# Security policy — dsec-website

## Reporting a vulnerability

Email **admin@dsec.club** with "SECURITY" in the subject. Please do not open a
public issue for anything exploitable.

Useful things to include: the URL or endpoint, what you did, what happened, and
whether you needed an account. We will acknowledge and keep you posted on a fix.
This is a student club, not a company with an on-call rota, so treat response
times as best-effort.

## Scope of this document

This file covers **dsec-website only** — the public marketing site at
`dsec.club`. The member portal (`dsec-app`), the committee dashboard
(`dsec-hub`), the games surface (`dsec-games`) and the API (`dsec-api`) each have
their own repository and their own security notes.

## What this app does

It is a public, unauthenticated marketing site. There is no login, no session,
and no database connection. It reads a public feed from `dsec-api` and renders
it. The security surface is therefore small and consists almost entirely of the
two public forms.

| Control | Where | Notes |
|---|---|---|
| Captcha on public forms | `src/lib/turnstile.ts` | Cloudflare Turnstile. **Fails open**: if `TURNSTILE_SECRET_KEY` is unset, verification returns true and the captcha is effectively off. Set it in production. |
| Honeypot + content heuristics | `src/lib/spam.ts`, `src/lib/form-guard.ts` | Applied to the contact and sponsor forms. |
| Shared-secret gate on cache revalidation | `src/app/api/revalidate/route.ts` | `REVALIDATE_SECRET`, which must match the value in `dsec-hub` (the caller). Blank means the endpoint rejects everything. |

### Known gaps in this repo

- There is **no application-level rate limiting** here. Nothing in this repo
  throttles requests; edge protection is the only layer in front of it.
- `POST /api/flagship-signup` accepts unauthenticated requests and forwards them
  to `dsec-api` without the honeypot/heuristic checks the other two public forms
  apply.
- The revalidate secret is compared with `!==` rather than a constant-time
  comparison.

## Edge protection

The `dsec.club` DNS records are grey-cloud (DNS-only) in Cloudflare, so
Cloudflare's proxied protections — WAF rules, rate-limiting rules, Bot Fight
Mode — are **not** in the request path. Edge mitigation for this site is
whatever the Vercel project's Firewall settings provide (platform DDoS
mitigation plus any custom rules configured in the dashboard).

> **Migration note.** `api.dsec.club` is moving off Vercel to an OVH VPS. Any
> edge protection for the API therefore stops being a Vercel Firewall concern and
> becomes a VPS concern (reverse-proxy rate limiting, or orange-clouding the
> `api` record now that the Vercel cert-issuance objection no longer applies).
> That change does not affect this repo, but do not assume the API is still
> covered by the same layer as this site.
