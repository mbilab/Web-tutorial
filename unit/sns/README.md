# SNS

## fb Login

### Step 1: Set up
前往 [FB  developer](https://developers.facebook.com/) 新增應用程式，選擇新增產品: FB 登入。

設定產品的網址:

### Step 2: 設定 Facebook JavaScript SDK
SDK 是開發 FB 的套件，我們會在這設定並載入 SDK，把以下程式碼加入 `fb_login.html`。由於我們採用不加分號的 coding style 又使用匿名函式，
我們要在匿名函式與前面的程式碼中間加入分號，避免將匿名函式當成參數傳入前面的程式碼中。 
```
      window.fbAsyncInit = function() {
        FB.init({
          appId  : myAppId,
          cookie : true,   // enable cookies to allow the server to access
                           // the session
          version: 'v3.3', // use graph api version 3.3
          xfbml  : true,   // parse social plugins on this page
        })
        
        FB.AppEvents.logPageView()
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
