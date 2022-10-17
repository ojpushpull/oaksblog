---
title: Web Scraper Theorycrafting
date: 2022-10-17
description: Planning out a web scraping tool
tag: web development
author: Okera Johnson
---

Ok so I promised a post week so here is that post I am so excited with the fact I am being consistent and seeing this through that I am totally OK with the fact that this blog post is not going to be stellar. Regardless I shall do my best to make sure this post gives some value. 

Ok so what I want to accomplish is getting up to date information on grants available for non profits. I want to build a tool that will aggregate data of the grants so the user can get the data they need and have a way to filter the data to get the ones that just apply to them. 

Now for the sake of this post I am going to assume that there isn’t a valid tool that is already out and if one does exist Im going to take it a step further and say that I can improve upon it.  Anyways I want to build out this tool using javascript. 

Javascript is a great language for dealing with website applications so I am going to figure out how I can use Javascript to develop the following features, crawling sites for grant data, filtering data based on grant purpose, saving and updating data as needed. 

So now that I know what features I want to have I can research how I am going to accomplish those within javascript easily. Getting data off websites is a practice commonly called web scraping. NodeJS has a library called Cheerio this library allows Javascript to easily parse website data and gives an API to manipulate and display the data. 

The data can be filtered using vanilla Javascript.  By saving the scraped data in an array you can write functions to sort through the data based off of different information that the grants contain. 

Databases are a perfect way to store the data that is gathered for quick access. I have been working with MongoDB to store data from my Javascript applications and using SQL to manipulate the saved data. The tool can have a schedule built in to run and scrape more data as often as the developer needs. 

So to wrap this up this blog post explores from a very high level view how javascript can be used to built a full stack application that offers multiple features. I will dive deeper into this post at a later date when I launch a web scraper.