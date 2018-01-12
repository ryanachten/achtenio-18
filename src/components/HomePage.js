import React from 'react';
import * as THREE from 'three';

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.OctahedronGeometry(10, 1)
    const material = new THREE.MeshPhongMaterial({ color: '#ffffff', side: THREE.DoubleSide })
    const imgMesh = new THREE.Mesh(geometry, material)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    camera.position.z = 4
    scene.add(imgMesh)
    renderer.setClearColor('#FFF7F0')
    renderer.setSize(width, height)

    var texture = new THREE.TextureLoader().load( "./img/textures/test1.png", (texture) => {
      material.map = texture
      texture.wrapS = THREE.MirroredRepeatWrapping;
      texture.wrapT = THREE.MirroredRepeatWrapping;
      texture.repeat.set( 6, 6 );

      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      this.material = material
      this.imgMesh = imgMesh
      this.texture = texture

      this.mount.appendChild(this.renderer.domElement)
      this.start()
    });



  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
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
    this.imgMesh.rotation.x += 0.01
    this.imgMesh.rotation.y += 0.01

    this.texture.offset.x -= 0.005
    this.texture.offset.y += 0.005

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

export default HomePage
