# **Would You Rather?**  - JavaScript, HTML and CSS on frontend and Flask and PostgreSQL on backend

<a href='https://asiask97.github.io/art-studio/'><img src='documentation/' alt='gif of live website'></a>

### [Live Webiste](https://asiask97.github.io/art-studio/)
### [Backend](https://asiask97.github.io/art-studio/)

<br/>
<br/>

# Table of Contents 
* [Introduction](#introduction)
* [Features](#features)
* [UX](#ux)
* [Testing](#testing)
* [User Stories](#user-stories)
* [Credits](#credits)
* [Deployment](#deployment)
* [Backend](#backend)

<br/>

# Introduction  

Would You Rather is a small project which consists of two parts, frontend with vanilla JavaScript and backend made with Flask and PostgreSQL database.
<br/>  

The whole point of the game is to ask the users to answer a set of questions and display all their results in the form of a pie chart. The purpose of this project is to see what another anonymous user would rather choose. The user gets an option of two choices and must pick the option that they would prefer more, users choice is saved in a database for each answer and then all results are displayed on a chart for the user to see. It's a fun and lighthearted game to kill some time and have a laugh.  

**Time frame to finish this project was about 20-25 hours.** 

<br/> 
<br/> 
 
# Features 

The whole front end of the website consists of four containers that are animated to go in and out depending on the current need. The game starts with a 'start' container which invites the user to play the game. Once the user decides to join, the screen is transitioned to the 'game' window which displays the current question. On the game screen the user gets two very interesting choices to pick from, once the user makes up their mind, they are moved to the results screen where all results of all players are displayed on a pie chart.  


## Start Window  
 

Start page gives a brief explanation of what the user is about to experience. It tells the user what the game is about in a lighthearted way. Once the user decides to play the game they are moved to the 'game' screen. The button on this page on hover shows hidden text, there is an event listener added to this button that fetches all the questions from the database, if a user has slower internet a load spinner is displayed.  

## Game Window 

Here the user gets an especially important question - 'Would you rather?' and a pair of buttons which contain the answers. Users are asked to choose the one that they think is the preferred option. On hover each button displays different fun text as shown in the picture below. Once the users clicks on one of the given options a result is posted to database which increases the overall count for that option. 


## Results Window 

 


