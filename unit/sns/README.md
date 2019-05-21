# SNS

## fb Login

### Step 0: Set up

1. 前往 [FB  developer](https://developers.facebook.com/ ) 新增應用程式，選擇新增產品: FB 登入。
2. 複製 `id.sample.js` 並改名為 `id.js`
3. 將 `id.js` 裡的 `myAppID` 設定為複製的應用程式編號
4. 設定產品的網址:
![](https://merry.ee.ncku.edu.tw/~yichung/fb_login.PNG )

### Step 1: 新增「Facebook 登入」按鈕

在 `fb_login.html` 加入以下程式碼。
```
<!-- Step 1
Below we include the Login Button social plugin. This button uses
the JavaScript SDK to present a graphical Login button that triggers
the FB.login() function when clicked.
-->
<fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>
```

由於目前沒有載入SDK，瀏覽器無法解析 <fb></fb>這個 tag，但仍能透過開發人員工具看到該 tag 確實有在html裡。

### Step 2: 設定 Facebook JavaScript SDK

SDK 是開發 FB 的套件，我們會在這設定並載入 SDK`。在 `fb_login.html` 加入以下程式碼。
```
/* Step 2
* 由於我們採用不加分號的 coding style 又使用匿名函式，我們要在匿名函式與前面的程式碼中間加入分號，避免將匿名函式當成參數傳入前面的程式碼中。
* myAppId 是 為了避免 AppId 進入 git 而另外從檔案中引入的變數
*/
window.fbAsyncInit = function() {
FB.init({
  appId  : myAppId,
  cookie : true,   // enable cookies to allow the server to access
		   // the session
  version: 'v3.3', // use graph api version 3.3
  xfbml  : true,   // parse social plugins on this page
})
FB.getLoginStatus(function(response) {
  statusChangeCallback(response)
})
}

// Load the SDK asynchronously
;(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0]
if (d.getElementById(id)) return
js = d.createElement(s)
js.id = id
js.src = '//connect.facebook.net/en_US/sdk.js'
fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

```

問題思考: 為什麼載入 SDK 的程式碼要放在 body 的最一開始?

### Step 3: 檢查登入狀態

完成剛剛寫好的按鈕事件，透過 `FB.getLoginStatus` 取得狀態，並傳入 `statusChangeCallback`，程式碼
在 `fb_login.html` 加入以下程式碼，並觀察 console.log 中顯示的 response 物件內容
```
/* Step 3
* This function is called when someone finishes with the Login button
* See the onlogin handler attached to it in the sample code below
*/
function checkLoginState() {
FB.getLoginStatus(function(response) {
  statusChangeCallback(response)
})
}
```

### Step 4: 設計面對不同狀態使用者的反應

我們可以在 `statusChangeCallback` 設計我們要怎麼面對不同狀態的使用者，在 `fb_login.html` 加入以下程式碼:

```
/* Step 4
 * The response object is returned with a status field that lets the
 * app know the current login status of the person.
 * Full docs on the response object can be found in the documentation
 * for FB.getLoginStatus().
 */
if (response.status === 'connected') {
  // Logged into your app and Facebook.
  testAPI()
} else if (response.status === 'not_authorized') {
  // The person is logged into Facebook, but not your app.
  document.getElementById('status').innerHTML = 'Please log into this app.'
} else {
  // The person is not logged into Facebook, so we're not sure if
  // they are logged into this app or not.
  document.getElementById('status').innerHTML = 'Please log into Facebook.'
}
```

我們在 testAPI 取得了使用者的名字，試找找哪些使用者資料是可以透過這個 api 取得的。
