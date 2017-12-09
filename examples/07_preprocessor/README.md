# preprocessor

## setup

### from scratch

```
npm init -y
npm i webpack webpack-dev-server --save
npm i extract-loader file-loader html-loader pug pug-html-loader raw-loader --save # html-related
npm i autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save # css-related
npm i babel-cli babel-core babel-loader babel-preset-latest babel-watch --save # js-related
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

## stage 3 - automation

1. Change the port **10201** in `package.json`
2. `npm start` or `yarn start`
3. open http://luffy.ee.ncku.edu.tw:[YOUR_PORT]
