---
layout: news_single
title: 'MailWatch 1.2.21 released'
date: 2023-09-06 18:49:42 +0200
author: endelwar
version: 1.2.21
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
### Improvements
- Enhance quarantine display to regard all HIDE configuration options like quarantine_report does (#1268)
- Hide snapd mount point (#1283)
- Improve performance of mailwatch_milter_relay.php (#1266)
- Added the ability to independently configure quarantine durations for spam and non-spam emails, allowing for greater flexibility and potential performance and storage improvements (#1281).

### Fixes
- Fix for sendmail relay script (#1276)
- Fix syntax for implode function in quarantine.php (#1277)
- Add support for new 40 chars MaxMind apikey format (#1286)
- Fix download of MaxMind geoip database on HTTP/2 connection
