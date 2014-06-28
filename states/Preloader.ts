///<reference path="../lib/phaser.d.ts"/>

/**
 * Created by zenchi on 15/06/14.
 */
module CandyStarship {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            // Setup preload sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('spacebg', 'assets/space-blue.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('player', 'assets/player-ship.png');
            this.load.audio('level-intro', 'assets/title.ogg', true);

        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {

            this.game.state.start('MainMenu', true, false);

        }
    }
}