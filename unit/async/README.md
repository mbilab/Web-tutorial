

## Step 0: question

如何讓log依序出現?
試著把下面的code貼到`index.html`的script中，使用F12去觀察log出現的狀況。
打一些內容到輸入框中，並且送出。

    ```
    /* Step 0
     * 在第一個 setTimeout 還在讀秒的同時， javascript 就已經往下讀到另一個 setTimeout 了 -> 非同步
     *      同步(synchronous) 等事件執行完，才去執行下一件事情
     *      非同步(asynchronous) 不用等事件執行完，就可以去執行下一件事(所以我們不會知道，其中的事情什麼時候會執行完)
     *
     * 用 setTimeout 去模擬"和後端要資料需要 loading 時間"的這類狀況
     * 我們需要等資料回來，才能做某些特定的事情
     */

    $('#send').click(()=>{

        doSomething(1);
        doSomething(2);
        doSomething(3);

    });


    var doSomething = (token)=>{
        setTimeout(()=>{
            $('#show').html(`data_${token} return : ${$('input[type="text"]').val()}`);
            console.log(`data_${token} return : ${$('input[type="text"]').val()}`);
        }, 1500);
    }
    ```

## Step 1: callback

將`Step 0`的程式碼註解掉，註解方式如下：

    ```
    /*
        想要註解的內容
            .
            .
            .
    */
    ```

看看兩者有什麼不同，並跑看看結果。

    ```
    /* Step 1
     * callback function 串接起執行的邏輯，讓 javascript 能同步執行非同步的語法
     * 用 callback function，可以確保在某些事情結束後，才會執行下一個動作。
     * 但是如果今天我需要接很多個 doSomething ? 回呼地獄(Callback Hell)
     */


    $('#send').click(()=>{

        doSomething(1,()=>{
            doSomething(2, ()=>{
                doSomething(3);
            });
        });

    });


    var doSomething = (token, callback)=>{
        setTimeout(()=>{
            $('#show').html(`data_${token} return : ${$('input[type="text"]').val()}`);
            console.log(`data_${token} return : ${$('input[type="text"]').val()}`);

            if(typeof callback === 'function'){
                callback();
            }
        }, 1500);
    }
    ```

## Step 2: Promise

同樣的事情，我們可以用`Promise`來處理，可以避免`callback hell`的情況，讓程式碼看起來更簡潔，也增加了許多便利性。
將`Step 1`的程式碼註解掉，註解方式如下：

    ```
    /*
        想要註解的內容
            .
            .
            .
    */
    ```

並且在`Step 2`的地方加上`Step 2`的程式碼

    ```
    /* Step 2
     * Promise 是一個表示非同步運算的最終完成或失敗的物件
     * resolve 和 reject 兩個 function ，分別會在 promise 成功和失敗時執行並回傳幫忙設定好的內容
     * `.then()`用來接收執行成功後 resolve 出來的資料，因為是 promise 物件的中一個 function ，所以可以不斷串接
     * 可以注意程式碼中的第二個`.then()`，接收到 resolve 出來的 token ，之後再傳進下一個 promise ，可以觀察結果和前面有什麼不同
     * 成功 resolve 我們會用`.then()`接下去，失敗時的 reject 則是使用`.catch()`去處理錯誤
     * 更詳細的內容請直接google `promise`
     */

        //part1
    $('#send').click(()=>{

        doSomething(1)
        .then(()=>doSomething(2))
        .then((n)=>doSomething(n));

    });


        //part2
    function doSomething(token){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                $('#show').html(`data_${token} return : ${$('input[type="text"]').val()}`);
                console.log(`data_${token} return : ${$('input[type="text"]').val()}`);
                resolve(token);
            }, 1500);
        });
    }
    ```

## Step 3: Async / Await

後來又推出的 async/await 語法，讓我們在處理非同步函式的時候，語法能夠更簡潔乾淨，易讀。
將`Step 2`的`part1`註解掉，註解方式如下：

    ```
    /*
        想要註解的內容
            .
            .
            .
    */
    ```

之後在`Step 3`的區塊上，加入以下的程式碼

    ```
    /* Step 3
     * await 就是等待，在這個 promise 結束前，後面的程式碼都不能被執行，會被包在 async function 中使用
     * async function 會將 await 包在其中，而裡面的 await 會依序執行
     * async function 結構非常類似 Promise，在正確執行的情況下，也會回傳 resolve的狀態，並且可用`.then()`來接收正確資料
     * async function 會將 promise 回傳
     * async function可以寫成`async() => {}`或`async function(){}`
     * ( ()=>{} )()是將一個匿名函數`()=>{}`在宣告完後，即執行
     * 更詳細的內容請直接google `await / async`
     */

    $('#send').click(()=>{

        (async ()=>{
            await doSomething(1);
            await doSomething(2);
            await doSomething(3);
        })()
        .then(()=>{doSomething(4)})

    });
    ```

## Step 4: Resolve in await/async

使用了await，那 resolve 的值要如何處理？
將`Step 3`的部分按照底下的程式碼做修改，並觀察結果。

    ```
    /* Step 4
     * await會將 resolve 回來的值傳出
     * 所以可以觀察一下第三個await的結果，和之前有什麼不同
     */

    $('#send').click(()=>{

        (async ()=>{
            await doSomething(1);
            const token = await doSomething(2);
            await doSomething(token);
        })()
        .then(()=>{doSomething(4)})

    });
    ```
