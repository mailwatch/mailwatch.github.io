---
layout: news_single
title: 'MailWatch 1.2.16 released'
date: 2020-11-09 17:38:42 +0200
author: endelwar
version: 1.2.16
categories: [release]
---

A new version of MailWatch is released in the wild.

This release contains a BC Break: you should install Digest::SHA Perl module before upgrading.

## Changelog
Compatibility
- Permit Sendmail 15-chars-long MessageId in input validation (#652)

Fixes
- Fix PHP 7 compatibility in mailwatch_quarantine_report script (#1167)
- Add missing translation entry for Latin American Spanish
- Fix quote handling in mailwatch_milter_relay.php (#1170)
- Use Digest::SHA instead of Digest:SHA1 in MailWatch.pm (#1190)

Improvements
- Add support for IPV6 clients in audit_log table (#1178)
- Better handling of queuedir (#1173)
- Add row hover effect in rep_total_mail_by_date report
- Add tooltips on truncated fields
