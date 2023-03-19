---
title: Deploy a React / Ruby on Rails App Free
date: 2023-03-18
description: React & Ruby on Rails Deployment
tag: web development
author: Okera Johnson
---


Deploy a React / Ruby on Rails App Free

Alright I got some juice for y’all today especially the people running from the Heroku paywall of doom. So a little bit of backstory one of my friends from flatiron needed help after his app he had hosted on heroku was now a prisoner that would only be back online after he paid. Now me being the king of freebies decided I would help him find a solution that help him deploy his app for free.

So now as you can guess the App was using a react front end and a backend that was Ruby on Rails. Now I normally use Netlify for react sites but this one had rails as well all inside the same repo. After more time than Id like to admit I found a solution that worked on <a href=“https://www.render.com” />

Now let me break down how to configure your React and Ruby on Rails app to run on Render, so signup on their website, open up your IDE and get ready to get your app up.
 Step 1)  Open up the config/database.yml file and find the section labeled Production which should be near the bottom of the file.  Change the production code to the following:

production:
  <<: *default
  url: <%= ENV['DATABASE_URL'] %>

Step 2) Open config/puma.rb delete the code already there and enter the following

max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count

port        ENV.fetch("PORT") { 3000 }

environment ENV.fetch("RAILS_ENV") { "development" }

pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }
workers ENV.fetch("WEB_CONCURRENCY") { 4 }
preload_app!
plugin :tmp_restart


Step 3) Open up the config/environments/production.rb and find the section labeled config.public_file_server.enabled and change it to:

config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present? || ENV['RENDER'].present?

Step 4) Go to “your-app-name/bin” folder and make a file called render-build.sh and enter this code into the file

#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
# clean
rm -rf public
# build
npm install --prefix client && npm run build --prefix client
# migrate
bundle exec rake db:migrate
# postbuild
cp -a client/build/. public/

Step 5) Create a render.yaml file inside of your apps root directory and enter the following code

databases:
  - name: app_name
    databaseName: app_name
    user: app_name

services:
  - type: web
    name: app_name
    env: ruby
    buildCommand: "./bin/render-build.sh"
    startCommand: "bundle exec puma -C config/puma.rb"
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: app_name
          property: connectionString
      - key: RAILS_MASTER_KEY
        sync: false

Step 6) Push all these files to a GitHub that we will use to deploy to Render

Step 7) On the Render dashboard choose new blueprint and choose the repo that you have uploaded your app to

Step 8) Now when you have an option to enter the Rails_Master_Key Value inside of render go back to your IDE go to the terminal and run the following line:

EDITOR="mate --wait" bin/rails credentials:edit

Step 9) After running that command you should get a key that you can enter in the rails master key section of render go ahead and push any changes to your GitHub as you should have a new credentials file at this point

Step 10) After the blueprint starts running in Render click on the on the other one labeled web service find the blue manual deploy button anddd choose clear cache and deploy and Boom that should be it.

I can’t think of any steps im missing Ill probably make a video of this since its a lot of steps good luck coding out and there and shoot me an email if you have some questions Ill help for like 3 dollars on cash app.