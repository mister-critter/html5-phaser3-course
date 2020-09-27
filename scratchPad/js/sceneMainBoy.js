class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain'); // must match class name
    }
    preload() {
        // load resources before use
        // this.load.image('key','path');
        this.load.image('face', 'images/face.png');
        this.load.spritesheet('boy', 'images/boy.png', {
            frameWidth: 120,
            frameHeight: 200
        });
    }
    create() {
        // defining objects on screen
        console.log("Ready!");
        this.char = this.add.sprite(-55, game.config.height / 2, 'boy');
        let frameNames = this.anims.generateFrameNumbers('boy');
        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 8,
            repeat: -1
        });
        this.char.play('walk');
        this.doWalk();

        this.text1 = this.add.text(game.config.width / 2, game.config.height / 2, "HELLO!", {
            fontFamily: 'Fresca',
            color: '#FF0000',
            fontSize: '40px'
        });
        this.text1.setOrigin(0.5, 0.5);
    }
    doWalk() {
        this.tweens.add({
            targets: this.char,
            duration: 5000,
            x: game.config.width + 55,
            y: 0,
            // alpha: 0,
            onComplete: this.onCompleteHandler.bind(this)
        });
    }
    update() {
        // constant running loop that checks things like health, collision, etc
        // this.char.x += 2;
        // if (this.char.x > game.config.width + 50) {
        //     this.char.x = -50;
        // }
    }
    onCompleteHandler(tween, targets, custom) {
        console.log('Complete!')

        let char = targets[0];
        char.x = -55;
        char.y = game.config.height / 2;
        // char.alpha = 1;
        this.doWalk();
    }
}