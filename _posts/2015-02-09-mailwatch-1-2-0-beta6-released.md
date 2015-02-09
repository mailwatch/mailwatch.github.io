---
layout: news_single
title: 'MailWatch 1.2.0-beta6 released'
date: 2015-02-09 12:55:00 +0200
author: endelwar
version: 1.2.0-beta5
categories: [release]
---

A new beta of MailWatch is released in the wild.

## tl;dr

 - Enhanced SQL Black/Whitelist and MailScanner config parser
 - Enable UTF-8 subject encoding

## BC Break
* An UTF8 enabled database schema is in use, read instructions in _tools/UTF8_Database_ directory 

## Changelog

 - Enhanced MailScanner.conf parser to catch variable's value even if there is no space before and/or after = sign
 - Added DISPLAY_IP option to show sender's IP Address in Quarantine listings and message lists
 - Enhanced SQL Black/Whitelist to allow matching 1, 2, or 3 IP address octets
 - Enhanced SQL Black/Whitelist to allow matching of subdomains
 - Upgraded PEAR packages to last stable versions (some trunk commit was used)
 - Enable UTF-8 subject encoding
 - Fix conflict with GeoIP PHP extension