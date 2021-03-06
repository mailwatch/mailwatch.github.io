---
layout: news_single
title: 'MailWatch 1.2.0-beta5 released'
date: 2014-05-26 20:23:29 +0200
author: endelwar
version: 1.2.0-beta5
categories: [release]
---

A new beta of MailWatch is released in the wild.

## tl;dr

 - [MSRE](http://msre.sourceforge.net) integrated in MailWatch
 - GeoIP moved to binary files
 - Removed useless code and fixed a lot of not working things

## BC Break
* In conf.php all boolean values are true boolean now. Check that there is no quotation marks around _true_ or _false_ values.
* GeoIP lookup needs binary database to work, download them from _tools_ menu

## Changelog

 - Reorganized all libraries to lib directory, removed fpdf (which was not used) and removed lib's symlinks
 - Moved to GeoIP binary data file, dropped CSV import to database
 - Added a layer of security to cronjob, which don't execute if needed variables aren't set
 - Improved compatibility with PHP 5.5
 - New login form design
 - Added LDAP mail field variable to be compatible with more systems
 - Corrected free disk space calculation
 - Fixed Domain User operation on white/black lists
 - Added the ability to show/hide the software version page
 - Added MailScanner Rule Editor functionality from [http://msre.sourceforge.net](http://msre.sourceforge.net). Fixes over original MSRE:
   -  Requires authenticated MailWatch Admin user
   -  Rules with 'action' of 0 are now correctly handled (as in size rules).
   -  Rule descriptions start immediately after the # character. This stops MSRE from chopping off 1st character of comments which weren't generated by MSRE.
   -  Treat blank lines in rules as comments
   -  Sort rule file names into alphabetical order before listing
   -  Allow "FromAndTo:" keyword in rule files
   -  Allow "Virus:" keyword in rule files
   -  Fix very broken 'and' handling
   -  Ensure that the 'default' rule stays the default rule forever
   -  Fix handling of escape characters in posted form
   -  Strip spaces from entered Target and AndTarget fields
   -  Fix case-sensitivity in keywords like "FromOrTo:"
   -  Use MailScanner's rule keyword matching algorithm
   -  Tighten up input validation based on fixes in the original MSRE 0.2.3 CVS
   -  Tighten up rule parsing to ensure that generated rules are complete
 - Fixed AutoCommit error on MailWatch.pm
 - Better logout process
 - Hiding chroot mounts from drives list
 - Better directory traversal prevention
 - Fixed [CVE-2008-5991](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2008-5991)
 - Corrected html and javascript errors
 - Removed W3C and SourceForge logos from footer
 - Fixed spelling mistakes/typos
 - Code cleanup