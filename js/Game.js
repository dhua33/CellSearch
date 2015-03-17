var main = function(game) {};

main.prototype = {
		create: function() {
				// set world
				this.map = this.game.add.tilemap('map');
				this.map.addTilesetImage('tiles', 'snowTiles');
				this.stage.backgroundColor = '#fff';
				this.physics.startSystem(Phaser.Physics.ARCADE);
				
				// layers
				this.bg = this.map.createLayer('BG');
				this.walls = this.map.createLayer('Walls');
				this.bg.resizeWorld();
				this.map.setCollisionBetween(1, 1000, true, 'Walls');
				
				// player sprites and properties
				this.p = this.add.sprite(0, 0, 'player');
				this.p.anchor.setTo(0.5, 0.5);
				this.npc = this.add.sprite(0, 0, 'npc');
				this.phone = this.add.sprite(0, 0, 'phone');
				this.physics.arcade.enable(this.p);
				this.physics.arcade.enable(this.phone);
				this.physics.arcade.enable(this.npc);
				// animations
				this.p.animations.add('down', [6, 7, 8, 7], 3, true);
				this.p.animations.add('up', [0, 1, 2, 1], 3, true);
				this.p.animations.add('left', [9, 10, 11, 10], 3, true);
				this.p.animations.add('right', [3, 4, 5, 4], 3, true);
				
				// UI
				this.UI = this.add.sprite(0, 500, 'UI');
				this.style = {font: "16px Verdana", fill: "#ffffff", align: "left" };
				this.UI.text = this.add.text(15, 515, "", this.style);
				this.UI.fixedToCamera = true;
				this.UI.text.fixedToCamera = true;
				this.camera.follow(this.p);
				
				// audio
				this.music = this.add.audio('music', 0.3, true);
				this.sound.walk = this.add.audio('walk', 0.3);
				this.sound.select = this.add.audio('select', 0.25);
				
				// set keyboard controls
				this.keys = this.input.keyboard.createCursorKeys();
				this.keys.w = this.input.keyboard.addKey(Phaser.Keyboard.W);
				this.keys.a = this.input.keyboard.addKey(Phaser.Keyboard.A);
				this.keys.s = this.input.keyboard.addKey(Phaser.Keyboard.S);
				this.keys.d = this.input.keyboard.addKey(Phaser.Keyboard.D);
				this.keys.space = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
				
		},
		update: function() {
				this.physics.arcade.collide(this.p, this.walls) 
				
		}
}
