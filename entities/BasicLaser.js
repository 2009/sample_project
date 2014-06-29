var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="../lib/phaser.d.ts"/>
/**
* Created by zenchi on 16/06/14.
*/
var CandyStarship;
(function (CandyStarship) {
    var BasicLaser = (function (_super) {
        __extends(BasicLaser, _super);
        function BasicLaser(game, anchorTo, anchorX, anchorY) {
            _super.call(this, game);
            this.fireRate = 200;
            this.bulletLimit = 30;
            this.speed = 800;
            this._anchorX = 0;
            this._anchorY = 0;

            // Set object and placement of this weapon
            this._anchoredTo = anchorTo;

            // Anchors are based of the _anchorTo anchor
            // e.g. if the object is center anchored, you would have to pass a negative value to position weapon in the
            // top-left corner
            if (typeof anchorX !== 'undefined')
                this._anchorX = anchorX;
            if (typeof anchorY !== 'undefined')
                this._anchorY = anchorY;

            // Create bullet pool
            this.createMultiple(this.bulletLimit, 'laser-bullet');
            this.setAll('anchor.x', 0.5);
            this.setAll('anchor.y', 1);
            this.setAll('outOfBoundsKill', true);
            this.setAll('checkWorldBounds', true);

            // Set bullet sound
            this._bulletSound = this.game.add.audio('laser-sound', 1, false);

            // Set initial fire time
            this._nextFireTime = this.game.time.now;

            game.add.existing(this);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);
        }
        BasicLaser.prototype.update = function () {
            _super.prototype.update.call(this);

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (this.game.time.now > this._nextFireTime) {
                    //  Grab the first bullet from the pool
                    var bullet = this.getFirstExists(false);

                    if (bullet) {
                        // Fire bullet
                        bullet.reset(this._anchoredTo.x + this._anchorX, this._anchoredTo.y + this._anchorY);
                        bullet.body.velocity.y = -this.speed;
                        this._bulletSound.play();
                        this._nextFireTime = this.game.time.now + this.fireRate;
                    }
                }
            }
        };
        return BasicLaser;
    })(Phaser.Group);
    CandyStarship.BasicLaser = BasicLaser;
})(CandyStarship || (CandyStarship = {}));
//# sourceMappingURL=BasicLaser.js.map
