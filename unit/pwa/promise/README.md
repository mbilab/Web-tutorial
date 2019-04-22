

## Step 0: question

如何讓log依序出現?
試著把下面的code貼到`index.html`的script中，使用F12去觀察log出現的狀況。

    ```
    /* Step 0
     * 在第一個 setTimeout 還在讀秒的同時， javascript 就已經往下讀到另一個 setTimeout 了
     * 這是 javascript 的非同步特性
     * 用 setTimeout 去模擬"和後端要資料需要 loading 時間"的這類狀況
     * 我們需要等資料回來，才能做某些特定的事情
     */

    //part 1
    $('#send').click(()=>{

        doSomething(1);
        doSomething(2);
        doSomething(3);

    });


    //part2
    var doSomething = (token)=>{
        setTimeout(()=>{
            $('#show').html(`data_${token} return : ${$('input[type="text"]').val()}`);
            console.log(`data_${token} return : ${$('input[type="text"]').val()}`);
        }, 1500);
    }
    ```

## Step 1: callback

把`Step 0`的兩個部分，照著下面的程式碼做修改。
並跑看看結果。

    ```
    /* Step 1
     * callback function 串接起執行的邏輯，讓 javascript 能同步執行非同步的語法
     * 用 callback function，可以確保在某些事情結束後，才會執行下一個動作。
     * 但是如果今天我需要接很多個 doSomething ? 回呼地獄(Callback Hell)
     */


    //part1
    $('#send').click(()=>{

        doSomething(1,()=>{
            doSomething(2, ()=>{
                doSomething(3);
            });
        });

    });


    //part2
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

將`Step 1`的`part 1`區塊註解掉，並且加上`Step 2`的程式碼
    ```
    /* Step 2
     * Promise 是一個表示非同步運算的最終完成或失敗的物件
     * resolve 和 reject 兩個 function ，分別會在 promise 成功和失敗時執行並回傳幫忙設定好的內容
     * `.then()`用來接收執行成功後 resolve 出來的資料，因為是 promise 物件的中一個 function ，所以可以不斷串接
     * 可以注意程式碼中的第二個`.then()`，接收到 resolve 出來的 'n'，之後再傳進 promise ，可以觀察結果和前面有什麼不同
     * 成功 resolve 我們會用`.then()`接下去，失敗時的 reject 則是使用`.catch()`去處理錯誤
     * 更詳細的內容請直接google `promise`
     */
    
    //part 1
    $('#send').click(()=>{

        promise(1)
        .then(()=>promise(2))
        .then((value)=>promise(value));

    });


    //part 2
    function promise(token){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                $('#show').html(`data_${token} return : ${$('input[type="text"]').val()}`);
                console.log(`data_${token} return : ${$('input[type="text"]').val()}`);
                resolve('n');
            }, 1500);
        });
    }
    ```

## Step 3: Async / Await

將`Step 2`的 part 1註解掉後，再加上以下的程式碼

```
    /* Step 3
     * await 就是等待，在這個 promise 結束前，後面的程式碼都不能被執行，會被包在 async function 中使用
     * async function 會將 await 包在其中，而裡面的 await 會依序執行
     * async function 結構非常類似 Promise，在正確執行的情況下，也會回傳 resolve的狀態，並且可用`.then()`來接收正確資料
     * async function可以寫成`async() => {}`或`async function(){}`
     * ( ()=>{} )()是將一個匿名函數`()=>{}`在宣告完後，即執行
     * 更詳細的內容請直接google `await / async`
     */

    $('#send').click(()=>{

        (async ()=>{
            await promise(1);
            await promise(2);
            await promise(3);
        })()

    });
```
