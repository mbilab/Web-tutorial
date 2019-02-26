# preprocessor

## setup

### from scratch

```
npm init -y
npm i parcel-bundler --save
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
