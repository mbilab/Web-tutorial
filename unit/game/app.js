const game = new Phaser.Game(320, 240, Phaser.AUTO, 'game', {

  preload: () => {
    game.load.spritesheet('npc', './res/healer_f.png', 32, 36, 12)
    game.load.spritesheet('player', './res/healer_m.png', 32, 36, 12)
  },

  create: () => {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.stage.backgroundColor = '#4488AA'
	  keyboard = game.input.keyboard.createCursorKeys()

    npc = game.add.sprite(64, 72, 'npc', 7)
    player = game.add.sprite(0, 0, 'player', 7)
    game.physics.enable([npc, player], Phaser.Physics.ARCADE)

    npc.body.immovable = true // try delete this line
    npc.body.collideWorldBounds = true

    player.body.collideWorldBounds = true
    player.animations.add('moveUp',    [0,  1,  2], 10, true)
    player.animations.add('moveRight', [3,  4,  5], 10, true)
    player.animations.add('moveDown',  [6,  7,  8], 10, true)
    player.animations.add('moveLeft',  [9, 10, 11], 10, true)
  },

  update: () => {
    game.physics.arcade.collide(npc, player)
    velocity = { x: 0, y: 0 }
    speed = 100
    if (keyboard.up.isDown) {
      velocity.y = -speed
      player.play('moveUp')
    } else if (keyboard.down.isDown) {
      velocity.y = speed
      player.play('moveDown')
    } else if (keyboard.left.isDown) {
      velocity.x = -speed
      player.play('moveLeft')
    } else if (keyboard.right.isDown) {
      velocity.x = speed
      player.play('moveRight')
    } else
      player.animations.stop()
    player.body.velocity = velocity
  },

  render: () => {
    game.debug.body(player)
  },

})

// vi:et:sw=2:ts=2
