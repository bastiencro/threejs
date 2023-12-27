console.log('javascript is working');
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

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
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);



//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

//Animate
//let time = Date.now(); METHOD WITH DATE
//const clock = new THREE.Clock(); METHOD WITH TIME

gsap.to(mesh.position, {duration: 1, delay: 1, x: 2});
 // METHOD WITH GSAP LIBRARY


const tick = () =>
{
    //console.log('tick');
/* METHOD WITH DATE
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    mesh.rotation.y += .01 * deltaTime; 
*/
 /* METHOD WITH TIME
    const elapsedTime = clock.getElapsedTime();
   
    mesh.rotation.y = elapsedTime; 

    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)
    
    camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position)
*/

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();



