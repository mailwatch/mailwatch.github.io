---
layout: news_single
title: 'MailWatch 1.2.27 released'
date: 2025-07-30 10:00:00 +0100
author: endelwar
version: 1.2.27
categories: [release]
---

🔒 **Important Security Release** 🔒

This release contains critical security updates to improve quarantine and RPC security.

## What's Changed

### Security
- Apply session filter consistently in quarantine operations
- Check RPC client allow-list against the connecting client address

### Fixes
- Fix uninitialized string offset warning in mimeDecode (#1325)

**Full Changelog**: https://github.com/mailwatch/MailWatch/compare/v1.2.26...v1.2.27
