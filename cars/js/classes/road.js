class Road extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.background = this.scene.add.image(0, 0, 'road');
        this.add(this.background);
        this.scene.add.existing(this);

        this.background.displayWidth = game.config.width * .5;
        this.background.scaleY = this.background.scaleX;
        this.setSize(this.background.displayWidth, game.config.height);

        console.log(this);

    }
}