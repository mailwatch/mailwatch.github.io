---
layout: news_single
title: 'MailWatch 1.2.26 released'
date: 2026-04-09 20:19:00 +0200
author: endelwar
version: 1.2.26
categories: [release]
---

🔒 **Important Security Release** 🔒

This release addresses critical security issues affecting multiple administrative tools.

## What's Changed

### Security
- Add missing admin role authorization check on sa_lint.php, ms_lint.php, sophos_status.php, geoip_update.php, bayes_info.php and mysql_status.php
- Improve output escaping in SpamAssassin Lint tool

### Added
- Turkish translation (#1321)

### Changed
- Tools scripts now auto-detect functions.php path relative to their location, with fallback to the default `/var/www/html/mailscanner/` path

### Fixes
- Fixed Message-ID extraction stripping angle brackets required by RFC 5322
- Fixed the wrong variable check for mtalogprocessor.inc.php in mailwatch_postfix_relay.php
- Fixed broken HTML page on failure to run SpamAssassin Lint tool

**Full Changelog**: https://github.com/mailwatch/MailWatch/compare/v1.2.25...v1.2.26
