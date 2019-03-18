WDI-Project 2
General Assembly Project 2: Reactathon App
Goal: To create a simple search app using React
Timeframe
2 days
Technologies used
JavaScript (ES6) + jQuery
React + Axios
HTML5
Insomnia
Bulma + CSS
Pencil, Wireframe software
GitHub
Google Drive
Atom + Teletype
Our App - The Times Machine

You can find our hosted version here ----> https://ga.co/2Hn6YMM
App overview
The Times Machine is a tech news app inspired by the New York Times Archive. Our app allows readers to step back in time, and check out tech stories from the past. Users can search for technology and science stories dating back to 1920.
App Instructions
To access stories, a user simply has to select a month and year on the search page for results to appear. Our app also features a randomizer button. After clicking the button, a user will receive a random set of headlines, from a particular year and month determined by our algorithm.   
Process
The creation of our app began with testing out the NYT Archive API. After experimenting with results through Insomnia, our team took the following steps:
1. Creating a webpack and API key
2. Creating the app’s wireframes.
3. Writing out and planning the pseudo code
4. Creating and establishing the Web Token
5. Creating the main pages, objects and components: searches, searchesNew, searchesForm, nav, randomizer etc.
6. Creating a search function using keywords set by the NYT Archive API. Due to the sheer amount of data, our main goal was to filter science and technology stories so that results could be simplified and appear limited.
7. To style our page, we used a combination of Bulma, CSS and NYT logos.


Challenges
Our initial challenge to make sure our web token and API key were working correctly. Also, the NYT Archive API had very little documentation. While this limitation allowed for more creativity it provides little support when trying to troubleshoot.  Another challenge was figuring out how to limit search results. Due to time constraints, we’ve set up the app so that multiple stories appear as a result (via headlines), instead of a grid of images. Also, for stories before 1950, we had to experiment with different keywords to access “technology” news.
Wins
Creating our app strengthened our knowledge of React and also gave us an opportunity to experiment and play around with ideas. Our top wins include:

Creating a “Randomizer” function
The fluid style of our site/app being highly customized through the use of common tools like Bulma.
Fixing the results page of our site so that more headlines could appear organized, regardless of date.   
Generating a loading page whilst the API retrieves the story data

Future Features
If we had more time during Reactathon, essential future features we would like to add include:
Creating social sharing buttons to give users an opportunity to interact better with the site. Also, adding images to results for both older and more recent stories (instead of just headlines).
Expanding the Randomizer function: creating a gaming opportunity for users to both interact with the app better and learn about science/tech history.
Establishing more CSS animation and functionality on all pages.
Adding more information and instructions (either on pages or through a pop-up window) about the app and our intent.
