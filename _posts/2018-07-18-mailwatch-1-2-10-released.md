---
layout: news_single
title: 'MailWatch 1.2.10 released'
date: 2018-07-18 21:00:42 +0200
author: endelwar
version: 1.2.10
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
MailWatch now shows correctly email with multiple addresses in To: header.

## Changelog

Compatibility
- Disable geoip for php <5.4 (#1075)

Fixes
- Fix version display for geoip (#1063)
- Improve MaxMindDB version detection
- Fix schema for user table to not allow empty type (#1067
- Simplify ClamAV version detection (#1060)
- Detect failed collation change on db connect and set manually (#1078)
- Fix mail filter for normal users (#1084)
- Fix missing translation in quarantine report emails (#1090)