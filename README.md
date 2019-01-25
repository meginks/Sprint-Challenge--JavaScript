# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`. 

In a nutshell, .forEach mutates the original array by applying the callback function passed into it on each item in the array. .map creates a new array by applying the callback function passed into it on each item in the array. .forEach changes the original data. .map keeps the original data intact and creates a new set of data.
  

2. What is the difference between a function and a method?

To put it simply, a method is a function inside of an object. A method is always a function, but a function isn't necessarily a method. Functions, more broadly, are chunks of code that execute a certain action, usually (but not necessarily) after having been passed arguments. Methods are object-specific functions that only the object that they are on have access to. For example, ".length" is a method on the object of an array or string that when invoked, returns the length of the array or string. 

3. What is closure? 

Closure is the concept that nested functions have access to their parent scope, but items within the parent scope do not have access to the nested function's scope. Every time you use a nested function, you're using closure. I like to think of it like zipped bags inside of other zipped bags. What is inside the smallest one can't be touched by the stuff inside the one around it unless it gets unzipped.

4. Describe the four rules of the 'this' keyword. 

The four rules of the "this" keyword are the following: 
1. In the global scope, "this" refers to the window or console object. 
2. "This" refers to the object to the left of/in front of the dot when a function is called (also refered to as implicit binding). Essentially, the meaning of "this" depends on the context in which it is run. 
3. When we use a constructor to create a new object, "this" refers to the specific instance of the object created and returned by the constructor function. 
4. In order to explicitly bind "this" to something other than what it would otherwise refer to, we use the .call() or .apply() method. Doing so changes the meaning of "this" to what we specify. 

5. Why do we need super() in an extended class? 

If you don't call super() in an extended class or sub-class before using the "this" keyword, you'll get a reference error. 



## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
