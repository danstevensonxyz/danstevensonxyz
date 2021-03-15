---
title: Building an API from scratch and hosting with Heroku (week-long API project, Northcoders week 7)
date: "2021-03-14"
description: "This week I completed a week-long project, which involved building an API, data manipulation between JSON and SQL and finally hosting the API on Heroku."
---

This week I completed a week-long project, which involved building an API, data manipulation between JSON and SQL and finally hosting the API on Heroku. 

Most of the things I’ve worked on while studying with Northcoders have been 2- or 3-day projects and working alongside another student in a pair-programming way. This week was a bit different, in that it started as a pair-programming project for the first day and a half, and then we split and carried on building the project solo. 

It’s been one of the best projects that I’ve worked on at Northcoders, but also it’s probably the one where I’ve learned the least (which I don’t mean in a negative way). 

It’s been one of the best because of the amount of time I’ve been able to spend on it, starting from scratch and building it out to a fully functional and hosted API. 

It’s been one where I might have learned the least new stuff, because it’s effectively been taking the things taught over the past few weeks (APIs, servers, SQL) and implementing them. 

The main thing it reinforced to me was that it’s work that I enjoy. I love learning new things, but it’s also satisfying to take those new skills and be able to apply them to a practical project. To go into a career as a software developer I think it’s useful to enjoy both learning and building.

Overall the project went pretty smoothly. It’s an API for a Reddit-style site, which includes data on users, topics, articles and comments. Using relational databases, users are linked to articles and comments; topics are linked to articles; etc. 

Util functions transform the seed data (which is in JSON format), to make it fit the required format in the SQL tables. For example, there’s a function to change the key of a JSON object, which takes as arguments the JSON data, the old key and the new key. The function then maps over the JSON objects to change the key on each (e.g. changing `created_by` to `author`, as required by the SQL table column headers). Other functions change data fields to references (e.g. rather than referencing the article name in the comments table, it should reference the article ID). Another function changes the `created_at` data from Unix number format (milliseconds since 1970) to date string format.

There was a period this week when I had a tricky bug. I asked for a bit of guidance from one of the tutors, but because they were all busy helping other people at the time, I had to crack on for another hour. In that time, I came to a solution (although it wasn’t the best solution, it worked), and in doing so broke other bits of the code which then needed fixing. 

When one of the tutors spoke to me, she said “your work on projects won’t always be as hard as this,” and I laughed and said, “to be honest, I don’t mind if it is.” I like the feeling of being on a really hard problem, being stuck, but knowing that there’s got to be a solution, and one I know how to implement. It feels like the solution is just beyond your grasp, but with a bit of banging your head against it, there’s always a solution.

A lot of the time on the project was spent writing Jest tests for various endpoints (e.g. `GET /articles/:article_id` or `DELETE /comments/:comment_id`) and then building the endpoints using Express routers and controllers, and models containing Knex methods to query the SQL data. 

Finally I followed a pretty straightforward workflow to get the API hosted on Heroku, which basically involves signing up for an account, adding a bit of config to the application so that a production instance of a PostreSQL table is used. Heroku creates a new Git branch, so when pushing to it the hosted version is updated, which makes deploying any changes really easy. 