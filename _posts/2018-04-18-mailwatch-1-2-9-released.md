---
layout: news_single
title: 'MailWatch 1.2.9 released'
date: 2018-04-18 12:00:42 +0200
author: endelwar
version: 1.2.9
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
MailWatch now uses GeoLite2 database for ip geolocation and parses correctoly GPG signed email

## Changelog

Improvements
- Use new GeoLite2 database to replace deprecated GeoLite Legacy databases

Fixes
- Parse correctly GPG signed e-mail (#1053)
- Send empty quarantine reports over user_manager (#1054)