---
layout: news_single
title: 'MailWatch 1.2.17 released'
date: 2021-02-26 16:06:42 +0200
author: endelwar
version: 1.2.17
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
### Improvements
- Log failed login attempts to php error log with clients ip (#1202)

### Fixes
- Upgrade rule_desc column length to 512 chars in sa_rules and mcp_rules tables
- Fix mailwatch_sendmail_relay.php coding problems (#1206)
- Quarantine reports to include multiple recipients (#1194)
- Fix undefined offset in reports page (#1200)
- Convert special html chars to html entities when importing SpamAssassin rules description
- Improve terminology used
- Fix SpamAssassin rule descriptions sorting
- Fix tools/Sendmail-Exim_queue/mailq.crontab and updated related documentation
