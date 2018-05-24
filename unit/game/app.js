const game = new Phaser.Game(320, 240, Phaser.AUTO, 'game', {

  preload: () => {
    game.load.spritesheet('player', './res/player.png', 41, 36, 12)
  },

  create: () => {
    game.stage.backgroundColor = '#4488AA'
	  keyboard = game.input.keyboard.createCursorKeys()

    sprite = game.add.sprite(1, 1, 'player', 0)
    game.physics.enable(sprite, Phaser.Physics.ARCADE)

    sprite.body.collideWorldBounds = true

    sprite.animations.add('moveDown',  [0,  1,  2], 10, true)
    sprite.animations.add('moveLeft',  [9, 10, 11], 10, true)
    sprite.animations.add('moveRight', [3,  4,  5], 10, true)
    sprite.animations.add('moveUp',    [6,  7,  8], 10, true)
  },

  update: () => {
    speed = 2
    if (keyboard.up.isDown) {
      sprite.y -= speed
      sprite.play('moveUp')
    } else if (keyboard.down.isDown) {
      sprite.y += speed
      sprite.play('moveDown')
    } else if (keyboard.left.isDown) {
      sprite.x -= speed
      sprite.play('moveLeft')
    } else if (keyboard.right.isDown) {
      sprite.x += speed
      sprite.play('moveRight')
    } else
      sprite.animations.stop()
  },

  render: () => {
  },

})
// vi:et:sw=2:ts=2
