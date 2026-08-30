# dsec-website TODOs

## Features

- [ ] **Student-project showcase** — the automatic public-form submission design once sketched here is **superseded**. Accepted spec: `handover/reference/audit/showcase-FINAL.md`. Two decisions replace it: (1) submissions route through the **member portal** (`dsec-app`), not a public form — members are already signed in, so there is no spam queue, captcha, or new public write endpoint; (2) the scoring rubric stays **advisory only** and a **human approves every submission** — the submitted text is itself the injection surface, so no model verdict ever publishes anything.

- [ ] **Event image upload for review** — Allow visitors to submit photos from events via a form on the event detail page. Uploaded images should be held in a "pending" state (e.g. Supabase Storage bucket with restricted read) and surfaced in the exec dashboard (`dsec-app`) for an admin to approve or reject before they appear publicly on the website. Approved images should go through the existing `/media` pipeline in `dsec-api` (Pillow → WebP + PNG → Supabase) so they match the standard media format.
