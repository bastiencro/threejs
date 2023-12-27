console.log('javascript is working');
import * as THREE from 'three'
//console.log(THREE);


//Canva
const canvas = document.querySelector('canvas.webgl');

//Size
const sizes = {
    width : 800,
    height : 600
}

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00ffff);

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);


//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color : 0xff0000});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.7, - 0.6, 1)

scene.add(mesh);

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

console.log(mesh.position.distanceTo(camera.position))

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

