---
layout: news_single
title: 'MailWatch 1.2.0-beta8 released'
date: 2015-02-09 12:55:00 +0200
author: endelwar
version: 1.2.0-beta8
categories: [release]
---

This beta release of MailWatch 1.2 implement _tons_ of security fixes

## tl;dr

Primarily a security fix release, also hides MCP-related fields if MCP is not enabled

## Changelog

 - Correct unexpected behaviour in viewpart.php if one or more headers are not set
 - Refactor message part viewer
 - Sanitize user input
 - Hide MCP-related fields if MCP is not enabled in MailScanner