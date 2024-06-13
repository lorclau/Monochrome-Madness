//main
"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1550,
    height: 800,
    transparent: true,
    scene: [Load, Title, LevelOne, LevelTwo, Credits]
}

var cursors;
const SCALE = 2.0;

//GLOBAL VARIABLE
var my = {sprite: {}, text: {}, vfx: {}}; 

const game = new Phaser.Game(config);


