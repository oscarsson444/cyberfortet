import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  landingPads;
  player;
  cursors;

  constructor() {
    super("Game");
  }

  create() {
    this.add.image(400, 400, "background").setScale(2);

    this.player = this.physics.add.sprite(400, 600, "ship");
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setAngularDrag(300);

    this.landingPads = this.physics.add.staticGroup();

    let groundRect = this.add.rectangle(400, 800, 800, 20, 0xffffff); // Adjust width, height, and color as needed
    this.physics.add.existing(groundRect, true);
    this.landingPads.add(groundRect);

    let landingPadRect1 = this.add.rectangle(400, 400, 100, 20, 0xffffff); // Adjust width, height, and color as needed
    this.physics.add.existing(landingPadRect1, true);
    this.landingPads.add(landingPadRect1);

    this.physics.add.collider(this.player, this.landingPads);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.up.isDown) {
      let angle = this.player.angle * (Math.PI / 180);
      let x = Math.cos(angle + Math.PI / 2);
      let y = Math.sin(angle + Math.PI / 2);
      this.player.setAcceleration(-x * 200, -y * 400);
    } else {
      this.player.setAcceleration(0, 0);
    }
    if (this.cursors.left.isDown) {
      this.player.setAngularAcceleration(-300);
    } else if (this.cursors.right.isDown) {
      this.player.setAngularAcceleration(300);
    } else {
      this.player.setAngularAcceleration(0);
    }

    // Friction with the ground
    if (this.player.body.touching.down || this.player.body.onWorldBounds) {
      this.player.setVelocity(this.player.body.velocity.x * 0.9, 0);
    }
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}
