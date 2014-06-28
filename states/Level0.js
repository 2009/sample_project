///<reference path="../lib/phaser.d.ts"/>
///<reference path="../entities/Player.ts"/>
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
    var Level0 = (function (_super) {
        __extends(Level0, _super);
        function Level0() {
            _super.apply(this, arguments);
        }
        Level0.prototype.create = function () {
            this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'spacebg');
            this.background.autoScroll(0, 300);

            this.music = this.add.audio('level-intro', 1, false);
            this.music.play();

            this.player = new CandyStarship.Player(this.game, this.game.width / 2, this.game.height / 2);
        };
        return Level0;
    })(Phaser.State);
    CandyStarship.Level0 = Level0;
})(CandyStarship || (CandyStarship = {}));
//# sourceMappingURL=Level0.js.map
