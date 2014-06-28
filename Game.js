///<reference path="lib/phaser.d.ts"/>
///<reference path="states/Boot.ts"/>
///<reference path="states/Preloader.ts"/>
///<reference path="states/MainMenu.ts"/>
///<reference path="states/Level0.ts"/>
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
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Boot', CandyStarship.Boot, false);
            this.state.add('Preloader', CandyStarship.Preloader, false);
            this.state.add('MainMenu', CandyStarship.MainMenu, false);
            this.state.add('Level0', CandyStarship.Level0, false);

            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    CandyStarship.Game = Game;
})(CandyStarship || (CandyStarship = {}));
//# sourceMappingURL=Game.js.map
