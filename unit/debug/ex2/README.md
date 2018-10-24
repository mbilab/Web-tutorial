# Debug example 2

## Installation

1. `$ yarn`
2. Modify the port in serv.js:4
3. `$ node serv.js` 
4. Visit the [website](http://[host]:[port]).

## Description

Enter something in `first name` and `last name` and click `submit via ajax`.  The result does not show what you just entered.  Try to fix it.

Hints:
* Note that the ajax method change to `post` in `main.js`.
* Check whether `req.query` in `serv.js` receives data.
* Google `post nodejs` for reference.  You should get a keyword `body-parser`.
