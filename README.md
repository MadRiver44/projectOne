# projectOne - Tile Madness

![ScreenShot](https://cloud.githubusercontent.com/assets/7386478/21299109/6f7c0b54-c566-11e6-8b1b-a63e6ccf968a.png)

#### Description

The  goal is to rearraange the tiles in numerically ascending order from lowest to highest, from top left to bottom right

#### Installation
None required, to play just go: 
[Here](https://madriver44.github.io/projectOne/)

#### Project Workflow
This project was an A-Z exercise in creating a fully functional, ES6 class based game. I started with several hours of whiteboarding and planning, which prompted me to ask myself many questions along the way that I hadn't thought of before. Once i had my basic design, I started with functionality first design second. I began with pure function expressions in one page, app.js. Once I had the game working, I linted, and brokes the components into classes, tiles and game. From there, I created the main.js and created the instances. Because this was a small game the design was minimal. The complexity lies in the functionlity.  

##### 1. Whiteboarding and notes

![Whiteboard](https://cloud.githubusercontent.com/assets/7386478/21298599/2e4812b8-c561-11e6-810f-750bc9bab093.jpg)
![Notes](https://cloud.githubusercontent.com/assets/7386478/21298635/9ac2a5fc-c561-11e6-976a-138592f5e7ce.jpg)
![Notes](https://cloud.githubusercontent.com/assets/7386478/21298648/bc4845b0-c561-11e6-9b28-17ea931ee2d5.jpg)
![Notes](https://cloud.githubusercontent.com/assets/7386478/21298657/cf768ff2-c561-11e6-92dc-b3b082faad13.jpg)

#### Technologies Used

1. Javascript ES6
2. HTML / CSS
3. git locally
4. GitHub 
5. Github pages for deployment


#### Unsolved Problems

I designed the game in such a manner to build a small MVP and once functional, simply refactor the CSS to accomodate any number of tiles to scale the game. Knowing that some things take me a long time, I strived for scalability last, and ran out of time. 

The issue is a bug in the setWinArrPattern() function. When I create larger instances, the game starts "missing" random numbers. This is seen here

![here](https://cloud.githubusercontent.com/assets/7386478/21298998/296bbff2-c565-11e6-87b2-92a711c76ca3.png)

Given a few more hours, I fell this bug is easily fixable.



