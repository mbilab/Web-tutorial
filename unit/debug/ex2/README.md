# Debug example 2

## Installation

```
npm install
```

## Description

Modify the port in serv.js:4
Visit the [website](http://[host]:[port])

1. Enter the fname and lname and click the button, something should
   appear in the website. 
2. You can find that the ajax method change to POST in 'main.js' and
   'serv.js', but you can't get what you want in req.query.
3. You need to use 'body-parser' to parse the data passing from web
   to req.body, and get data through it.
