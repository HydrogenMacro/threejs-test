import * as THREE from "three";
import Player from "./player.js";
import GLOBALS from "./globals.js";
import "./controls.js";
import Enemy from "./enemies.js";
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
scene.add(new THREE.HemisphereLight(
	0xffffff,
	0x000000,
	1
))
camera.position.y = 7;
camera.position.z = 2;
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
let ground= new THREE.Mesh(
    new THREE.BoxGeometry(6 + .2, .001, 6 + .1 + .1),
    new THREE.MeshBasicMaterial({ color: 0x55cc77 })
  );
  ground.position.y = 0
scene.add(
 ground
);
renderer.domElement.style.width = renderer.domElement.style.height = "100%";
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
let t = 0
let score = 0
renderer.setAnimationLoop(() => {
	Player.move(Player.moveDirection.clone().multiplyScalar(Player.speed));
	Player.constrain();
	if (t % 20 === 0) {
		let e = new Enemy();
		scene.add(e)
		score += 1;
		document.querySelector("#score").textContent = score;
	}
	scene.children.forEach(a => {
		if (a.update?.()?.hit) {
			alert("Score is " + score + ", play again?");
			window.location.reload();
			throw new Error()
		}
	});
	renderer.render(scene, camera);
	t ++;
});