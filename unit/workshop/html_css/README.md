# Course 01 css and html

## Introduction 
Follow guide bellow and build your web

## Edit the index.html
`$ vi index.html`
### step 1: Paste code bellow to index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>css demo</title>
    <style>
      #reference {
        background: url('./res/demo.png') no-repeat top/contain;
        bottom: 0;
        padding: .5em;
        position: fixed;
        right: 0;
        text-align: right;
        top: 0;
        width: 40vw;
      }
    </style>
  </head>

  <body>
    <div id="reference">
    </div>
  </body>
</html>
```

### step2: Add content
```
  <body>
    <div id="navbar">
      <i class="arrow icon"></i>
      <i class="dirty avatar"></i>
      <i class="right dot icon"></i>
    </div>

    <div id="banner"></div>

    <div id="main">
      <h1>Outstanding<br>acoustics</h1>
      <div class="info">
        <div class="author">By dirty</div>
        <div class="date">2018/03/14</div>
      </div>
      <p>Hi Rakesh, not only is it permitted to use reasonable capitalisation in the Display URL, I'd actually recommend it, however, there are some things that Google do in the way they're actually shown. It's fixed internally by WhatsApp, update will be pushed out soon (see thread.</p>
      <p>Hi Rakesh, not only is it permitted to use reasonable capitalisation in the Display URL, I'd actually recommend it, however, there are some things that Google do in the way they're actually shown. It's fixed internally by WhatsApp, update will be pushed out soon (see thread.</p>
      <p>Hi Rakesh, not only is it permitted to use reasonable capitalisation in the Display URL, I'd actually recommend it, however, there are some things that Google do in the way they're actually shown. It's fixed internally by WhatsApp, update will be pushed out soon (see thread.</p>
    </div>

    <div id="bottom">
      <input type="text" placeholder="Say something...">
      <i class="right submit icon"></i>
    </div>
    <div id="reference">
    </div>
  </body>
```

### step 3: Link css
```
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>css demo</title>
    <link href="app.css" rel="stylesheet" type="text/css">
    <style>
      #reference {
        background: url('./res/demo.png') no-repeat top/contain;
        bottom: 0;
        padding: .5em;
        position: fixed;
        right: 0;
        text-align: right;
        top: 0;
        width: 40vw;
      }
    </style>
  </head>
```

## Edit the app.css
`$ vi app.css`
### step 1: Set display
```
i.avatar, i.icon {
  background-position: center;
  display: inline-block;
  height: 30px;
}
```
```
.info {
  display: flex;
  justify-content: space-between;
  margin: 0 0 5% 0;
}
```

### step 2: Set position
```
#navbar, #banner, #main, #bottom {
  background-color: white;
  max-width: 30em;
  position: fixed;
  width: 100%;
}
```

### step 3: Set z-index
```
#main {
  box-sizing: border-box;
  padding: 1px 4% 5vh;
  position: relative;
  top: 290px;
  z-index: -1;
}
```

### step 4: Set position 
```
.right {
  position: absolute;
  right: 0.5em;
}
```
