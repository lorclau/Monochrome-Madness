class Credits extends Phaser.Scene {
    constructor() {
        super("platformerCreditsScene");
    }

    preload() {
        //load assets
        this.load.setPath("./assets/");
        this.load.image("title_text", "MADNESS.png");
        this.load.image("gem1", "gem_001.png");
    }

    create() {
        //send message to console
        console.log("Credit screen.");

        //set up key for player input
        this.spaceKey = this.input.keyboard.addKey('SPACE');

        //change background color
        var div = document.getElementById('phaser-game');
        div.style.backgroundColor = "#292929";

        //display loading screen
        this.title = this.add.image( 1150, 150, "title_text").setScale(0.45);
        const gem = this.add.image(750, 600, "gem1").setScale(5).setOrigin(0.5,0.15);

        this.tweens.add({
            targets: this.title,
            duration: 2000,
            scaleX: 0.5,
            scaleY: 0.5,
            ease: 'bounce.out',
            repeat: 0,
            yoyo: false,
            onComplete: () => this.promptPlayer(gem)
        });

        this.add.text(200, 220, 'Created by\nLORRAINE TORRES\nfor CMPM 120, UCSC',
        { 
            fontFamily: 'Times, serif'
        }).setScale(0.2).setResolution(10);
    
        this.add.text(200, 400, 'Graphics and Assets provided by\nKENNEY at www.kenney.nl\n\nMusic by\nNicholas Panek from Pixabay',
        { 
            fontFamily: 'Times, serif'
        }).setScale(0.2).setResolution(10);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            //play input sound
            this.sound.play("input");
            //start first level
            this.scene.start("platformerTitleScene");
        }
    }

    //functions
    promptPlayer(gem)
    {
        const chain1 = this.tweens.chain({
            targets: gem,
            tweens: [
                {
                    y: 470,
                    scaleX: 3,
                    duration: 300,
                    ease: 'quad.out'
                },
                {
                    y: 600,
                    scaleX: 5,
                    duration: 1000,
                    ease: 'bounce.out'
                },
            ],
            loop: -1,
            loopDelay: 300
        });
        this.add.text(540, 700, 'Press SPACE to return to title screen',
        { 
            fontFamily: 'Times, serif'
        }).setScale(0.20).setResolution(9);
    }
}