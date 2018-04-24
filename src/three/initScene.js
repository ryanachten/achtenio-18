import * as THREE from 'three';
import $ from 'jquery';
import stats from 'stats.js';

export const setupStatus = () => {
  const status = stats();
  status.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  status.dom.id = "stats";
  document.body.appendChild( status.dom );
  $('#stats').css('right', '0px').css('left', 'unset');

  return status;
}
export const status = setupStatus;

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
  const render = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  render.setClearColor(0x000000, 0); //'#FFF7F0'
  render.setSize(width, height);
  render.domElement.id = 'three-canvas';
  // render.domElement.style.display = 'none';
  return render;
}
