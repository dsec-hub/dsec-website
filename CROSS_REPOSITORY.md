# Cross-repository contract

`dsec-website` is the public site at `dsec.club`.

- Published events, projects, sponsors, and statistics come from `dsec-api`
  through `DSEC_API_URL`. This app has no direct database access.
- `dsec-hub` refreshes this site's cache after content changes. Set the same
  `REVALIDATE_SECRET` in both services and configure Hub's
  `DSEC_WEBSITE_URL=https://dsec.club`.

Deploy after `dsec-api` and `dsec-hub`, then verify the public API feed and the
`/api/revalidate` endpoint.
