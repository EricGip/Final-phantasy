ROLE PLAYING GAME STORE
Developed
By
Eric Gip, Richard Biala, Himadri Sinha & Yev R.

PROJECT REQUIREMENTS
Requirements/Description of Project
Main idea: Going to make a functional store and mini game using items purchased in the store  to meet the technical requirements.  User will have an initial base of stats, one potion and gil, but weapons, armor and more potions can be purchased.   User will then fight a computer AI enemy that will be randomly generated from an array of monsters.  After completion of the first stage, user will then fight a Boss AI enemy.  Monsters and Boss will have their own stats.  
The requirements for Project #2 are as follows:
Must use a Node and Express Web Server
✌🏻
Must be backed by a MySQL Database with a Sequelize ORM
Will be to use to manage authentication / login for users:
Id
exp/lvl 
Gold amount
Will Also have a store to spend the gold
Speed  
Store will hold items from db, with a cost that user can only afford if they have enough `gold` to their ID 
Must have both GET and POST routes for retrieving and adding new data
GET items from db, show in store
POST user action (maybe 3 buttons, maybe phaser - post results on leaderboard?)
Must be deployed using Heroku (with Data)
Must utilize at least one new library, package, or technology that we haven’t discussed
Anime.js? - Eric -- https://freefrontend.com/anime-js-examples/
Phaser - if we all want to try hard 
Must have a polished frontend / UI
Must have folder structure that meets MVC Paradigm
Must meet good quality coding standards (indentation, scoping, naming)
ESLint default settings 
Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

DELEGATION OF TASK AND DUTIES
Himadri:  Handled building the store.js by creating the handlebars associated with it.  The ajax call to the initial stats so when something is bought the stats are increased/decreased or the gil count is reduced.  In addition I created the boss.handlebars and contributed with boss.js but almost all  of the work with boss/stage 1 was done by Yev and Eric

Richard:Will work on HTML/CSS, as well as look into animations for characters and NPC’s (non playable characters). Background/Set design as well as provide assistance to other team members throughout the project. Design user interface (buttons/functionality).  Did  the major work for all the handlebars except boss and store.js, however all CSS was done by Richard.

Eric: Contributed mainly in Javascript and helped fill gaps with various  models/routes/and public.js areas that other group members had trouble with.  Worked with Yev on stage1 and boss.js but also figured out how to use api routes to update database after item is purchased

Yev:  Working with Eric helped write code for Stage1/boss.js.  In addition, went through each file to make sure that all our capitalizations, spacing and structure of code was uniform to present a clean code.  

INSTRUCTIONS FOR RUNNING APP
Navigate in web browser to https://fin-phantasy.herokuapp.com/
Create uniqure login email and password.
Follow instructions to begin playing.
Enjoy!
