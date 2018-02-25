---
layout: post
title: List of All Countries
excerpt_separator: <!--more-->
---

Back [in 2012](https://github.com/umpirsky/country-list/commit/50807f21ab61a31510b8ba20c0908b11201d7576), I was sitting in front of the screen and asked myself:

> What do most websites need, no matter what tech stack they are built on?

The mind flow was something like: login and registration form, ok, they have some fields, most of them empty...but one of them not - the **select country field**. You need to feed it with data, and where's the data coming from?

![Flags]({{site.baseurl}}/images/posts/2018-02-24-list-of-all-countries/flags.jpg)
<!--more-->
<em><small> &copy; Penn State - [https://www.flickr.com/photos/pennstatelive/16216912657](https://www.flickr.com/photos/pennstatelive/16216912657)</small></em>

I started googling around for a good data source, searched on GitHub, but no good resource was found back then. I needed something that is available in a variety of formats, multilingual and easy to use. So scraping [Wikipedia](https://en.wikipedia.org/wiki/List_of_sovereign_states) was not an option (although that would probably work for this project).

Since I enjoy building stuff, I sit down and wrote a piece of PHP code which generates a list of all **country names** with **ISO 3166-1** codes. The list was available in JSON, yaml and PHP at first. It used [ICU](http://site.icu-project.org/) as the data source, so staying up to date was not the problem.

It was very simple to use, but it was a small weekend project, and I expected nothing. But project grew and got traction, I never thought something so silly as list of countries can be so popular.

## Formats and Languages

Formats available:

* [Text](https://github.com/umpirsky/country-list/blob/master/data/en/country.txt)
* [JSON](https://github.com/umpirsky/country-list/blob/master/data/en/country.json)
* [YAML](https://github.com/umpirsky/country-list/blob/master/data/en/country.yaml)
* [XML](https://github.com/umpirsky/country-list/blob/master/data/en/country.xml)
* [HTML](https://github.com/umpirsky/country-list/blob/master/data/en/country.html)
* [CSV](https://github.com/umpirsky/country-list/blob/master/data/en/country.csv)
* [SQL](https://github.com/umpirsky/country-list/blob/master/data/en/country.mysql.sql)
* [PHP](https://github.com/umpirsky/country-list/blob/master/data/en/country.php)
* [XLIFF](https://github.com/umpirsky/country-list/blob/master/data/en/country.xliff)

All formats are also [available](https://github.com/umpirsky/country-list/tree/master/data) in **all languages**.

## Everybody Needs a Country Table

For developers, this is the most common case, they simply need a country databaase table. There are **SQL dumps** for each DBMS:

* [MySQL](https://github.com/umpirsky/country-list/blob/master/data/en/country.mysql.sql)
* [PostgreSQL](https://github.com/umpirsky/country-list/blob/master/data/en/country.postgresql.sql)
* [SQLite](https://github.com/umpirsky/country-list/blob/master/data/en/country.sqlite.sql)

## Numbers, 6 Years Later

* **3,226** stars on [GitHub](https://github.com/umpirsky/country-list)
* **965** forks
* **433 624** installs on [Packagist](https://packagist.org/packages/umpirsky/country-list)
* Many libraries and Wordpress plugins depend on it

## Child Projects

Since it got popular, I realized that this data was not easily accessible for many developers. So I thought further, what else can be exported as a list of this kind?

That's how child projects were born:

* [Currency List](https://github.com/umpirsky/currency-list)
* [Language List](https://github.com/umpirsky/language-list)
* [Locale List](https://github.com/umpirsky/locale-list)
* [TLD List](https://github.com/umpirsky/tld-list)

All build with [List Generator](https://github.com/umpirsky/list-generator), simple export engine I extracted from the [original project](https://github.com/umpirsky/country-list). So, if you have idea for a similar project, feel free to use it. ;)

## Thanks

I just want to thank to everyone who is using, contributing or reporting issues. Yes, even you [complaining about Macedonia](https://github.com/umpirsky/country-list/issues/9) :). I cannot change data source, I am the first who can complain about Kosovo being listed as a sovereign country, but that did happen (since version 2.0 if I remember correctly). I simply have no control over the data source, but I can say it here: **Kosovo is Serbia!** :)
