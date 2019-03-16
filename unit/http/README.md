# http & ajax exercise

## Step 0: steup

Use `yarn` to setup with our `package.json`, which specifies dependent packages for you.

```
$ yarn
```

If you don't have yarn, try `npm`.

```
$ npm i
```

Or, you can install packages from scratch.

```
$ yarn init
$ yarn add express jquery
```

If you don't have yarn, here is `npm` commands.

```
$ yarn init -y
$ yarn add express jquery
```

Or, simply use our `package.json`, which specifies dependent packages for you. Notice that only one of the following two commands is required.

```
$ npm init -y
$ npm i express jquery --save
```

## Step 1: create an express to listen requests, return “hello world”

[Express](https://expressjs.com/) is a lightweight web server for [Node.js](https://nodejs.org/). Try use it to create a web server in ten lines. Insert the following code into `./ser.js` and follow instructions beginning with `Step 1`. Open [host]:[port] in a browser to see the result.

```
/* Step 1:
 * replace [port] to an appropriate value
 * storing config to variables is a good practice, such as `port`
 * watch out the string interpolation in js, such as `${port}`
 */
const express = require('express') // include `express`
const app = express() // create an express, aka web server, instance
const port = [port]

// handle `/` url
app.get('/', (req, res) => {
  // response a string
  res.send('hello world')
})

// start the server
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
```

## Step 2: html code is okay

One can response html code. Try modify `./ser.js` to response `hello world` in a `<h1>`. Use browser developer console to see server response and page source.

## Step 3: use static files instead typing html code in js. Insert the following code to `./ser.js` set the directory where we will put the static files.

```
/* Step 3:
 * hide the 'get function' in Step 1, to ensure you can see the result of this step 
 * 'dist' here is like public_html
 * you can create a new folder named 'dist', then put some static files like html, css, js, images, etc.
 * notice the '__dirname' is pointing to the directory where we put the script, 'ser.js' here.
 */

app.use(express.static(`${__dirname}/dist`))
```

step 4: then why server side code? “dynamic results”, even with the same url
res.send(++nRequests)
step 5: usually the results are related to user input
handle get, test with url
step 6: input from from instead of url
<form method=“get”>
step 7: how to upload file?
<form method=“post”>
step 8: a whole new page for each request, not a modern design
jQuery.get()
step 9: you need to pack input by yourself
jQuery(…).value()
step 10: you need to render the output by yourself
jQuery(…).html()
step 11: experience “async”
try modify timeout
step 11+: more examples
php: classic
chat: file
parcel
