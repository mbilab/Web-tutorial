# preprocessor

## Step 0: set up

### from scratch

```
$ npm init -y
$ npm i parcel-bundler --save-dev
$ npm i jquery --save
$ npm i pug-cli --save-dev
$ npm i node-sass --save-dev
# edit package.json if you want
```

### or, use our package.json

`$ npm i` or `$ yarn` if you have it


## Step 1: build your first pug
* What`s Pug?
https://pugjs.org/language/tags.html
    * Need no start tag/end tag.
    * Use indent to represent scope level.
    * Able to add class and name with css selector.e.g. `#container`
    * Add attribute in bracket.e.g. `a(href="sample.com")`

* Complie your first pug

`$ ./node_modules/.bin/pug app/index.pug -o dist/ --watch`

Type `cat ./app/index.pug` to see the default pug file.</br>
Then run the following code.

* Add a 'Hello world!' with h2 tag into `./app/index.pug`.

  hint: Transfer html: `<h2>Hello world!</h2>` to pug.

* Add parameter to  watch files for changes

  Your files will automatically re-render. No more inconvenient commands.</br>
  You can find the `index.html` in dist directory.

`$ ./node_modules/.bin/pug app/index.pug -o dist/ --watch`

* Experience the power of `--watch`.

  Add firstPug-class to your 'Hello world!' with automatically re-render.

`h2[firstPug-class] Hello world!`


## Step 2: build your first sass

* What's sass?
https://sass-lang.com/guide

As pug, sass use indent to represent scope level.</br>
Moreover, Variables, Nesting, and Mixins are powerful feature of sass.

* Complie your first sass.</br>
  You can find the `app.css` in dist directory.

`$ ./node_modules/.bin/node-sass app/app.sass -wo dist`

* Determinie your button color and border-radius
```
  &:nth-child([which chld])
    +buttonStyle([color], [border])
```
hint: There three children in container and be aware of indent.


## Step 3: Why preprocessor?

The  solution of web development skyrocketing.
Try to compile `/new` with old version node.js or old browser.

## Step 4: automation (with parcel)

Using parcel, you can complie pug and sass together.
Edit [port] in `package.json`, and use parcel build your web.

There are some difference between using parcel and compiling one by one.
e.g. you should link `app.sass` nor `app.css`

You should go `parcel/app.js` and learn how to use jquery with parcel.

* watch
`npm run watch` or `yarn run watch`

* devServer
1. `npm run serv` or `yarn run serv`
2. open http://[HOST]:[PORT]

