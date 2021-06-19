# Front-End Testing

## Step 0: Setup
使用 `yarn` 安裝需要用到的套件。

或執行 `yarn add --dev jest` 和 `yarn add cypress --dev` 分別安裝 [jest](https://jestjs.io/) 和 [cypress](https://docs.cypress.io/)。

Unit testing 和 Integration testing 用 jest 實作，End-to-end testing 用 cypress 實作

## Step 1: Unit testing
Unit testing 適用於小範圍的測試，如 functions, methods。將以下的程式碼插入 `./__test__/sayHello.test.js` 中
```
/* Step 1:
 * 每個 `it` 中的函式皆視為一個測資
 * 需要測試的函式作為 `expect` 的參數傳入，而測試函式的結果預期要為 `toEqual` 中的值
 */
it("should return the proper greeting when a user doesn't pass a name", () => {
expect(sayHello()).toEqual("Hello human!")
})

it("should return the proper greeting with the name passed", () => {
expect(sayHello("Evgeny")).toEqual("Hello Evgeny!")
})
```
執行測試
```
$ yarn test __test__/sayHello.test.js
```

## Step 2: Integration testing
Integration testing 確保不同部位/資源之間的整合、運作邏輯如同預期。將以下的程式碼插入 `./__test__/greetings.test.js` 中
```
/* Step 2:
 * 測試當輸入為空時點擊後會產生的值
 */
expect(greeting.textContent).toBe('')
button.click()
expect(greeting.textContent).toBe('Hello human!')
```
執行測試
```
$ yarn test __test__/greetings.test.js
```

## Step 3: End-to-end (E2E) testing
E2E 是從使用者的角度做測試，並且 Cypress 會實際執行測資中的內容，因此需先架設一個測試的網站。

在 `ser.js` 中修改 \[port\] 的值
```
/* Step 3.1
 * 將 [port] 修改成合適的值
 */
const port = [port]
```

啟動 server 完成網站的架設，請注意此網站的功能
```
$ node ser.js
```

將以下的程式碼插入 `./__test__/greetings.spec.js` 中
```
/* Step 3.2:
 * 將 [port] 和 [name] 修改成合適的值
 * Cypress 訪問剛剛架設的網站，並提交一個輸入
 * `should` 中是預期要得到的結果
 */
cy.visit("http://luffy.ee.ncku.edu.tw:[port]")
cy.get('#greetings-input').type('[name]', { delay: 400 })
cy.get('#greetings-show-button').click()
cy.get('#greeting-text').should('include.text', 'Hello [name]!')
```

開啟 cypress 並且會產生 cypress/ 與 cypress.json
```
$ ./node_modules/.bin/cypress open
```

複製一份 `greetings.spec.js` 到 cypress/integration/ 資料夾底下
```
$ cp __test__/greetings.spec.js cypress/integration/greetings.spec.js
```

執行測試
```
$ yarn cy:run --spec "cypress/integration/greetings.spec.js"
```

也可在 `cypress/videos/greetings.spec.js.mp4` 看到 Cypress 測試的過程
