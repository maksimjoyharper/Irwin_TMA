import { Scene } from "phaser";

export class GameD extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera | undefined;
  background: Phaser.GameObjects.Image | undefined;
  gameText: Phaser.GameObjects.Text | undefined;

  constructor() {
    super("GameD");
  }

  create() {
    // this.camera = this.cameras.main;
    // this.camera.setBackgroundColor(0x00ff00);
    // this.background = this.add.image(512, 384, "background");
    // this.background.setAlpha(0.5);
    // EventBus.emit("current-scene-ready", this);
    const imgDog1 = this.add.sprite(40, 40, "dog1");
    imgDog1.scale = 0.5;
    const imgDog2 = this.add.sprite(100, 40, "dog1");
    imgDog2.scale = 0.5;
  }

  changeScene() {
    // this.scene.start("GameOver");
  }
}
