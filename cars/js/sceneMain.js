class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain'); // must match class name
    }
    preload() { // load resources before use
        this.load.image('road', 'images/road.jpg');
        this.load.spritesheet('cars', 'images/cars.png', {
            frameWidth: 60,
            frameHeight: 126
        });
        this.load.image('line', 'images/line.png');
    }
    create() { // defining objects on screen
        var road = new Road({
            scene: this
        });
        road.x = game.config.width / 2;
    }
    update() { // constant running loop that checks things like health, collision, etc

    }
    customFunctions() {

    }
}