# game

## Step 1: background

### Step 1.1: load resource

Follow the instructions beginning with `Step 1.1`.  
照著 `Step 1.1` 開頭的提示操作。

```javascript
/* Step 1.1 code goes here
 * copy this code snippet to `./app.js`
 * `https://labs.phaser.io` is setup by phaser to promote itself
 * * try open `https://labs.phaser.io/src/` and `https://labs.phaser.io/assets/`
 * * usually, you need to serve the resource on your own server 
 * * for example, you may download `https://phaser.io/tutorials/making-your-first-phaser-3-game/phaser3-tutorial-src.zip` to your own server
 *   taught in `https://phaser.io/tutorials/making-your-first-phaser-3-game/part1`
 * 複製這段程式碼至 `./app.js`
 * `https://labs.phaser.io` 是 phaser 用來宣傳自己的網站
 * * 試著打開 `https://labs.phaser.io/src/` 與 `https://labs.phaser.io/assets/`
 * * 通常應該用自己的網站提供這些資源
 * * 例如, 你可以下載 `https://phaser.io/tutorials/making-your-first-phaser-3-game/phaser3-tutorial-src.zip` 到自己的伺服器上
 *   如同 `https://phaser.io/tutorials/making-your-first-phaser-3-game/part1` 的教學內容
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

### Step 1.2: show a static resource

Follow the instructions beginning with `Step 1.2`.  
照著 `Step 1.2` 開頭的提示操作。

```javascript
/* Step 1.2 code goes here
 * copy this code snippet to `./app.js`
 * watch the key (`sky`), compare it with the previous code snippet
 * understand the coordinate system of phaser
 * * the game screen is 800x600, and we put the sky at (400, 300)
 * try show other resource on your screen
 * 複製這段程式碼至 `./app.js`
 * 注意 `sky` 這個字串, 與前一段程式碼互相對照
 * 了解 phaser 的座標系統
 * * 遊戲畫面的大小是 800x600, 而我們將天空的圖片放在 (400, 300) 這個位置
 * 試著在螢幕上顯示其它圖片
 */
this.add.image(400, 300, 'sky')
```

## Step 2: grounds

Follow the instructions beginning with `Step 2`.  
照著 `Step 2` 開頭的提示操作。

```javascript
/* Step 2 code goes here
 * copy this code snippet to `./app.js`
 * these static resource will interact with dynamic resource, so we need to put them into the physical engine
 * search `arcade` in `./app.js` and try to read related document on the internet by youself
 * static resource usually does not change, `refreshBody()` tells phaser that it has changed and forces phaser to refresh them
 * 複製這段程式碼至 `./app.js`
 * 這些靜態的物件之後會跟動態物件互動, 所以必須放進物理引擎中
 * 在 `.app.js` 中搜尋 `arcade` 並試著在網路上找到相關的文件
 * 靜態物件通常不會改變, `refreshBody()` 告訴 phaser 這些靜態物件改變了, 需要重新繪製它們
 */
platforms = this.physics.add.staticGroup()
platforms.create(400, 568, 'ground').setScale(2).refreshBody()
platforms.create(600, 400, 'ground').setScale(1, .5).refreshBody()
platforms.create( 50, 250, 'ground').setScale(1, .5).refreshBody()
platforms.create(750, 220, 'ground').setScale(1, .5).refreshBody()
```

## Step 3: player

Follow the instructions beginning with `Step 3`.  
照著 `Step 3` 開頭的提示操作。

```javascript
/* Step 3 code goes here
 * copy this code snippet to `./app.js`
 * google "sprite" if you don't know its meaning in games
 * try un-comment the `setCollideWorldBounds` line
 * 複製這段程式碼至 `./app.js`
 * 如果你不知道 "sprite" 在遊戲中的意義, 可以上網搜尋 "sprite"
 * 試試將 `setCollideWorldBounds` 這行註解掉
 */
player = this.physics.add.sprite(100, 450, 'dude')
player.setBounce(.2)
player.setCollideWorldBounds(true)
```

## Step 4: control the player

Follow the instructions beginning with `Step 4.1`.  
照著 `Step 4.1` 開頭的提示操作。

```javascript
/* Step 4.1 code goes here
 * copy this code snippet to `./app.js`
 * see the original `dude.png` may help you understand the numbers in this code snippet
 * 複製這段程式碼至 `./app.js`
 * 直開打開 `dude.png` 看看會幫助你了解 phaser 中的動畫
 */
this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }), key: 'left', repeat: -1 })
this.anims.create({ frameRate: 20, frames: [ { key: 'dude', frame: 4 } ], key: 'turn', })
this.anims.create({ frameRate: 10, frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }), key: 'right', repeat: -1 })

cursors = this.input.keyboard.createCursorKeys()
```

Follow the instructions beginning with `Step 4.2`.  
照著 `Step 4.2` 開頭的提示操作。

```javascript
/* Step 4.2 code goes here
 * copy this code snippet to `./app.js`
 * adjust parameters (e.g. `speed`) is boring, but could be critical to gaming experience
 * notice the strings ('left', 'right' and 'turn') in this code snippet, compare them with the previous code snippet
 * 複製這段程式碼至 `./app.js`
 * 微整參數(例如 `speed)的過程有時很無趣, 但可能會是影響整個遊戲體驗的關鍵
 * 注意這段程式碼裡的字串('left', 'right' 與 'turn'), 跟前一段程式碼對照看看
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

