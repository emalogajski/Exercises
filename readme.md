## How to install jest

1) Clone the repo
2) run "npm install"
3) run "npm test" or "node ./node_modules/jest/bin app.test.js" 

It should work :)

### VSCODE
1) Install the JEST plugin (the first one)
2) Restart your VSCODE
3) On tools sidebar, click on the "bug" icon and then on something like "create a launch.json script..".
4) Choose the one with Jest
5) Now you should be able to run the test in VSCODE
6) (otherwise.. "npm test")

## Learner Activity Challenge 
We want to get some learning activity data of our learners! 

You will receive an array as an input, containing 1s or 0s, based on whether 
or not a learner completed a lesson on that day 
(1 if they completed a lesson, 0 if not). 

### Instructions
Assume that the array can be for any time period, but the learner status is based on a 
rolling 7 day period (thus only take into account the last 7 days’ data).

Return an array containing 3 values:

  1. number of days that the user completed a lesson
  2. longest streak
  3. learner status based on the last 7 days

Learner status rules

    <= 2 'Slow starter' 
    >2 && <= 4 'Getting there' 
    >4 'Super user' 

### Example Input
    [1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0]

### Example Output
    [13, 5, 'Super user']
