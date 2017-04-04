---
layout: news_single
title: 'MailWatch 1.2.1 released'
date: 2017-04-03 15:03:00 +0200
author: endelwar
version: 1.2.1
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
A lot of fixes for session management and some regressions introduced in 1.2.0; improved performance and decoding of queue files.

## Changelog

Improvements
- Show RBL list in Message Detail
- Better decoding of sender and subject in Mail Queue
- Disable browser caching to prevent token mismatch
- Add unique token to logged emails
- Clean orphaned filter in upgrade.php
- Add optional skinning of web interface
- Moved upgrade doc to online documentation
- Improved performance
- Enhanced session expiration
- Prevents domain admins from editing their own filters
- Allows domain admins to view, edit, add, and delete users in their filter domains
- Code refactoring to clean up duplication and code smell

Fixes
- Fix regression on some input validation (the Bad Dog Biting Bug™)
- Rename 00MailWatchConf.pm to MailWatchConf.pm, which is failing on some perl versions
- Fix Audit log access
- Don't permit logged in Admin/Domain admin to delete his/her user
- Fix MailWatchConf.pm loading on some platforms
- Remove double ldap_escape on username
- Fix upgrade.php failing on some MariaDB versions
- Fix MIME part visualization
- Fix session loop