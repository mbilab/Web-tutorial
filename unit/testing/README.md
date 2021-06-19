# testing

## Step 0: setup

Install dependent packages described in `package.json`.

安裝需要的套件，這些套件記錄在 `package.json` 裡。

```
$ yarn
```

If you don't have `yarn`, try `npm`.  Notice that either way is okay.

如果你的電腦沒有 `yarn`，試試 `npm`。注意兩個擇其一使用即可。

```
$ npm i
```

Or, you may install packages from scratch. This tutorial requires [cypress](https://docs.cypress.io/) and [jest](https://jestjs.io/).

或者，你可以從零開始安裝需要用到的套件。這個教學需要 [cypress](https://docs.cypress.io/) 與 [jest](https://jestjs.io/)。

```
$ yarn add --dev cypress jest # or
$ npm i --save cypress jest
```

## Step 1: unit testing

Unit testing fits small-scale (usually a function).  Add the folloing code into `./__test__/sayHello.test.js` and follow the instructions beginning with `Step 1`.

單元測試Unit testing 適用於小範圍的測試(通常是一個函式)。將以下的程式碼加入 `./__test__/sayHello.test.js` 並照著 `Step 1` 開頭的提示操作。

```
  /* Step 1:
   * each `it` function describes a unit test
   * 每個 `it` 函式描述了一個單元測試
   */
  it("should return the proper greeting when a user doesn't pass a name", () => {
    expect(sayHello()).toEqual("Hello human!")
  })

  it("should return the proper greeting with the name passed", () => {
    expect(sayHello("Evgeny")).toEqual("Hello Evgeny!")
  })
```

Run the test.

執行測試。

```
$ yarn jest sayHello # or
$ npx jest sayHello
```

## Step 2: integration testing

Integration testing (or system integration testing, SIT) ensures different units co-work as expected.  Add the folloing code into `./__test__/greetings.test.js` and follow the instructions beginning with `Step 2`.

整合測試(或是系統整合測試)目的在確保不同單元之間的整合、運作邏輯如同預期。將以下的程式碼加入 `./__test__/greetings.test.js` 並照著 `Step 2` 開頭的提示操作。

```
    /* Step 2:
     * test the results before and after a click
     * 測試按鈕點擊前後的文字內容
     */
    expect(greeting.textContent).toBe('')
    button.click()
    expect(greeting.textContent).toBe('Hello human!')
```

Run the test.

執行測試。

```
$ yarn jest greetings # or
$ npx jest greetings
```

## Step 3: End-to-end (E2E) testing

Integration testing tests the entire system from the developer view.  End-to-end testing also tests the entire system, but from the user view.  Thus, you need to start a web server and programmatically control a browser (`cypress` is used here) to test your system.

整合測試從開發者的角度來測試整個系統，端對端測試同樣測試整個系統，但是從使用者的角度。因此，你需要將網頁伺服器跑起來，並讓程式控制瀏覽器(這邊是用 `cypress`)進行測試。

### Step 3.1: run a web server

Add the folloing code into `./ser.js` and follow the instructions beginning with `Step 3.1`.

將以下的程式碼加入 `./ser.js` 並照著 `Step 3.1` 開頭的提示操作。

```
/* Step 3.1
 * edit [port] to an appropriate value
 * 將 [port] 修改成合適的值
 */
const port = [port]
```

Run the web server.

啟動網頁伺服器。

```
$ node ser.js
```

### Step 3.2: run test

Add the folloing code into `./__test__/greetings.e2e.test.js` and follow the instructions beginning with `Step 3.2`.

將以下的程式碼加入 `./__test__/greetings.e2e.test.js` 並照著 `Step 3.2` 開頭的提示操作。

```
    /* Step 3.2
     * edit [port] and [name] to appropriate values
     * you may use jquery syntax if you prefer it (https://docs.cypress.io/api/utilities/$#Syntax)
     * 將 [port] 和 [name] 改成合適的值
     * 如果你比較習慣，也可以使用 jquery 語法(https://docs.cypress.io/api/utilities/$#Syntax)
     */
    cy.visit('http://luffy.ee.ncku.edu.tw:[port]')
    cy.get('#greetings-input').type('[name]', { delay: 400 })
    cy.get('#greetings-show-button').click()
    cy.get('#greeting-text').should('include.text', 'Hello dirty!')
```

Open a cypress runner.  This step generates `cypress/` and `cypress.json`.

開啟一個 cypress 執行器，這個步驟會產生 `cypress/` 與 `cypress.json`。

```
$ yarn cypress open # or
$ npx cypress open
```

Copy the testing file.

複製測試程式。

```
$ cp ./__test__/greetings.e2e.test.js ./cypress/integration/
```

Run the test.

執行測試。

```
$ yarn cy:run --spec ./cypress/integration/greetings.e2e.test.js # or
$ npx cy:run --spec ./cypress/integration/greetings.e2e.test.js
```

The process is recorded at `./cypress/videos/greetings.e2e.test.js.mp4`.

測試的過程被記錄在 `./cypress/videos/greetings.e2e.test.js.mp4`。
