---
layout: news_single
title: 'MailWatch 1.2.0-rc5 released'
date: 2017-03-02 17:20:00 +0200
author: endelwar
version: 1.2.0-rc5
categories: [release]
---

Never seen so much new features in a release candidate.

## tl;dr

More power to domain admin, new script structure and names, user password reset, no more editing of .pm files, Improve support for IPv6/Exim/UTF-8.

## Changelog
 - Add the ability for domain admins to create/edit/delete users of the same domain
 - Reorganization of Tools directory
 - Add filter on audit report
 - Add the possibility to 'Clear' bayes database in Bayes Info page
 - Add password reset
 - Move database setup in separate perl module (00-MailWatch-conf.pm)
 - Improved upgrade.php script 
 - Improve compatibility with MailScanner V5
 - Improve IPv6 support
 - Improve UTF8 compatibility and add support for utf8mb4 in perl module
 - Improve LDAP compatibility
 - Add better Exim queue count
 - Fix printing in some reports
 - Fix for auto/unknown Virus scanner
 - A lot of cosmetic enhancement
 - Code cleanup
 - Updated translations
