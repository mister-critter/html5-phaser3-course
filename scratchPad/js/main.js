let game;
let testObj;
window.onload = function () {
    var config = {
        type: Phaser.Auto, // what graphics mode to use: Phaser.Canvas, Phaser.Web, or Phaser.Auto
        width: 480,
        height: 580,
        parent: 'phaser-game', // div tag name, minus #
        scene: [SceneMainApples] // name of scene (game screen)
    };
    game = new Phaser.Game(config);
}