# css exercise

Follow the guide below to finish a web shown in `./res/exercise.png`.

## Step 0: observe the html structure

Though css does the most styling work. A good html structure can make things easy. Search `Step 0` in `./exercise.html` to see some useful details. In `vi`, try pressing `/` key to search text.

## Step 1: link to your css file

Insert the following code into `./exercise.html` and edit `[path to css]` to the correct path. Search `Step 1` in `./exercise.css` to see some useful details.

```
<link href="[path to css]" rel="stylesheet" type="text/css">
```

## Step 2: limit the content to a vertical area

Insert the following code into `./exercise.css` and edit `[content width]` to an appropriate value.

```
#navbar, #banner, #main, #bottom {
  background-color: white;
  max-width: [content width]; /* Step 2: input an appropriate content width */
  width: 100%; /* Step 2: watch out the unit, `%`, and google `css unit` for more */
  /* Step 2: why both `max-width` and `width` are used? */
}
```

## Step 3: style the navigation bar

Insert the following code into `./exercise.css` and edit `[correct display]` to an appropriate value.

```
#navbar {
  line-height: 0;
  padding: 5px 0;
  top: 0;
}

i.avatar, i.icon {
  background-position: center;
  display: [correct display]; /* Step 3: input the correct display to make the `height` property work */
  /* Step 3: Google `css dispaly` for more */
  height: 30px;
}

i.avatar {
  background-size: cover;
  border-radius: 15px;
  width: 30px;
}

i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
}

.right {
  position: static; /* Step 4: change `static` to the correct value to make the `right` property work */
  /* Step 4: Google `css position` for more */
  right: 0.5em;
}

.avatar.dirty { background-image: url(./res/dirty.jpg) }
.icon.arrow   { background-image: url(./res/angle-left.jpg) }
.icon.dot     { background-image: url(./res/dot.svg) }
.icon.submit  { background-image: url(./res/external-link.svg) }
```

## Step 4: make the dots right aligned

Search `Step 4` in `./exercise.css` and change `static` to an appropriate value to make the `right` property work.

## Step 5: style the banner

Insert the following code into `./exercise.css` and edit `[position]` and `[size]` to appropriate values.

```
#banner {
  background: url(./res/main.jpg) [position] / [size]; /* Step 5: try different `[position]` and `[size]` and see how banner changes */
  /* Step 5: Google `css background-position` and `css background-size` for more */
  top: 40px;
  height: 250px;
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
* to learn flexbox for arranging items

the writer/date info should be arranged, to the
end of left and right sides

use flex and justify-content in .info

## step 8: Adjust the position of the main content on z-coordinate
* to learn the attribute z-index to adjust items' position on z-coordinate

the paragraph will block the bannner, while the
page scrolled down

add z-index in .main
