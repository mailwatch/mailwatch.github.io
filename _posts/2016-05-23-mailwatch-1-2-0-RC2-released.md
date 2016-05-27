---
layout: news_single
title: 'MailWatch 1.2.0-rc2 released'
date: 2016-05-23 12:23:00 +0200
author: endelwar
version: 1.2.0-rc2
categories: [release]
---

Another step to final release!

## tl;dr

This RC2 of MailWatch 1.2 fixes some misbehaviours of RC1 and improve "total mail by date" report 

## Changelog

 - Fix name collision in queries (GH #243)
 - Fix loading of SpamAssassin rule description if it starts with a space (GH #242)
 - Fix login bypass on LDAP introduced in RC1 (GH #246, GH #248)
 - Improve rep_total_mail_by_date report (GH #249, GH #250, GH #251)
 - Fix LDAP search for 'mail' prefix (GH #252)
 - Try to not encode multiple times a string that is already UTF8 (GH #225)