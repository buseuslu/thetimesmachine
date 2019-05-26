## The Times Machine App
# WDI-Project 2
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## Goal
The goal was to build build a React application that consumes a public API.

## Timeframe
2 days

## Technologies used
* HTML5, CSS - Bulma(CSS Framework)
* JavaScript (ES6) + jQuery
* React
* API: The New York Times Archive
* Insomnia

### Website
https://the-times-machine.herokuapp.com/

# Overview
The Times Machine is a tech news app inspired by the New York Times Archive. Our app allows readers to step back in time, and check out tech stories from the past. Users can search for technology and science stories dating back to 1920.

# Instructions
To access stories, a user simply has to select a month and year on the search page for results to appear. Our app also features a randomizer button. After clicking the button, a user will receive a random set of headlines, from a particular year and month determined by our algorithm.   

# Process
The creation of our app began with testing out the NYT Archive API. After experimenting with results through Insomnia, our team took the following steps:
1. Creating a webpack and API key
2. Creating the app’s wireframes.
3. Writing out and planning the pseudo code
4. Creating and establishing the Web Token
5. Creating the main pages, objects and components: searches, searchesNew, searchesForm, nav, randomizer etc.
6. Creating a search function using keywords set by the NYT Archive API. Due to the sheer amount of data, our main goal was to filter science and technology stories so that results could be simplified and appear limited.
7. To style our page, we used a combination of Bulma, CSS and NYT logos.

# Screenshots

### Home page
![](src/assets/home.png)

### Search page
![](src/assets/search-archive.png)

### Search Results
![](src/assets/search-results.png)

### Randomizer
![](src/assets/randomizer-button.png)

### Randomizer Results
![](src/assets/randomizer-results.png)

# Challenges
* To limit search results
* To get random news (randomizer)

# Wins
* Strengthened my knowledge of React
* Creating a “Randomizer” function

# Future Features
* Make it responsive
