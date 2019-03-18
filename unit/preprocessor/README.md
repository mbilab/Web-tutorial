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

* Compile a pug file.

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

* Compile `./app/app.sass` to `./dist/app.css`.

  ```
  $ ./node_modules/.bin/node-sass ./app/app.sass -o dist --watch
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

## Step 3: is there a better js?

There was, see [Babel](https://babeljs.io/). However, modern js engines catch up the development of js. Try to open `./babel/es6.js` in old [Node.js](https://nodejs.org/en/) (version < 7) or browsers. Now Babel is usually used for js variants such as [TypeScript](https://www.typescriptlang.org/). Execute the following command and than compare `./babel/typescript.ts` and `./dist/typescript.js`.

```
$ ./node_modules/.bin/babel ./babel/typescript.ts --out-dir ./dist/ --extensions ".ts"
```

## Step 4: automation (with parcel)

* Using parcel, you can watch pug, sass and js together.

  ```
  $ ./node_modules/.bin/parcel watch ./parcel/index.pug
  ```

  Note that `./app/index.pug` links `app.css` but `./parcel/index.pug` links `app.sass`.

* See `parcel/app.js` to learn how to use jquery with parcel.

* Automation tools like parcel do more than just preprocessing.

  ```
  $ ./node_modules/.bin/parcel ./parcel/index.pug --port [port]
  ```

  Open `http://[host]:[port]` in your browser. Remember to replace [host] and [port] to appropriate values.
