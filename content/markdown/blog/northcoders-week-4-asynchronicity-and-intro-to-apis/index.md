---
title: Asynchronicity and intro to APIs (Northcoders week 4)
date: "2021-02-19"
description: "It was a quiet start to week — Monday was ‘Revision Day’. It was a good opportunity to go back over some of the more complex topics covered over the last couple of weeks. I worked through the Northcoders repo provided as usual, which included challenges on..."
---


##Monday
It was a quiet start to week — Monday was ‘Revision Day’. It was a good opportunity to go back over some of the more complex topics covered over the last couple of weeks. I worked through the Northcoders repo provided as usual, which included challenges on:

- array methods
- higher-order functions and closure
- object-oriented programming
- recursive function

I’m comfortable with array methods like `.map()`, `.filter()` and `.reduce()` — although, as one of my code reviews highlighted, it’s sometimes difficult to avoid the automatic draw to using a `for loop` instead. 

The object-oriented challenges also went fine. I’d spent all of Thursday and Friday last week working on an object-oriented project, building things through classes and constructors, so this challenge (to build a ‘vending machine’ tool) was a good continuation on OOP methods. 

Higher-order functions (HOFs) and recursion was a bit more challenging, which wasn’t a surprise to me. As me and other Northcoders have said, one of the difficulties in grasping HOFs is that they are often pretty generalist, so it’s difficult to see what’s going on with them at first glance. An example of one of the HOFs I wrote to meet the challenge tests:

```javascript
function invert(func1) {
    function newFunc(...args){
        return !func1(...args)
    }
    
    return newFunc
}
```

To me, these ‘one size fits all’ functions, that allow all sorts of functions to input into them, seems a bit like contradicting the principles of TDD. They feel more generalist than specific solutions to specific problems. But this might be because I’ve not seen much real-world application of them yet.

The recursive challenges also took a lot of head-scratching, but I made decent progress with them. One solution I built was a function to take a nested object (of unknown depth) and return an array with the key value pairs. 

```javascript
const deepEntries = (obj) => { 
    let objCopy = {...obj} // creates a copy of the input, so as to not mutate
    let keyValArr = []

    for (const key in objCopy){
        if(typeof objCopy[key] === 'object'){ // checks if the value is itself an object
            keyValArr.push([key, deepEntries(objCopy[key])]) // and pushes the object back into the function if it is
        } else {
            keyValArr.push([key, objCopy[key]]) // pushes the key/value pair to the array, when the value is not an object
            delete objCopy[key] // deletes the key/value pair from the copied object, so the function can re-run without needing to deal with this pair
            deepEntries(objCopy) // runs the function again with the remaining object
        }
    }

    return keyValArr
};
```

##Tuesday and Wednesday

We spent a couple of days having an introduction to asynchronicity in Node, the Node API, event loop and task queue. This all makes sense in theory — processes need to happen asynchronously for a number of reasons, including things like user input (eg waiting for a user to trigger the next function) and network response (eg some things can only trigger when network response is received).

The challenges for this two-day sprint included querying servers, which was an interesting introduction to fetching data from external sources. We also used Node’s filesystem (`fs`) module to create files and folders in our local file structure. I’d not come across this before, but it makes total sense why you’d need JS/Node to be able to create files, folders and write data to them. 

##Thursday and Friday

At the end of the week we went through some basic principles of the internet (IP addresses, DNS servers, packets) and the Node `http`/`https` modules which can be used to build a basic server. 

On Thursday this involved creating an initial `https.request()` calls to a Northcoders Heroku app in order to get back some ‘secret’ instructions. After this more complex calls were needed to do things like make dynamic calls to parametric endpoints (eg `api/people/${username}`) and to use the Node fs to write the response to new files. 

On Friday, as well as making API calls to a server, we had to build the server as well, using http.createServer(). We also set up if logic to determine what should happen when various calls are made to the server, depending on the URL. The logic included handling requests to the API base URL (/api), parametric endpoints (`/api/northcoders/${username}`), and also to include query parameters (/api/northcoders?JobTitle=’mentor’). 

