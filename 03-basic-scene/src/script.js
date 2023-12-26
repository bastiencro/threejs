console.log('javascript is working');
import * as THREE from 'three'
//console.log(THREE);

let posX = 0;

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


//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color : 0xff0000});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = posX;

scene.add(mesh);

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

