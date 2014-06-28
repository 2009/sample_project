///<reference path="../lib/phaser.d.ts"/>
///<reference path="../entities/Player.ts"/>

/**
 * Created by zenchi on 15/06/14.
 */
module CandyStarship {

    export class Level0 extends Phaser.State {

        background: Phaser.TileSprite;
        music: Phaser.Sound;
        player: CandyStarship.Player;

        create() {

            this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height,  'spacebg');
            this.background.autoScroll(0, 300);

            this.music = this.add.audio('level-intro', 1, false);
            this.music.play();

            this.player = new CandyStarship.Player(this.game, this.game.width/2, this.game.height/2);


        }

    }

}