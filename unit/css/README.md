# css exercise

Follow the guide below to finish a web shown in `./res/exercise.png`.

## Step 0: observe the html structure

Though css does the most styling work. A good html structure can make things easy. Search `Step 0` in `./exercise.html` to see some useful details. In `vi`, try pressing `/` key to search text.

## Step 1: link to your css file

Insert the following code into `<head>` of `./exercise.html` and follow instructions beginning with `Step 1` (case-sensitive). Search `Step 1` in `./exercise.css` to see some useful details.

```
<!-- Step 1:
  * find the path of the css file
  * use css to style an HTML document
  * use `<link>` to include css files
-->
<link href="[path to css]" rel="stylesheet" type="text/css">
```

## Step 2: limit the content to a vertical area

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 2`.

```
/* Step 2:
 * input an appropriate `content width`
 * watch out the unit, `%`, and google `css unit` for more
 * why both `max-width` and `width` are used?
 */
max-width: [content width];
width: 100%;
```

## Step 3: style the navigation bar

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 3`.

```
/* Step 3:
 * input the `correct display` to make `height` work
 * google `css dispaly` for more
 */
display: [correct display];
height: 30px;
```

## Step 4: make the dots right aligned

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 4`.

```
/* Step 4:
 * change `static` to the correct value to make the `right` property work
 * google `css position` for more
 */
position: static;
right: 0.5em;
```

## Step 5: style the banner

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 5`.

```
/* Step 5:
 * try different `[position]` and `[size]` and see how banner changes
 * google `css background-position` and `css background-size` for more
 */
background: url(./res/main.jpg) [position] / [size];
```

## Step 6: the banner and navbar should be fixed when the page is scrolled

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 6`.

```
/* Step 6:
 * input the `correct position` to make the elements `fixed`
 * set the position `fixed` then no space is created for the element in the page layout
 * google `css position` for more
 */
position: [correct position];
```

## step 7: adjust the position of the main content on z-coordinate

Insert the following code into `./exercise.css` and follow instructions beginning with `Step 8`.

```
/* Step 7:
 * the paragraph will block the banner, while the page scrolled down
 * input the `correct z-index` to adjust the position
 * learn the attribute z-index for adjusting items' position on the z-coordinate
 * google `css z-index` for more
 */
z-index: [correct z-index];
```

## step 8: arrange the info of the paragraph
 
Insert the following code into `./exercise.css` and follow instructions beginning with `Step 7`.

```
/* Step 8:
 * the writer/date info should be arranged, to the end of left and right sides
 * input the `correct display` and `correct justify-content` to make flexbox
 * learn flexbox for arranging items
 * google `css flexbox` for more
 */
display: [correct display];
justify-content: [correct justify-content];
```
