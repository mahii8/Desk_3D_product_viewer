function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 10, 7);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  scene.add(dirLight);

  //  Add a point light near the glass top for extra shine
  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(0, 2, 0); // just above the desk
  scene.add(pointLight);
}
