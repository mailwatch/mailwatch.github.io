---
layout: news_single
title: 'MailWatch 1.2.12 released'
date: 2018-11-28 1:57:42 +0200
author: endelwar
version: 1.2.12
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
This release contains a security fix.

If your installation make use of auto creation of user from IMAP login (i.e. `IMAP_AUTOCREATE_VALID_USER` set to `true`) you MUST run this query on your MailWatch database:
```sql
UPDATE `users` SET `fullname` = `username` WHERE `type`='U' AND `password` IS NULL
```

## Changelog
Security
- Fix clear password display when user is auto created by IMAP auth

Fixes
- Add client IP in sorting input validation
