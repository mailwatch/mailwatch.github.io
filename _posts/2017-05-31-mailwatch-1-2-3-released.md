---
layout: news_single
title: 'MailWatch 1.2.3 released'
date: 2017-05-31 19:30:00 +0200
author: endelwar
version: 1.2.3
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
Several improvement on user sessions and quarantine reports, plus a lot of fixes, above all browser multitab surfing and multiselect on message operations

## Changelog

Improvements

- Better compatibility for MySQL 5.7 (ONLY_FULL_GROUP_BY)
- Disable broken VIRUS_INFO per default
- Better handling of Postfix message ids
- Allow plus sign in username
- Add ability to send quarantine report to single user
- Enable users to immediately send his own quarantine report
- Add ability for users to select the language of the gui
- Converted some graph to Chart.js
- Warn about installing PHP XML extension where not present
- Add option to specify HELO hostname for SMTP transactions
- Improved Sendmail queue code 
- Allow blacklisting and whitelisting an entire TLD
- Use domain admin username as domain filter
- Database driven session enhancements
- Add per user session timeout
- Provides visual display of release and learned messages
- Enhanced detail page printing
- Enhanced upgrade.php
- Localization updates
- Code refactoring to clean up duplication and code smell

Fixes

- Ignores MailScanner config files (conf.d/*) in subfolders and hidden files
- Options in messages operations do not select all the lines when clicking S/H/F/R
- Fix issue where Mail Queue on status page displayed intermittently
- Fix sa-learning in languages containing special chars in submit text (e.g. German)
- Fix session conflict and multitab surfing
- Fix broken html with certain virus names
- Fix duplication of default rule in msre_edit.php
- Fix errors with /etc/cron.daily/mailwatch scripts
- Create.sql can be run on MySQL <= 5.5 again
- Fix &amp; encoding in links
- Fix SA-Learn blocking apache server