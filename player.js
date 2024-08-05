import * as THREE from "three";

const Player = {
  mesh: new THREE.Mesh(
    new THREE.BoxGeometry(1, 1),
    new THREE.MeshBasicMaterial({ color: 0xf0f00f })
  ),
  speed: .1,
  move(direction) {
	this.mesh.position.add(direction);
  },
  moveDirection: new THREE.Vector3(0, 0, 0)
};
export default Player;
