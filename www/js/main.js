var game = new Phaser.Game("100%", "100%", Phaser.AUTO);
game.global = {
    //Global Vars 
};

game.state.add('Boot', BasicGame.Boot);
game.state.add('Preloader', BasicGame.Preloader);
game.state.add('MainMenu', BasicGame.MainMenu);
game.state.add('Game', BasicGame.Game);

document.addEventListener("deviceready", function () {
    return game.state.start('Boot');
}, false);
