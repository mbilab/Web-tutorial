# preprocessor

## Step 0: set up

### from scratch

  ```
$ npm init -y
$ npm i parcel-bundler --save-dev
$ npm i jquery --save
$ npm i pug-cli --save --save-dev
$ npm i node-sass --save --save-dev
# edit package.json if you want
```

### or, use our package.json

  ```
`$ npm i` or `$ yarn` if you have it
```

## Step 1: build your first pug
* What`s Pug?
https://pugjs.org/language/tags.html
    * Need no start tag/end tag.
    * Use indent to represent scope level.
    * Able to add class and name with css selector.e.g. `#container`
    * Add attribute in bracket.e.g. `a(href="sample.com")`

* Complie your first pug

Type `cat ./app/index.pug` to see the default pug file.
Then run the following code.
```
$ ./node_modules/.bin/pug app/index.pug -o dist/
```

* Add a 'Hello world!' with h2 tag into `./app/index.pug`.

  hint: Transfer html: `<h2>Hello world!</h2>` to pug.

* Add parameter to  watch files for changes

  Your files will automatically re-render. No more inconvenient commands.
```
$ ./node_modules/.bin/node-sass app/index.pug -o dsit/ --watch
```

* Experience the power of `--watch`.

  Add firstPug-class to your 'Hello world!' with automatically re-render.
```
`h2[firstPug-class] Hello world!`
```

## Step 2: build your first sass

* What`s sass?
https://sass-lang.com/guide

  As pug, sass use indent to represent scope level.
Moreover, Variables, Nesting, and Mixins are powerful feature of sass.

* Complie your first sass
```
$ ./node_modules/.bin/node-sass app/app.sass -o dist/ --watch
```

* Determinie your button color and border-radius
```
  &:nth-child([which chld])
    +buttonStyle([color], [border])
```
hint: There three children in container and be aware of indent.

## Why preprocessor?

The  solution of web development skyrocketing.

Try to compile `/new` with old version node.js or old browser

## Step 4: automation (with parcel)

Using parcel, you can complie pug and sass together.
Edit [port] in `package.json`, and use parcel build your web.

1. `npm start` or `yarn start`
2. open http://[HOST]:[PORT]
