import * as THREE from "three"
import Player from "./player.js";
export default class Enemy extends THREE.Mesh {
	constructor() {
		super(
			new THREE.SphereGeometry(.3),
			new THREE.MeshPhongMaterial({ color: 0xde3f4f })
		);
		this.name = "enemy " + Math.random();
		let a = Math.random() * 20 - 10;
		this.position.set(
			a,
			0,
			-10
		);
		if (Math.random() < .5) {
			this.lookAt(new THREE.Vector3(Math.random() * 6 - 3, 0, Math.random() * 6 - 3));
		} else {
			this.lookAt(Player.mesh.position);
		}
	}
	update() {
		this.translateZ(.1);
		if (this.position.distanceTo(Player.mesh.position) < .3) {
			return { hit: true }
		}
	}
}