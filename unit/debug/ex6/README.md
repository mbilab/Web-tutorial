# Debug example 6

## Installation

1. `$ yarn`
2. Modify the port in serv.js:3
3. `$ node serv.js` 
4. Visit the [website](http://[host]:[port]).

## Description

Input two student IDs and click the `Get user names` button.  The corresponding student names should be shown on the screen.  Try to fix it.

Hints:

You may find that `public/app.js:7` expects that server reponses a object and `serv.js:14` tries to pack two names into a JSON string.  But, is the packed JSON string valid?
