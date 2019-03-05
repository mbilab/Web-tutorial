# js exercise

Follow the guide bellow to finish a web shown in `./res/exercise.png`.

本練習實作淡入淡出(fade in/out)的動態效果。第一個想法是改變 div 的透明度，透明度在 css 中可以用 `opacity` 來設定。接著 div 在淡出期間會下降，這部分可以靠調整上方的留白達成，在 css 中可以用 `margin-top` 來設定。知道要修改那些 css 屬性後，本練習提供了四種作法來實作動態效果，請參著下方的 Steps 3-6。

## Step 0: observe the html and css

Insert the following code into `<head>` of `./exercise.html` and follow instructions beginning with `Step 0`(Capital). In `vi`, try pressing `/` key to search text.

```
<link href="[cdn address of semantic-ui]" rel="stylesheet" type="text/css"> <!-- Step 0: replace [cdn address of semantic-ui] with the correct address -->`
<!-- Step 0: semantic-ui is used in this exercise, find its cdn in `https://cdnjs.com`. -->
`<link href="exercise.css" rel="stylesheet" type="text/css"> <!-- Step 0: why this line is below? -->
```

## Step 1: include js

Insert the following code into `<body>` bottom of `./exercise.html` and follow instructions beginning with `Step 1`.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.js"></script>
`<!-- Step 1: why putting js in the bottom of html? -->
```

## Step 2: handle events

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 2`.

```
//Step 2: see http://www.w3school.com.cn/jquery/jquery_ref_events.asp for possible events
//use browser developer console to see the class change of the div
$(doucument).[event](() => { // Step 2: replace [event] with an approprite value
  console.log("Event triggered!")
})`
```


## Step 3: change css properties dynamically

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 3`.

```
let display = true
$('.card:nth-child(1)').click(function(){ // Step 3: google `css nth-child` for the special css selector
  // Step 3: replace [alternative style] to an appropriate value
  const transition = display ? { opacity: 0.1, 'margin-top': '2em' } : { [alternative style] } 
  // Step 3: google `js ternary operator` for the `... ? ... : ...` syntax
  $(this).animate(transition, 400) // Step 3: all css properties can be changed "dynamically" with `animate()` of jQuery
  // Step 3: `this` points to the event trigger in jQuery
  display = !display
})
```

## Step 4: change class for animation with css transition

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 4`.

```
$('.card:nth-child(2)').click(function(){
  $(this).toggleClass([css class], 400) // Step 4: replace [css class] with an appropriate value
  // Step 4: (hint) you may need to check `./exercise.css`
  // Step 4: use browser developer console to see the class change of the div
})
```

## Step 5: experimence the power of framework

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 5`.

```
$('.card:nth-child(3)').click(function(){
  $(this).transition('[effect]')) // Step 5: replace [effect] with an appropriate value
  // Step 5: see https://semantic-ui.com/modules/transition.html for more effects
})
```

## Step 6: pure css solution (it depends)

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 6`. Pure css transition has limits, but is worthy to learn. It requires less dependency and has better performance.

```
.card:nth-child(4):hover { /* Step 6: `:hover` is a bad event (for touch screen), prevent using it */
   opacity: 0.1;
}
```
