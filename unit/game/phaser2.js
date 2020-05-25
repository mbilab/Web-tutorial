const game = new Phaser.Game(320, 240, Phaser.AUTO, 'game', {

  preload: () => {
    game.load.spritesheet('npc1', './res/healer_f.png', 32, 36, 12)
    game.load.spritesheet('npc2', './res/healer_m.png', 32, 36, 12)
    game.load.spritesheet('player', './res/mage_f.png', 32, 36, 12)
  },

  create: () => {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.stage.backgroundColor = '#4488AA'
	  keyboard = game.input.keyboard.createCursorKeys()

    npc1 = game.add.sprite(128, 36, 'npc1', 7)
    npc2 = game.add.sprite(64, 108, 'npc2', 7)
    player = game.add.sprite(0, 0, 'player', 7)
    sprites = [npc1, npc2, player]
    game.physics.enable(sprites, Phaser.Physics.ARCADE)

    npc1.body.collideWorldBounds = true
    npc1.body.immovable = true // try comment this line
    npc2.body.collideWorldBounds = true

    player.body.collideWorldBounds = true
    player.animations.add('moveUp',    [0,  1,  2], 10, true)
    player.animations.add('moveRight', [3,  4,  5], 10, true)
    player.animations.add('moveDown',  [6,  7,  8], 10, true)
    player.animations.add('moveLeft',  [9, 10, 11], 10, true)
  },

  update: () => {
    for (const v of sprites)
      v.body.velocity.set(0, 0)

    speed = 200 // pixel per second
    if (keyboard.up.isDown) {
      player.body.velocity.y = -speed
      player.play('moveUp')
    } else if (keyboard.down.isDown) {
      player.body.velocity.y =  speed
      player.play('moveDown')
    } else if (keyboard.left.isDown) {
      player.body.velocity.x = -speed
      player.play('moveLeft')
    } else if (keyboard.right.isDown) {
      player.body.velocity.x =  speed
      player.play('moveRight')
    } else
      player.animations.stop()

    game.physics.arcade.collide(sprites, sprites)
  },

  render: () => {
    // game.debug.body(player) // try un-comment this line
  },

})
