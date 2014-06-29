///<reference path="../lib/phaser.d.ts"/>
///<reference path="../entities/BasicLaser.ts"/>
/**
 * Created by zenchi on 16/06/14.
 */
module CandyStarship {

    export class Player extends Phaser.Sprite {

        speed:number = 400;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'player', 0);

            this.anchor.setTo(0.5, 0);

            game.add.existing(this);

            this.game.physics.enable(this, Phaser.Physics.ARCADE);

            this.checkWorldBounds = true;

            // Add basic lasers
            var leftLaser = new CandyStarship.BasicLaser(this.game, this, -this.width/2 + 3, this.height/2);
            var rightLaser = new CandyStarship.BasicLaser(this.game, this, this.width/2 - 3, this.height/2);
            leftLaser.fireRate = rightLaser.fireRate = 170;
            leftLaser.speed = rightLaser.speed = 1200;

            this.game.add.existing(leftLaser);
            this.game.add.existing(rightLaser);

        }

        update() {

            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x = -this.speed;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = this.speed;

            }
            else {

                this.body.velocity.x = 0;

            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {

                this.body.velocity.y = -this.speed;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {

                this.body.velocity.y = this.speed;

            }
            else {

                this.body.velocity.y = 0;

            }

        }

    }

}