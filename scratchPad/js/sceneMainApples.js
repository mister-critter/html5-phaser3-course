class SceneMainApples extends Phaser.Scene {
    constructor() {
        super('SceneMainApples'); // must match class name
    }
    preload() {
        // load resources before use
        // this.load.image('key','path');
        this.load.image('apple', 'images/face.png');
    }
    create() {
        // defining objects on screen
        console.log("Ready!");
        // let appleGroup = this.add.group();
        let appleCon = this.add.container();

        for (var i = 0; i < 5; i++) {
            var xx = Phaser.Math.Between(100, 400);
            var yy = Phaser.Math.Between(100, 400);
            var apple = this.add.image(xx, yy, 'apple');
            appleCon.add(apple);
        }
        testObj = appleCon;
    }
    update() {
        // constant running loop that checks things like health, collision, etc
        // this.char.x += 2;
        // if (this.char.x > game.config.width + 50) {
        //     this.char.x = -50;
        // }
    }
}