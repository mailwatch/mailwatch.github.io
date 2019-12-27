---
layout: news_single
title: 'MailWatch 1.2.13 released'
date: 2019-03-07 00:00:42 +0200
author: endelwar
version: 1.2.13
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
Security
- Clear password in database on imap auto created users during upgrade

Improvements
- Add notice if session timed out while on login page (#1120) 
- Show email release status on quarantine page(#1123)
- MailScanner milter relay stats support (#1124) 
- Hide Administrator user type to Domain Admins when creating or editing users (#276)
- Add Latin American Spanish translation

Fixes
- Fix group by in total_mail_by_date (#1127)
- Fix php notice on GeoIP update cronjob (#1131)
- Fix PHP notice on checklogin.php when using Imap login
