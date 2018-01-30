import React from 'react';
import * as THREE from 'three';
import {scene, camera, lights, renderer} from './ThreeInitScene';
import {loadTextures, createMaterials, createObject} from './ThreeObjSetup';

class ThreeProject extends React.Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);

    this.state = {
      meshScale: props.meshScale,
      project: props.currentProject,
      textures: props.textures
    }
  }

  componentDidMount() {

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.scene = scene;

    this.camera = camera(width, height);

    scene.add(lights.ambient);
    scene.add(lights.point);

    this.renderer = renderer(width, height);

    const parentRef = this;
    loadTextures(this.state.textures, function(loadedTextures){
      createMaterials(loadedTextures, function(loadedMaterials){

        const meshScale = parentRef.state.meshScale;

        createObject(
          meshScale,
          loadedMaterials,
          loadedMaterials[parentRef.state.currentProject],
          function(imgObj){
            scene.add(imgObj);
            parentRef.materials = loadedMaterials;
            parentRef.imgObj = imgObj;

            parentRef.mount.appendChild(parentRef.renderer.domElement);
            parentRef.start();
        });
      });
    });
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
    this.imgObj.rotation.x += 0.01;
    this.imgObj.rotation.y += 0.01;

    // let s = Math.sin(this.meshScale)*10+1;
    // this.imgObj.scale.set(s,s,s);
    // this.meshScale -= 0.002;
    // console.log();
    if (this.state.currentProject !== this.props.currentProject) {
      this.imgObj.children[0].material = this.materials[this.props.currentProject];
    }
    const texture = this.imgObj.children[0].material.map;
    texture.offset.x -= 0.005;
    texture.offset.y += 0.005;

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
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
