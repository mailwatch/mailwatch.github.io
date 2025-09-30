---
layout: news_single
title: 'MailWatch 1.2.24 released'
date: 2025-09-30 16:08:42 +0100
author: endelwar
version: 1.2.24
categories: [release]
---

🚨 **Important Notice – Migration to DBD::MariaDB & Perl module updates** 🚨

This release introduces critical changes that require **manual actions**:

1. The MailScanner Perl scripts have been migrated from **DBD::mysql** to **DBD::MariaDB**.
    - You must ensure the Perl module `DBD::MariaDB` is installed.
    - `DBD::mysql` can remain installed — removal is **not** required. What matters is that MailWatch is able to connect using `DBD::MariaDB`.
    - Please verify your MailScanner environment can connect to the database via `DBD::MariaDB` before upgrading in production.

2. You must copy the updated `.pm` (Perl module) files to the correct locations as described in the [INSTALL instructions](https://github.com/mailwatch/MailWatch/blob/1.2/MailScanner_perl_scripts/INSTALL).
    - Follow the documented paths carefully to avoid missing or broken modules.
    - If the `.pm` files are not placed correctly, the new Perl scripts will not function as expected.

⚠️ Without completing these steps, MailWatch **will not work properly**. Please plan the upgrade accordingly.


## What's Changed
### Added
- Add support for new AV engine supported by MailScanner (avastd, eset, esetsefs, f-secure, f-prot, kaspersky, kse)
- Allow foo@*.domain.ext in allow/block lists (#1316)

### Changed
- Update htmlpurifier library to 4.17.0
- Avoid usage of the deprecated utf8_encode function in the viewpart
- Better Linux OS recognition

### Compatibility
- The minimal PHP version is now 5.6.
- Migrate MailScanner perl script to DBD:MariaDB
- Update GeoIP to support authentication by account id+license key

### Fixes
- Fix release of text/x-mail messages (#1306)
- Improve ISO-8859 charset conversion (#1309)

## New Contributors
* @sobolev-es made their first contribution in https://github.com/mailwatch/MailWatch/pull/1313
* @riksoft made their first contribution in https://github.com/mailwatch/MailWatch/pull/1316

**Full Changelog**: https://github.com/mailwatch/MailWatch/compare/v1.2.23...v1.2.24