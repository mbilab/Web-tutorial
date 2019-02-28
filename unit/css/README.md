# Course 01 css and html

## Introduction 
Follow guide bellow and build your web

## Edit the app.css
`$ vi app.css`

### step 1: Show the avatar
to learn the differences in (block/inline-block/inline)
```
i.avatar, i.icon {
  background-position: center;
  display: inline-block;
  height: 30px;
}
```

### step 2: Set position of the "More icon" 
to learn the position attribute and the use of "absolute"
```
.right {
  position: absolute;
  right: 0.5em;
}
```

### step 3: Fix the position of banner image
to learn the position attribute and the value "fixed"
```
#navbar, #banner, #main, #bottom {
  background-color: white;
  max-width: 30em;
  position: fixed;
  width: 100%;
}
```

### step 4: Arrange the info of the paragraph
to learn flexbox for arranging items
```
.info {
  display: flex;
  justify-content: space-between;
  margin: 0 0 5% 0;
}
```

### step 5: Adjust the position of the main content on z-coordinate
to learn the attribute z-index to adjust items' position on z-coordinate
```
#main {
  box-sizing: border-box;
  padding: 1px 4% 5vh;
  position: relative;
  top: 290px;
  z-index: -1;
}
```
