# game

## Step 1: background

### Step 1.1 load resource

Add the following code into `./app.js` and follow the instructions beginning with `Step 1.1`.

```javascript
  /* Step 1.1 code goes here
   * `https://labs.phaser.io` is setup by phaser to promote itself
   * * try open `https://labs.phaser.io/src/` and `https://labs.phaser.io/assets/`
   * * usually, you need to serve the resource on your own server 
   * * for example, you may download `https://phaser.io/tutorials/making-your-first-phaser-3-game/phaser3-tutorial-src.zip`
   *   taught in `https://phaser.io/tutorials/making-your-first-phaser-3-game/part1`
   */
  this.load.setBaseURL('https://labs.phaser.io')
  this.load.image('sky', 'src/games/firstgame/assets/sky.png')
  this.load.image('ground', 'src/games/firstgame/assets/platform.png')
  this.load.image('star', 'src/games/firstgame/assets/star.png')
  this.load.image('bomb', 'src/games/firstgame/assets/bomb.png')
  this.load.spritesheet('dude',
    'src/games/firstgame/assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
  )
```

### Step 1.2 show a static resource

Add the following code into `./app.js` and follow the instructions beginning with `Step 1.2`.

```javascript
  /* Step 1.2 code goes here
   * watch the key (`sky`), compare it with the previous code snippet
   * understand the coordinate system
   * * the game is 800x600, and we put the sky at (400, 300)
   * try show other resource on your screen
   */
  this.add.image(400, 300, 'sky')
```

## Step 2: grounds

Add the following code into `./app.js` and follow the instructions beginning with `Step 2`.

```javascript
  /* Step 2 code goes here
   * these static resource will interact with dynamic resource, so we need to put them into the physical engine
   * search `arcade` in `./app.js` and try to read related document by youself
   * static resource usually does not change, `refreshBody()` tells phaser that it has changed and forces phaser to refresh them
   */
  platforms = this.physics.add.staticGroup()
  platforms.create(400, 568, 'ground').setScale(2).refreshBody()
  platforms.create(600, 400, 'ground').setScale(1, .5).refreshBody()
  platforms.create( 50, 250, 'ground').setScale(1, .5).refreshBody()
  platforms.create(750, 220, 'ground').setScale(1, .5).refreshBody()
```

## Step 3: player

Add the following code into `./app.js` and follow the instructions beginning with `Step 3`.

```javascript
  /* Step 3 code goes here
   * google `sprite` if you don't know its meaning in games
   * try un-comment the `setCollideWorldBounds` line
   */
  player = this.physics.add.sprite(100, 450, 'dude')
  player.setBounce(.2)
  player.setCollideWorldBounds(true)
```

## Step 4: control the player

Add the following code into `./app.js` and follow the instructions beginning with `Step 4.1`.

```javascript
  /* Step 4.1 code goes here
   * see the original `dude.png` may help you understand the numbers in this code snippet
   */
  this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), key: 'left', repeat: -1 })
  this.anims.create({ frameRate: 20, frames: [ { key: 'dude', frame: 4 } ], key: 'turn', })
  this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), key: 'right', repeat: -1 })

  cursors = this.input.keyboard.createCursorKeys()
```

Add the following code into `./app.js` and follow the instructions beginning with `Step 4.2`.

```javascript
  /* Step 4.2 code goes here
   * adjust parameters (e.g. `speed`) is boring, but could be critical to gaming experience
   * watch the keys (`left`, `right` and `turn`), compare them with the previous code snippet
   */
  const speed = 160
  if (cursors.left.isDown) {
    player.setVelocityX(-speed)
    player.anims.play('left', true)
  } else if (cursors.right.isDown) {
    player.setVelocityX(speed)
    player.anims.play('right', true)
  } else {
    player.setVelocityX(0)
    player.anims.play('turn')
  }
  if (cursors.up.isDown && player.body.touching.down)
    player.setVelocityY(-330)
```

Add the following code into `./app.js` and follow the instructions beginning with `Step 4.3`.

```javascript
  /* Step 4.3 code goes here
   * set the interaction between player and grounds
   * this is the most important work of the physical engine
   */
  this.physics.add.collider(player, platforms)
```

## Step 5: stars

Create stars and set thier interactions with grounds.  Add the following code into `./app.js` and follow the instructions beginning with `Step 5.1`.

```javascript
  /* Step 5.1 code goes here
   * one can set collider of a group
   */
  stars = this.physics.add.group({ key: 'star', repeat: 11, setXY: { x: 12, y: 0, stepX: 70 } })
  stars.children.iterate(star => star.setBounceY(Phaser.Math.FloatBetween(0.2, 0.3)))
  this.physics.add.collider(stars, platforms)
```

Set the interaction between stars and player, which actually emits an event.  Add the following code into `./app.js` and follow the instructions beginning with `Step 5.2`.

```javascript
  /* Step 5.2 code goes here
   * search `collectStar` in `./app.js`, which is the event handler callback
   */
  this.physics.add.overlap(player, stars, collectStar, null, this)
```

## Step 6: score

Initialize `score` and a text object.  Add the following code into `./app.js` and follow the instructions beginning with `Step 6.1`.

```javascript
  // Step 6.1 goes here
  score = 0
  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
```

Update them whenever the player touch a star.  Add the following code into `./app.js` and follow the instructions beginning with `Step 6.2`.
```javascript
  score += 10
  scoreText.setText('Score: ' + score)
```

# Step 7: bombs

The game is getting funny.  Add the following code into `./app.js` and follow the instructions beginning with `Step 7.1`.

```javascript
  /* Step 7.1 code goes here
   * you should know everythin in this code snippet now
   */
  bombs = this.physics.add.group()
  this.physics.add.collider(bombs, platforms)
  this.physics.add.collider(player, bombs, hitBomb, null, this)
```

Let a bomb show when all stars are eatten.  Add the following code into `./app.js` and follow the instructions beginning with `Step 7.2`.

```javascript
  /* Step 7.2 code goes here
   * let the bomb show at the other side of the player
   * why set bounce to `1`?
   */
  if (0 == stars.countActive(true)) {
    stars.children.iterate(star => star.enableBody(true, star.x, 0, true, true))
    let x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)
    let bomb = bombs.create(x, 16, 'bomb')
    bomb.setBounce(1)
    bomb.setCollideWorldBounds(true)
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
  }
```

Do something whenever a bomb hits the player.  Add the following code into `./app.js` and follow the instructions beginning with `Step 7.3`.

```javascript
  /* Step 7.3 code goes here
   * try press left or right after game over
   */
  this.physics.pause()
  player.anims.play('turn')
  player.setTint(0xff0000)
```

## Step 8: sound

Load sounds.  Add the following code into `./app.js` and follow the instructions beginning with `Step 8.1`.

```javascript
  // Step 8.1 code goes here
  this.load.audioSprite('sfx', 'assets/audio/SoundEffects/fx_mixdown.json')
```

Add the following code into `./app.js` and follow the instructions beginning with `Step 8.2`.

```javascript
  // Step 8.2 code goes here
  this.sound.playAudioSprite('sfx', 'ping')
```

Add the following code into `./app.js` and follow the instructions beginning with `Step 8.3`.

```javascript
  // Step 8.3 code goes here
  this.sound.playAudioSprite('sfx', 'death')
```

## reference

- https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
- https://developer.mozilla.org/en-US/docs/Games
- https://www.gamasutra.com/blogs/MichaelKissner/20151027/257369/Writing_a_Game_Engine_from_Scratch__Part_1_Messaging.php
