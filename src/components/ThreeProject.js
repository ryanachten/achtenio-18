import React from 'react';
import * as THREE from 'three';
import $ from 'jquery';
import {status, scene, camera, lights, renderer} from '../three/initScene';
import {loadTextures, createMaterials, createObject} from '../three/objSetup';

class ThreeProject extends React.Component {
  constructor(props) {
    super(props)

    this.animate = this.animate.bind(this);

    this.state = {
      meshScale: props.meshScale,
      currentProject: props.currentProject,
      textures: props.textures,
      transition: props.transition,
      transitionOut: false,
      transitionIn: false,
      opacity: 1,
      canvasWidth: $(window).width(),
      canvasHeight: $(window).height()*0.8
    }
  }

  componentDidMount() {

    this.setupThree();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    this.stop()
    const statsCanvas = document.getElementById('stats');
    statsCanvas.remove();

    // Prevent duplicate imgObjects being added to the scene
    const existingImgObj = scene.children.filter((obj) => obj.name === 'imgObj')[0];
    this.scene.remove(existingImgObj);
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

  setupThree(){
    this.stats = status();

    const width = this.mount.clientWidth;
    const height = this.getCanvasHeight();

    this.scene = scene;

    this.camera = camera(width, height);

    scene.add(lights.ambient, lights.point);

    this.renderer = renderer(width, height);

    const parentRef = this;
    loadTextures(this.state.textures, function(loadedTextures){
      createMaterials(loadedTextures, function(loadedMaterials){
        createObject(
          parentRef.state.meshScale,
          loadedMaterials,
          parentRef.props.currentProject,
          function(imgObj){

            scene.add(imgObj);
            parentRef.imgObj = imgObj;

            parentRef.materials = loadedMaterials;

            parentRef.renderer.domElement.id = 'three-canvas';
            parentRef.mount.appendChild(parentRef.renderer.domElement);
            parentRef.start();
        });
      });
    });
  }

  getCanvasHeight(){

    const topNav = $('.topNav--container').height();

    let windowHeight = $(window).height()-topNav;
    const projectInfo = $('.homeview--projectInfo').height();
    if (projectInfo) {
      windowHeight -= projectInfo;
    }

    return windowHeight;
  }

  updateDimensions(){

    const canvasHeight = this.getCanvasHeight();
    const canvasWidth = $(window).width();

    this.setState({
      canvasWidth,
      canvasHeight
    });
    this.camera.aspect = canvasWidth / canvasHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( canvasWidth, canvasHeight );
  }

  materialTransition(){

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
  }

  animate() {

    this.stats.begin();

    this.imgObj.rotation.x += 0.01;
    this.imgObj.rotation.y += 0.01;

    // Only apply transition if multiple projects are needed
    if (this.state.transition) {
      this.materialTransition();
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
        style={{  width: this.state.canvasWidth,
                  height: this.state.canvasHeight }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeProject
