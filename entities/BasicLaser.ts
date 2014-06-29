///<reference path="../lib/phaser.d.ts"/>
/**
 * Created by zenchi on 16/06/14.
 */
module CandyStarship {

    export class BasicLaser extends Phaser.Group {

        fireRate:number = 200;            // Time between bullet fire
        bulletLimit:number = 30;    // # of bullets that are created at one time
        speed:number = 800;         // Bullet speed

        _nextFireTime:number;       // Stores the time the next bullet should fire
        // TODO need to name these better
        _anchoredTo:any;            // Object this weapon is anchored to
        _anchorX:number = 0;
        _anchorY:number = 0;

        _bulletSound:Phaser.Sound;

        constructor(game: Phaser.Game, anchorTo: any, anchorX?: number, anchorY?: number){

            super(game);

            // Set object and placement of this weapon
            this._anchoredTo = anchorTo;

            // Anchors are based of the _anchorTo anchor
            // e.g. if the object is center anchored, you would have to pass a negative value to position weapon in the
            // top-left corner
            if (typeof anchorX !== 'undefined') this._anchorX = anchorX;
            if (typeof anchorY !== 'undefined') this._anchorY = anchorY;

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

        update() {

            super.update();

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
        }

    }

}