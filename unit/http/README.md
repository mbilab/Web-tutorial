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

res.send(‘hello world’)

step 2: html code is okay
res.send(‘<h1>hello world’)
step 3: use static files instead typing html code in js
app.use(express.static(…))
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
