---
layout: news_single
title: 'MailWatch 1.2.0-beta7 released'
date: 2015-04-27 19:53:00 +0200
author: endelwar
version: 1.2.0-beta7
categories: [release]
---

This will **not** be the last beta release of MailWatch 1.2, some security fixes are needed

## tl;dr

This release separates Release action in Message Operations from Spam/Ham/Forget radio button, repair Quarantine Report behaviour and fix a long standing license issue

## Changelog

 - Fix documentation regarding magic_quotes_gpc
 - Redirect to original link after login (e.g. from quarantine report)
 - Fix to GPL v2 licensing problems
 - Updated MailScanner default path to comply with version 4.85.2-1
 - Add `--max-size` support to `sa-learn` if spamassassin >= 3.4.0
 - Separate release action in Message Operations from Spam/Ham/Forget radio button
 - Domain Administrator get all domain emails if their username is either an email address or a domain name