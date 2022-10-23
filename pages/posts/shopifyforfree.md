---
title: How to host and use Shopify for free
date: 2022-10-23
description: How to use Shopify Developer account to test Apps
tag: web development
author: Okera Johnson
---

Wow I am so excited to actually be here writing my third blog post. I know its only number 3 this website still is a little empty island in the middle of the World Wide Web but as someone who’s terrible at follow through this is a big deal for me. If you are here hoping to learn something useful you’re in the right place Im gonna keep on bringing some informational content to add to your mental library. I promise to work on the grammar as well. 

Okay so this weeks topic is how to host a Hydrogen site on Netlify while using Shopify for free. So first for this I had to go ahead and create a Shopify developer account so that I could test out using Shopify for free. The Shopify developer program requires you to signup to be a partner as well. Im not sure if this lets you use all of Shopifys functionality for free. I do know it lets you do things like access the Storefront API for free anyways here is the link to sign up https://accounts.shopify.com/signup?rid=20b68648-c65d-4e43-a0a4-dcecd53deb37 

So after you sign up with the Shopify dev program to acess their features, in order to make this easily hosted on Netlify I went ahead and forked this repository https://github.com/netlify/hydrogen-netlify-starter 

After forking and then cloning the repo above it sets you up with a demo store in Hydrogen thats using products from an example Shopify store. So what you’re going to want to do is create a test Shopify app with the developer/partner Shopify account you made. You also need to create a Storefront API in your account as well as upload products to your account that you want to appear on your website.  

Following the readme inside the cloned repository will guide you on how to setup your stores data to appear on the website you are developing. You will have to make changes inside the hydrogen-config.js file in order to add your storefront data to the website. 

Once you have made these changes you can edit the CSS inside the index.css file inside the styles folder. Ill be honest I was struggling to figure out how to edit the front page of the website so I kind of cheated and used the placeholders.js file to edit the placeholders directly instead of doing it the actual hydrogen way. I promise in a future post I will go into how the right way works but to get the website live now I used the method mentioned here. Anymore changes you need to make will mostly go through the App.server.jsx file. 

Once you have made the changes you wanted go ahead and push the changes to the Github repository. Go to Netlify if thats the hosting you want to use and setup a new project and link your repository as the websites code to run and deploy as a website and Voila. Now you have a working website that is using Shopify for free. I haven’t fully explored what features of Shopify this lets be used for free but it at least lets you work with testing their front end. Here is a website I built using the methods I mentioned in this blog post, the site has a way to go but its a good start, https://www.dogcare.cc/. 

Talk to you soon, 
Okera