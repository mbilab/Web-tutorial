## Use parcel to run this demo

1. go to the directory where you put node_modules

```
$ cd ./..
```

2. Rreprocess the files which are in directory chat

```
$ ./node_modules/.bin/parcel build ./chat/index.pug -d ./chat/dist

or you can use watch mode to help develop

$ ./node_modules/.bin/parcel watch ./chat/index.pug -d ./chat/dist/
```

3. Run the backend server

Maybe you should change the port first in case of collision. `$ vi chat_server.js`, and change the port.

```
$ node chat_server.js
```

4. Open the browser and watch your page at [host]:[port].
