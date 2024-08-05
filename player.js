import * as THREE from "three";

const Player = {
  mesh: new THREE.Mesh(
    new THREE.BoxGeometry(.2, .2, .2),
    new THREE.MeshPhongMaterial({ color: 0xf0f00f })
  ),
  speed: .1,
  move(direction) {
	this.mesh.position.add(direction);
  },
  constrain() {
	let a = 3;
	if (this.mesh.position.x > a) {
    this.mesh.position.x = a;
  }
  if (this.mesh.position.x < -a) {
    this.mesh.position.x = -a;
  }
  if (this.mesh.position.z > a) {
    this.mesh.position.z = a;
  }
  if (this.mesh.position.z < -a) {
    this.mesh.position.z = -a;
  }
  },
  moveDirection: new THREE.Vector3(0, 0, 0)
};
export default Player;
