# Arthur Capozzi — personal academic website

Plain HTML and CSS, migrated from https://www.di.unito.it/~capozzi/ on 7 October 2026.
The original dark resume layout, section order, research content, CV, portrait and background are retained.
The old placeholder Formspree form is replaced by a mailto link to arthur@capozzi.ch.
Biographical details, dates, publications and CV otherwise reflect the old site and may need updating.
The original MDB and Font Awesome styles/fonts are copied locally; no build or package installation is required.
Google Fonts and the Google Maps embed are the remaining external visual resources.

## Local preview

Run `python3 -m http.server 8000` in this directory, then open http://localhost:8000/.

## Repository and publishing

The former https://github.com/PotenteOpossum/potenteopossum.github.io URL redirects to
https://github.com/PotenteOpossum/SMIILE-II-Project-Website. That is an existing project site,
so these migration files are isolated rather than replacing that project.
For the requested user-site URL, create a public repository named `potenteopossum.github.io`
and place the contents of this directory at its root (including `.nojekyll` and `CNAME`).

In Settings → Pages, select Deploy from a branch, `main`, `/ (root)`.
Set the custom domain to `capozzi.ch` before adding the website DNS records.
`CNAME` contains exactly `capozzi.ch`. `.nojekyll` serves the files directly.
If choosing a custom Actions publishing workflow instead, configure the domain in Pages settings;
GitHub ignores CNAME in that mode. This migration needs no Actions workflow.

## Existing configuration inspection

The project repository has no CNAME, DNS zone files, hosting workflow or custom-domain configuration.
Its `_config.yml` contains only `remote_theme: PotenteOpossum/potenteopossum.github.io`.
This is a Jekyll theme reference, not DNS configuration. It is unnecessary for this plain static site.
No original project files or configuration have been removed or changed.

See DNS-SETUP.md for the exact Infomaniak records and HTTPS checklist.
