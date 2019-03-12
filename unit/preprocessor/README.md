# preprocessor exercise

## Step 0: set up

You can create a project from scratch.  That is, install dependent packages via their names.

```
$ npm init -y
$ npm i node-sass --save-dev # for step 2
$ npm i jquery --save
$ npm i parcel-bundler --save-dev # for step 3
$ npm i pug-cli --save-dev # for step 1
# edit package.json if you want
```

Or, simply use our `package.json`, which specifies dependent packages for you. Notice that only one of the following two commands is required.

```
$ npm i
$ yarn # if you have it
```

## Step 1: use pug, a better html

* What's [Pug](https://pugjs.org/language/tags.html)?
  * Need no start tag/end tag.
  * Use indent to represent scope level.
  * Use css selector to create html tag. For example, `#container` in pug equals `<div id="container"></div>` in html.

* Complie a pug file.

  ```
  $ ./node_modules/.bin/pug ./app/index.pug -o ./dist/
  ```

  Compare `./app/index.pug` and `./dist/index.html`.

* Insert a `<h2>Hello world!</h2>` equivalent into `./app/index.pug` and follow instructions beginning with `Step 1`. In `vi`, try pressing `/` key to search text. Remember to re-compile once you edit `./app/index.pug`.

* Feel tired to compile manually? Use `--watch`.

  ```
  $ ./node_modules/.bin/pug ./app/index.pug -o ./dist/ --watch
  ```

  The `./dist/index.html` will be automatically re-compiled whenever you save `./app/index.pug`.

## Step 2: use sass, a better css

* What's [SASS](https://sass-lang.com/guide)? As pug, sass use indent to represent scope level and has many useful features. Try variables, nesting, and mixins.

* Complie `./app/app.sass` to `./dist/app.css`.

  ```
  $ ./node_modules/.bin/node-sass ./app/app.sass -o dist -w
  ```

* Reference the following code to make the three buttons different with `buttonStyle` mixin.

  ```
  /* Step 2:
   * copy the following code to `./app/app.sass`
   * you may need to copy more than once
   * replace [child index], [color] and [border radius] with appropriate values
   */
  &:nth-child([child index])
    +buttonStyle([color], [border radius])
  ```

  Compare `./app/app.sass` and `./dist/app.css`.

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

