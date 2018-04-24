import React from 'react';
import * as THREE from 'three';
import $ from 'jquery';
import {status, scene, camera, lights, renderer} from '../three/initScene';
import {loadTextures, createMaterials, createObject} from '../three/objSetup';

class ThreeProject extends React.Component {
  constructor(props) {
    super(props)

    this.animate = this.animate.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      showStats: false,
      meshScale: props.meshScale,
      currentProject: props.currentProject,
      textures: props.textures,
      transition: props.transition,
      transitionOut: false,
      transitionIn: false,
      opacity: 1,
      canvasWidth: undefined,
      canvasHeight: undefined
    }
  }

  componentDidMount() {
    $('.LoadingScreen').show();
    $('.ProjectPage').hide();
    this.setupThree();

    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    this.stop()
    if (this.state.showStats) {
      const statsCanvas = document.getElementById('stats');
      statsCanvas.remove();
    }
    window.removeEventListener("resize", this.updateDimensions);

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
    if (this.state.showStats) {
      this.stats = status();
    }

    const width = this.mount.clientWidth;
    const height = this.getCanvasHeight();

    this.scene = scene;
    this.camera = camera(width, height);
    scene.add(lights.ambient, lights.point);
    this.renderer = renderer(width, height);

    // Load the textures
    loadTextures(this.state.textures).then(
      // Create the materials with loaded textures
      (loadedTextures) => createMaterials(loadedTextures).then(
        // Create the imgObject with loaded materials
        (materials) => createObject(
          { meshScale: this.state.meshScale,
            materials: materials,
            currentProject: this.props.currentProject}).then(
          (imgObj) => {
            // Add dependencies to scene and scope
            scene.add(imgObj);
            this.imgObj = imgObj;
            this.materials = materials;
            this.mount.appendChild(this.renderer.domElement);

            // Start intro sequence
            window.setTimeout( () => {
              $('.ProjectPage').show();
              this.start();
              $('.LoadingScreen').fadeOut(1000);
            }, 1000);

          })
      ));
    ;
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

    if (this.imgObj) {
      this.imgObj.scale.set(this.props.meshScale, this.props.meshScale, this.props.meshScale)
    }

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

    if (this.state.showStats) {
      this.stats.begin();
    }

    this.imgObj.rotation.x += 0.01;
    this.imgObj.rotation.y += 0.01;

    // Only apply transition if multiple projects are needed
    if (this.state.transition) {
      this.materialTransition();
    }
    else{
      this.imgObj.children[0].material = this.materials[this.props.currentProject]
    }

    const texture = this.imgObj.children[0].material.map;
    texture.offset.x -= 0.005;
    texture.offset.y += 0.005;

    this.renderScene();

    this.frameId = window.requestAnimationFrame(this.animate);

    if (this.state.showStats) {
        this.stats.end();
    }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{  width: this.state.canvasWidth,
                  height: this.state.canvasHeight  }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeProject
