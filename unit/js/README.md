## description
這個特效是一個fade效果，所以第一個想法就是改變它的透明度，透明度在css中可以用opacity來設定，接著它在淡出期間會下降，所以也要調整與上邊的距離，在css中也就是改變margin-top
知道要修改那些css屬性後，接著就是選擇一種方法來完成動畫的部分，範例有三種作法，分別是css transition屬性, jQuery animation, 以及semantic ui的transition api

## Step 0: observe the html and css
    Insert the following code into `./exercise.html` and edit `[path to css]` to the correct path.

    `<link href=[path to css] rel="stylesheet" type="text/css">`

    We use semantic-ui in this practice. Find the [cdn address of semantic-ui] in https://cdnjs.com .
    `<link href="https://cdnjs.cloudflare.com/[cdn address of semantic-ui]/semantic.css" rel="stylesheet" type="text/css">`

## Step 1: include jQuery and Sementic-ui from cdn
    Include javascript framework, jQuery, and semantic.js. 

    ```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.js"></script>
    ```

## Step 2: handle events
    Go to http://www.w3school.com.cn/jquery/jquery_ref_events.asp, try these events. 
    e.g. `click()`, `dbclick()`, `mouseleave()`. 

    `$(doucument).[event](() => {console.log("Event triggered!")})`
## Step 3: change css properties dynamically
    You can use jQuery to do something fancy. Try to change opacity to 1, and margin-top to 1em.	

    ```
      let display = true
      $("#c1").click(() => {
        //Step 3
        //const tmp = (condition)? a: b  ->  if condition is True, then tmp = a, else tmp = b
        //we use opacity here, what if display: none?
        const transition = display ? {opacity: 0, 'margin-top': '2em'} : {[another style]} 
        $("#c1 > div").animate(transition, 400) // you can do all css things "dynamically" with this
        display = !display
      })
    ```
## Step 4: change class for animation with css transition
    Add class hiding "#c2" by `toggleClass()`. 

    `$("#c2").click(() => {$("#c2 > div").toggleClass([css class], 400)})`
    
## Step 5: experimence the power of framework
    Go to https://semantic-ui.com/modules/transition.html and try some fancy effects.

    `$("#c3").click(() => $("#c3 > div").transition('[effect]'))`
	

## Step 6: pure css solution (it depends)
    You can use css make some animation, but it depends on the condition.

    ```
      #c4 {
        transition: all .2s;

        /* Step 6 */
        /* vendor-prefix is for compatibility, it is less important as browsers improves */
        -webkit-transform: all .2s;
      }

      /* Step 6 */
      /* css transition has limits, but is worthy to learn */
      /* less dependency, better performance */
      /* `:hover` is a bad event (for touch screen), prevent using it */
      #c4:hover {
        margin-top: 2em;
        opacity: 0;
      }
    ```
