var game;
 
game = new Phaser.Game(600, 450, Phaser.AUTO, '');
 
game.state.add('Menu', Menu);
game.state.add('InGame', InGame);
game.state.add('Game_Over', Game_Over);
 
game.state.start('Menu');

