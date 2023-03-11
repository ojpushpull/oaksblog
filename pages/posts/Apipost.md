---
title: How to return specific results from an Api with React
date: 2023-03-11
description: Learning a bit more about how to return the API data you want.
tag: web development
author: Okera Johnson
---

"All APIs arent built the same" - Abraham Lincoln. Such a deep quote really says alot about the world we live in today Im just now starting to understand what he meant. So the backstory here is I wanted to use an API that I created from an excel sheet of data. It has nearly 1000 different objects and because it was originally a spreadsheet the data wasnt structured in a manner that was intended to be used as an API. Here let me show you a sample of how the API look.

<img src="https://i.ibb.co/MNxFBPX/ojbp1.png" alt="ojbp1" border="0">

(Finally some pictures Blog lvl up!)

Ok so alot of APIS usually have a id value, a key value, an overarching title(example: the API would have a list called animals and a section called dogs) and nested endpoints which would be like a subsection of a subsection. This API however was just a bunch of objects with lots of values in each one. The API being structured like this made most of my calls just return all the results each time. Using postman and trying a ton of different solutions there showed no results I was going brazy with this API. Eventually I found a method that worked in getting specific results back from the API using React.

<img src="https://i.ibb.co/WcftGRb/ojbp2.png" alt="ojbp2" border="0">

Alright so a quick run down of what to do here. Fetch is where you enter the URL of the API you want. Next enter the number of the record youre looking for where the zero is in console.log remember arrays start at zero when trying to choose the recordd you want, And finnally enter the value you are trying to return where PROVIDER_CITY is in my example. It seems so simple now but I had tried so many method of returning API data and it only returned the entire list each time but this finally allowed me to slice open the API and get to the meat. Ill follow this post up with another one once I make use of this API in a project im planning on.
