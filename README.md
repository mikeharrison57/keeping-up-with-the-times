<img width="391" alt="Screen Shot 2022-09-23 at 8 21 16 AM" src="https://user-images.githubusercontent.com/95496577/191985401-49c1b5ab-74b5-4303-8ee7-1c33090ba3e8.png">

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
- [Application Wireframes](#application-wireframes)
  - [Main Page and Section Pages](#main-page-and-section-pages)
  - [Individual Article Page](#individual-article-page)
- [Technology Stack](#technology-stack)
- [User Stories](#user-stories)
- [Context and Features](#context-and-features)
- [Lessons Learned](#lessons-learned)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn’s](#contributor-linkedins)
- [Contributor GitHubs’s](#contributor-githubss)
- [Project Specs](#project-specs)

## Abstract

- _The New York Times_ is one of the most well known and respected publications and news outlets in the world. As a listener of _The Daily_ podcast, I like to keep up with some of the top news stories from the NY Times. For this reason, among others, I built this application for people like myself who like to keep up with some of the top stories from the NY Times. _Keeping Up With The Times_ allows users to casually browse article samples from 22 different sections of the NY Times. The samples also include links to the full articles. I hope that you are _Keeping Up With The Times_ today! 

## Deployed Link

- Check out our application [here]()

## Illustrations

## Application Wireframes

### Main Page and Section Pages

![Screen Shot 2022-09-23 at 8 57 32 AM](https://user-images.githubusercontent.com/95496577/191990684-7716b0a2-9a89-410d-81e1-c50e9e4873de.png)

### Individual Article Page

![Screen Shot 2022-09-19 at 5 00 56 PM](https://user-images.githubusercontent.com/95496577/191990885-ea932c70-9bc2-4736-bc3e-ab5fd8f76216.png)

## Technology Stack

CSS3 
React.js
React Hooks
React Router
RESTful API

## User Stories

As a user I should be able to see a list of NY Times articles.

As a user I should be able to find articles based on the genre that I’m most interested in (arts, business, fashion, food, etc.).

As a user, I should be able to look at individual article details when I click on the article title. 

## Context and Features

_Keeping Up With The Times_ is a simple application, but I wanted to make it as user friendly and accessible as possible. Upon page load, the user is greeted with some of the NY Times top stories of that day from various different categories. The user is able to peruse a list of said articles, and click on any they would like to see additional details on. In addition to this, the user is able to explore articles from various NY Times sections using the dropdown menu in the Navbar. If the user would like to return to the home page, they just need to click on the application title. In addition to these features, the application is adapted to be used on mobile devices, and has a 100% accessibility score on the _Lighthouse_ tool from the _Chrome Developer Tools_. 

## Lessons Learned

After working with the Apollo Client state management library and GraphQL on my previous project I was actually not very excited to go back to using a RESTful API with a data request limit. I was able to make it work for the purposes of this project, however, this project really made me appreciate what Apollo Client and GraphQL have to offer regarding data transfer and state management. Something else that I learned from this project is that when dealing with a RESTful API that requires a dynamic value, overall state management for the application can be a bit tricky. I used my dropdown menu to interpolate this value into my dynamic API call which worked wonderfully for the different section pages, but did cause some difficulties and frustrations with my individual article pages. Were I to continue working on or developing this project more in the future, I would love to incorporate some global state management into the project to make it work more efficiently. Options such as Recoil, Redux, and Rematch all sound appealing to me, and I plan on learning how to use these global state management tools in the near future.  

## Future Features

Some future features we’d like to add to this application are:

E2E testing with Cypress.
Additional styling.
Being able to search for articles by name.
Implementing a global state management library such as Recoil, Redux, or Rematch.

## Application Set-Up

Fork repository on GitHub.

`Git clone` the repository to your local machine.

`Cd` into the directory.

Run `npm install` in your terminal to install project dependencies.

Run `npm start` in the terminal to see the application. 

When finished with the application, type `Control + C` in the terminal to stop running the application. 

## Contributor LinkedIn’s

- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-j-harrison57/)

## Contributor GitHubs’s

- [Michael Harrison: GitHub](https://github.com/mikeharrison57) 

## Project Specs

- The specs for this application can be found 
[here](https://mod4.turing.edu/projects/take_home/take_home_fe)      
