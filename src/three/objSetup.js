import * as THREE from 'three';

export const loadTextures = (textures) => {

  return new Promise( (resolve, reject) => {
    const loader = new THREE.TextureLoader();
    let loaded = [];
    for (var i = 0; i < textures.length; i++) {
      const curTexture = textures[i];
      const texture = loader.load( '/img/textures/' + curTexture.path, (texture) => {
          texture.name = curTexture.project;
          loaded.push(texture);
          if (loaded.length === textures.length) {
            resolve(loaded);
          }
      });
    }
  });
};

export const createMaterials = (textures) => {

  return new Promise( (resolve, reject) => {
    let materials = {};
    for (var i = 0; i < textures.length; i++) {
      const material = new THREE.MeshPhongMaterial({ color: '#ffffff', side: THREE.DoubleSide, transparent: true, opacity: 1 });
      material.map = textures[i];
      material.map.wrapS = THREE.MirroredRepeatWrapping;
      material.map.wrapT = THREE.MirroredRepeatWrapping;
      material.map.repeat.set( 6, 6 );
      materials[textures[i].name] = material;
      if (Object.keys(materials).length === textures.length) {
        resolve(materials);
      }
    }
  });
};

export const createObject = ({meshScale, materials, currentProject}) => {

  return new Promise( (resolve, reject) => {
    const geometry = new THREE.OctahedronGeometry(1, 1);
    const imgMesh = new THREE.Mesh(geometry, materials[currentProject]);
    const imgObj = new THREE.Object3D();
    imgObj.scale.set(meshScale, meshScale, meshScale);
    imgObj.name = 'imgObj';
    imgObj.add(imgMesh);

    resolve(imgObj)
  });
};
