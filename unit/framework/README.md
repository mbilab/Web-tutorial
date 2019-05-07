semantic-ui
=====

semantic-ui 是一種 css 框架，但為了特效動畫部分內容需要 jQuery。

## Step 1: install or include
[官網](https://semantic-ui.com/introduction/getting-started.html)上提供了兩個方法 install 跟 include。
在這裡我們採用 include。‵

在 `index.html` <head></head> 中加入:
```
<!-- step 1.1 -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.css">
```

在 `index.html` <body></body>後半段 加入:
```
<!-- step 1.2 -->
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.js"></script>
```

## Step 2: add elememts

semantic ui 透過 class 為元素添加 css style。

在 html 加入:
```
<!-- Step 2.1 -->
<button class="ui button" id="follow">Follow</button>
```

就能在 UI Element 看到不一樣的 button。

追加 class 便能繼續改變元素的設計。
在 html 加入:
```
<!-- Step 2.2 -->
<button class="ui primary button" id="save">Save</button>
```

改變按鈕顏色

## Step 3: add animations

semantic-ui 也提供了部分動畫特效。
在 html加入:
```	
//-- Step 3 --
$('#follow').click(e => {
  $('#follow').transition('bounce')
})
$('#save').click(e => {
  $('#save').transition('tada')
})
```

去[官網](https://semantic-ui.com/modules/transition.html)查詢並嘗試更多有趣的特效吧!
