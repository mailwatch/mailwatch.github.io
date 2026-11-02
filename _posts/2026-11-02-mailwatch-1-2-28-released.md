---
layout: news_single
title: 'MailWatch 1.2.28 released'
date: 2026-11-02 16:00:00 +0100
author: endelwar
version: 1.2.28
categories: [release]
---

🔒 **Important Security Release** 🔒

This release fixes stored cross-site scripting vulnerabilities. One of them can be triggered by any external sender, without an account on MailWatch: a crafted e-mail runs script in the session of the operator or administrator who opens it. All users should upgrade.

## What's Changed

### Security
- Escape user management output to prevent stored XSS by domain administrators ([GHSA-mr3r-q523-6cvf](https://github.com/mailwatch/MailWatch/security/advisories/GHSA-mr3r-q523-6cvf))
- Escape untrusted e-mail, MTA and request data in message details, the message viewer, mail queues, reports, lists, the audit log and quarantine reports; serve message parts sandboxed and as downloads ([GHSA-jcgr-2839-3jc7](https://github.com/mailwatch/MailWatch/security/advisories/GHSA-jcgr-2839-3jc7))

### Fixes
- Fixed daily MTA rejection counts on rep_total_mail_by_date.php being overwritten instead of summed, showing only the last row of each day

### Upgrade notes
- If you use the Sendmail/Exim queue tool, update `tools/Sendmail-Exim_queue/mailwatch_sendmail_queue.php` together with the web files: queue rows written by the old tool show a literal `<br>` until the next refresh.

**Full Changelog**: https://github.com/mailwatch/MailWatch/compare/v1.2.27...v1.2.28
