---
layout: news_single
title: 'MailWatch 1.2.17 released'
date: 2022-10-14 15:18:42 +0200
author: endelwar
version: 1.2.19
categories: [release]
---

A new version of MailWatch is released in the wild.

## Changelog
### Improvements
- More performant and reliable milter queue relay parsing
- Permit IPv4-mapped IPv6 address in audit_log table
- Add support for F-Secure 12 antivirus status (#1239)
- Better compatibility with PHP 8

### Fixes
- Fix missing Serializer directory
- Prevent Logging failure in MailWatch.pm
- Prevent MailWatch.pm from dying prematurely
- Prevent SQLBlackWhiteList.pm from dying prematurely
- Prevent SQLSpamSettings.pm from dying prematurely
- Revert rule column to 191 chars (#1125)
- Remove some deprecated php functions and variables
- Correct directory check in msmail genericqueue()
- Require database class earlier to prevent fatal error on calling audit_log function (#1247)
