import React from 'react';
import * as THREE from 'three';
import {status, scene, camera, lights, renderer} from './ThreeInitScene';
import {loadTextures, createMaterials, createObject} from './ThreeObjSetup';

class ThreeProject extends React.Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);

    this.state = {
      meshScale: props.meshScale,
      currentProject: props.currentProject,
      textures: props.textures,
      transitionOut: false,
      transitionIn: false,
      opacity: 1
    }
  }

  componentDidMount() {

    this.stats = status;

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
          parentRef.props.currentProject,
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
    console.log('cancelAnimationFrame');
    cancelAnimationFrame(this.frameId)
  }

  animate() {

    this.stats.begin();

    this.imgObj.rotation.x += 0.01;
    this.imgObj.rotation.y += 0.01;

    // let s = Math.sin(this.meshScale)*10+1;
    // this.imgObj.scale.set(s,s,s);
    // this.meshScale -= 0.002;
    // console.log();

    const opacityStep = 0.05;

    if (this.state.currentProject !== this.props.currentProject) {
      this.setState({
        transitionOut: true,
        currentProject: this.props.currentProject
      });
    }

    if (this.state.transitionOut) {
      if (this.state.opacity < 0) {
        this.imgObj.children[0].material = this.materials[this.props.currentProject];
        this.setState({
          transitionOut: false,
          transitionIn: true
        });
      }
      else{
        this.state.opacity -= opacityStep;
        this.imgObj.children[0].material.opacity = this.state.opacity;
      }
    }

    if (this.state.transitionIn) {
      if (this.state.opacity > 1) {
        this.setState({
            transitionIn: false
        });
      }
      else{
        this.state.opacity += opacityStep;
        this.imgObj.children[0].material.opacity = this.state.opacity;
      }
    }

    const texture = this.imgObj.children[0].material.map;
    texture.offset.x -= 0.005;
    texture.offset.y += 0.005;

    this.renderScene();

    this.frameId = window.requestAnimationFrame(this.animate);
    this.stats.end();
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
