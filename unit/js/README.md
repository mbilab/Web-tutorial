# js exercise

Follow the guide below to finish a web shown in `./detail-2.gif`.

本練習實作淡入淡出(fade in/out)的動態效果，透明度在 css 中可以用 `opacity` 來設定，本練習提供了四種作法來實作動態效果，請參著下方的 Steps 3-6。

## Step 0: prepare the html and css

Insert the following code into `<head>` of `./exercise.html` and follow instructions beginning with `Step 0` (case-sensitive). In `vi`, try pressing `/` key to search text.

```
<!-- Step 0:
  * use a framework can speed up the development process
  * a drawback is introducing more dependencies
  * use cdn to leverage the browser cache on famous packages across web sites
  * semantic-ui is used in this exercise, find its cdn from `https://cdnjs.com`
  * why put `exercise.css` AFTER semantic-ui?
-->
<link href="[cdn address of semantic-ui]" rel="stylesheet" type="text/css"> <!-- Step 0: replace [cdn address of semantic-ui] with the correct address -->
<link href="exercise.css" rel="stylesheet" type="text/css">
```

## Step 1: include js

Insert the following code into `<body>` bottom of `./exercise.html` and follow instructions beginning with `Step 1`.

```
<!-- Step 1:
  * use `<script>` to include js files
  * `jquery.min.js` is for step 3
  * `jquery-ui.js` is for `toggleClass() with duration in step 4
  * `semantic.min.js` for step 5
  * use browser developer console to check whether `$` is a function
  * why using the `min` version?
  * why putting js in the bottom of html?
-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script>
```

## Step 2: handle events

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 2`.

```
/* Step 2:
 * see http://www.w3school.com.cn/jquery/jquery_ref_events.asp for possible events
 * google `js arrow function` for the `( ... ) => { ... }` syntax
 * use browser developer console to test the event
 */
$(document).[event](() => { // Step 2: replace [event] with an appropriate value
  console.log("Event triggered!")
})
```

## Step 3: change css properties dynamically

Paste the following code into `./exercise.html`
```
<!--
    Script code will work when put at the bottom of <body> in html file(such as Step2),
    but the better developing way is separating js code in other file/files,
    and import them into html file.
    Make sure the following code is under Step1's code,
    because jQuery will be used later.
-->
<script src='./exercise.js'></script>
```

Next, insert the following code into `./exercise.js` and follow instructions beginning with `Step 3`.

```
/* Step 3:
 * google `css nth-child` for the special css selector
 * google `js ternary operator` for the `... ? ... : ...` syntax
 * `this` points to the event trigger in jQuery
 * all css properties can be changed "dynamically" with `animate()` of jQuery
 */
let display = true
$('.card:nth-child(1)').click(function(){
  // Step 3: replace [alternative style] to an appropriate value
  const style = display
  ? { opacity: 0.1 }
  : { [alternative style] }
  $(this).animate(style, 400)
  display = !display
})
```

## Step 4: change css properties with class

Insert the following code into `./exercise.js` and follow instructions beginning with `Step 4`.

```
/* Step 4:
 * a practical way of step 3
 * (hint) you may need to check `./exercise.css` for the [css class]
 * use browser developer console to see the class change of the card
 */
$('.card:nth-child(2)').click(function(){
  $(this).toggleClass([css class], 400) // Step 4: replace [css class] with an appropriate value
})
```

## Step 5: experience the power of framework

Insert the following code into `./exercise.js` and follow instructions beginning with `Step 5`.

```
/* Step 5:
 * repeat the transition twice, otherwise you can not click it again
 * see https://semantic-ui.com/modules/transition.html for more effects
 */
$('.card:nth-child(3)').click(function(){
  $(this).transition('[effect]') // Step 5: replace [effect] with an appropriate value
})
```

## Step 6: pure css solution (it depends)

Insert the following code into `./exercise.html` and follow instructions beginning with `Step 6`.

```
/* Step 6:
 * pure css transition has limits, but is worthy to learn
 * it requires less dependency and has better performance
 * `:hover` is a bad event (for touch screen), prevent using it
 */
.card:nth-child(4):hover {
  opacity: 0.1;
}
```
