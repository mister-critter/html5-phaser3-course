class SceneMainFace extends Phaser.Scene {
    constructor() {
        super('SceneMainFace'); // must match class name
    }
    preload() {
        // load resources before use
        // this.load.image('key','path');
        this.load.image('face', 'images/face.png');
        this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
    }
    create() {
        // defining objects on screen
        console.log("Ready!");

        this.catSound = this.sound.add('cat');
        this.catSound.play();

        this.face = this.add.image(game.config.width / 2, game.config.height / 2, 'face');
        this.face.setInteractive();
        this.face.on('pointerdown', this.onDown, this);
        this.face.on('pointerup', this.onUp, this);

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(8, 0xff0000);
        this.graphics.fillStyle(0xff00ff, .5);

        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(100, 300);

        this.graphics.strokeRect(50, 25, 200, 100);
        this.graphics.strokeCircle(100, 200, 50);
        this.graphics.fillCircle(300, 400, 50);

        this.graphics.strokePath();
    }
    onDown() {
        this.face.alpha = .5;
    }
    onUp() {
        this.face.alpha = 1;
    }
    update() {
        // constant running loop that checks things like health, collision, etc
        // this.char.x += 2;
        // if (this.char.x > game.config.width + 50) {
        //     this.char.x = -50;
        // }
    }
}