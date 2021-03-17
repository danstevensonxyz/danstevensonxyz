---
title: Recursion and object-oriented programming (Northcoders week 3)
date: "2021-02-12"
description: "The week started, as arguably all do, with Recursion! For loops are second nature now, and most of Monday was spent pair-programming and thinking about similar katas to the ones that have previously been done using for loops, but refactoring in recursion instead. "
---

##Monday

The week started, as arguably all do, with Recursion!

For loops are second nature now, and most of Monday was spent pair-programming and thinking about similar katas to the ones that have previously been done using for loops, but refactoring in recursion instead. 

##Tuesday

Recursive functions are most commonly used when there is no other option. Loops are used when possible, because it means the function needs to be invoked only once and therefore the demands on memory is minimised. On Tuesday we practiced on katas where recursive functions are required, such as cycling through an unenumerably deep object or array. 

##Wednesday

Wednesday included an introduction to object-oriented programming, factory functions and the ‘this’ keyword. I’ve come across the ‘this’ keyword a lot in my previous work on the Digital Acceleration Project, where I used it hundreds/thousands of times to build logic into form elements (e.g. ‘this’ textbox should display based on a particular value on ‘this’ radio button). But it was good to get a much deeper understanding of its application.

It was also a day of solo-programming. I’m enjoying the pair-programming, but it was good to have a day of self-study, reviewing my notes and doing some extra practice in the middle of the week. 

##Thursday

The object-oriented theme continued on Thursday when we had a lecture on JavaScript prototypes and constructors. A lot of what was covered included older methods, but as we were told, it’s necessary to be able to use and understand these methods on the likely chance of having to work on legacy code. 
A new pair-programming two-day sprint started, and rather than just going through a series of kata, we were given a spec to build a Pokémon battle game! (Nostalgia levels were high, and increased when I found this YouTube video of Pokemon on the Gameboy!) 

The rough spec was to build Pokemon, trainer and battle constructor functions, which have various properties (e.g. Pokemon types, strengths, weaknesses, striking power, etc) and then to bring the functions together in a command line battle game. 

On the first day we had to build using constructor functions and me and my pair made good progress in building the tests and structure of these constructors. 

##Friday

In the morning we had a lecture covering JS classes - a more current way of building object-oriented functions, compared to using prototype constructors. Classes seem to have more slick syntax and inheritance from parent to child classes is pretty easy to understand. 

In the sprint, the first task was to refactor our code from yesterday to bring it up to speed with the new class methods. This seemed like a time-consuming exercise, when I was much more interested in building out the functionality of the game, but luckily it didn’t take too long. 

We’d built the majority of what we would need in our functions, and after getting to a stage where we had a function that could reduce the ‘health’ of the enemy Pokemon, even though there was more functionality needed, we decided to jump into learning about the command-line interface tool, Inquirer.JS. 

From experience on previous software and agile projects, I regularly have a bias towards getting something working, even if it’s not perfect. And when working with new technology that is a dependency for the project, the sooner you can become familiar with it, the better. 

So we jumped into Inquirer.JS. I’ve not come across similar software before, so wasn’t sure what to expect. As usual, the documentation on this open-source product is generally really good. It’s basically a way of building a CLI app which offers a series of questions, different response formats like free text with validation or radio select, and the possibility to branch to relevant questions depending on previous input. But it wasn’t clear how recursive questions could be built in from the README file, so we decided to jump in to the sample files and work it out from there. 

There’s an element of asynchronicity in the way the code is handled (on most of the examples, the functionality allowed multiple entries which are then stored and processed after the last question was answered, and then output), but we needed a way of printing back to the user their Pokemon’s health and the health of their opponent after each round. A few checks of the documentation, shuffling some of the code around, and a bit of trial-and-error, and we had a working process. This included the ability to select a trainer, a Pokemon, and have a ‘battle’ with another Pokemon. Each Pokemon was created using our Pokemon class function, and each had different strengths and weaknesses, meaning that after each strike, each Pokemon would be more or less badly damaged. When the health level had dropped from 100 to 0 on either of the Pokemon, a winner was announced. 

It’s basic, but it’s a working battle game which met the main spec, and was built in less than a day’s coding time (when lecture and other non-coding time was taken out). And after the basic functionality was there, it took only another half an hour before we were able to build in more functionality like more interesting feedback messages, the ability to add more Pokemon characters and the ability to ‘run away’ from a battle if the heat was on! The next bit of functionality I would add is the ability to have more variety in the battle strikes (i.e. being able to select different strike methods which we more or less ‘effective’), and an element of randomness in the strike that was received from an enemy. 

Overall it was a great experience to get something up and running in such a short space of time, and working with such a supportive pair made it all the more enjoyable as we were able to bounce ideas off each other. 
