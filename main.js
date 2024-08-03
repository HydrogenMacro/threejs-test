import * as THREE from "three";
import Player from "/player.js";
import GLOBALS from "./globals.js";
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(
  window.innerWidth * GLOBALS.canvasScale,
  window.innerHeight * GLOBALS.canvasScale
);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.x = 10;
camera.position.y = 10;
camera.position.z = 5;
camera.lookAt(Player.mesh.position);
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(
		window.innerWidth * GLOBALS.canvasScale,
		window.innerHeight * GLOBALS.canvasScale
	);
	renderer.domElement.style.width = renderer.domElement.style.height = "100%";
	renderer.render(scene, camera);
});
scene.add(Player.mesh);

renderer.domElement.style.width = renderer.domElement.style.height = "100%";
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);