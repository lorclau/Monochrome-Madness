class Title extends Phaser.Scene {
    constructor() {
        super("platformerTitleScene");
    }

    preload() {
        //load assets
        this.load.setPath("./assets/");
        this.load.image("title_text", "MADNESS.png");
        this.load.image("gem1", "gem_001.png");
    }

    create() {
        //send message to console
        console.log("Title screen.");

        //key for player input
        this.spaceKey = this.input.keyboard.addKey('SPACE');

        //change background color
        var div = document.getElementById('phaser-game');
        div.style.backgroundColor = "#292929";

        // display loading screen
        this.title = this.add.image( 750, 200, "title_text").setScale(0.6);
        const gem = this.add.image(750, 600, "gem1").setScale(5).setOrigin(0.5,0.15);

        this.tweens.add({
            targets: this.title,
            duration: 2000,
            scaleX: 1.0,
            scaleY: 1.0,
            ease: 'bounce.out',
            repeat: 0,
            yoyo: false,
            onComplete: () => this.promptPlayer(gem)
        });

    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            //start first level
            this.scene.start("platformerScene1");
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

        this.add.text(560, 700, 'Press SPACE to start',
        { 
            fontFamily: 'Times, serif'
        }).setScale(0.3).setResolution(10);
    }
}