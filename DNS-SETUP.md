# capozzi.ch DNS and GitHub Pages setup

Verified against official GitHub documentation on 7 October 2026:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Set `capozzi.ch` as the GitHub Pages custom domain BEFORE changing DNS.
In Infomaniak's DNS zone for capozzi.ch, add these website records:

| Name | Type | Value |
| --- | --- | --- |
| @ (apex / blank name) | A | 185.199.108.153 |
| @ (apex / blank name) | A | 185.199.109.153 |
| @ (apex / blank name) | A | 185.199.110.153 |
| @ (apex / blank name) | A | 185.199.111.153 |
| www | CNAME | potenteopossum.github.io. |

Use the normal TTL (3600 seconds is suitable). No URL scheme or path in DNS values.
GitHub will redirect www.capozzi.ch to capozzi.ch when both sets of records are correct.
No separate Infomaniak web forwarding is needed.

Optional IPv6: add all four apex AAAA records:
- 2606:50c0:8000::153
- 2606:50c0:8001::153
- 2606:50c0:8002::153
- 2606:50c0:8003::153

If there are old website A/AAAA/ALIAS/ANAME records at the apex, replace only those conflicting
website records. Remove conflicting records at www before adding its CNAME.
Do not create an apex CNAME, and do not create wildcard records.
Do not remove or edit MX, SPF, DKIM, DMARC, mail-related TXT, SRV or other email records.
A read-only DNS check found `capozzi.ch MX 5 mta-gw.infomaniak.ch.`; preserve it.
No apex A/AAAA or www CNAME records were returned at the time of that check.
No DNS changes were made by this migration.

Recommended domain verification: GitHub account Settings → Pages → Add a domain.
Use the exact TXT hostname and value GitHub generates; it must not be guessed.
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

## HTTPS and final verification

After publishing and DNS propagation, wait for GitHub's certificate, then enable
Settings → Pages → Enforce HTTPS as soon as available (GitHub says this can take up to 24 hours).

Check:
- https://potenteopossum.github.io/ redirects to https://capozzi.ch/
- https://capozzi.ch/ serves Arthur's homepage with a valid certificate
- https://www.capozzi.ch/ redirects to https://capozzi.ch/ with valid TLS
- CV downloads, portrait/background load, navigation scrolls to every section
- Email still works at arthur@capozzi.ch

Initial live checks, before deployment: github.io returned HTTP 404; capozzi.ch and
www.capozzi.ch did not resolve to website addresses. Deployment and redirects are unverified.

## Manual steps still pending

1. Resolve repository destination: create the user-site repository, or explicitly select the existing project.
2. Publish migration files to the selected repository and configure Pages source/custom domain.
3. Add the five website DNS records above at Infomaniak without changing email records.
4. Optionally verify domain ownership using GitHub's generated TXT record.
5. Enable Enforce HTTPS when available and perform the final URL checks.
