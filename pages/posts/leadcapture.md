---
title: How to add an email capture to a react website
date: 2023-02-28
description: A quick guide on implementing a mailchimp form in react
tag: web development
author: Okera Johnson
---

Im here to drop a little bit of knowledge on my blog to help you guys and help me. The way I see it if I keep adding here and there eventually my blog itself can be a resource for people looking to take their skills to the next level. This post is going to be a quick guide on how to implement a email capture form into a website.

So you can technically make a form that saves emails into a database you create but if you plan on doing things such as sending a newsletter, creating email blasts or creating an email sales funnel it might suit you to make use of a email management tool. These tools allow you to do useful actions such as setup auto responses, create a scheduled list of emails the list goes on. Email is a powerful marketing channel so it makes sense to tap into it when you can. I decided to go with Mailchimp to manage my email marketing they offer their services for free for people with small lists so it makes sense for people starting out.

Alright for this guide I’ll show you how to setup a Mailchimp email capture on a react website. 

Step 1) Setup an account with Mailchimp https://mailchimp.com/ 

Step 2) Inside Mailchimp go to the dashboard and choose signup forms and from there pick up embedded forms. 

Step 3) Inside the embedded form code copy the url within the parenthesis that is within the tag named "form action"

Step 4) In the root of your react project create a file named .env and within that create a variable named REACT_APP_MAILCHIMP_URL and assign the copied url to the variable

Step 5) Now in your terminal type in rpm install react-mailchimp-subscribe

Step 6) Now in the file with your react component tree usually your app.js file Import MailchimpSubscribe from react-mailchimp-subscribe

Step 7) Inside your app component tree call MailchimpSubscribe and pass the data from your .env file to the component here is an example of how it will look 


And boom that’s it you should have a working email capture form now. The one I have running on this website was implemented following these exact same steps so do me a favor test it out by entering your email in the box just to make sure its working.