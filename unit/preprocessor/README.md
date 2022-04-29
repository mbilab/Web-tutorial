# preprocessor exercise

## Step 0: setup

You can create a project from scratch.  
你可以從零開始安裝需要用到的套件。

```shell
npm init -y
npm i node-sass --save-dev # for step 2
npm i @babel/cli @babel/preset-env @babel/preset-typescript # for step 3
npm i jquery --save
npm i parcel-bundler --save-dev # for step 4
npm i pug-cli --save-dev # for step 1
# edit package.json if you want
```

Or, simply use our `package.json`, which specifies dependent packages for you.  Notice that only one of the following commands is required.  
或者，直接使用我們的 `package.json`，裡頭記錄了需要的套件。注意下面指令擇一使用即可。

```shell
npm i
yarn # if you have `yarn` installed
```

## Step 1: use pug, a better html  

- What's [Pug](https://pugjs.org/language/tags.html)?
  - Need no end tag.
  - Use indent to represent scope level.
  * Use css selector to describe html tag.  For example, `#container` in pug equals `<div id="container"></div>` in html.

- [Pug](https://pugjs.org/language/tags.html) 是什麼？
  - 不需要結束標籤。
  - 使用縮排決定標籤的範圍。
  - 使用 css 語法來描述 html 標籤。例如，pug 中的 `#container` 等同於 html 中的 `<div id="container"></div>`。

- Compile a pug file.  Notice that only one of the following 4 commands is required.  
  編譯 pug 檔案。注意下面四個指令擇一使用即可。

  ```shell
  ./node_modules/.bin/pug3 ./app/index.pug -o ./dist/ -P # in Linux
  ./node_modules/.bin/pug3.cmd ./app/index.pug -o ./dist/ -P # in Windows
  yarn pug ./app/index.pug -o ./dist/ -P # if you have yarn installed
  npx pug ./app/index.pug -o ./dist/ -P # if you have npx installed
  ```

  Compare `./app/index.pug` and `./dist/index.html`.  
  比較看看 `./app/index.pug` 跟 `./dist/index.html`。

- Try writing pug code.  Follow the instructions beginning with `Step 1`.  In `vi`, try pressing `/` key to search text.  Remember to re-compile once you edit a pug file.  
  試著寫 pug 語法，照著 `Step 1` 開頭的提示操作。在 `vi` 中可以使用 `/` 鍵搜尋文字。記得在編輯 pug 檔之後要重新編譯。

  ```pug
  // Step 1:
  // insert a `<h2>Hello world!</h2>` equivalent to `./app/index.pug`
  ```

- Feel tired to compile manually?  Use `--watch`.  
  厭倦一直編譯了嗎？使用 `--wath` 參數。

  ```shell
  ./node_modules/.bin/pug ./app/index.pug -o ./dist/ -P --watch
  ```

  The `./dist/index.html` is automatically re-generated whenever you save `./app/index.pug`.  
  每當 `./app/index.pug` 變更時，`./dist/index.html` 會自動重新產生。

## Step 2: use sass, a better css  

- What's [SASS](https://sass-lang.com/guide)?  As pug, sass use indent to represent scope level and has many useful features.  Try variables, nesting, and mixins.  
  [SASS](https://sass-lang.com/guide) 是什麼？如同 pug，sass 使用縮排決定範圍並提供了很多有用的功能，試試 variables、nesting 以及 mixins。

- Compile `./app/app.sass` to `./dist/app.css`.  Since you know `--watch` in pug, here we just skip the manual compilation way.  
  編譯 `./app/app.sass` 產生 `./dist/app.css`。既然在 pug 中看過 `--watch` 參數了，這邊我們就跳過手動編譯的方式。

  ```shell
  ./node_modules/.bin/node-sass ./app/app.sass -o dist --watch
  ```

- Try writing sass code.  Follow the instructions beginning with `Step 2`.  
  試著寫 sass 語法，照著 `Step 2` 開頭的提示操作。

  ```
  /* Step 2:
   * copy this code snippet to `./app/app.sass`
   * you may need to copy more than once
   * make the three buttons different with `buttonStyle` mixin
   * replace [child index], [color] and [border radius] with appropriate values
   * 複製這段程式碼至 `./app/app.sass`
   * 你可能需要複製不止一次
   * 使用 `buttonStyle` mixin 讓三個按鈕看起來不一樣
   * 將 [child index]、[color] 以及 [border radius] 修改成合適的值
   */
  &:nth-child([child index])
    +buttonStyle([color], [border radius])
  ```

  Compare `./app/app.sass` and `./dist/app.css`.  
  比較看看 `./app/app.sass` 跟 `./dist/app.css`。

## Step 3: is there a better javascript?  

There was, see [Babel](https://babeljs.io/).  However, modern js engines catch up the development of js syntax.  Try to execute `./babel/es6.js` in old [Node.js](https://nodejs.org/en/) (version &lt; 7).  Now Babel is usually used for js variants such as [TypeScript](https://www.typescriptlang.org/).  Execute the following command and than compare `./babel/typescript.ts` and `./dist/typescript.js`.  
曾經有的，請參考 [Babel](https://babeljs.io/)。然而，現代的 js 引擎已經追上 js 語法的發展，試試使用舊版的 [Node.js](https://nodejs.org/en/) (版本號小於 7)執行 `./babel/es6.js`。目前 Babel 通常用來處理 js 的變型，像是 [TypeScript](https://www.typescriptlang.org/)。執行以下指令並比較看看 `./babel/typescript.ts` 跟 `./dist/typescript.js`。

```shell
./node_modules/.bin/babel ./babel/typescript.ts --out-dir ./dist/ --extensions ".ts"
```

## Step 4: automation (with parcel)  

- Using parcel, you can watch pug, sass and javascript together.  
  使用 parcel，你可以同時處理 pug、sass 以及 javascript。
- Compile with parcel. Notice that only one of the following two commands is required. The definition of the second command is in `package.json`, "scripts".  
  用 parcel 編譯。注意下面兩個指令擇一使用即可。第二個指令定義在 `package.json` 裡的 scripts。

  ```shell
  ./node_modules/.bin/parcel watch ./parcel/index.pug
  npm run watch
  ```

  Note that `./app/index.pug` links to the compiled `app.css` but `./parcel/index.pug` links to the original `app.sass`.  
  注意 `./app/index.pug` 連到編譯過後的 `app.css`，但是 `./parcel/index.pug` 連到原始的 `app.sass`。

- The option `--public-url ./` must be provided to parcel for the html file run locally. Otherwise, the relative path is default to be `/` which is the root folder of your machine. On Windows, it is the disk where the html file is located (maybe C:\).
  要在自己的電腦上打開 html 檔的話，用 parcel 時一定要加上 `--public-url ./` 的選項。不然預設的相對路徑會是 `/` ，也就是你的電腦地根目錄，在 Windows 上則是 html 檔所在的硬碟 (也許是 C 槽)。

- The files compiled by parcel are stored in `./dist` by default. You may want to configurate it to `./build` by the `--dist-dir ./build` option along with the parcel command. (This option is named `--out-dir` for the older parcel whose version is less than `2.5.0`.)  
  用 parcel 編譯後的檔案，預設會放在 `./dist`。也許你會想在 parcel 的指令中加上 `--dist-dir ./build` 的選項來把它設定成 `./build`。(這個選項在舊版(2.5.0前)的 parcel 中叫做 `--out-dir`。)

- The `.map` files are source maps to link the compiled codes seen by the browser to the uncompiled source code. They can be used by the developers in debugging to set break points in source codes. Disabling the generation of the map files has no impact on the website. So, you may want to disable it by the `--no-source-maps` option along with the parcel command to make the working directory cleaner.  
  `.map` 檔是原始碼對應檔，把網頁看到的編譯後的程式碼對應到編譯前的原始碼。工程師可以利用這些檔案來在原始碼中設定中斷點。不生成這些檔案也不會對網頁有影響，所以你可能會想在 parcel 的指令中加上 `--no-source-maps` 的選項來停用，來讓資料夾乾淨些。

- See `./parcel/app.js` to learn how to use jquery with parcel.  
  參考 `./parcel/app.js` 了解如何在 parcel 中使用 jquery。

- Automation tools like parcel do more than just preprocessing.  The command below create a development web server for you.  
  像 parcel 這樣的自動化工具，其實可以做很多前處理以外的工作。下面的指令幫你建好一個測試用的網頁伺服器。

  ```shell
  ./node_modules/.bin/parcel ./parcel/index.pug --host [host] --port [port]
  ```

  Open `http://[host]:[port]` in your browser.  Remember to replace [host] and [port] to appropriate values.  
  用瀏覽器開啟 `http://[host]:[port]`，記得將 [host] 以及 [port] 修改成合適的值。
