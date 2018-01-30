import * as THREE from 'three';

export const scene = new THREE.Scene();

export const camera = (width, height) => {
  const cam = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
  cam.position.z = 4
  return cam;
}

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = () => {
  const point = new THREE.PointLight(0xffffff, 0.5);
  point.position.set(0, 0, 20);
  return point;
}
export const lights = {
  ambient: ambientLight,
  point: pointLight()
}

export const renderer = (width, height) => {
  const render = new THREE.WebGLRenderer({ antialias: true });
  render.setClearColor('#FFF7F0');
  render.setSize(width, height);
  return render;
}
