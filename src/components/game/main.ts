import { AUTO, Game } from "phaser";
import { Preloader } from "./scenes/Preloader";
import { GameD } from "./scenes/Game";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: "90%",
  height: 198,
  parent: "game-container",
  backgroundColor: "#DB53FF",
  scene: [Preloader, GameD],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
        x: 0,
      },
      debug: false,
    },
  },
};

const StartGame = (parent: string) => {
  return new Game({ ...config, parent });
};

export default StartGame;
