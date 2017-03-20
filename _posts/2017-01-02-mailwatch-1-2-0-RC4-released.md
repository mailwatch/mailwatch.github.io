---
layout: news_single
title: 'MailWatch 1.2.0-rc4 released'
date: 2017-01-02 13:58:00 +0200
author: endelwar
version: 1.2.0-rc4
categories: [release]
---

PHP7 for everyone.

## tl;dr

This RC4 of MailWatch 1.2 adds PHP7 compatibility, migrate to mysqli extension and adds compatibility to LDAP servers other than Active Directory

## Changelog
- Move to MySQLi PHP extension
- PHP 7 compatibility
- Use utf8mb4 on capable systems (MySQL >= 5.5.3)
- Fix geoip function dereclaration
- Warn on missing sa-learn binary
- Add SA_PREFS to list of SpamAssassin rules direcotory
- Improve session cookie security
- Upgrade pear packages
- Filter LDAP username and password before passing them to LDAP server
- Improve LDAP compatibility with server other than Active Directory
- Remove password change functionality for LDAP Domain Admin and User
- Permit LDAP login with password containing special characters
- Code cleanup
- Updated translations
