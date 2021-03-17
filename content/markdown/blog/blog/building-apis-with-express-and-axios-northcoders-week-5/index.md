---
title: Building APIs with Express and Axios (Northcoders week 5)
date: "2021-02-28"
description: "This week was the start of the backend module of the Northcoders course, and started by picking up on some of the API work started last week. Rather than using the Node-native http module to build servers, we started using the Express framework."
image: "./mvc-api-model.png"
---

![API model code for handling response data](/mvc-api-model.png "API model code for handling response data")

This week was the start of the backend module of the <a href = "https://northcoders.com/" target="_blank">Northcoders</a> course, and started by picking up on some of the API work started last week. Rather than using the Node-native http module to build servers, we started using the <a href = "https://expressjs.com/" target="_blank">Express framework</a>, which allows for better organisation of the code into models, views and controllers (MVC) and better syntax generally. 

Using the MVC model, the file structure roughly follows:

app →  API router → path-specific router →  controller ←→ model

Our `app.js` files were small compared to the others, and it’s main job is to initialise the server and pass requests on to the API router. One example includes just five lines of code:

```javascript
const express = require('express')

const apiRouter = require('./routes/apiRouter.js')

const app = express()

app.use('/api', apiRouter)

module.exports = app
```

Since we were building APIs, the assumption with this `app.js` file is that all requests would include `/api` at the base of the request path.

The request then enters the API router, whose job is to pass path-specific requests on to the relevant router. In our example project, we were building API requests for a Spotify alternative, so path specific requests included `/api/albums`, `/api/songs` and `/api/lyrics`. 

```javascript
const express = require("express");
const albumsRouter = require("./albumsRouter.js");
const lyricsRouter = require("./lyricsRouter.js");
const songsRouter = require("./songsRouter.js");

const apiRouter = express.Router();

apiRouter.use("/albums", albumsRouter);
apiRouter.use("/songs", songsRouter);
apiRouter.use("/lyrics", lyricsRouter);

module.exports = apiRouter;
```

Assuming that a request comes through with a path including `/api/albums`, we’d then be in the albums router file. This basically handles other potential paths, including parametric endpoints (eg `/api/albums/Strange Timez`) and queries (eg `/api/albums?title=’Strange Timez’`). In the example below, we’ll just fetch a list of all albums, so the `albumsRouter.get()` request just includes `’/’` as the path. We could also add more `.get()` requests, for things like `’/:albumTitle’` (parametric endpoint). Parametric endpoints are handled further upstream, in the `models`. 

```javascript
const express = require('express')
const getAlbums = require('../controllers/albums.js')

const albumsRouter = express.Router()

albumsRouter.get('/', getAlbums)


module.exports = albumsRouter
```

After being routed to the correct place depending on the request (eg from the above, when requesting on `/api/albums` we the request is passed on the the `getAlbums` function), we then find ourselves in the relevant controller. 

This is another relatively simple file, and handles the requests that come back from the `model`. It’s main job is to return the result of the request. This could either be the requested data (if the request is a valid one), or an error. For example:

```javascript
const fetchAlbums = require('../models/albums.js')

const getAlbums = (req, res) => {
    fetchAlbums().then((albums) => {
        res.status(200).send(albums)
    })
    .catch((err) => {
        res.status(404).send("Requested album or data does not exist");
    });
}

module.exports = getAlbums
```

The `getAlbums` function that we have passed to from the router includes a request and a response. We are usually most interested in the response here. In the above example, we’re getting back the `albums` data from the `fetchAlbums()` function further upstream in our model. We’re then returning a response with status code 200 (`OK`) and sending the `albums` data. We can also `.catch()` an error, and respond with a 404 code and an error message. 

In our final file in the chain, we have our model which handles the data from the request and how we are going to pass that back to the user. Since we’re requesting the data from another API, we use <a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a> to make a `.get()` request to the external API. 

Since making a request to an API will return all of that data on that path, we might need to handle that data to make sure we are only passing back to our user the relevant data. In general, an API response is going to include a lot of metadata that our user won’t be interested in, so we can usually access the relevant data on the `data` object (e.g. `const albumData = apiResponseData.data`). Now we can handle the `albumData`, which will be an array containing objects with the individual albums’ data. 

In our basic example, we just want to return with a list of all album titles, so we can `map` through the array of objects, find the album titles and add them to a new array. We can then then add a ‘title’ to the array by including it in a new object (which makes it more clear to the user what the response data is), and return the data from the `fetchAlbums()` function. Which looks like this: 

```javascript
const axios = require('axios')

const url = 'https://nc-spotify.herokuapp.com/albums'

const fetchAlbums = () => {
    return axios.get(url).then((apiResponseData) => {
        const albumData = apiResponseData.data

        const albumTitlesArr = albumData.map(album => album.title)

        const albumTitlesObj = {"albums": albumTitlesArr}
        return albumTitlesObj
    })
}

module.exports = fetchAlbums
```

Although the return value inside the axios function is the object with album titles, axios is a `Promise` based client, so the return value will be a pending `Promise`. We therefore need to return this `Promise` from within the `fetchAlbums` function declaration. This is then invoked within the`fetchAlbums` function, inside the `getAlbums` function in our controller, and by using a `.then()` callback, we’re able to use the data from the Promise and return the relevant data (`res.status(200).send(albums)`). 

<div style="text-align:center">***</div><br/>


At the beginning of the week, it took a bit of time to get used to `Promises` and the MVC (model, view, controller) structure, mainly because it means having lots of different file to work with, which are named similar things (eg `/controllers/albums.js` and `/models/albums.js`), but it’s clear the benefit of having things structured this way. I’m still getting used to working with APIs and this structure, I’m sure the above is not the best explanation of what I worked on and there might be mistakes in my explanation. But I think if all of it was included in a much bigger file, it would be much harder to read and explain. As it is, we have five files for the above example, and each do well-defined and relatively simple to explain things. 

<div style="text-align:center">***</div><br/>


At the end of the week, we took a complete left turn and set JavaScript and APIs to one side to do some work on SQL and PostreSQL — next week we’ll be bringing it together and working with PostreSQL and Node together. 

