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


//Group
const group = new THREE.Group();
group.scale.set(.6, .6, .6);
group.rotation.y = 1;
scene.add(group);

//Objects
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0xFF0000})
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x00ff00})
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color : 0x0000ff})
);
cube3.position.x = 1.5;
group.add(cube3);

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//camera.lookAt(mesh.position);

//console.log(mesh.position.distanceTo(camera.position))

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

