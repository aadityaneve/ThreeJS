console.clear();

// console.log('Hello Three JS');

// console.log(THREE);

/* Scene - Start */
const scene = new THREE.Scene();

// Red Cube - Width Height Depth
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material - consider as skin
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
/* Scene - End */

// Sizes
const sizes = {
    width: 800,
    height: 600,
};

/* Camera - Start */
// Parameters For PerspectiveCamera
// field of view (fov) : Vertical View: 75 deg,
// Aspect Ratio :
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Setting camera position to backward before doing the render
camera.position.x = 1.5;
camera.position.y = 1;
camera.position.z = 3;

scene.add(camera);

/* Camera - End */

/* Renderer - Start */

const canvas = document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({
    canvas,
});

// Resize the renderer
renderer.setSize(sizes.width, sizes.height);

// Render your renderer
renderer.render(scene, camera);

/* Renderer - End */
