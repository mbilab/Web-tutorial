# css exercise

Follow the guide below to finish a web shown in `./res/exercise.png`.

## Step 0: observe the html structure

Though css does the most styling work. A good html structure can make things easy. Search `Step 0` in `./exercise.html` to see some useful details. In `vi`, try pressing `/` key to search text.

## Step 1: link to your css file

Edit `[path to css]` to the correct path in `./exercise.html`. Search `Step 1` in `./exercise.css` to see some useful details.

```
<link href="[path to css]" rel="stylesheet" type="text/css">
```

## Step 2: limit the content to a vertical area

Edit `[content width]` to an appropriate value in `./exercise.css`.

```
#navbar, #banner, #main, #bottom {
  background-color: white;
  /* Step 2:
   * Input an appropriate content width
   * Watch out the unit, `%`, and google `css unit` for more
   * Why both `max-width` and `width` are used?
   */
  max-width: [content width];
  width: 100%;
}
```

## Step 3: style the navigation bar

Edit `[correct display]` to an appropriate value in `./exercise.css`.

```
i.avatar, i.icon {
  background-position: center;
  display: [correct display];
  /* Step 3:
   * Input the correct display to make `height` work
   * Google `css dispaly` for more
   */
  height: 30px;
}
```

## Step 4: make the dots right aligned

Change `static` to an appropriate value to make the `right` property work in `./exercise.css`.

```
.right {
  /* Step 4:
   * Change `static` to the correct value to make the `right` property work
   * Google `css position` for more
   */
  position: static;
  right: 0.5em;
}
```

## Step 5: style the banner

Edit `[position]` and `[size]` to appropriate values in `./exercise.css`.

```
#banner {
  /* Step 5:
   * Try different `[position]` and `[size]` and see how banner changes
   * Google `css background-position` and `css background-size` for more
   */
  background: url(./res/main.jpg) [position] / [size];
}
```

## Step 6: The banner and navbar should be fixed when the page is scrolled

Change position to "fixed" in #banner and #navbar

```
#navbar {
  position: fixed;
}

#banner {
  position: fixed;
}
```

## step 7: Arrange the info of the paragraph
 
To learn flexbox for arranging items, the writer/date info should be arranged, to the end of left and right sides

use flex and justify-content in .info

```
.info {
  /* Step 7: Input the correct display and justify-content to make flexbox */
  display: [correct display];
  justify-content: [correct justify-content];
  margin: 0 0 5% 0;
}
```

## step 8: Adjust the position of the main content on z-coordinate

To learn the attribute z-index to adjust items' position on z-coordinate the paragraph will block the bannner, while the page scrolled down

add z-index in #main

```
#main {
  box-sizing: border-box;
  padding: 1px 4% 5vh;
  position: relative;
  top: 290px;
  /* Step 8: Input the correct z-index to adjust the position*/
  z-index: [correct z-index];
}
```
