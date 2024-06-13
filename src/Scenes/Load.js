class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {

        //defines a path to your assets folder
        this.load.setPath("./assets/");

        //load images
        this.load.image("gem1", "gem_001.png");
        this.load.image("gem2", "gem_002.png");
        this.load.image("powerup", "tile_0102.png");
    
        // Load audio
        this.load.audio("playerJump", "phaseJump3.ogg");
        this.load.audio("playerCollect1", "item-pick-up.mp3");
        this.load.audio("playerCollect2", "confirmation_004.ogg");
        this.load.audio("win", "powerUp3.ogg");
        this.load.audio("error", "ouch.mp3");
        this.load.audio("unlock", "drop_002.ogg");
        this.load.audio("input", "game-start.mp3");

        // Load BG music
        this.load.audio("bg_music", "chill-synthwave.mp3");

        //Load bitmap font
        this.load.bitmapFont("rocketSquare", "KennyRocketSquare_0.png", "KennyRocketSquare.fnt");

        // Load characters spritesheet
        this.load.atlas("platformer_characters", "tilemap-characters-packed.png", "tilemap-characters-packed.json");

        // Load tilemap information
        this.load.image("tilemap_tiles", "monochrome_tilemap_transparent_packed.png");                         // Packed tilemap
        this.load.tilemapTiledJSON("platformer-level-1", "platformer-level-1.tmj");   // Tilemap in JSON
        this.load.tilemapTiledJSON("platformer-level-2", "platformer-level-2.tmj");   // Tilemap in JSON

        // Load the tilemap as a spritesheet
        this.load.spritesheet("tilemap_sheet", "monochrome_tilemap_transparent_packed.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.multiatlas("kenny-particles", "kenny-particles.json");
    }

    create() {

        //play backgound music
       this.sound.play("bg_music",{
            loop: true,
            volume: 0.8
        });
        
        //create animations
        this.anims.create({
            key: 'gemGlow',
            defaultTextureKey: "tilemap_sheet",
            frames: [
                {key: "gem1"},
                {key: "gem2"}
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_characters', {
                prefix: "tile_",
                start: 0,
                end: 1,
                suffix: ".png",
                zeroPad: 4
            }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0000.png" }
            ],
            repeat: -1
        });

        this.anims.create({
            key: 'jump',
            defaultTextureKey: "platformer_characters",
            frames: [
                { frame: "tile_0001.png" }
            ],
        });

         // display loading screen
         this.scene.start("platformerTitleScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}