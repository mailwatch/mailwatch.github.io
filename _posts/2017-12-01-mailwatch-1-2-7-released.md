---
layout: news_single
title: 'MailWatch 1.2.7 released'
date: 2017-12-01 19:21:46 +0200
author: endelwar
version: 1.2.7
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
SECURITY FIX: update MailScanner .pm modules to prevent bypass of blacklists.
IMAP auth support, better handling of Hebrew charset, we speak 日本語 now!

## Changelog

Security
- More restricted access to library and public available files (#990)
- Fix email blacklist bypass when an email with more than 2 normal recipient is processed (#255, #992)

Improvements
- Add check for path of postconf, exim and sendmail executables in sf_version.php (#948)
- Enable use of '&' in username (#964)
- Add f-prot 6 virus scanner support
- Enlarge localhost ip detection to full 127.0.0.0/8 class
- Add IMAP auth support (#961)
- Better support for Hebrew charset
- Add Japanese language translation
- Updated translations
- Some code refactoring

Fixes
- Uniform use of IMAGES_DIR as a relative path instead of an absolute path (#944)
- Fix admins editing domain admins
- Fix LDAP sAMAccountname not being used for login (#955)
- Fix domain admins not being able to change own password
- Fix ONLY_FULL_GROUP_BY MySQL error (#733)
- Fix UTF8 headers in viewmail
- Update sudoers file to use mailq to match conf.php.example
