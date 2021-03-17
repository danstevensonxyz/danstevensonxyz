---
title: Building APIs with Express, SQL databases, PostgreSQL, Knex and Supertest (Northcoders week 6)
date: "2021-03-07"
description: "This week I worked on a couple of mini SQL API projects, building on last week’s work with Express. It involved learning a few new processes (e.g. seeding databases) and new packages/tools (e.g. Knex). It was also interesting because it’s the first time I’ve worked on a project bridging the gap between data stored in two languages (JavaScript/JSON and SQL)."
image: "./knex-query.png"
---

![Code showing a SQL database query using KnexJS](/knex-query.png "Querying a SQL database using KnexJS")

This week I worked on a couple of mini SQL API projects, building on <a href="/blog/building-apis-with-express-and-axios-northcoders-week-5">last week’s work with Express</a>. It involved learning a few new processes (e.g. seeding databases) and new packages/tools (e.g. Knex). It was also interesting because it’s the first time I’ve worked on a project bridging the gap between data stored in two languages (JavaScript/JSON and SQL). 

So here I’ll cover some of the tools used and how each contributes towards the full picture of having an Express API make queries to a SQL database.

##Test / Dev databases

Before building an API that can interact with SQL databases, you need the databases in the first place. On my projects, I created a test and dev database, which are used during building and testing, and which replicate the structure of what the production database will look like. 

One major difference between test/dev and production is that each time the test/dev databases are interacted with, they are dropped and re-created from fresh. This way, a small test dataset can be used to seed the database and the data in the database is kept consistent for testing purposes. 

##Knex

After creating test databases, the next requirement is to add test data to them. This is best done using a ‘seed’ file, to take the test data and populate the databases with them each time the database is restarted. This is where Knex comes in.

<a href="http://knexjs.org/" target="_blank">Knex</a> is a JavaScript-based SQL query builder. It uses syntax which is very close to the SQL syntax for making queries from JavaScript files to SQL databases. 

Assuming the test data is in JSON format, a `knexfile.js` includes info about the database name and seed files and a `dbConnection.js` file creates a connection to the relevant database. The `dbConnection.js` file will look like this:

```javascript
const knex = require('knex')
const dbConfig = require('../knexfile.js')

const dbConnection = knex(dbConfig)

module.exports = dbConnection
```

Then a `seed.js` can use Knex syntax to insert the relevant JSON data into the database. Here’s example syntax of inserting `ownersData` (a JSON object) into `’owners’` (a SQL table):

```javascript
exports.seed = (dbConnection) => {
    return dbConnection
        .insert(ownersData)
        .into('owners')
        .returning('*')
}
```

With a test database and Knex seed files, the following command can be run to 1) drop/create the test database and 2) seed the database with test data:

```javascript
psql -f ./db/test-setup.sql && knex seed:run
```

##Express

With the database setup and seeded with test data, the API to the database can be created using Express. 

An `app.js` file does the following:

- requires in Express and initialises an `app` 
- tells the `app` to use `express.json()` (required for parsing request data coming in as JSON, eg for POST requests)
- routes to an API router
- handles any generic errors (can be expanded by building in specific error handling functions).

```javascript
const express = require('express')
const apiRouter = require('./routes/apiRouter.js')

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.use((err, req, res, next) => {
    console.log(err)
})

module.exports = app
```

Next, an `apiRouter.js` routes requests to specific paths (in our example: /api/owners)

```javascript
const express = require('express')
const ownersRouter = require('./ownersRouter')

const apiRouter = express.Router()

apiRouter.use('/owners', ownersRouter)

module.exports = apiRouter
```

An `ownersRouter.js` routes more specific requests (eg GET / POST / DELETE requests to specific / parametric endpoints)

```javascript
const express = require('express')
const {getOwners, postOwner, deleteOwner} = require('../controllers/ownersController.js')

const ownersRouter = express.Router()

ownersRouter.get('/', getOwners)
ownersRouter.post('/', postOwner)
ownersRouter.delete('/:ownerId', deleteOwner)

module.exports = ownersRouter
```

An `ownersController.js` handles the response to specific requests (eg requesting a list of all owners):

```javascript
const {fetchOwners} = require('../models/ownersModel.js')

exports.getOwners = (req, res, next) => {
    const queries = req.query
    fetchOwners(queries).then((owners) => {
        res.status(200).send({owners})
    })
}
```

Finally, an `ownersModel.js` uses Knex to query the database and return relevant data. In the below example, Knex performs a number of roles:

- a connection is made to the database
- Knex queries the database using syntax similar to SQL syntax (eg `.select(“*”)`)
- arguments from the request can be passed into the `fetchOwners` function, including `req.query` from the controller
- Knex can use these queries to do things like sort by the queried condition (eg a query of `?sort_by=age` is translated to `.orderBy(queries.sort_by || 'owner_id', 'asc')`, where `owner_id` is a default value to sort by in case no sort queries are passed
- Knex has a `.modify()` method, which allows for adding conditional logic to the query and then chaining a `.where()` method to the query if a particular condition is met. 

```javascript
const dbConnection = require('../db/dbConnection')

exports.fetchOwners = (queries) => {
    return dbConnection("owners")
        .select('*')
        .orderBy(queries.sort_by || 'owner_id', 'asc')
        .limit(10)
        .modify((querySoFar) => {
            if(queries.max_age !== undefined){
                querySoFar.where('age', '<=', queries.max_age)
            }

            if(queries.surname !== undefined){
                querySoFar.where('surname', '=', queries.surname)
            }
        })
        .returning('*')
}
```

##Jest / SuperTest

Following proper test-driven development practices, <a href="https://www.npmjs.com/package/supertest" target="_blank">SuperTest</a> works with the <a href="https://www.npmjs.com/package/jest" target="_blank">Jest</a> test suite to make connections to the database through the Express API and evaluate the actual response to what was expected. This can include things like `.expect(200)` for checking the correct HTTP response code is received and checking that the response body includes the expected properties (e.g. `owner_id: expect.any(Number)`)

An example of what would be added inside a Jest `it` / `test` block would be.

```javascript
return request(app)
    .get('/api/owners')
    .expect(200)
    .then(({body}) => {
        expect(Array.isArray(body.owners)).toBe(true)
        expect(body.owners[0]).toMatchObject({
            owner_id: expect.any(Number),
            forename: expect.any(String),
            surname: expect.any(String),
            age: expect.any(Number)
        })
        expect(body.owners).toBeSortedBy('owner_id', {
            ascending: true
        })
    })
```

Using SuperTest has the added comic benefit of having to use this gem of a line: 

```javascript    
afterAll(() => dbConnection.destroy())
```

Since SuperTest creates a connection to the database and Jest checks for the response, this `afterAll` … `.destroy()` checks that all requests have been made, and after they have it kills the connection to the database, so that Jest knows that all responses have come back. 