---
layout: news_single
title: 'MailWatch 1.2.0-rc3 released'
date: 2016-11-22 19:11:00 +0200
author: endelwar
version: 1.2.0-rc3
categories: [release]
---

Another step to final release, but a lot more to do!

## tl;dr
This RC3 of MailWatch 1.2 fixes a lot of bugs and adds autorelease feature in mail reports

## Changelog
 - Update postfix relay documentation (GH #320)
 - Update JpGraph to 4.0.1 (GH #289)
 - Fix Reports.php and Lists.php when used in languages other than English (GH #307, GH #288)
 - Proper expansion multiple %var% references in MailScanner parameters (GH #311)
 - Updated traslation
 - Add HIDE_UNKNOWN config option (GH #240, GH #254)
 - Add Autorelease feature (one click release of quarantined emails) (GH #260)
 - Fix per user spam score defaults (GH #263)