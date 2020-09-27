const game;
window.onload = function () {
    var config = {
        type: Phaser.Auto, // what graphics mode to use
        width: 480,
        height: 640,
        parent: 'phaser-game', // div tag name, minus #
        scene: [SceneMain] // name of scene (game screen)
    };
    var game = new Phaser.Game(config);
}