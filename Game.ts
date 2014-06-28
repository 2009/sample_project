///<reference path="lib/phaser.d.ts"/>
///<reference path="states/Boot.ts"/>
///<reference path="states/Preloader.ts"/>
///<reference path="states/MainMenu.ts"/>
///<reference path="states/Level0.ts"/>

/**
 * Created by zenchi on 15/06/14.
 */
module CandyStarship {

    export class Game extends Phaser.Game {

        constructor() {

            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level0', Level0, false);

            this.state.start('Boot');

        }
    }
}
