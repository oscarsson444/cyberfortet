import { useRef, useState } from "react";

import Phaser from "phaser";
import { PhaserGame } from "../game/PhaserGame";

function Rocket() {
  //  References to the PhaserGame component (game and scene are exposed)
  const phaserRef = useRef();

  // Event emitted from the PhaserGame component
  const currentScene = (scene) => {
    setCanMoveSprite(scene.scene.key !== "MainMenu");
  };

  return (
    <div className="flex ">
      <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
    </div>
  );
}

export default Rocket;
