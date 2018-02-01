import * as THREE from 'three';

export const loadTextures = (textures, onLoad) => {
  const loader = new THREE.TextureLoader();
  let loaded = [];
  for (var i = 0; i < textures.length; i++) {
    const curTexture = textures[i];
    const texture = loader.load( curTexture.path, (texture) => {
        texture.name = curTexture.project;
        loaded.push(texture);
        if (loaded.length === textures.length) {
          onLoad(loaded);
        }
    });
  }
};

export const createMaterials = (textures, onLoad) => {
  let materials = {};
  for (var i = 0; i < textures.length; i++) {
    const material = new THREE.MeshPhongMaterial({ color: '#ffffff', side: THREE.DoubleSide, transparent: true, opacity: 1 });
    material.map = textures[i];
    material.map.wrapS = THREE.MirroredRepeatWrapping;
    material.map.wrapT = THREE.MirroredRepeatWrapping;
    material.map.repeat.set( 6, 6 );
    materials[textures[i].name] = material;
    if (Object.keys(materials).length === textures.length) {
      onLoad(materials);
    }
  }
};

export const createObject = (meshScale, materials, currentProject, onDone) => {
  const geometry = new THREE.OctahedronGeometry(meshScale, 1);
  const imgMesh = new THREE.Mesh(geometry, materials[currentProject]);
  const imgObj = new THREE.Object3D();
  imgObj.name = 'imgObj';
  imgObj.add(imgMesh);

  onDone(imgObj)
};
