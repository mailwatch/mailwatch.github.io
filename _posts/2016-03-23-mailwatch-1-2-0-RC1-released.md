---
layout: news_single
title: 'MailWatch 1.2.0-rc1 released'
date: 2016-03-23 11:26:00 +0200
author: endelwar
version: 1.2.0-rc1
categories: [release]
---

Lot of work for this closer step to final release!

## tl;dr

This RC1 of MailWatch 1.2 implements translation of user interface, secure user's password hashing and some layout fix

## Changelog

 - Display load average if /proc/loadavg doesn't exists but /usr/bin/uptime does
 - Improve loggings for connections not coming from 127.0.0.1
 - Add hide High Spam and High MCP options
 - Update geoip.inc to v1.15
 - Fix path in the install manual
 - Add Microsoft Active Directory compatibility support
 - Fix timezone warning on sf_version and viewmail
 - Check GeoIP data file size before using GeoIP functions
 - Add hide Non Spam option
 - Quick hack on fixing duplicate header issue (#154)
 - Fix reports graph color management
 - A better sendmail_relay init file
 - Fix GeoIP extension and php libary conflict on constants definition
 - get_conf_truefalse returns true if value is a string
 - Enable LDAP over SSL
 - Fix virus count sorting on "Virus Report"
 - Remove additional slashes in "SpamAssassin Rule Description Update"
 - Adding translation to user interface
 - Add LOGO path in conf.php.example and changes done in corresponding files.
 - Layout changes in quarantine.php, other.php, sf_version.php
 - Removed duplicate PHP function in tools/Cron_jobs/quarantine_report.php (is in functions.php)
 - Changes in tools/Sendmail_relay/INSTALL (to be accurate with Debian/Ubuntu)
 - Changes in tools/Sendmail_relay/sendmail_relay.init (change maillog to mail.log)
 - Background color change in login.php
 - Add clamav and spamassassin version in sf_version.php
 - Changes in INSTALL and UPGRADING (to be accurate with Debian/Ubuntu)
 - Modified footer function in functions.php (page footer and DEBUG for page_creation_timer)
 - Add a check for 'subtests=' to add space after comma (to fit the screen) in sa_lint.php
 - Upgrade password hash function from MD5 to a crypt() compatible one
 - Add option to enable/disable IP address resolution on status page
 - Improving upgrade.php script
 - Sanitize user input on reports
 - Rewrite of GeoIP file download procedure
 - Decline login as LDAP group
 - Move luser add-on to another git repository
 - Better logging of UTF8 subjects