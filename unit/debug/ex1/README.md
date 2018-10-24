# Debug example 1

## Installation

1. `$ yarn`
2. Modify the port in serv.js:3
3. `$ node serv.js` 
4. Visit the [website](http://[host]:[port]).

## Description

This example is a borken version of the http/ajax exercise.

1. You can click the `list all students` button and see all id:name pair.
2. When clicking the `search a specific student` button, there is no result.  You may find that the browser goes to a new page, which is not expected for an ajax request.  Try to fix this.

Hints:
* Check whether the id of the `search a specific student` button in the `index.html` corresponds to that in the `main.js`.
* Check whether the server gets the request.  You may need to modify the url.
