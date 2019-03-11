# preprocessor

## setup

### from scratch

```
npm init -y
npm i parcel-bundler --save
npm i jquery --save
# edit package.json if you want
```

### or, use our package.json

```
npm i # use `yarn` if you have it
```

## stage 1 - command line

```
./node_modules/.bin/node-sass app/app.sass
```

## stage 2 - watch

```
./node_modules/.bin/node-sass --watch app/app.sass
```

## stage 3 - automation (with webpack)

1. /bin/echo [PORT] > port
2. `npm start` or `yarn start`
3. open http://[HOST]:[PORT]

## stage 4 - write your pug and sass
When you are writing pug, you should know following points.
* Need no start tag/end tag.
* Use indent to represent scope level.
* Able to add class and name with css selector.e.g. `#container`
* Add attribute in bracket.e.g. `a(href="sample.com")`

### step 1 : add a button in index.pug
Transfer html: 
```
<div id='button'>Click me</div>
```
to pug.

And, import `app.js`

### step 2 : add style sheet of button
Use variable to change background color of button, and transfer css:
```
#container div{
    margin: auto;
    background-color: $color;
    color: white;
    padding: 15px;
}
```
to sass.

hint: As pug, sass use indent to represent scope level.

### step 4 : use jQuery with Parcel 
Read : https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler

### step 5 : learn new Javascript standard 
Use new feature in es6, Module, importing `./app.sass`.

Read the example in `app/app.js` and google es6.


