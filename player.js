import * as THREE from "three";

const Player = {
	body: new THREE.BoxGeometry(1, 1),
	material: new THREE.MeshBasicMaterial({ color: 0xF0F00F }),
	mesh: null,
};
Player.mesh = new THREE.Mesh(Player.body, Player.material);

export default Player;
