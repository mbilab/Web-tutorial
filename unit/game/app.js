const game = new Phaser.Game(1000, 400, Phaser.AUTO, 'game',{
	preload:()=>{
	  game.load.image('background', './assets/img/background.png')
          game.load.spritesheet('player', './assets/img/player.png', 32, 32)
	},
	create:()=>{
          bg = game.add.image(1, 1, 'background')
          sprite = game.add.sprite(1, 1, 'player', 0)

          game.physics.enable(sprite, Phaser.Physics.ARCADE);
          sprite.body.collideWorldBounds = true;
          sprite.body.checkCollision.up = false;
          sprite.body.checkCollision.down = false;
          sprite.body.immovable = true;

          sprite.animations.add('moveUp', [9, 10, 11], 10, true)
          sprite.animations.add('moveDown', [0, 1, 2], 10, true)
          sprite.animations.add('moveLeft', [3, 4, 5], 10, true)
          sprite.animations.add('moveRight', [6, 7, 8], 10, true)
	},
	update:()=>{
	  keyboard = game.input.keyboard.createCursorKeys()

          if(keyboard.up.isDown){
            sprite.y -= 2;
            sprite.play('moveUp')
          }
          else if(keyboard.down.isDown){
            sprite.y += 2;
            sprite.play('moveDown')
          }
          else if(keyboard.left.isDown){
            sprite.x -= 2;
            sprite.play('moveLeft')
          }
          else if(keyboard.right.isDown){
            sprite.x += 2;
            sprite.play('moveRight')
          }
          else{
            sprite.animations.stop()
          }
	},
	render:()=>{

	},
})
