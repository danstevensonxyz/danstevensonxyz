---
title: Learning about Jest and array methods (Northcoders week 2)
date: "2021-02-05"
description: "This week the complexity has ramped up on the Northcoders course, covering topics such as value vs reference, closure and higher-order functions. We’ve also worked on a couple of mini sprints of two days each, each one working in a ‘pair programming’ setup."
---

This week the complexity has ramped up on the Northcoders course, covering topics such as value vs reference, closure and higher-order functions. We’ve also worked on a couple of mini sprints of two days each, each one working in a ‘pair programming’ setup.

##Monday

The week started on a light note, with a lecture on the method and benefits of pair programming. Pair programming works like this: two people work on the same problem on the same computer. One has control of the keyboard and is called the ‘driver’. The other is called the ‘navigator’ and tells the ‘driver’ what to type in. Obvious questions about this would be: ‘what’s the point of having two people do a job that is effectively just being done by the navigator? Doesn’t this double the cost of development?’ The answer is that pair programming has many benefits, including sharing knowledge and catching errors more quickly than if a lone programmer was working alone. 

We were also introduced to <a href = "https://jestjs.io/" target="_blank">Jest</a>, a JavaScript testing suite which we used for the rest of the week. Up to this point, console.log-ing has been enough to prove whether solutions are working or not, but it’s clearly not enough when dealing with complex and evolving software projects. Jest allows you to build in multiple tests and run them all together, to make sure they’re still passing when things change. 

Test-driven development was also covered. This is the concept that any solution should start with an appropriate test, and the test should start in its most basic form and then increase in complexity only when needed. This keeps software lean and avoid unnecessary complexity being introduced. 

If, for example, the solution needs to camelCase a sentence, a good first test would be: ‘when passed an empty string, return an empty string’. Then it could be: ‘when passed a single word, return that word in lower case’. Then: ‘when passed two words, return the first in lower case and the second word’s first letter capitalised, with no spaces’. So far the solution would be pretty simple and wouldn’t need any sort of loops or recursion. Only after the tests so far have passed would you need to test ‘when passed a sentence of any length, return the first word in lower case and each subsequent words’ first letter capitalised, with no spaces.’

##Tuesday

The lecture on array methods covered some familiar things as well as some good explanations of higher-order/callback methods like .map(), .filter() and .reduce(). 

Something I didn’t realise before that was while .map() iterates through the relevant array and returns a modified value on each, .filter() returns a true/false value and then either includes/excludes the value on the new array. 

**`.map()` example:**
    
```javascript
function tripleNum(num) {
    return num * 3;
}

const nums = [1, 2, 3, 4, 5];

const tripledNums = nums.map(tripleNum);
console.log(tripledNums); // [3, 6, 9, 12, 15];
```
<br/>

**`.filter()` example:**
    
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter(function(val) {
    return val % 2 === 0;
});

console.log(evenNums); // [2, 4, 6, 8, 10];
```

Most of the morning and afternoon was spend working through katas in pairs. It wasn’t a surprise to me that having to explain solutions to someone else is much more difficult than having control of the keyboard and cracking on with it. It was made slightly more difficult by having to simultaneously dictate tests to be written for each solution, which is not something I’d had much practice with. It feels a bit like learning a language, in that you can feel yourself trying to exercise fairly sedentary parts of your brain. Also as with learning a new language, to get anywhere you have to spend a fair amount of time rambling on and hoping what you’re saying makes sense. 

##Wednesday

Most of Wednesday was spent continuing with the pair programming katas from Tuesday. 

We also had a lecture on the difference between ‘reference’ and ‘value’. 

Basically, primitive data types (string, number, boolean, etc.) are held as values. This means that if two variables both have the value of 123, they have the same value. 
So:

```javascript
let num1 = 123
let num2 = 123
console.log(num1 === num2) // true
```

However, non-primitive data types (objects and arrays) have their contents stored as references. This means the content is stored as a reference somewhere in JavaScript memory, and the variable references the ‘address’ to the part of memory. 

Each time an object is declared, a new space in memory is created with the contents of the object, and the variable for that object points to that part of memory. Even if two objects are declared with the same contents, a new space will be created in memory. Only if a new variable is created and assigned to the value of another object will they point to the same space. 

```javascript
let obj1 = {number: 123}
let obj2 = {number: 123}
let copyObj1 = obj1
console.log(obj1 === copyObj1) // true
console.log(obj1 === obj2) // false
```

Copying objects as above can be risky though, since mutating the object with variable name obj1 will mean references to copyObj1 will also be mutated. This can lead to unintended consequences, if the objects are supposed to be separate entities. 

The way to avoid this is to use the spread operator:

```javascript
let obj3 = {...obj1}
console.log(obj3) // {number: 123}
```

Using this method, we have created a copy of obj1, but made a totally new object in obj3 that can then be mutated without causing any changes to obj1.

##Thursday

On Thursday we learned about closure — the concept of a function ‘peeking inside’ inner functions to see if any variables are references there from the outer function, and if they are, to not garbage collect those references at the end of the outer function’s local execution context. (And for a better explanation, MDN does a pretty good job). 


##Friday

We finished the week up by learning about some enhanced testing methods, including how to test the number of times a function has been called. E.g.

```javascript
expect(functionName).toHaveBeenCalledTimes(5);
```

This is useful when functions don’t have a return value, but it’s important to check that the function has been called a certain number of times. 
Another example if to check that the function has been called with a certain input. E.g.

```javascript
expect(functionName).toHaveBeenCalledWith(["array", "of", "values"])
```
