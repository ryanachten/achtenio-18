import React from 'react';
import * as THREE from 'three';

class ThreeProject extends React.Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    this.scene = scene;

    const camera = setupCamera();
    function setupCamera(){
      const cam = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
      cam.position.z = 4
      return cam;
    }
    this.camera = camera;

    function setupLights(){
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      pointLight.position.set(0, 0, 20);
      scene.add(pointLight);
    }
    setupLights();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor('#FFF7F0');
    renderer.setSize(width, height);
    this.renderer = renderer;

    let meshScale = 1;
    this.meshScale = meshScale;


    setupObject(this);

    function setupObject(parentRef){
      loadTextures();
      function loadTextures() {
        const loader = new THREE.TextureLoader();
        // TODO: pass from props
        const textures = [
          {project: 'vertice', path: 'vertice.png'},
          {project: 'vuw', path: 'vuw.png'}
        ];
        let loaded = [];
        for (var i = 0; i < textures.length; i++) {
          const curTexture = textures[i];
          const texture = loader.load( './img/textures/' + curTexture.path, (texture) => {
              texture.name = curTexture.project;
              loaded.push(texture);
              if (loaded.length === textures.length) {
                createMaterials(loaded);
              }
          });
        }
      };
      function createMaterials(textures){
        let materials = {};
        for (var i = 0; i < textures.length; i++) {
          const material = new THREE.MeshPhongMaterial({ color: '#ffffff', side: THREE.DoubleSide });
          material.map = textures[i];
          material.map.wrapS = THREE.MirroredRepeatWrapping;
          material.map.wrapT = THREE.MirroredRepeatWrapping;
          material.map.repeat.set( 6, 6 );
          materials[textures[i].name] = material;
        }
        createObject(materials);
      };

      function createObject(materials){
        const geometry = new THREE.OctahedronGeometry(meshScale, 1);
        const imgMesh = new THREE.Mesh(geometry, materials[parentRef.props.currentProject]);
        const imgObj = new THREE.Object3D();
        imgObj.add(imgMesh);
        scene.add(imgObj);

        parentRef.materials = materials;
        parentRef.imgObj = imgObj;

        parentRef.mount.appendChild(parentRef.renderer.domElement)
        parentRef.start()
      };
    }
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  setupMaterials(){

  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.imgObj.rotation.x += 0.01
    this.imgObj.rotation.y += 0.01

    // let s = Math.sin(this.meshScale)*10+1;
    // this.imgObj.scale.set(s,s,s);
    // this.meshScale -= 0.002;
    // console.log();
    this.imgObj.children[0].material = this.materials[this.props.currentProject];

    const texture = this.imgObj.children[0].material.map;
    texture.offset.x -= 0.005
    texture.offset.y += 0.005

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '100vw', height: '100vh' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeProject
