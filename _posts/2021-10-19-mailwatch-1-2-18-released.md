---
layout: news_single
title: 'MailWatch 1.2.18 released'
date: 2021-10-19 10:15:42 +0200
author: endelwar
version: 1.2.18
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
### Improvements
- Add DB_PORT config value to specify a non-standard MySQL server port (#1213)
- Add new config flag to permit IMAP login without full email as username (#1211)
- Add support for F-Secure 12 antivirus
- Add support for ESET File Security antivirus

### Fixes
- Fix errors on importing messages from MailScanner containing UTF8 chars in messageid and reports (#1208)
- Fix upgrade script
