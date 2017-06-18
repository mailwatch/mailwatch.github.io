---
layout: news_single
title: 'MailWatch 1.2.4 released'
date: 2017-06-18 08:34:00 +0200
author: endelwar
version: 1.2.4
categories: [release]
---

A new version of MailWatch is released in the wild.

## tl;dr
A maintenance release that finish the work on graph migration to ChartJs and visual display of release and learned messages

## Changelog

Improvements

- Converted remaining graph to Chart.js and removed JpGraph dependency
- Add OS detection in Software Version page
- Add geoip_update cron script
- New graph: Messages per Hour for the last 24 hours
- Recognition of Message/Partial as attachment in view mail
- Beautify error message on database exception
- Add visual display for released and learned messages
- Add a comunity code of conduct
- Localization updates

Fixes

- Fix wrong MAILWATCH_SMTP_HOSTNAME defined check
- Correct some graph generation
- Fix timestamp field autoupdating in maillog table
- Fix status mail queues in MailWatch cluster