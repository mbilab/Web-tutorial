# SNS

## fb Login

### Step 0: Setup

1. 前往 [Meta for Developer](https://developers.facebook.com/)，點選 banner 右上角的「新手指南/立即開始/登入」後，輸入基本資料
2. 建立應用程式，類型選「無」。輸入資料後按「建立應用程式」並登入
3. 在新增產品頁面找到「Facebook 登入」，並按右下角的「設定」後，就啟用 Facebook 登入了
4. 從左側選單中找到「Facebook 登入」，打開下拉式選單並點選「設定」。在「使用 JavaScript SDK 登入」處改成「是」。並在下方輸入允許的網域為 https://luffy.ee.ncku.edu.tw/ ，儲存變更。
5. 複製 `id.sample.js` 並改名為 `id.js`
6. 點 Meta for Developer 上方 Banner 的應用程式編號(數字的部分)，將其複製起來
7. 將 `id.js` 裡的 `myAppID` 設定為複製的應用程式編號
8. 在 Meta for Developer 左側選單中找到「設定」，「基本資料」。並將「網站網址」改成 `https://luffy.ee.ncku.edu.tw/~<username>/sns/fb_login.html` (記得建立 soft link 到 `~/public_html/`)

### Step 1: 新增「Facebook 登入」按鈕

在 `fb_login.html` 加入以下程式碼。

```html
    <!-- Step 1 code goes here
    Below we include the Login Button social plugin. This button uses
    the JavaScript SDK to present a graphical Login button that triggers
    the FB.login() function when clicked.
    -->
    <fb:login-button scope="public_profile" onlogin="checkLoginState();"></fb:login-button>
```

由於目前沒有載入SDK，瀏覽器無法解析 <fb></fb> 這個 tag，但仍能透過開發人員工具看到該 tag 確實有在html裡。

### Step 2: 設定 Facebook JavaScript SDK

SDK 是開發 FB 的套件，我們會在這設定並載入 SDK`。在 `fb_login.html` 加入以下程式碼。

```javascript
      /* Step 2 code goes here
       * 由於我們採用不加分號的 coding style 又使用匿名函式，我們要在匿名函式與前面的程式碼中間加入分號，避免將匿名函式當成參數傳入前面的程式碼中。
       * `myAppId` 是為了避免 AppId 進入 git 而另外從檔案中引入的變數
       */
      window.fbAsyncInit = function() {
        FB.init({
          appId  : myAppId,
          cookie : true,    // enable cookies to allow the server to access the session
          version: 'v10.0', // use graph api version v10.0
          xfbml  : true,    // parse social plugins on this page
        })
        FB.AppEvents.logPageView()
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response)
        })
      }

      // Load the SDK dynamically
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
```javascript
    /* Step 3 code goes here
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

```javascript
    /* Step 4 code goes here
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