Follow the instructions beginning with `Step 4.3`.  
照著 `Step 4.3` 開頭的提示操作。

```javascript
/* Step 4.3 code goes here
 * copy this code snippet to `./app.js`
 * set the interaction between player and grounds
 * 複製這段程式碼至 `./app.js`
 * 設定讓主角可以 "碰" 到平台
 */
this.physics.add.collider(player, platforms)
```

## Step 5: stars

Create stars and set thier interactions with grounds.  Follow the instructions beginning with `Step 5.1`.  
建立星星物件並設定它們與平台間的關係。照著 `Step 5.1` 開頭的提示操作。

```javascript
/* Step 5.1 code goes here
 * copy this code snippet to `./app.js`
 * one can set collider of a group
 * 複製這段程式碼至 `./app.js`
 * 可以設定整群物件的碰撞關係
 */
stars = this.physics.add.group({ key: 'star', repeat: 11, setXY: { x: 12, y: 0, stepX: 70 } })
stars.children.iterate(star => star.setBounceY(Phaser.Math.FloatBetween(0.2, 0.3)))
this.physics.add.collider(stars, platforms)
```

Set the interaction between stars and player, which actually emits an event.  Follow the instructions beginning with `Step 5.2`.  
設定星星物件與主角的關係，實際上是在碰到時獨發特定事件。照著 `Step 5.2` 開頭的提示操作。

```javascript
/* Step 5.2 code goes here
 * copy this code snippet to `./app.js`
 * search `collectStar` in `./app.js`, which is the event handler callback
 * 複製這段程式碼至 `./app.js`
 * 在 `./app.js` 中搜尋 `collectStar`, 這是主角碰到星星時的 callback 函式
 */
this.physics.add.overlap(player, stars, collectStar, null, this)
```

## Step 6: score

Initialize `score` and a text object.  Follow the instructions beginning with `Step 6.1`.  
初始化 `score` 變數以及用來顯示分數的文字物件。照著 `Step 6.1` 開頭的提示操作。

```javascript
/* Step 6.1 code goes here
 * copy this code snippet to `./app.js`
 * 複製這段程式碼至 `./app.js`
 */
score = 0
scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' })
```

Update `score` whenever the player touch a star.  Follow the instructions beginning with `Step 6.2`.  
每當主角碰到星星時更新 `score`。照著 `Step 6.2` 開頭的提示操作。

```javascript
/* Step 6.2 code goes here
 * copy this code snippet to `./app.js`
 * 複製這段程式碼至 `./app.js`
 */
score += 10
scoreText.setText('Score: ' + score)
```

# Step 7: bombs

The game is getting funny.  Follow the instructions beginning with `Step 7.1`.  
遊戲開始變得好玩了。照著 `Step 7.1` 開頭的提示操作。

```javascript
/* Step 7.1 code goes here
 * copy this code snippet to `./app.js`
 * you should know everything in this code snippet now
 * 複製這段程式碼至 `./app.js`
 * 這段程式碼的觀念前面步驟都有說明過, 你應該已理解每行程式的意義了
 */
bombs = this.physics.add.group()
this.physics.add.collider(bombs, platforms)
this.physics.add.collider(player, bombs, hitBomb, null, this)
```

Let a bomb show when all stars are eatten.  Follow the instructions beginning with `Step 7.2`.  
讓炸彈在所有星星都被吃掉後出現。照著 `Step 7.2` 開頭的提示操作。

```javascript
/* Step 7.2 code goes here
 * copy this code snippet to `./app.js`
 * let the bomb show at the other side of the player
 * why set bounce to 1?
 * 複製這段程式碼至 `./app.js`
 * 確保炸彈跟主角不會出現在畫面的同一邊
 * 思考為什麼彈力設成 1?
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

Do something whenever a bomb hits the player.  Follow the instructions beginning with `Step 7.3`.
當炸彈碰到主角時做點什麼。照著 `Step 7.3` 開頭的提示操作。

```javascript
/* Step 7.3 code goes here
 * copy this code snippet to `./app.js`
 * try press left or right after game over
 * 複製這段程式碼至 `./app.js`
 * 試著在主角死亡後按方向鍵
 */
this.physics.pause()
player.anims.play('turn')
player.setTint(0xff0000)
```

## Step 8: sound

Load sounds.  Follow the instructions beginning with `Step 8`.
載入音效。照著 `Step 8` 開頭的提示操作。

```javascript
/* Step 8.1 code goes here
 * copy this code snippet to `./app.js`
 * 複製這段程式碼至 `./app.js`
 */
this.load.audioSprite('sfx', 'assets/audio/SoundEffects/fx_mixdown.json')
```

```javascript
/* Step 8.2 code goes here
 * copy this code snippet to `./app.js`
 * 複製這段程式碼至 `./app.js`
 */
this.sound.playAudioSprite('sfx', 'ping')
```

```javascript
/* Step 8.3 code goes here
 * copy this code snippet to `./app.js`
 * 複製這段程式碼至 `./app.js`
 */
this.sound.playAudioSprite('sfx', 'death')
```

## reference

- https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
- https://developer.mozilla.org/en-US/docs/Games
- https://www.gamasutra.com/blogs/MichaelKissner/20151027/257369/Writing_a_Game_Engine_from_Scratch__Part_1_Messaging.php
