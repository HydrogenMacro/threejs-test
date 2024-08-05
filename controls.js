import * as THREE from "three";
import Player from "./player.js";

let keyIntervalHandles = new Map();
document.addEventListener("keydown", (e) => {
	if (e.repeat) return;
  switch (e.code) {
    case "KeyW":
		Player.moveDirection.z = -1;
    	Player.moveDirection.normalize();
      break;
    case "KeyA":
		Player.moveDirection.x = -1;
		Player.moveDirection.normalize();
      break;
    case "KeyS":
		Player.moveDirection.z = 1;
    Player.moveDirection.normalize();
    
      break;
    case "KeyD":
		Player.moveDirection.x = 1;
    Player.moveDirection.normalize();
    
      break;
    case "Space":
		Player.move(new THREE.Vector3(0, 1, 0));
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyW":
		Player.moveDirection.z = 0;
    Player.moveDirection.normalize();
      break;
    case "KeyA":
Player.moveDirection.x = 0;
Player.moveDirection.normalize();      break;
    case "KeyS":
Player.moveDirection.z = 0;
    Player.moveDirection.normalize();      break;
    case "KeyD":
		Player.moveDirection.x = 0;
    Player.moveDirection.normalize();
      break;
  }
});