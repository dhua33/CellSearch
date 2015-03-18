var preloader = function(game){};

preloader.prototype = {
		preload: function() {
				//images
				var loading = this.add.sprite(0, 0, 'loading');
				loading.width *= 0.5;
				loading.height *= 0.5;
				var loadbar = this.add.sprite(0, 220, 'loadbar');
				this.load.setPreloadSprite(loadbar);
				this.load.image('title', 'assets/title.png');
				this.load.tilemap('map', 'assets/mazeMap.json', null, Phaser.Tilemap.TILED_JSON);
				this.load.image('snowTiles', 'assets/snowTiles.png');
				this.load.image('phone', 'assets/phone.png');
				this.load.image('UI', 'assets/UI.png');
				//sprites
				this.load.spritesheet('player', 'assets/player.png', 89, 100);
				this.load.spritesheet('npc', 'assets/npc.png', 89, 100);
				//audio
				this.load.audio('walk', 'assets/walk.mp3');
				this.load.audio('music', 'assets/music.mp3');
				this.load.audio('selectSFX', 'assets/select.mp3');
		},
		create: function() {
				this.state.start('MainMenu');
		}
}
