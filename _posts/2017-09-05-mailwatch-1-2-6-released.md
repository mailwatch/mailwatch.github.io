---
layout: news_single
title: 'MailWatch 1.2.6 released'
date: 2017-09-05 19:44:00 +0200
author: endelwar
version: 1.2.6
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
SECURITY FIX: less permission to domain admin on editing other domain admin

## Changelog

Security
- Restrict domain admin permission so that they can only modify/create/delete regular users.  Also, emails must be used for all non-admin accounts (#940)

Improvements
- Add entries counter on white and black list (#509)
- Changed character set used in quarantine release email to UTF-8 (#910)
- Upgrade.php alters tables only if needed
- Fixes for dangerous content display on detail.php (#939)

Fixes
- Fix upgrade script for compatibility with MySQL 5.7 and 8.0 strict SQL mode
- Fix PHP header warning for cli scripts
- Fix invalid colors for multiple y-axes in a line graph (#926)
- Remove wrong alter table on audit_log.user which revert length to 255 from 191
- Convert delay from seconds to mysql time format in MTA log processor (#924, #941)
