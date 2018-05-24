const game = new Phaser.Game(320, 240, Phaser.AUTO, 'game', {

  preload: () => {
    game.load.spritesheet('player', './res/healer_f.png', 32, 36, 12)
    game.load.spritesheet('npc', './res/healer_m.png', 32, 36, 12)
  },

  create: () => {
    game.stage.backgroundColor = '#4488AA'
	  keyboard = game.input.keyboard.createCursorKeys()

    npc = game.add.sprite(64, 72, 'npc', 7)
    player = game.add.sprite(0, 0, 'player', 7)
    game.physics.enable(player, Phaser.Physics.ARCADE)

    player.body.collideWorldBounds = true

    player.animations.add('moveUp',    [0,  1,  2], 10, true)
    player.animations.add('moveRight', [3,  4,  5], 10, true)
    player.animations.add('moveDown',  [6,  7,  8], 10, true)
    player.animations.add('moveLeft',  [9, 10, 11], 10, true)
  },

  update: () => {
    speed = 2
    if (keyboard.up.isDown) {
      player.y -= speed
      player.play('moveUp')
    } else if (keyboard.down.isDown) {
      player.y += speed
      player.play('moveDown')
    } else if (keyboard.left.isDown) {
      player.x -= speed
      player.play('moveLeft')
    } else if (keyboard.right.isDown) {
      player.x += speed
      player.play('moveRight')
    } else
      player.animations.stop()
  },

  render: () => {
    // game.debug.body(player)
  },

})
// vi:et:sw=2:ts=2
