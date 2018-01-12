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
    const geometry = new THREE.OctahedronGeometry(0, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    const imgMesh = new THREE.Mesh(geometry, material)

    camera.position.z = 4
    scene.add(imgMesh)
    renderer.setClearColor('#FFFCF9')
    renderer.setSize(width, height)

    var texture = new THREE.TextureLoader().load( "./img/textures/test1.png", (texture) => {
      material.map = texture
      texture.wrapS = THREE.MirroredRepeatWrapping;
      texture.wrapT = THREE.MirroredRepeatWrapping;
      texture.repeat.set( 4, 4 );

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
    this.texture.offset.y -= 0.005

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
