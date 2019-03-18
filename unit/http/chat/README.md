## Use parcel to run this demo

1. Install `parcel-bundler` to preprocess pug/sass

```
$ yarn add parcel-bundler

or you can use npm

$ npm i parcel-bundler --save-dev
```

2. Preprocess the files which are in directory chat

```
$ ./../node_modules/.bin/parcel build ./index.pug -d ./dist

or you can use watch mode to help develop

$ ./../node_modules/.bin/parcel watch ./index.pug -d ./dist/
```

3. Run the backend server

Maybe you should change the port first in case of collision. `$ vi chat_server.js`, and change the port.

```
$ node chat_server.js
```

4. Open the browser and watch your page at [host]:[port].
