---
layout: news_single
title: 'MailWatch 1.2.29 released'
date: 2026-11-03 18:00:00 +0100
author: endelwar
version: 1.2.29
categories: [release]
---

🔒 **Important Security Release** 🔒

This release fixes SQL injection and missing server-side access checks that let any authenticated user, including regular end users, read and change data beyond their own mailboxes and escalate their privileges. All users should upgrade.

## What's Changed

### Security
- Fix SQL injection in message table sorting and report filters, enforce domain admin filter scope, allow/block list recipients and dangerous content rules on the server, and stop the own settings form from setting the password to "xxxxxxxx"; upgrade.php lists the users with that password; quote values and stop evaluating database output in the LDAP sync; validate message ids in the RPC server ([GHSA-fx6j-399x-49w7](https://github.com/mailwatch/MailWatch/security/advisories/GHSA-fx6j-399x-49w7))

### Added
- upgrade.php reports user, filter, audit log and list rows that hold markup left by the stored XSS fixed in 1.2.28, without changing them
- Failed logins are limited per client IP address and username (`LOGIN_MAX_FAILURES`, `LOGIN_LOCKOUT_MINUTES`); the new `login_failures` table is created by upgrade.php, and logins work as before until it exists

### Changed
- `DB_CLEAN_OPTIMIZE` defaults to false: mailwatch_db_clean.php runs OPTIMIZE TABLE only when it is set to true

### Fixes
- Deleting a quarantined message with several files removes all of them, and the message leaves the quarantine only once no file is left
- tools/LDAP/mailwatch_ldap_sync.sh no longer deletes the imported users when the directory cannot be reached
- rpcserver.php runs again on PHP 5.6
- An auto-release link that fails to release the message reports the error and stays usable
- Passwords that contain quotes or backslashes work the same whether an administrator or the user sets them
- Quarantine reports match recipient addresses exactly, and users with nothing in quarantine count as empty reports instead of failures
- upgrade.php checks the `user_filters.username` column itself before resizing it
- The previous day, virus, top virus, SpamAssassin rule hits and total mail by date reports count in the database instead of loading every message
- The MailScanner rules editor opens empty rules files on PHP 8
- The MailScanner configuration page expands `%var%` variables instead of using an undefined variable
- mailwatch_sendmail_queue.php replaces the queue rows in one transaction, so the queue pages never show it half filled
- mailwatch_sendmail_queue.php keeps the last queue snapshot when a queue directory cannot be read, instead of failing on PHP 8
- `HIDE_HIGH_SPAM` hides high spam only from regular users in quarantine reports too, as documented: administrators and domain administrators see it again
- The Postfix relay scripts keep following the mail log across rotation and truncation, read each line once and wait for lines still being written
- The Postfix and Sendmail relay scripts wait for MySQL and continue when the database restarts, instead of exiting
- The daily and monthly cron jobs send the report, database cleanup and GeoIP update output to syslog instead of discarding it
- mailwatch_db_clean.php deletes all the expired maillog, mtalog and audit log rows in batches instead of the first batch only
- mailwatch_db_clean.php on Postfix deletes only expired mtalog rows, no longer removes recent NOQUEUE rejections and no longer loops forever on rows without a queue id
- The daily cron job runs the database cleanup even when the quarantine maintenance or report script is not installed
- The GeoIP update through wget works without an account ID, with a proxy and with an account ID together, and over an https proxy
- The total mail by date report runs its maillog query once instead of twice
- The total mail by date report shows the server-wide MTA columns only to administrators, and only when every active filter is on the date
- The password reset form checks that the reset link has not expired when the new password is submitted too
- The password reset request gives the same answer whether the address exists or not, sends no new e-mail while a recent link is still valid, and is limited per client IP address

### Upgrade notes
- Run `upgrade.php`: it creates the new `login_failures` table and lists the users whose password was set to `xxxxxxxx` by the own settings form; give those users a new password. Until `upgrade.php` has run, logins work as before but failed logins are not limited.
- Add `LOGIN_MAX_FAILURES` and `LOGIN_LOCKOUT_MINUTES` to `conf.php` if you want values other than 5 failures and 15 minutes. `DB_CLEAN_OPTIMIZE` now defaults to `false`.
- Copy the updated cron jobs, cron scripts, relay scripts and `tools/LDAP/mailwatch_ldap_sync.sh` over the installed ones, and restart the relay services.

**Full Changelog**: https://github.com/mailwatch/MailWatch/compare/v1.2.28...v1.2.29
