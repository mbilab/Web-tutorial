# preprocessor

## step 0 : set up

### from scratch

```
npm init -y
npm i parcel-bundler --save
npm i jquery --save
npm i pug-cli --save
npm i node-sass --save
# edit package.json if you want
```

### or, use our package.json

```
npm i # use `yarn` if you have it
```

## step 1 : compile your first pug

### complie pug every time you debugging
```
./node_modules/.bin/pug example/index.pug -o public/
```

### or, add parameter to  watch files for changes and automatically re-render

```
./node_modules/.bin/node-sass example/index.pug -o public/ --watch
```

##step 2 : compile your first sass

### complie pug every time you debugging
```
./node_modules/.bin/node-sass example/app.sass -o public/
```

### or, add parameter to  watch files for changes and automatically re-render

```
./node_modules/.bin/node-sass example/app.sass -o public--watch
```

## step 3 : automation (with parcel)

Using parcel, you can complie pug and sass together, moreover build a server for development. 

Edit script in `package.json`, and use parcel build a devServer.
```
  "scripts": {
    "start": "parcel app/index.pug --port $($/bin/cat port 2> /dev/null || /bin/echo 8080)",
    "example": "parcel [path to index.pug under example] --port $($/bin/cat port 2> /dev/null || /bin/echo 8080)"
  },
```

1. /bin/echo [PORT] > port
2. `npm example` or `yarn example`
3. open http://[HOST]:[PORT]

## step 4 : write your first pug
When you are writing pug, you should know following points.
* Need no start tag/end tag.
* Use indent to represent scope level.
* Able to add class and name with css selector.e.g. `#container`
* Add attribute in bracket.e.g. `a(href="sample.com")`

Transfer html: 
```
<div id='button'>Click me</div>
```
to pug.

And, import `app.js`

## step 5 : write your first sass
Sass is a CSS extension language.
As pug, sass use indent to represent scope level.
Moreover, Variables, Nesting, and Mixins are powerful feature of sass.

Use variable to change background color of button.
```
#container div{
    margin: auto;
    background-color: $color;
    color: white;
    padding: 15px;
}
```

Use 


## step 6 : use jQuery with Parcel 
Read : https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler

## step 7 : learn new Javascript standard 
Use new feature in es6, Module, importing `./app.sass`.
What`s babel?

Read the example in `app/app.js` and google es6.


