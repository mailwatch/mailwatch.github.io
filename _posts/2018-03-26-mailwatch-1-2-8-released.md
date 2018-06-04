---
layout: news_single
title: 'MailWatch 1.2.8 released'
date: 2018-03-26 12:00:42 +0200
author: endelwar
version: 1.2.8
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog

Security
- More restricted access to library and public available files (#990)
- Fix email blacklist bypass when an email with more than 2 normal recipient is processed (#255, #992)

Improvements
- Add ldap debug script
- Update documentation
- Improve sudo config to work with Postfix and Exim
- Add mailwatch_update_sarules.php cronjob script
- Use MAILWATCH_SMTP_HOSTNAME if defined on Release from quarantine (#1038)
- Enable use of dn field as username field (#427, #1029)

Fixes
- Fix Postfix log processor (#1021)
- Make msre reload script work on systemd
- Fix error on undefined $_SERVER['HTTPS'] index
- Fix logout process (#1044)
- Fix email validation for username (#1042)
