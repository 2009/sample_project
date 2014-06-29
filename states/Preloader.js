///<reference path="../lib/phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by zenchi on 15/06/14.
*/
var CandyStarship;
(function (CandyStarship) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            // Setup preload sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('spacebg', 'assets/space-blue.png');
            this.load.image('logo', 'assets/logo.png');
            this.load.image('player', 'assets/player-ship.png');
            this.load.image('laser-bullet', 'assets/laser-bullet.png');
            this.load.audio('laser-sound', 'assets/laser.ogg', true);
            this.load.audio('level-intro', 'assets/title.ogg', true);
        };

        Preloader.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        Preloader.prototype.startMainMenu = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    })(Phaser.State);
    CandyStarship.Preloader = Preloader;
})(CandyStarship || (CandyStarship = {}));
//# sourceMappingURL=Preloader.js.map
