---
layout: news_single
title: 'MailWatch 1.2.5 released'
date: 2017-08-21 17:30:00 +0200
author: endelwar
version: 1.2.5
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
A maintenance release that fixes some MySQL/MariaDB upgrade issues and improves user experience

## Changelog

Improvements

- Support for multiple virus scanners and multiple top viruses (#874)
- Add detection of MySQL or MariaDB in upgrade process (#873)
- Prevents Mail Queue summary from duplicating mail count when local server is defined in RPC list (#904, #905)
- Enhance upgrade.php with check for conf.php syntax and MailScanner.conf existence
- Better UI on tables and graphs
- Improved translations

Fixes

- Fixes issue when sanitization causes ampersand to be html-ified (#882)
- Fix mailwatch-sendmail-relay init script (#881)
- Fix code for php 5.3 compatibility (#889)
- Fix path to mtalogprocessor file in senmail_relay (#912)
- Remove on update/default value for timestamp in maillog table (#915)
- Permit up to 20 chars in first part of Postfix msgid (#652)