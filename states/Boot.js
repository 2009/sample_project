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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };

        Boot.prototype.create = function () {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;

            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //  If you have any desktop specific settings, they can go in here
                //this.stage.scale.pageAlignHorizontally = true;
            } else {
                //  Same goes for mobile settings.
            }

            // Start physics system
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    })(Phaser.State);
    CandyStarship.Boot = Boot;
})(CandyStarship || (CandyStarship = {}));
//# sourceMappingURL=Boot.js.map
