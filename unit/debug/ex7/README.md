# Debug example 7

## Installation

1. `$ yarn`
2. Modify the port in serv.js:3
3. `$ node serv.js` 
4. Visit the [website](http://[host]:[port]).

## Description

Input two student IDs and click the `Get user names` button.  The corresponding student names should be shown on the screen.  Try to fix it.

Hints:

* Check syntax of `public/app.js`.
* The server (`serv.js`) returns two names by calling `res.send` twice.  Is this reasonable?
