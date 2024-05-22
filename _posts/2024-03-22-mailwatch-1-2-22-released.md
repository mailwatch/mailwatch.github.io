---
layout: news_single
title: 'MailWatch 1.2.22 released'
date: 2024-03-22 09:15:42 +0100
author: endelwar
version: 1.2.22
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
### Fixes
- More relaxed regex for MaxMind geoip database download on HTTP/2 connection (#1289)
- Fix report email (#1209)
- Validate on new exim id format (#1294)
- Permit + and = chars in email for sendmail (#1291)
- Fix Message Listing on Mysql 8+ (#1295)
- Fix MaxMind database download when curl extension is not available (#1297)
- Update certificate data